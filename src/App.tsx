import About from 'pages/About'
import Login from 'pages/Login'
import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './containers/Layout'

export interface AppProps {}

export default function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
