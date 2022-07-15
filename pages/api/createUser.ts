import type { NextApiRequest, NextApiResponse } from 'next'
import { authAdmin, dbAdmin } from 'lib/firebase-admin/admin_config'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('req.body', req.body)
    const { email, name, restaurantId } = req.body
    const userRecord = await createUserAuth(email, 'password', name)

    const { uid } = userRecord
    const generateLink = await authAdmin.generateEmailVerificationLink(email)
    console.log('generatedLink ', generateLink)

    const batch = dbAdmin.batch()
    batch.set(dbAdmin.collection('users').doc(uid), {
      email,
      name,
      type: 'manager',
      restaurantId,
    })

    batch.update(dbAdmin.collection('restaurants').doc(restaurantId), {
      managerId: uid,
      accountCreated: true,
    })

    await batch.commit()

    await sendEmail(email, name)

    res.status(200).json({ uid, message: 'users create successfully' })
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

// type ManagerDocData = {
//   name: string
//   email: string
// }

// const createManagerUserDoc = (uid: string, data: ManagerDocData) => {
//   const userData = {
//     ...data,
//     type: 'manager',
//   }
//   return dbAdmin.collection('users').doc(uid).set(userData)
// }

const sendEmailValidation = async (email: string, name: string) => {
  //TODO: send email validation
  return sendEmail(email, name)
}

const sendEmail = async (email: string, name: string) => {
  //TODO: send email
  return Promise.resolve()
}
