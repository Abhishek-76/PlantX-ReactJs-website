import { useEffect, useState } from "react";
import useLocalStorage from 'use-local-storage'
import { Link } from 'react-scroll';
import { TbLeaf } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import './Header.css'

const Header = () => {
  const defaultLight = window.matchMedia('(prefers-color-scheme: light-theme)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultLight ? 'dark' : 'light');

  const toggleTheme = (e) => {
    e.preventDefault();
    theme === "dark-theme" ? setTheme('light-theme') : setTheme('dark-theme');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [openMenu, setOpenmenu] = useState(false);


  return (

    <header className='header'>

      <nav className='nav nav_container'>
        <a href="#logo" className="nav__logo">
          <TbLeaf className=" nav__logo-icon" />Plant X
        </a>

        <div className="nav__menu" >
          <ul className="nav__list">
            <li className="nav__item">
              <Link activeClass="active" spy to="home" className="nav__link ">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link activeClass="active" spy to="about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link activeClass="active" spy to="products" className="nav__link">
                Products
              </Link>
            </li>
            <li className="nav__item">
              <Link activeClass="active" spy to="faqs" className="nav__link">
                FAQs
              </Link>
            </li>
            <li className="nav__item">
              <Link activeClass="active" spy to="contact" className="nav__link">
                Contact Us
              </Link>
            </li>
          </ul>
          <div class="nav__close" id="nav-close">
            <i class="ri-close-line"></i>
          </div>
        </div>

        <div class="nav__btns">
          <a href="darkMode" onClick={toggleTheme}>
            <MdDarkMode className='change-theme' id="theme-button" />
          </a>

          <div class="nav__toggle" >
            <AiOutlineMenu onClick={() => {
              setOpenmenu(!openMenu)
            }} />
          </div>
        </div>


      </nav>
    </header>

  )

}
export default Header;

