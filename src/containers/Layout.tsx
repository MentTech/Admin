import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import routes from '../routes'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header/Header'
import Main from './Main'
import ThemedSuspense from '../components/ThemedSuspense'
const Page404 = lazy(() => import('../pages/404'))

export interface LayoutProps {}

export default function Layout(props: LayoutProps) {
  return (
    // className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
    //   isSidebarOpen && 'overflow-hidden'
    // }`}
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Routes>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    path={`/${route.path}`}
                    element={<route.component />}
                  />
                ) : null
              })}
              <Navigate to="/dashboard" replace />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  )
}
