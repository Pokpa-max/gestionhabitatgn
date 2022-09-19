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

export const ordersRestaurant = [
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
]

export const payments = [
  {
    id: 'PYM/OD001',
    paymentDescription: {
      sourceDescription: 'CMD N˚MMSB3211 - Mims Burger',
      sourceId: '5497yyr23ebfsvbdb', nature: 'entree', type: 'commande'
    },
    initiator: {
      name: 'Ousmane Diallo',
      id: '35dfhvbdvrbvrrfs'
    },
    paymentReference: {
      paymentMethod: 'Ecobank Pay',
      paymentReference: 'WD44/VF55500D-54'
    },
    paymentAmount: { total: 779000, cartCost: 750000, deliveryCost: 20000, serviceFee: 9000 },
    createdAt: new Date()
  },
  {
    id: 'PYM/RZ002',
    paymentDescription: {
      sourceDescription: 'CMD N˚MMSB3211 - Mims Burger',
      sourceId: 'fwfeRTHTAfdb55', nature: 'sortie', type: 'regularisation'
    },
    initiator: {
      name: 'Madifood',
      id: '35dfhvbdvrbvrrfs'
    },
    paymentReference: {
      paymentMethod: 'OM/Marchand',
      paymentReference: 'WD44/VF55500D-54'
    },
    paymentAmount: { total: 750000, paymentFee: 12000 },
    createdAt: new Date()
  },
  {
    id: 'PYM/RZ003',
    paymentDescription: {
      sourceDescription: 'CMD N˚MMSB3211 - Mims Burger',
      sourceId: '5497yyr23ebfsvbdb', nature: 'sortie', type: 'livraison'
    },
    initiator: {
      name: 'Madifood',
      id: '35dfhvbdvrbvrrfs'
    },
    paymentReference: {
      paymentMethod: 'OM/Marchand',
      paymentReference: 'WD44/VF55500D-54'
    },
    paymentAmount: { total: 20000, paymentFee: 2000, },
    createdAt: new Date()
  },
  {
    id: 'PYM/OD001',
    paymentDescription: {
      sourceDescription: 'CMD N˚MMSB3212 - Bamboo',
      sourceId: '5497yyr23ebfsvbdb', nature: 'entree', type: 'commande'
    },
    initiator: {
      name: 'Mamoudou Cissé',
      id: '35dfhvbdvrbvrrfs'
    },
    paymentReference: {
      paymentMethod: 'CASH',
      paymentReference: 'GNF'
    },
    paymentAmount: { total: 779000, cartCost: 750000, deliveryCost: 20000, serviceFee: 9000 },
    createdAt: new Date()
  },
  {
    id: 'PYM/RZ002',
    paymentDescription: {
      sourceDescription: 'CMD N˚MMSB3212 - Bamboo',
      sourceId: 'fwfeRTHTAfdb55', nature: 'sortie', type: 'regularisation'
    },
    initiator: {
      name: 'Madifood',
      id: '35dfhvbdvrbvrrfs'
    },
    paymentReference: {
      paymentMethod: 'OM/Marchand',
      paymentReference: 'WD44/VF55500D-54'
    },
    paymentAmount: { total: 750000, paymentFee: 12000 },
    createdAt: new Date()
  },
  {
    id: 'PYM/RZ003',
    paymentDescription: {
      sourceDescription: 'CMD N˚MMSB3212 - Bamboo',
      sourceId: '5497yyr23ebfsvbdb', nature: 'sortie', type: 'livraison'
    },
    initiator: {
      name: 'Madifood',
      id: '35dfhvbdvrbvrrfs'
    },
    paymentReference: {
      paymentMethod: 'OM/Marchand',
      paymentReference: 'WD44/VF55500D-54'
    },
    paymentAmount: { total: 20000, paymentFee: 2000, },
    createdAt: new Date()
  },
]

export const reviews = [
  {
    id: 1,
    rating: 5,
    category: 'Personnel',
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    createdAt: 'July 16, 2021',
    datetime: '2021-07-16',
    user: {
      username: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    rating: 4,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Mamoudou Condé',
      avatarSrc:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    rating: 5,
    category: 'Personnel',
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    createdAt: 'July 16, 2021',
    datetime: '2021-07-16',
    user: {
      username: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    rating: 4,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Mamoudou Condé',
      avatarSrc:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    rating: 5,
    category: 'Personnel',
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    createdAt: 'July 16, 2021',
    datetime: '2021-07-16',
    user: {
      username: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    rating: 4,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Mamoudou Condé',
      avatarSrc:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    rating: 5,
    category: 'Personnel',
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    createdAt: 'July 16, 2021',
    datetime: '2021-07-16',
    user: {
      username: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    rating: 4,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Mamoudou Condé',
      avatarSrc:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    rating: 5,
    category: 'Personnel',
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    createdAt: 'July 16, 2021',
    datetime: '2021-07-16',
    user: {
      username: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    rating: 4,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Mamoudou Condé',
      avatarSrc:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    rating: 5,
    category: 'Personnel',
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    createdAt: 'July 16, 2021',
    datetime: '2021-07-16',
    user: {
      username: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    rating: 4,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    createdAt: 'July 12, 2021',
    category: 'Nourriture',
    datetime: '2021-07-12',
    user: {
      username: 'Mamoudou Condé',
      avatarSrc:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80',
    },
  },
  // More reviews...
]

export const menus = [
  {
    name: 'Menu Special Ramadan',
    description: 'Active pour le menu Special Ramadan',
    categories: 6,
    items: 24,
  },
  {
    name: 'Menu WeekEnd',
    description: 'Active pour le menu WeekEnd',
    categories: 9,
    items: 34,
  },
  {
    name: 'Menu Special Dejeuner',
    description: 'Active pour le menu Special Dejeuner',
    categories: 5,
    items: 27,
  },
  {
    name: 'Menu Special Diner',
    description: 'Active pour le menu Special Diner',
    categories: 6,
    items: 24,
  },
]

export const categories = [
  {
    name: 'Petit déjeuner 🥐',
    note: 'Active pour le menu Special Ramadan',
    menus: ['Menu Special Ramadan', 'Menu Dejeuner', 'Menu Diner'],
    items: 8,
  },
  {
    name: 'Dessert 🍧',
    note: 'Active pour le menu WeekEnd',
    menus: ['Menu WeekEnd', 'Menu Dejeuner', 'Menu Diner'],
    items: 5,
  },
  {
    name: 'Plats Viande 🍖',
    note: 'Active pour le menu Special Dejeuner',
    menus: ['Menu Special Dejeuner', 'Menu Dejeuner', 'Menu Diner'],
    items: 9,
  },
  {
    name: 'Poissons 🐟🐠',
    note: 'Active pour le menu Special Diner',
    menus: ['Menu Special Ramadan', 'Menu WeekEnd'],
    items: 5,
  },
  {
    name: 'Apperitif 🧆',
    note: 'Active pour le menu Special Dejeuner',
    menus: ['Menu Special Dejeuner', 'Menu Dejeuner', 'Menu Diner'],
    items: 9,
  },
  {
    name: 'Boissons 🥤🍹',
    note: 'Active pour le menu Special Diner',
    menus: ['Menu Special Ramadan', 'Menu WeekEnd'],
    items: 5,
  },
]

export const menuItems = [
  {
    item: {
      name: 'Jus de Coco - Pinacolada',
      description: 'Active pour le menu Special Diner',
      imgUrl:
        'https://www.foodiesfeed.com/wp-content/uploads/2020/05/suco-de-limao-com-slash-683x1024.jpg.webp',
    },
    categories: ['Boissons', 'Sirop', 'Jus'],
  },
  {
    item: {
      name: 'Dessert de creme brulee',
      description: 'Active pour le menu Special Diner',
      imgUrl:
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-684x1024.jpg.webp',
    },
    categories: ['Desserts'],
  },
  {
    item: {
      name: 'Crepes de fruits',
      description: 'Active pour le menu Special Diner',
      imgUrl:
        'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches-819x1024.jpg.webp',
    },
    categories: ['Desserts', 'Fruit'],
  },
  {
    item: {
      name: 'Jus de pasteque',
      description: 'Jus de pasteque presse avec du sirop de sucre rouge',
      imgUrl:
        'https://www.foodiesfeed.com/wp-content/uploads/2021/06/small-donut-with-raspberry-on-top-768x1024.jpg.webp',
    },
    categories: ['Boissons', 'Sirop', 'Jus'],
  },
  {
    item: {
      name: 'Jus de Coco - Pinacolada',
      description: 'Active pour le menu Special Diner',
      imgUrl:
        'https://www.foodiesfeed.com/wp-content/uploads/2020/05/suco-de-limao-com-slash-683x1024.jpg.webp',
    },
    categories: ['Boissons', 'Sirop', 'Jus'],
  },
  {
    item: {
      name: 'Dessert de creme brulee',
      description: 'Active pour le menu Special Diner',
      imgUrl:
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-684x1024.jpg.webp',
    },
    categories: ['Desserts'],
  },
  {
    item: {
      name: 'Assiete de calamard',
      description:
        'Pattes de calamard rince dans une sauce piment avec des oignons, du poivre et du sel',
    },
    imgUrl:
      'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-819x1024.jpg.webp',

    categories: ['Fruit de mer', 'Poissons', 'Tantacules'],
  },
  {
    item: {
      name: 'Brochette de lotte avec accompagnement',
      description:
        'Morceau de lotte grillé au four avec des oignons, du poivre et du sel',
    },
    imgUrl:
      'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-noodles-vegetables-egg-819x1024.jpg.webp',

    categories: ['Fruit de mer', 'Poissons', 'Tantacules'],
  },
  {
    item: {
      name: 'Ailes de poulet et frites',
      description:
        'Poulet grillé avec des oignons, du poivre et du sel, Accompagne de sauce miel et frites',
    },
    imgUrl:
      'https://www.foodiesfeed.com/wp-content/uploads/2020/09/tacos-with-pulled-pork-fresh-vegetables-and-cream-768x1024.jpg.webp',

    categories: ['Plats principal', 'Poulets'],
  },
  {
    item: {
      name: 'Dorade grille a la pierre',
      description:
        'Dorade grillé au feu de charbon avec accompagnement de sauce piment et de frites',
    },
    imgUrl:
      'https://www.foodiesfeed.com/wp-content/uploads/2021/05/fresh-coconut-819x1024.jpg.webp',

    categories: ['Fruit de mer', 'Poissons', 'Tantacules'],
  },
  {
    item: {
      name: 'Athieke poulet avec allocos',
      description:
        'Semoule de manioc avec poulet et des accompagnement de tomates et de légumes',
    },
    imgUrl:
      'https://www.foodiesfeed.com/wp-content/uploads/2021/04/fish-1024x683.jpg.webp',

    categories: ['Plats principal', 'Poulets', 'Athieke'],
  },
]