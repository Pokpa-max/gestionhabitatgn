import Page from '@/components/Page'
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import { useState } from 'react';
import { useForm } from "react-hook-form";

import { signin } from '../../lib/services/auth'


function SignIn() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
} = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldUnregister: true,
});

const [loading, setLoading] = useState(false);
const onSubmit = async (data) => {
  setLoading(true);
  try {
      await signin(data.email, data.password);
      reset();
  } catch (error) {
      console.log(error);
  }
  setLoading(false);
};
  return (
    <>
      {/* bg-gradient-to-r from-red-300 via-yellow-300 to-primary-300 */}
      <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-white sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <div className="flex items-center justify-center mx-auto">
              <img
                className="h-24 mb-20 "
                src="/images/logo.png"
                alt="Workflow"
              />
              <div className="flex-col ml-5">
                <h1 className="text-5xl font-black text-primary-accent">
                  EAT224
                </h1>
                <p className="text-5xl">ADMIN</p>
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Bienvenu.
            </h2>
            <p className="mt-4 text-gray-500 font-stratos-light">
              Utilisez vos identifiants pour acceder au panel d'administration
              EAT224.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}  className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Adresse Email
                </label>
                <input
                  id="email-address"
                  {...register("email", {
                    required: "Champs requis",
                })}
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:border-primary-500 focus:ring-primary-500 focus:z-10 focus:outline-none sm:text-sm"
                  placeholder="Adresse email"
                />
                <p className="pt-1 text-xs text-red-600 font-stratos-light">
                                    {errors?.email?.message}
                                </p>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  {...register("password", {
                    required: "Champs requis",
                })}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:border-primary-500 focus:ring-primary-500 focus:z-10 focus:outline-none sm:text-sm"
                  placeholder="Mot de passe"
                />
                  <p className="pt-1 text-xs text-red-600 font-stratos-light">
                                    {errors?.password?.message}
                                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded text-primary-500 focus:ring-primary-500"
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-primary-500 hover:text-primary-500"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-sm group bg-primary hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

const SignInPage = () => (
  <Page name="Eat224 Admin">
    <SignIn />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({ whenAuthed: AuthAction.REDIRECT_TO_APP })(
  SignInPage
);
