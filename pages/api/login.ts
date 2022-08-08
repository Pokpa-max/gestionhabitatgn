// ./pages/api/login
import { setCustomUserClaims } from '@/utils/firebase/auth'
import { setAuthCookies } from 'next-firebase-auth'
import initAuth from 'utils/firebase/initAuth'
import { authAdmin } from '../../lib/firebase-admin/admin_config'

initAuth()

const handler = async (req, res) => {
  try {
    const token = req.headers.authorization

    const decodedToken = await authAdmin.verifyIdToken(token)
    console.log('inside login', decodedToken)
    const isAdmin = decodedToken.userType === 'admin'

    if (isAdmin) {
      await setAuthCookies(req, res)
    } else {
      return res.status(500).json({ error: "Votre compte n'est pas valide" })
    }
  } catch (e) {
    console.log('🦄 ', e)
    return res.status(500).json({ error: 'Unexpected error.' })
  }
  return res.status(200).json({ success: true })
}

export default handler
