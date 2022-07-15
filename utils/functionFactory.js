// Entity constructor for the data model

import { serverTimestamp } from 'firebase/firestore'

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
  otherAcc
}) => ({
  restaurant: {
    name,
    description: 'Aucune description',
    rccm,
    nif,
    otherAcc
  },
  manager: {
    firstname,
    lastname,
    phoneNumber,
    position,
  },
  email,
  adress: {
    description,
    zone: zone.value,
    quartier: quartier.value,
    long,
    lat
  },
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),
})

// Form

export const autoFillRestaurantForm = (reset, setValue, restaurant) => {
  if (!restaurant) {
    reset()
    return
  }

  const {
    restaurant: storename,
    manager,
    email,
    adress,
    isActive,
  } = restaurant
  setValue('storename', storename?.name)
  setValue('description', storename?.description)
  setValue('firstname', manager?.firstname)
  setValue('lastname', manager?.lastname)
  setValue('phoneNumber', manager?.phoneNumber)
  setValue('position', manager?.position)
  setValue('nif', storename?.nif)
  setValue('rccm', storename?.rccm)
  setValue('otherAcc', storename.otherAcc)
  setValue('lat', adress?.lat)
  setValue('long', adress?.long)
  setValue('email', email)
  setValue('indication', adress?.description)
  setValue('zone', { value: adress?.zone, label: adress?.zone })
  setValue('quartier', { value: adress?.quartier, label: adress?.quartier })
  setValue('isActive', isActive)
}
