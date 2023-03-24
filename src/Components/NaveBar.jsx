import {React} from 'react';
import './NaveBar.css'
import SearchIcon from '@mui/icons-material/Search';

export default function NaveBar () {
  return (
    <nav>
      <div className='main_name'>MovieFlix</div>
      <div class="links">
        <ul class='categories'>
          <il><a href='#acao'></a>Ação</il>
          <il><a href='#terror'></a>Terror</il>
          <il><a href='#comedia'></a>Comédia</il>
        </ul>
        <div className='search'>
          <div className='search_icon'>
            
          </div>
        </div>
      </div>
    </nav>
  )
}
