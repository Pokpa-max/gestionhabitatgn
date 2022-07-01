export const restaurants = [
  {
    restaurant: {
      name: 'Bamboo Restaurant',
      description: 'Cuisine d affrique et du monde.',
    },
    manager: {
      firstname: 'Ousmane',
      lastname: 'Diallo',
      phoneNumber: '627471655',
    },
    email: 'restaurant@email.com',
    adress: {
      zone: 'Matam',
      description: 'Rue de la paix',
    },
    isActive: false,
    createdAt: new Date(Date.now()),
  },
  {
    restaurant: {
      name: 'Bamboo Grill Restaurant',
      description: 'Cuisine d affrique et du monde.',
    },
    manager: {
      firstname: 'Ousmane',
      lastname: 'Diallo',
      phoneNumber: '627471655',
    },
    email: 'restaurant@email.com',
    adress: {
      zone: 'Matam',
      description: 'Rue de la paix',
    },
    isActive: true,
    createdAt: new Date(Date.now()),
  },
  {
    restaurant: {
      name: 'Mims Burgeur',
      description: 'Cuisine d affrique et du monde.',
    },
    manager: {
      firstname: 'Amadou',
      lastname: 'Sow',
      phoneNumber: '627471655',
    },
    email: 'mims@email.com',
    adress: {
      zone: 'Kaloum',
      description: 'Camayenne hotel palm camayenne',
    },
    isActive: false,
    createdAt: new Date(Date.now()),
  },
]

export const zones = [
  { label: 'Matam', value: 'Matam' },
  { label: 'Kaloum', value: 'Kaloum' },
  { label: 'Dixinn', value: 'Dixinn' },
  { label: 'Ratoma', value: 'Ratoma' },
  { label: 'Matoto', value: 'Matoto' },
]

export const quartier = [
  { label: 'Koulewondy', value: 'Koulewondy' },
  { label: 'Donka', value: 'Donka' },
  { label: 'Camayenne', value: 'Camayenne' },
  { label: 'BelleVue', value: 'BelleVue' },
  { label: 'Dixinn', value: 'Dixinn' },
  { label: 'Madina', value: 'Madina' },
  { label: 'Kipé', value: 'Kipé' },
  { label: 'Ratoma', value: 'Ratoma' },
  { label: 'Cosa', value: 'Cosa' },
  { label: 'Bambeto', value: 'Bambeto' },
]
