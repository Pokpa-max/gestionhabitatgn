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

export const sliderTypes = [
  { label: 'Collection', value: 'collection' },
  { label: 'Facebook Post', value: 'social' },
  { label: 'Restaurant', value: 'restaurant' },

]

export const sponsorTypes = [
  { label: 'Premium', value: 'premium' },
  { label: 'VIP', value: 'vip' },
  { label: 'Growing', value: 'growing' },

]

export const collections = [
  { label: 'Collection par defaut', value: 'defaut' },
  { label: 'Valentin Day', value: 'valentineDay' },
  { label: 'Entre Amis', value: 'friends' },

]

export const restaurantsOptions = [
  { label: 'Bambou Restautant', value: 'Bambou Restautant' },
  { label: 'Bambou Grill Restautant', value: 'Bambou Grill Restautant' },
  { label: 'Mims Burger', value: 'Mims Burger' },
  { label: 'Heroes Coffee', value: 'Heroes Coffee' },
  { label: 'Kaki Restaurant', value: 'Kaki Restaurant' },
  { label: 'Palm Camayenne', value: 'Palm Camayenne' },

]

export const foodGenerics = [
  { label: 'Attieke', value: 'Attieke' },
  { label: 'Poulet', value: 'Poulet' },
  { label: 'Pizza', value: 'Pizza' },
  { label: 'Poisson', value: 'Poisson' },
  { label: 'Riz gras', value: 'Riz gras' },
]



export const orders = [
  {
    completed: false,
    createdAt: new Date(),
    deliveryLocation: {
      contactNumber: "627 47 16 55",
      createdAt: '18 août 2022 à 18: 18: 58 UTC',
      description: "Attendre à la station Service de Total ENergies",
      district: "Dixinn",
      isDefault: false,
      latLng: {
        geohash:
          "e9wq2gyct",
        geopoint:
          [9.55703085904033, 13.668476454913616]
      },
      name:
        "Maisons 🏠 ",
      plusCode:
        "",
      updatedAt:
        '18 août 2022 à 18: 18: 58 UTC',
      zone:
        "Dixinn Stade",
    },
    pickupLocation: {
      contactNumber: "627 47 16 55",
      createdAt: '18 août 2022 à 18: 18: 58 UTC',
      description: "Attendre à la station Service de Total ENergies",
      district: "Dixinn",
      isDefault: false,
      latLng: {
        geohash:
          "e9wq2gyct",
        geopoint:
          [9.55703085904033, 13.668476454913616]
      },
      name:
        "Maisons 🏠 ",
      plusCode:
        "",
      updatedAt:
        '18 août 2022 à 18: 18: 58 UTC',
      zone:
        "Dixinn Stade",
    },
    isDelivery:
      true,
    orderDeliveryDay:
      '',
    orderDeliveryTime:
      '',
    orderNote:
      'Merci de me rajouter deux sauce blanche en plus et eviter le piments et des oignons. je suis alergique',
    orderTime:
      '',
    paymentId:
      '',
    products: [
      {
        alias:
          "Coca-Cola 33 cL",
        id:
          "rPVPxBLwBUbnpFQfEwg9",
        price:
          25000,
        quantity:
          2
      },
      {
        alias:
          "Sprite citron citron vert 33 cL",
        id:
          "KoXpEDsfBcJcs0IXjjtM",
        price:
          25000,
        quantity:
          1
      }, {
        alias:
          "Häagen-Dazs 100 mL",
        id:
          "akxrubDIT91b3AdmmwJ6",
        price:
          45000,
        quantity:
          3
      }, {
        alias:
          "Salade Cesar",
        id:
          "Zq9m3IySodiOa1CrC86Q",
        price:
          75000,
        quantity:
          1
      }
    ],
    restaurantId:
      "0FGepFt1nbHA4GKuPPgd",
    restaurantName:
      "Mims Burger",
    status:
      6,
    total:
      797000,
    userId: 'lZkE3lqYQvVisVOD0doZP4HCEYC3'
  },
  {
    completed: true,
    createdAt: new Date(),
    deliveryLocation: {
      contactNumber: "627 47 16 55",
      createdAt: '18 août 2022 à 18: 18: 58 UTC',
      description: "Attendre à la station Service de Total ENergies",
      district: "Dixinn",
      isDefault: false,
      latLng: {
        geohash:
          "e9wq2gyct",
        geopoint:
          [9.55703085904033, 13.668476454913616]
      },
      name:
        "Maisons 🏠 ",
      plusCode:
        "",
      updatedAt:
        '18 août 2022 à 18: 18: 58 UTC',
      zone:
        "Dixinn Stade",
    },
    pickupLocation: {
      contactNumber: "627 47 16 55",
      createdAt: '18 août 2022 à 18: 18: 58 UTC',
      description: "Attendre à la station Service de Total ENergies",
      district: "Dixinn",
      isDefault: false,
      latLng: {
        geohash:
          "e9wq2gyct",
        geopoint:
          [9.55703085904033, 13.668476454913616]
      },
      name:
        "Maisons 🏠 ",
      plusCode:
        "",
      updatedAt:
        '18 août 2022 à 18: 18: 58 UTC',
      zone:
        "Dixinn Stade",
    },
    isDelivery:
      true,
    orderDeliveryDay:
      '',
    orderDeliveryTime:
      '',
    orderNote:
      'Merci de me rajouter deux sauce blanche en plus et eviter le piments et des oignons. je suis alergique',
    orderTime:
      '',
    paymentId:
      '',
    products: [
      {
        alias:
          "Coca-Cola 33 cL",
        id:
          "rPVPxBLwBUbnpFQfEwg9",
        price:
          25000,
        quantity:
          2
      },
      {
        alias:
          "Sprite citron citron vert 33 cL",
        id:
          "KoXpEDsfBcJcs0IXjjtM",
        price:
          25000,
        quantity:
          1
      }, {
        alias:
          "Häagen-Dazs 100 mL",
        id:
          "akxrubDIT91b3AdmmwJ6",
        price:
          45000,
        quantity:
          3
      }, {
        alias:
          "Salade Cesar",
        id:
          "Zq9m3IySodiOa1CrC86Q",
        price:
          75000,
        quantity:
          1
      }
    ],
    restaurantId:
      "0FGepFt1nbHA4GKuPPgd",
    restaurantName:
      "Le Costo",
    status:
      5,
    total:
      797000,
    userId: 'lZkE3lqYQvVisVOD0doZP4HCEYC3'
  }, {
    completed: true,
    createdAt: new Date(),
    deliveryLocation: {
      contactNumber: "627 47 16 55",
      createdAt: '18 août 2022 à 18: 18: 58 UTC',
      description: "Attendre à la station Service de Total ENergies",
      district: "Dixinn",
      isDefault: false,
      latLng: {
        geohash:
          "e9wq2gyct",
        geopoint:
          [9.55703085904033, 13.668476454913616]
      },
      name:
        "Maisons 🏠 ",
      plusCode:
        "",
      updatedAt:
        '18 août 2022 à 18: 18: 58 UTC',
      zone:
        "Dixinn Stade",
    },
    pickupLocation: {
      contactNumber: "627 47 16 55",
      createdAt: '18 août 2022 à 18: 18: 58 UTC',
      description: "Attendre à la station Service de Total ENergies",
      district: "Dixinn",
      isDefault: false,
      latLng: {
        geohash:
          "e9wq2gyct",
        geopoint:
          [9.55703085904033, 13.668476454913616]
      },
      name:
        "Maisons 🏠 ",
      plusCode:
        "",
      updatedAt:
        '18 août 2022 à 18: 18: 58 UTC',
      zone:
        "Dixinn Stade",
    },
    isDelivery:
      true,
    orderDeliveryDay:
      '',
    orderDeliveryTime:
      '',
    orderNote:
      'Merci de me rajouter deux sauce blanche en plus et eviter le piments et des oignons. je suis alergique',
    orderTime:
      '',
    paymentId:
      '',
    products: [
      {
        alias:
          "Coca-Cola 33 cL",
        id:
          "rPVPxBLwBUbnpFQfEwg9",
        price:
          25000,
        quantity:
          2
      },
      {
        alias:
          "Sprite citron citron vert 33 cL",
        id:
          "KoXpEDsfBcJcs0IXjjtM",
        price:
          25000,
        quantity:
          1
      }, {
        alias:
          "Häagen-Dazs 100 mL",
        id:
          "akxrubDIT91b3AdmmwJ6",
        price:
          45000,
        quantity:
          3
      }, {
        alias:
          "Salade Cesar",
        id:
          "Zq9m3IySodiOa1CrC86Q",
        price:
          75000,
        quantity:
          1
      }
    ],
    restaurantId:
      "0FGepFt1nbHA4GKuPPgd",
    restaurantName:
      "Terrasse de Cosa",
    status:
      3,
    total:
      797000,
    userId: 'lZkE3lqYQvVisVOD0doZP4HCEYC3'
  }, {
    completed: true,
    createdAt: new Date(),
    deliveryLocation: {
      contactNumber: "627 47 16 55",
      createdAt: '18 août 2022 à 18: 18: 58 UTC',
      description: "Attendre à la station Service de Total ENergies",
      district: "Dixinn",
      isDefault: false,
      latLng: {
        geohash:
          "e9wq2gyct",
        geopoint:
          [9.55703085904033, 13.668476454913616]
      },
      name:
        "Maisons 🏠 ",
      plusCode:
        "",
      updatedAt:
        '18 août 2022 à 18: 18: 58 UTC',
      zone:
        "Dixinn Stade",
    },
    pickupLocation: {
      contactNumber: "627 47 16 55",
      createdAt: '18 août 2022 à 18: 18: 58 UTC',
      description: "Attendre à la station Service de Total ENergies",
      district: "Dixinn",
      isDefault: false,
      latLng: {
        geohash:
          "e9wq2gyct",
        geopoint:
          [9.55703085904033, 13.668476454913616]
      },
      name:
        "Maisons 🏠 ",
      plusCode:
        "",
      updatedAt:
        '18 août 2022 à 18: 18: 58 UTC',
      zone:
        "Dixinn Stade",
    },
    isDelivery:
      true,
    orderDeliveryDay:
      '',
    orderDeliveryTime:
      '',
    orderNote:
      'Merci de me rajouter deux sauce blanche en plus et eviter le piments et des oignons. je suis alergique',
    orderTime:
      '',
    paymentId:
      '',
    products: [
      {
        alias:
          "Coca-Cola 33 cL",
        id:
          "rPVPxBLwBUbnpFQfEwg9",
        price:
          25000,
        quantity:
          2
      },
      {
        alias:
          "Sprite citron citron vert 33 cL",
        id:
          "KoXpEDsfBcJcs0IXjjtM",
        price:
          25000,
        quantity:
          1
      }, {
        alias:
          "Häagen-Dazs 100 mL",
        id:
          "akxrubDIT91b3AdmmwJ6",
        price:
          45000,
        quantity:
          3
      }, {
        alias:
          "Salade Cesar",
        id:
          "Zq9m3IySodiOa1CrC86Q",
        price:
          75000,
        quantity:
          1
      }
    ],
    restaurantId:
      "0FGepFt1nbHA4GKuPPgd",
    restaurantName:
      "Mims Burger",
    status:
      4,
    total:
      797000,
    userId: 'lZkE3lqYQvVisVOD0doZP4HCEYC3'
  }]




