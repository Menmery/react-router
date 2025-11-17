import Login from "../page/Login"
import Article from "../page/Article"
import Layout from '../page/Layout/index'
import About from '../page/About/index'
import Board from '../page/Board/index'
import NotFound from '../page/NotFound/index'

import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        // 设置为默认渲染的页面
        index: true,
        element: <Board />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    // path: '/article',
    path: '/article/:id/:name',
    element: <Article />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router