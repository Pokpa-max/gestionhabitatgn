import type { NextApiRequest, NextApiResponse } from 'next'
import { authAdmin, dbAdmin } from 'lib/firebase-admin/admin_config'
import { setCustomUserClaims } from '@/utils/firebase/auth'
import { FieldValue } from 'firebase-admin/firestore'

import {
  getDefaultHours,
  getDefaultRestaurantData,
  getDefaultReviewsData,
} from '@/lib/services/restaurant'

import { firestoreAutoId } from '../../utils/firebase/firestore'

//TODO: create the default restaurant menu

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, name, restaurantId } = req.body

    const userRecord = await createUserAuth(email, 'password', name)
    await setCustomUserClaims(userRecord.uid, 'manager')
    const { uid } = userRecord
    // const generateLink = await authAdmin.generateEmailVerificationLink(email)

    const batch = dbAdmin.batch()
    batch.set(dbAdmin.collection('users').doc(uid), {
      email,
      name,
      type: 'manager',
      restaurantId,
      createdAt: FieldValue.serverTimestamp(),
    })

    batch.update(dbAdmin.collection('restaurants').doc(restaurantId), {
      ...getDefaultRestaurantData(uid),
      updatedAt: FieldValue.serverTimestamp(),
    })

    batch.set(
      dbAdmin
        .collection('restaurants')
        .doc(restaurantId)
        .collection('reviews')
        .doc('--stats-reviews--'),
      getDefaultReviewsData()
    )

    const menuId = firestoreAutoId()

    batch.set(dbAdmin.collection('menus').doc(restaurantId), {
      description: 'Menu principal',
      menuImages: [],
      name: 'Menu principal',
      id: menuId,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    })

    batch.set(
      dbAdmin
        .collection('menus')
        .doc(restaurantId)
        .collection('menus')
        .doc(menuId),
      {
        description: 'Menu principal',
        menuImages: [],
        menuSectionIds: [],
        name: 'Menu principal',
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      }
    )

    await batch.commit()

    await sendEmail(email, name)

    res.status(200).json({ code: 'ok', message: 'users create successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const createUserAuth = (
  email: string,
  password: string,
  displayName: string
) => {
  return authAdmin.createUser({
    email,
    emailVerified: false,
    password,
    displayName,
    disabled: false,
  })
}

const verifyUserExit = async (email: string) => {
  try {
    await authAdmin.getUserByEmail(email)
    return true
  } catch (error: any) {
    if (error.code == 'auth/user-not-found') {
      return false
    }
    throw new Error(`errors: ${error.code} `)
  }
}

const sendEmailValidation = async (email: string, name: string) => {
  //TODO: send email validation
  return sendEmail(email, name)
}

const sendEmail = async (email: string, name: string) => {
  //TODO: send email
  return Promise.resolve()
}
