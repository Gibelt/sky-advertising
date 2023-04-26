import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'
import LoginScreen from './pages/login'
import ButtonInHeader from './components/commonComponents/buttons/buttonInHeader'

export default function AppRoutes() {
  const isLogin = true
  return (
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/login' element={<ButtonInHeader width={278} height={52}>Зарегистрироваться</ButtonInHeader>} />
      <Route path='/description/*' element='{<Description />}' />

      <Route element={<ProtectedRoute isAllowed={isLogin} />}>
        <Route path='/profile' element='{<Profile />}' />
      </Route>
    </Routes>
  )
}
