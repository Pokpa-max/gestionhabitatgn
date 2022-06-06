import { Tab } from '@headlessui/react'
import MenusList from './MenusList'
import CategoriesList from './CategoriesList'
import MenuOverview from './MenuOverview'
import ItemsList from './ItemsList'

const tabs = [
  { name: 'Overview', href: '#', current: false },
  { name: 'Menu', href: '#', current: false },
  { name: 'Section', href: '#', current: true },
  { name: 'Elements', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default function MenuTabs() {
  return (
    <div className="w-full ">
      <Tab.Group>
        <Tab.List
          className="flex -mb-px space-x-8 border-b border-gray-200"
          aria-label="Tabs"
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              href={tab.href}
              className={({ selected }) =>
                classNames(
                  'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                  selected
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                )
              }
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <MenuOverview />
          </Tab.Panel>
          <Tab.Panel>
            <MenusList />
          </Tab.Panel>
          <Tab.Panel>
            <CategoriesList />
          </Tab.Panel>
          <Tab.Panel>
            <ItemsList />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
