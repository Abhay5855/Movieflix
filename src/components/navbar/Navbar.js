


import React, {useState} from 'react'
import './navbar.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const Navbar = () => {

  const [searchOpen , setSearchOpen] = useState(false);


   const searchClick = () => {

         setSearchOpen(true);

   }
  return (
       
    <nav>

      <ul>
          <li><a>home</a></li>
          <li>

          <SearchRoundedIcon style={{ fontSize: 20 }} onClick={searchClick}/>
            <form>
        
              
              <input className='nav__input' type='text' placeholder='Search..' />
              <button className='btn__submit' type='submit'></button>
               
         

          
            </form>
          </li>
          <li><a>watchlist</a></li>
        
          <li>
              <img className='profile__img' src='https://scontent.fnag4-1.fna.fbcdn.net/v/t1.6435-9/145050096_888591505014385_1337213454963259110_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=niwTlP7M4P0AX9mpn_c&_nc_ht=scontent.fnag4-1.fna&oh=00_AT_O00ABhHfa4kIvArpJNFNCWRZxX5sCBuY1aM41X6x0BA&oe=624F6F94'  alt='profile'/>
          </li>
      </ul>
      

    </nav>
  )
}





export default Navbar;



