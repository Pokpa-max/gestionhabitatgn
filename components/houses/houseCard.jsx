import React from 'react'

function HouseCard({ imageUrl, title, description, price, partNumber }) {
  return (
    <div class="p-10">
      <div class=" w-full lg:flex lg:max-w-full">
        <div class="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l ">
          <img class="h-full" src={imageUrl} alt="image vitrine" />
        </div>
        <div class="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
          <div class="mb-8">
            <p class=" mb-5 flex items-center text-2xl font-bold text-gray-900">
              {'Logement en '}
              {title}
            </p>

            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="mb-2 text-gray-600">Commune:{'Matam'}</p>
                <p className="text-gray-600">Quartier:{'Kipe'}</p>
              </div>
              <div>
                <p className="text-gray-600"> Prix:{price}gnf</p>
                <p className="text-gray-600">Nombre de Chambre:{partNumber}</p>
              </div>
            </div>

            <div class="mb-2 text-xl font-bold text-cyan-500 ">Description</div>
            <p class="text-base text-gray-700">
              {description}
              {
                ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.'
              }
            </p>
          </div>
        </div>
      </div>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.1.2/tailwind.min.css"> */}
    </div>
  )
}

export default HouseCard
