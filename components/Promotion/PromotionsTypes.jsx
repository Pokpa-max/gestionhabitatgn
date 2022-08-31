import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {
  RiGridFill,
  RiRocket2Fill,
  RiSlideshow2Fill,
  RiTeamFill,
} from 'react-icons/ri'

const sections = [
  {
    title: 'Sliders',
    icon: (
      <RiSlideshow2Fill className="transition duration-300 ease-linear delay-150 h-36 w-36 text-white/25 group-hover:text-amber-400" />
    ),
    color: 'bg-amber-400',
    link: 'sliders',
  },
  {
    title: 'Sponsoring',
    icon: (
      <RiRocket2Fill className="transition duration-300 ease-linear delay-150 h-36 w-36 text-white/25 group-hover:text-sky-400" />
    ),
    color: 'bg-sky-400',
    link: 'sponsoring',
  },
  {
    title: 'Communauté',
    icon: (
      <RiTeamFill className="transition duration-300 ease-linear delay-150 h-36 w-36 text-white/25 group-hover:text-emerald-400" />
    ),
    color: 'bg-emerald-400',
    link: 'community',
  },
  {
    title: 'Collections',
    icon: (
      <RiGridFill className="transition duration-300 ease-linear delay-150 h-36 w-36 text-white/25 group-hover:text-red-400" />
    ),
    color: 'bg-emerald-400',
    link: 'collections',
  },
]

function PromotionsTypes() {
  const { pathname } = useRouter()
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
      {sections.map(({ title, icon, link }, idx) => (
        <Link key={`${title}-${idx}`} href={`${pathname}/${link}`}>
          <a>
            <div
              className={`group relative h-36 w-full  overflow-clip border-2 border-black bg-black`}
            >
              <div className="absolute -right-7 -bottom-5 ">{icon}</div>
              <h1 className="p-3 text-2xl text-white ">{title}</h1>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default PromotionsTypes
