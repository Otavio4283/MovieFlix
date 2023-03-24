import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Perfil from './Pages/MeuPerfil'
import Postagens from './Pages/Postagens';

// 1 - configurando o router
import{
  createBrowserRouter, RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '/',
    element: <App />
  },
  {
    path: 'cadastro',
    element: <Cadastro />
  },
  {
    path: 'meu-perfil',
    element: <Perfil />
  },
  {
    path: 'postagens',
    element: <Postagens />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);