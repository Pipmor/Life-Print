import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

  

export default function Header({handleClick}){


  return(
    <nav>
      <header>
      <h1><Link to="/">Logo</Link></h1>
    <ul>
     
      <li><Link to='услуги'>Услуги</Link></li>
      <li><Link to='продукция'>Продукция</Link></li>
      <li><Link to='блог'>Блог</Link></li>
      <li><Link to='о нас'>О нас</Link></li>
      <li><Link to='контакты'>Контакты</Link></li>
    </ul> 
  </header>
  <button onClick={handleClick}>Заказать печать</button>
  </nav>
     
  )
}

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
