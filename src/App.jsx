import { RouterProvider } from 'react-router'
import './App.css'
import router from './router/router'
import { UserContextProvider } from './context/UserContext'
import { ContextProvider } from './context/Context'

function App() {
  return (
    <>
      <ContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ContextProvider>
    </>
  )
}

export default App
