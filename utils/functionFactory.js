// Entity constructor for the data model

import { serverTimestamp, GeoPoint } from 'firebase/firestore'
import { encode } from './geoHash';
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

export const getGeoPoint = (lat, long) => {
  console.log("gettting geo point", long, lat)
  if (!lat) return null;
  const hash = encode(lat, long, 9);
  console.log("hash", hash)
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

export const getObjectInString = (str) => {
  return JSON.parse(str.substring(str.indexOf('{'), str.lastIndexOf('}') + 1))

}
