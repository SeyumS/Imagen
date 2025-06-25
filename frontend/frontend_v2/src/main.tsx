import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from  'react-router-dom';

import Login from './components/Login.tsx'
import Home from './components/Home.tsx'
import Chats from './components/Chats.tsx'
import Chat from './components/Chat.tsx'
import Pinned from './components/Pinned.tsx'
import Post from './components/Post.tsx'
import User from './components/User.tsx'
import Upload from './components/Upload.tsx'
import Pinwall from './components/Pinwall.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/',
  element: <App/>,
  
  children: [
      {
        path: '/home',
        element: <Home/>
      },{
        path: '/upload',
        element: <Upload/>
      },{
        path: '/chats/:id',
        element: <Chats/>
      },{
        path: '/pinned',
        element: <Pinned/>
      },{
        path: '/post/:postid',
        element: <Post/>
      },{
        path: '/user/:userid',
        element: <User/>
      },{
        path: '/pinwall/:pinwallid',
        element: <Pinwall/>
      }
  ]
  },{
    path: '/chats/:id/:chatid',
    element: <Chat/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
