import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import FeedbackGlobalList from '@/components/Feedback/FeedbackGlobalList'
import Header from '@/components/Header'

import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'

function Feedbacks() {
  return (
    <Scaffold>
      <Header title={'Feedback utilisateurs'} />
      <FeedbackGlobalList />
    </Scaffold>
  )
}

const FeedbacksPage = () => (
  <Page name="Feedbacks | Eat224">
    <Feedbacks />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({
  // whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async () => {
  return {
    props: {},
  }
})
export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
  // whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(FeedbacksPage)
