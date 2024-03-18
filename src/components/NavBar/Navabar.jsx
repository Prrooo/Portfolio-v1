import { useState } from 'react'
import style from '../NavBar/Navbar.module.css'
import openIcon from '../../../assets/nav/menuIcon.png';
import closeIcon from '../../../assets/nav/closeIcon.png'

const Navabar = () => {

  const [menuOpen,setMenuOpen]=useState(false);

  return (
    <nav className={style.navbar}>
      <a href='/' className={style.tittle} >Portfolio</a>
      <div className={style.menu}>
        <img src={menuOpen ? closeIcon: openIcon} className={style.menuBtn} onClick={()=>setMenuOpen(!menuOpen)} alt='menu-btn' />
        <ul className={`${style.menuItems} ${menuOpen && style.menuOpen}`}>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills' >Skills</a></li>
          <li><a href='#projects' >Projects</a></li>
          <li><a href='#contact' >Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navabar