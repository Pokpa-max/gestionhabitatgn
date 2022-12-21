
export const zones = [
  { label: 'Matam', value: 'Matam' },
  { label: 'Kaloum', value: 'Kaloum' },
  { label: 'Dixinn', value: 'Dixinn' },
  { label: 'Ratoma', value: 'Ratoma' },
  { label: 'Matoto', value: 'Matoto' },
]
export const userRole = [
  { label: 'manager', value: 'manager' },

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
export const houseType = [
  { label: 'Maison', value: 'Maison' },
  { label: 'Appartement', value: 'Appartement' },
  { label: 'Bureaux', value: 'Bureaux' },

]
export const offerType = [
  { label: 'Vente', value: 'Vente' },
  { label: 'Location', value: 'Location' },
]

export const commodites = [
  { label: 'Terrasse', value: 'Terrasse' },
  { label: 'Jardin', value: 'Jardin' },
  { label: 'Picine', value: 'Picine' },
  { label: 'Autre', value: 'Autre' },

]







export const getCategoriesOptions = (categories) => {
  return categories.map(category => {
    return { label: category.name, value: category.id }
  })
}

export const towns = {



  // "Kaloum": [
  //   "Almamya",
  //   "Boulbinet",
  //   "Coronthie",
  //   "kaloum",
  //   "Kouléwondy",
  //   "Manquepas",
  //   "Sandervalia",
  //   "Sans-fil",
  //   "Témitaye",
  //   "Tombo"
  // ]
  // ,

  // "Dixinn": [
  //   "Belle-vues",
  //   "Camayenne",
  //   "Cameroun",
  //   "Dixinn",
  //   "Hafia",
  //   "Kénien",
  //   "Landréah",
  //   "Minière"
  // ]
  // ,

  // "Matoto": [
  //   "Béanzin",
  //   "Camp Alpha Yaya Diallo",
  //   "Cité de l'air",
  //   "Dabompa",
  //   "Dabondy",
  //   "Dar-es-salam",
  //   "Gbéssia",
  //   "Kissosso",
  //   "Matoto"
  // ]
  // ,

  "Ratoma": [
    { label: "Cobaya-Fossidè", value: "Fossidè" },
    { label: "Hamdalaye", value: "Hamdalaye" },
    { label: "Kaporo", value: "Kaporo" },
    {
      label: "Kipé", value: "Kipé"
    },
    { label: "Cosa", value: "Cosa", }
    // "Koloma",
    // "Lambandji",
    // "Nongo",
    // "Ratoma",
    // "demoudoula",
    // "Bomboli",
    // "Simanbossia",
    // "Simbaya",
    // "Sonfonia",
    // "Taouyah",
    // "Wanindara",
    // "Yattayah"
  ]
  ,

  // "Matam": [
  //   "Boussoura",
  //   "Carrière",
  //   "Domino",
  //   "Hermakönon",
  //   "Coléah",
  //   "Imprimerie",
  //   "Lanséboudji",
  //   "Madina",
  //   "Mafanco",
  //   "Touguiwondy"
  // ]
  // ,

  // "Coyah": ["Coyah-Centre", "Kouriah", "Manéah", "Wonkifong"]

}



