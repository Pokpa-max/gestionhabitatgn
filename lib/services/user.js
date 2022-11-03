import { db } from '@/lib/firebase/client_config'
import { doc, updateDoc } from 'firebase/firestore'

export const userRef = (userId) => doc(db, `users/${userId}`)

export const desableUserFirestore = async (userId, isAvailable) => {
    await updateDoc(userRef(userId), { isAvailable: isAvailable })


}



export const desableUser = async (userId, desableAccount) => {

    try {

        fetch('/api/userActivity/desableUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                id: userId,
                desableAccount: desableAccount,
            }),
        })
    } catch (error) {
        console.log('error: ', error)
    }
}