import React from 'react'

function DashbordCard() {
  return (
    <div class="mb-2 flex flex-wrap">
      <div class="w-full px-3 pt-3 md:w-1/2 md:pr-2 xl:w-1/3">
        <div class="rounded border bg-cyan-500 p-8 shadow">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pl-1 pr-4">
              <i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
            </div>
            <div class="flex-1 text-right">
              <h5 class="text-white">Total Logement</h5>
              <h3 class="text-3xl text-white">
                3249
                <span class="text-green-400">
                  <i class="fas fa-caret-down"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-3 pt-3 md:w-1/2 md:pl-2 xl:w-1/3">
        <div class="rounded border bg-gray-500 p-8 shadow">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pl-1 pr-4">
              <i class="fas fa-users fa-2x fa-fw fa-inverse"></i>
            </div>
            <div class="flex-1 text-right">
              <h5 class="text-white">Total occupé </h5>
              <h3 class="text-3xl text-white">
                13{' '}
                <span class="text-blue-400">
                  <i class="fas fa-caret-up"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-3 pt-3 md:w-1/2 md:pr-2 xl:w-1/3 xl:pr-3 xl:pl-1">
        <div class="rounded border bg-gray-500 p-8 shadow">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pl-1 pr-4">
              <i class="fas fa-user-plus fa-2x fa-fw fa-inverse"></i>
            </div>
            <div class="flex-1 pr-1 text-right">
              <h5 class="text-white">Total disponible</h5>
              <h3 class="text-3xl text-white">
                2{' '}
                <span class="text-orange-400">
                  <i class="fas fa-caret-up"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-3 pt-3 md:w-1/2 md:pl-2 xl:w-1/3 xl:pl-3 xl:pr-2">
        <div class="rounded border bg-gray-500 p-8 shadow">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pl-1 pr-4">
              <i class="fas fa-server fa-2x fa-fw fa-inverse"></i>
            </div>
            <div class="flex-1 text-right">
              <h5 class="text-white">Total bureaux</h5>
              <h3 class="text-3xl text-white">76</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-3 pt-3 md:w-1/2 md:pr-2 xl:w-1/3 xl:pl-2 xl:pr-3">
        <div class="rounded border bg-gray-500 p-8 shadow">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pl-1 pr-4">
              <i class="fas fa-tasks fa-2x fa-fw fa-inverse"></i>
            </div>
            <div class="flex-1 text-right">
              <h5 class="text-white">Total utilisateur</h5>
              <h3 class="text-3xl text-white">70</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-3 pt-3 md:w-1/2 md:pl-2 xl:w-1/3 xl:pl-1">
        <div class="rounded border bg-gray-500 p-8 shadow">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pl-1 pr-4">
              <i class="fas fa-inbox fa-2x fa-fw fa-inverse"></i>
            </div>
            <div class="flex-1 text-right">
              <h5 class="text-white">Issues</h5>
              <h3 class="text-3xl text-white">
                3{' '}
                <span class="text-pink-400">
                  <i class="fas fa-caret-up"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashbordCard
