import React from 'react'
import './Login.css'
import './Login.css'

export default function Cadastro() {
  return (
    <div className='login--page'>
    <div className='login--container'>
        <h2>Criar conta</h2>
        <input type="text" placeholder='E-mail'></input>
        <input className='login--input' type="text" placeholder='Nome de usuário'></input>
        <input className='login--input' type="password" placeholder='Senha'></input>
        <input className='login--input' type="password" placeholder='Confirme sua senha'></input>
        <button className='login--button'>Criar conta</button>
    </div>
  </div>
  )
}
