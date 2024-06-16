import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

// import { AppRoutes } from './appRoutes'
// import { useGetHealth } from '../api'
// import Oops from '../components/Oops'

function AppRouter() {
  // const { data: healthCheck, isPending, error } = useGetHealth()
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        {/* {(!isPending && (error || !healthCheck.OK)) ? <Oops /> : <AppRoutes /> } */}
      </BrowserRouter>
    </>
  )
}

export default AppRouter
