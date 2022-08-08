import type { NextApiRequest, NextApiResponse } from 'next'
import { authAdmin, dbAdmin } from 'lib/firebase-admin/admin_config'
import { setCustomUserClaims } from '@/utils/firebase/auth'
import { getDefaultHours } from '@/lib/services/restaurant'

//TODO: create the default restaurant menu

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('req.body', req.body)
    const { email, name, restaurantId } = req.body

    const userRecord = await createUserAuth(email, 'password', name)
    await setCustomUserClaims(userRecord.uid, 'manager')
    console.log('heho oooooo ')
    const { uid } = userRecord
    // const generateLink = await authAdmin.generateEmailVerificationLink(email)
    // console.log('generatedLink ', generateLink)

    const batch = dbAdmin.batch()
    batch.set(dbAdmin.collection('users').doc(uid), {
      email,
      name,
      type: 'manager',
      restaurantId,
      // updatedAt: serverTimestamp(),
    })

    batch.update(dbAdmin.collection('restaurants').doc(restaurantId), {
      managerId: uid,
      accountCreated: true,
      categoriesIds: [], //TODO: change the property inside the flutter app (restaurant app manager)
      dishDay: [],
      kitchenspeciality: [],
      openHours: [],
      rating: 0,
      ratingCount: 0,
      hours: getDefaultHours(),
      // updatedAt: serverTimestamp(),
    })

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
