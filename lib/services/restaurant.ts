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
import { FieldValue } from 'firebase-admin/firestore'

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
  await updateDoc(
    restaurantDocRef(restaurantId),
    restaurantConstructorUpdate(data)
  )
}

export const deleteRestaurant = async (restaurantId) => {
  await deleteDoc(restaurantDocRef(restaurantId))
}

export const createAccount = async (restaurantId, data) => {
  await editRestaurant(restaurantId, data)

  //creating account
  const { firstname, lastname } = data
  const name = `${firstname} ${lastname}`
  const response = await fetchWithPost('api/createUser', {
    email: data.email,
    name,
    restaurantId,
  })
  if (response.code != 'ok') throw new Error(response.message)
  console.log('response', response)
}

export const getDefaultHours = () => {
  return [
    {
      weekday: 'Lundi',
      is24OpenDay: false,
      isClose: false,
      hours: '08:00-20:30',
    },
    {
      weekday: 'Mardi',
      is24OpenDay: false,
      isClose: false,
      hours: '08:00-20:30',
    },
    {
      weekday: 'Mercredi',
      is24OpenDay: false,
      isClose: false,
      hours: '08:00-20:30',
    },
    {
      weekday: 'Jeudi',
      is24OpenDay: false,
      isClose: false,
      hours: '08:00-20:30',
    },
    {
      weekday: 'Vendredi',
      is24OpenDay: false,
      isClose: false,
      hours: '08:00-20:30',
    },
    {
      weekday: 'Samedi',
      is24OpenDay: false,
      isClose: false,
      hours: '08:00-20:30',
    },
    {
      weekday: 'Dimanche',
      is24OpenDay: false,
      isClose: false,
      hours: '08:00-20:30',
    },
  ]
}

export const getDefaultRestaurantData = (uid: string) => {
  return {
    managerId: uid,
    priceRate: 0,
    installationIds: [],
    categoriesIds: [],
    dishDayIds: [],
    establishementIds: [],
    openHours: getDefaultHours(),
    rating: 0,
    ratingCount: 0,
    exactRating: 0,
    isAccountCreated: true,
    isSponsorised: false,
    'restaurant.description': '',
    'restaurant.imageUrl': '',
    'restaurant.imageHash': '',
    updatedAt: FieldValue.serverTimestamp(),
  }
}

export const getDefaultReviewsData = () => {
  return {
    'establissement-reviews-count': 0,
    'food-reviews-count': 0,
    'staff-reviews-count': 0,
    'total-reviews-count': 0,
  }
}
// ----------------------------------------------------------------------------
