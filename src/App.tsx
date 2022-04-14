import About from 'pages/About'
import Login from 'pages/Login'
import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './containers/Layout'
import { store } from 'app/store'
import routes from 'routes/index'
const Page404 = lazy(() => import('pages/404'))

export interface AppProps {}

export interface PrivateRouteProps {
  element: React.ReactElement
  [key: string]: any
}

const PrivateRoute = ({ element: Component, ...rest }: PrivateRouteProps) => (
  <Route
    {...rest}
    element={
      store.getState().auth.isSignedIn ? (
        Component
      ) : (
        <Navigate to={{ pathname: '/login' }} replace />
      )
    }
  />
)

export default function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="/" element={<Layout />}>
          {routes.map((route, i) => {
            return route.component ? (
              <Route
                key={i}
                path={`${route.path}`}
                element={<route.component />}
              />
            ) : null
          })}
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
