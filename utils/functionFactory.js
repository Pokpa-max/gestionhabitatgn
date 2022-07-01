// Entity constructor for the data model

import { serverTimestamp } from 'firebase/firestore'

// dataConstructors

export const onboardingConstructor = ({
  storename: name,
  firstname,
  lastname,
  email,
  phone: phoneNumber,
  indications: description,
  zone,
  quartier,
}) => ({
  restaurant: {
    name,
    description: 'Aucune description',
  },
  manager: {
    firstname,
    lastname,
    phoneNumber,
  },
  email,
  adress: {
    description,
    zone: zone.value,
    quartier: quartier.value,
  },
  isActive: false,
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),
})

// Form

export const autoFillOnboardingForm = (reset, setValue, restaurant) => {
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
    nif,
    rccm,
    otherAcc,
    lat,
    long,
    position,
  } = restaurant
  setValue('storename', storename?.name)
  setValue('description', storename?.description)
  setValue('firstname', manager?.firstname)
  setValue('lastname', manager?.lastname)
  setValue('phoneNumber', manager?.phoneNumber)
  setValue('position', position)
  setValue('nif', nif)
  setValue('rccm', rccm)
  setValue('otherAcc', otherAcc)
  setValue('lat', lat)
  setValue('long', long)
  setValue('email', email)
  setValue('indication', adress?.description)
  setValue('zone', { value: adress?.zone, label: adress?.zone })
  setValue('quartier', { value: adress?.quartier, label: adress?.quartier })
  setValue('isActive', isActive)
}
