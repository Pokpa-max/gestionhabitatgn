// Entity constructor for the data model

import { serverTimestamp, GeoPoint, Timestamp } from 'firebase/firestore'
import { firestoreAutoId } from './firebase/firestore';
import { encode } from './geoHash';
import { firebaseDateToJsDate } from '../utils/date'
import { stringToColour } from '../utils/ui'
// import geofire from 'geofire-common'

// dataConstructors

export const restaurantConstructorUpdate = ({
  storename: name,
  firstname,
  lastname,
  email,
  phoneNumber,
  position,
  indication: description,
  long,
  lat,
  zone,
  quartier,
  rccm,
  nif,
  otherAcc,
  isActive,
  restaurantEmail,
  restaurantPhoneNumber,
}) => ({

  "restaurant.name": name,
  "restaurant.rccm": rccm,
  "restaurant.nif": nif,
  "restaurant.otherAcc": otherAcc,
  "restaurant.email": restaurantEmail,
  "restaurant.phoneNumber": restaurantPhoneNumber,

  "manager.firstname": firstname,
  "manager.lastname": lastname,
  "manager.phoneNumber": phoneNumber,
  "manager.position": position,
  "manager.email": email,
  isActive,
  "adress.description": description,
  "adress.zone": zone.value,
  "adress.quartier": quartier.value,
  "adress.long": Number(long),
  "adress.lat": Number(lat),
  "adress.position": getGeoPoint(lat, long),
  updatedAt: serverTimestamp(),
})

export const restaurantConstructorCreate = ({
  storename: name,
  firstname,
  lastname,
  email,
  phoneNumber,
  position,
  indication: description,
  long,
  lat,
  zone,
  quartier,
  rccm,
  nif,
  otherAcc,
  isActive,
  restaurantEmail,
  restaurantPhoneNumber,
}) => ({

  "restaurant.name": name,
  "restaurant.rccm": rccm,
  "restaurant.nif": nif,
  "restaurant.otherAcc": otherAcc,
  "restaurant.email": restaurantEmail,
  "restaurant.phoneNumber": restaurantPhoneNumber,
  "manager.firstname": firstname,
  "manager.lastname": lastname,
  "manager.phoneNumber": phoneNumber,
  "manager.position": position,
  "manager.email": email,
  isActive,
  "adress.description": description,
  isAccountCreated: false,
  "adress.zone": zone.value,
  "adress.quartier": quartier.value,
  "adress.long": Number(long),
  "adress.lat": Number(lat),
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),
})

export const sliderConstructorCreate = (data, edit) => {
  const typeValue = {}
  if (data.type.value !== 'social') {
    typeValue[data.type.value] = data[data.type.value].value
  } else {

    typeValue.externalLink = data.externalLink
    typeValue.externalLinkFallback = data.externalLinkFallback
  }

  const conditionalProps = edit ? {
    updatedAt: serverTimestamp(),
  } : {
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  return {
    sliderDetails: {
      title: data.title,
      description: data.description
    },
    ...typeValue,
    imageHash: data.imageHash,
    imageUrl: data.imageUrl,
    imageUrl1000: data.imageUrl1000,
    type: data.type.value,
    typeLabel: data.type.label,
    isActive: data.isActive,
    ...conditionalProps
  }
}

export const sponsorConstructorCreate = (data, edit) => {
  const conditionalProps = edit ? {
    updatedAt: serverTimestamp(),
  } : {
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  return {
    restaurant: {
      name: data.restaurant.value,
      id: firestoreAutoId()
    },
    type: data.type.value,
    periode: {
      startDate: Timestamp.fromDate(new Date(data.startDate)).toDate(),
      endDate: Timestamp.fromDate(new Date(data.endDate)).toDate(),
    },
    isActive: data.isActive,
    ...conditionalProps
  }
}

export const collectionConstructorCreate = (data, edit) => {

  const conditionalProps = edit ? {
    updatedAt: serverTimestamp(),
  } : {
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  return {
    title: data.title,
    restaurantsId: data.restaurants,
    color: stringToColour(data.title),
    isDefault: false,
    nbPlaces: data.restaurants?.length,
    ...conditionalProps
  }
}
export const commercialConstructorCreate = (data, edit) => {

  const conditionalProps = edit ? {
    updatedAt: serverTimestamp(),
  } : {
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  return {
    title: data.title,
    subtitle: data.subtitle,
    externalLink: data.externalLink,
    externalLinkFallback: data.externalLinkFallback,
    imageHash: data.imageHash,
    imageUrl: data.imageUrl,
    imageUrl1000: data.imageUrl1000,
    isActive: data.isActive,
    ...conditionalProps
  }
}

export const categoryConstructorCreate = (data, edit) => {

  const conditionalProps = edit ? {
    updatedAt: serverTimestamp(),
  } : {
    nbPlaces: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  return {
    name: data.name,
    imageHash: data.imageHash,
    imageUrl: data.imageUrl,
    imageUrl1000: data.imageUrl1000,
    isActive: data.isActive,
    ...conditionalProps
  }
}

export const bundleConstructorCreate = (data, edit) => {

  const conditionalProps = edit ? {
    updatedAt: serverTimestamp(),
  } : {
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  const conditionalCategoriesId = data.hasCategories ? {
    categories: data.categoriesId || []
  } : {}

  return {
    name: data.name,
    imageHash: data.imageHash,
    imageUrl: data.imageUrl,
    imageUrl1000: data.imageUrl1000,
    hasCategories: data.hasCategories,
    isActive: data.isActive,
    ...conditionalProps,
    ...conditionalCategoriesId
  }
}

export const dishConstructorCreate = (data, edit) => {

  const conditionalProps = edit ? {
    updatedAt: serverTimestamp(),
  } : {
    likerCount: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  return {
    name: data.name,
    speciality: data.speciality,
    description: data.description,
    foodGenericId: data.foodGenericId,
    ingredients: data.ingredients,
    imageHash: data.imageHash,
    imageUrl: data.imageUrl,
    imageUrl1000: data.imageUrl1000,
    isActive: data.isActive,
    ...conditionalProps,
  }
}


export const getGeoPoint = (lat, long) => {
  if (!lat) return null;
  const hash = encode(lat, long, 9);
  return {
    geohash: hash,
    geopoint: new GeoPoint(lat, long),
  }
}

// Form

export const autoFillRestaurantForm = (reset, setValue, restaurant) => {
  if (!restaurant) {
    reset()
    return
  }

  const {
    restaurant: storename,
    manager,
    adress,
    isActive,
  } = restaurant
  setValue('storename', storename?.name)
  setValue('description', storename?.description)
  setValue('firstname', manager?.firstname)
  setValue('lastname', manager?.lastname)
  setValue('phoneNumber', manager?.phoneNumber)
  setValue('email', manager?.email)
  setValue('position', manager?.position)
  setValue('nif', storename?.nif)
  setValue('rccm', storename?.rccm)
  setValue('otherAcc', storename.otherAcc)
  setValue('restaurantPhoneNumber', storename.phoneNumber)
  setValue('lat', adress?.lat)
  setValue('long', adress?.long)
  setValue('restaurantEmail', storename?.email)
  setValue('indication', adress?.description)
  setValue('zone', { value: adress?.zone, label: adress?.zone })
  setValue('quartier', { value: adress?.quartier, label: adress?.quartier })
  setValue('isActive', isActive)
}

export const autoFillSliderForm = (reset, setValue, slider) => {
  if (!slider) {
    reset()
    return
  }

  const {
    sliderDetails,
    type,
    typeLabel,
    isActive,
    imageHash,
  } = slider
  setValue('title', sliderDetails.title)
  setValue('description', sliderDetails.description)
  setValue('type', { value: type, label: typeLabel })
  setValue(type, { value: slider[type], label: slider[type] })
  setValue('isActive', isActive)
  setValue('imageHash', imageHash)
}

export const autoFillSponsorForm = (reset, setValue, sponsor) => {
  if (!sponsor) {
    reset()
    return
  }

  const {
    restaurant,
    periode,
    type,
    isActive,
  } = sponsor

  setValue('restaurant', { value: restaurant.name, label: restaurant.name })
  setValue('startDate', firebaseDateToJsDate(periode.startDate).toISOString().split('T')[0])
  setValue('endDate', firebaseDateToJsDate(periode.endDate).toISOString().split('T')[0])
  setValue('type', { value: type, label: type })
  setValue('isActive', isActive)

}

export const autoFillCommercialForm = (reset, setValue, commercial) => {
  if (!commercial) {
    reset()
    return
  }

  const {
    title,
    subtitle,
    externalLink,
    externalLinkFallback,
    isActive,
    imageHash,
  } = commercial
  setValue('title', title)
  setValue('subtitle', subtitle)
  setValue('externalLink', externalLink)
  setValue('externalLinkFallback', externalLinkFallback)
  setValue('isActive', isActive)
  setValue('imageHash', imageHash)
}

export const autoFillCollectionForm = (reset, setValue, collection) => {
  if (!collection) {
    reset()
    return
  }

  const {
    title,
    restaurantsId
  } = collection
  setValue('title', title)
  setValue('restaurants', restaurantsId)

}

export const autoFillCategoryForm = (reset, setValue, category) => {
  if (!category) {
    reset()
    return
  }

  const {
    name,
    imageHash,
    isActive
  } = category
  setValue('name', name)
  setValue('isActive', isActive)
  setValue('imageHash', imageHash)
}

export const autoFillBundleForm = (reset, setValue, bundle) => {
  if (!bundle) {
    reset()
    return
  }

  const {
    name,
    imageHash,
    categories,
    isActive,
    hasCategories
  } = bundle
  setValue('name', name)
  setValue('isActive', isActive)
  setValue('hasCategories', hasCategories)
  if (hasCategories) setValue('categoriesId', categories)
  setValue('imageHash', imageHash)
}
export const autoFillDishForm = (reset, setValue, dish) => {
  if (!dish) {
    reset()
    return
  }

  const {
    name,
    imageHash,
    foodGenericId,
    ingredients,
    likerCount,
    speciality,
    isActive,
    description
  } = dish
  setValue('name', name)
  setValue('isActive', isActive)
  setValue('description', description)
  setValue('foodGenericId', foodGenericId)
  setValue('ingredients', ingredients)
  setValue('likerCount', likerCount)
  setValue('speciality', speciality)
  setValue('imageHash', imageHash)
}

export const getObjectInString = (str) => {
  return JSON.parse(str.substring(str.indexOf('{'), str.lastIndexOf('}') + 1))
}