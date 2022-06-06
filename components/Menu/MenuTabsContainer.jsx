import React from 'react'

function MenuTabsContainer({ children, title, description }) {
  return (
    <div className="w-full py-10 space-y-5">
      <div className="space-y-4">
        <h3 className="text-3xl font-bold leading-6 text-gray-900 md:text-4xl">
          {title}
        </h3>
        <p className="max-w-2xl text-gray-500 text-md md:text-lg">
          {description}
        </p>
      </div>
      {children}
    </div>
  )
}

export default MenuTabsContainer
