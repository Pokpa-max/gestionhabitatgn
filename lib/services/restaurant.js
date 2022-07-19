import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore'
import { db } from '@/lib/firebase/client_config'
import { parseDocsData } from '@/utils/firebase/firestore'
import { fetchWithPost } from '../../utils/fetch'
import { restaurantConstructorUpdate } from '../../utils/functionFactory'

// Restaurants
export const restaurantsCollectionRef = collection(db, `restaurants`)

export const restaurantDocRef = (restaurantId) =>
  doc(db, `restaurants/${restaurantId}`)

export const getRestaurants = (setState) => {
  return onSnapshot(restaurantsCollectionRef, (querySnapshot) => {
    const restaurant = parseDocsData(querySnapshot)
    console.log('restaurants', restaurant)
    setState(restaurant)
  })
}

export const editRestaurant = async (restaurantId, data) => {
  await updateDoc(restaurantDocRef(restaurantId), restaurantConstructorUpdate(data))
}

export const deleteRestaurant = async (restaurantId) => {
  await deleteDoc(restaurantDocRef(restaurantId))
}

export const createAccount = async (restaurantId, data) => {
  try {
    await editRestaurant(restaurantId, data)

    //creating account
    const { firstname, lastname } = data
    const name = `${firstname} ${lastname}`
    const response = await fetchWithPost('api/createUser', { email: data.email, name, restaurantId })
    console.log('response', response)
  } catch (error) {
    console.log('error : ', error)
  }

}


// ----------------------------------------------------------------------------
