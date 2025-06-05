import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from  'react-router-dom';
import Home from './components/Home.tsx'
import Pinned from './components/Pinned.tsx'
import CreatePost from './components/CreatePost.tsx'
import Texts from './components/Texts.tsx'
import Post from './components/Post.tsx'
import Chat from './components/Chat.tsx'
import User from './components/User.tsx'
import Block from './components/Block.tsx'
import NotFoundPage from './components/NotFoundPage.tsx'


const router = createBrowserRouter([
  {path: '/',
  element: <App/>,
  errorElement: <NotFoundPage/>,
  children: [
    {path: '/home',
      element: <Home />
      },{
        path: '/createPost',
        element: <CreatePost/>
      },{
        path: '/texts',
        element:<Texts/>
      },{
        path:'/pinned',
        element:<Pinned/>
      },{
        path: '/post/:postid',
        element: <Post/>
      },{
        path: '/user/:userid',
        element: <User/>
      }
  ]
  },{
    path: '/texts/:chatid',
    element: <Chat/>
  },{
    path: '/texts/:chatid/block',
    element: <Block/>
  }
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
