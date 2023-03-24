import {React} from 'react';
import './NaveBar.css'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

export default function NaveBar () {
  return (
    <nav>
      <div className='main_name'>MovieFlix</div>
      <Button className='login_button'  style={{ borderWidth: '3px', borderColor: 'white', color: 'white', fontWeight:'bold', left: '78%', fontSize:'17px', justifyContent:'center', alignItems:'center' }} variant="outlined">LOGIN</Button>
      <div class="links">
        <ul class='categories'>
          <il><a href='#acao'></a>Ação</il>
          <il><a href='#terror'></a>Terror</il>
          <il><a href='#comedia'></a>Comédia</il>
        </ul>
        <div className='search'>
          <SearchIcon className='search_icon'/>
        </div>
      </div>
    </nav>
  )
}
