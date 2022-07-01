import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore'
import { db } from '@/lib/firebase/client_config'
import { parseDocsData } from '@/utils/firebase/firestore'

// Restaurants
export const onboardingsCollectionRef = () => collection(db, `onboarding`)

export const onboardingsDocRef = (restaurantId) =>
  doc(db, `onboarding/${restaurantId}`)

export const getOnboardings = (setState) => {
  return onSnapshot(onboardingsCollectionRef(), (querySnapshot) => {
    const onboardings = parseDocsData(querySnapshot)
    console.log('onboardings', onboardings)
    setState(onboardings)
  })
}

export const editOnboarding = async (restaurantId, data) => {
  await updateDoc(onboardingsDocRef(restaurantId), data)
}

export const deleteOnboarding = async (restaurantId) => {
  await deleteDoc(onboardingsDocRef(restaurantId))
}

// ----------------------------------------------------------------------------
