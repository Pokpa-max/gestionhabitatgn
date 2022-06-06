import {
  RiGlobalFill,
  RiPlantFill,
  RiTeamFill,
  RiBankCardFill,
  RiEBike2Fill,
  RiEyeLine,
  RiSettings4Line,
  RiUser5Line,
} from 'react-icons/ri'

import { MdFastfood } from 'react-icons/md'

export const menuOptions = [
  { value: 'Menu Special Ramadan', label: 'Menu Special Ramadan' },
  { value: 'Menu Standard', label: 'Menu Standard' },
  { value: 'Menu WeekEnd', label: 'Menu WeekEnd' },
]

export const categoriesOptions = [
  { value: 'Petit déjeuner 🥐', label: 'Petit déjeuner 🥐' },
  { value: 'Dessert 🍧', label: 'Dessert 🍧' },
  { value: 'Plats Viande 🍖', label: 'Plats Viande 🍖' },
  { value: 'Poissons 🐟🐠', label: 'Poissons 🐟🐠' },
  { value: 'Apperitif 🧆', label: 'Apperitif 🧆' },
  { value: 'Boissons 🥤🍹', label: 'Boissons 🥤🍹' },
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

export const features = [
  {
    name: 'Promottez votre Business',
    description:
      'Boostez vos ventes et augmentez votre visibilité a travers Eat224.',
    icon: RiGlobalFill,
  },
  {
    name: 'Atteignez plus de clients',
    description:
      'Attirez plus de clients et augmentez vos commandes de jours en jours.',
    icon: RiTeamFill,
  },
  {
    name: 'Recevez un accompagnement constant.',
    description:
      'Regardez votre business grandir avec l aide de nos plateformes.',
    icon: RiPlantFill,
  },
]

export const features2 = [
  {
    id: 1,
    name: 'Menu Maker',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MdFastfood,
  },
  {
    id: 2,
    name: 'Gestion de vos gains en live !',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: RiBankCardFill,
  },
  {
    id: 3,
    name: 'Une vision 360 sur votre restaurant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: RiEyeLine,
  },
]
export const features3 = [
  {
    id: 1,
    name: 'Inscrivez vous',
    description:
      'Parlez nous de votre activités et mettons en place votre Restaurant',
    icon: RiUser5Line,
  },
  {
    id: 2,
    name: 'Mise en place',
    description: 'Creer vos menu et programmez vos heures d ouverture.',
    icon: RiSettings4Line,
  },
  {
    id: 2,
    name: 'Servez...',
    description: 'Recevez des commandes et gerez les a travers la plateforme.',
    icon: RiEBike2Fill,
  },
]

export const faqs = [
  {
    question: 'Combien de temps faut-il pour devenir partenaire ?',
    answer:
      "En fonction du nombre d'établissements que vous possédez, quelques jours peuvent suffire pour que votre restaurant apparaisse dans l'application Uber Eats et que vous puissiez accepter vos premières commandes. Lancez-vous en vous inscrivant ici. Nous avons hâte d'avoir de vos nouvelles !",
  },
  {
    question: 'Comment fonctionne la tarification ?',
    answer:
      'La tarification Uber Eats présente deux composantes. Les frais d activation, à régler une seule fois, incluent un kit de bienvenue, une tablette, un logiciel pour le restaurant et une séance photo avec un professionnel. Les frais de service correspondent à un pourcentage appliqué à chaque commande avec Uber Eats. Vous souhaitez en savoir plus ? Écrivez-nous à l adresse restaurants@eat224.com, et nous vous recontacterons.',
  },
  {
    question: "Qui s'occupe des livraisons ?",
    answer:
      "La plateforme Uber peut vous mettre en relation avec des coursiers indépendants susceptibles de livrer en voiture, à vélo, à scooter ou à pied, selon votre région. Grâce au réseau de coursiers utilisant l'application Uber, les restaurants n'ont pas besoin de continuer à faire appel à leurs coursiers. Mais si vous préférez travailler avec votre propre personnel de livraison, c'est également possible. Écrivez-nous à l'adresse restaurants@uber.com ou contactez directement votre représentant EAT224 pour savoir si cette option est disponible dans votre ville.",
  },
  {
    question: 'Quel est le périmètre de livraison ?',
    answer:
      'Cela varie selon la ville. Nous pouvons étudier la zone de livraison et votre adresse afin de définir la couverture adéquate pour votre restaurant.',
  },
  {
    question:
      "De quels types d'outils EAT224 les restaurants partenaires bénéficient-ils ?",
    answer:
      "Une tablette dotée de l'application Commandes Uber Eats permet aux restaurants partenaires de suivre les nouvelles commandes et de gérer les livraisons au quotidien. Le logiciel Uber Eats Manager offre un meilleur accès aux menus, aux informations de paiement, aux données sur les ventes et aux statistiques sur les clients. Une équipe technique veille au bon fonctionnement quotidien de ces deux outils.",
  },
  // More questions...
]
