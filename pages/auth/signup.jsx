import { RiUser3Line } from 'react-icons/ri'
import Page from '@/components/Page'
import FeaturesWithImage from '@/components/LandingSignUp/Features'
import FAQ from '@/components/LandingSignUp/FAQ'
import Footer from '@/components/LandingSignUp/Footer'

import { features } from '../../_data'

function SignUp() {
  return (
    <>
      <div className="relative flex-col min-h-full md:pb-10 ">
        <div className="flex mx-auto max-w-7xl">
          <div className="z-10 flex flex-col justify-center flex-1 px-4 py-12 bg-white rounded-b-sm sm:px-6 lg:px-20 xl:px-24">
            <div className="w-full max-w-md mx-auto sm:max-w-md lg:w-full">
              <div className="z-10 flex flex-col items-center justify-center flex-1 py-12 space-y-7 lg:hidden">
                <h1 className="text-3xl font-black text-primary ">
                  A world of customers now within your reach
                </h1>
                <p className="text-black text-md">
                  Uber’s global platform gives you the flexibility, visibility
                  and customer insights you need to connect with more customers.
                  Partner with us today.
                </p>
              </div>
              <div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Commencez ici
                </h2>
                <p className="mt-2 text-sm text-gray-600 ">
                  Remplissez le formulaire suivant pour demander une inscription
                  sur la plateforme Eat224
                </p>
              </div>
              <div className="mt-8">
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-4">
                    <div>
                      <label
                        htmlFor="storename"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nom de l'etablissement
                      </label>
                      <div className="mt-1">
                        <input
                          id="storename"
                          name="storename"
                          required
                          className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-sm appearance-none focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="adresse"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Localisation
                      </label>
                      <div className="mt-1">
                        <input
                          id="adresse"
                          name="adresse"
                          type="adresse"
                          autoComplete="adresse"
                          required
                          className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-sm appearance-none focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Prénom
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            autoComplete="given-name"
                            className="block w-full border-gray-300 rounded-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nom
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            autoComplete="family-name"
                            className="block w-full border-gray-300 rounded-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-sm appearance-none focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Numero de telephone
                      </label>
                      <div className="mt-1">
                        <input
                          id="phone"
                          name="phone"
                          type="phone"
                          autoComplete="phone"
                          required
                          className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-sm appearance-none focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-sm bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 flex-col items-center justify-center flex-1 hidden px-4 py-12 space-y-7 sm:px-6 lg:flex lg:px-20 xl:px-24">
            <h1 className="text-5xl font-black text-right text-white ">
              A world of customers now within your reach
            </h1>
            <p className="text-lg text-right text-white">
              Uber’s global platform gives you the flexibility, visibility and
              customer insights you need to connect with more customers. Partner
              with us today.
            </p>
          </div>
        </div>
        <img
          className="absolute inset-0 hidden object-cover w-full h-full brightness-75 lg:block"
          src="https://img.freepik.com/photos-gratuite/vue-dessus-fast-food-mix-hamburger-doner-sandwich-pepites-poulet-riz-salade-legumes-batonnets-poulet-salade-cesar-champignons-pizza-poulet-ragout-frites-mayo_141793-3997.jpg?t=st=1654359583~exp=1654360183~hmac=67cab842bf026f245619c341e8c2cb85bdc145a55bcb2e697cf390455833235c&w=2000"
          alt=""
        />
      </div>
    </>
  )
}

function Header() {
  return (
    <header className="bg-black">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-3 border-b border-black-900 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Eat224</span>
              <img className="w-auto h-12" src="/images/logo.png" alt="" />
            </a>
          </div>
          <div className="flex items-center justify-center p-2 space-x-1 text-primary-50 hover:cursor-pointer hover:rounded-full hover:bg-white hover:bg-opacity-10 ">
            <RiUser3Line className="w-5 h-5" />
            <p className="font-semibold text-md">Connexion</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

function Features() {
  return (
    <div className="z-10 bg-white md:py-12">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-10 text-3xl font-extrabold text-primary sm:text-4xl">
          Pourquoi Eat224 ?
        </h2>
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {features?.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center w-12 h-12 text-black-900 ">
                  <feature.icon className="w-16 h-16" aria-hidden="true" />
                </div>
                <p className="mt-5 text-xl font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500 font-stratos-light">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

const SignUpPage = () => (
  <Page name="Devenez un partenaire | Eat224">
    <Header />
    <SignUp />
    <Features />
    <FeaturesWithImage />
    <FAQ />
    <Footer />
  </Page>
)

export default SignUpPage
