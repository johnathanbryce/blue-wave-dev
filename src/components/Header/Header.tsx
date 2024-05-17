'use client'
import {useState, useEffect, useRef} from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
// internal components
import NavBarDropdown from '../NavBarDropDown/NavBarDropDown'
import HamburgerDropdown from '../HamburgerDropdown/HamburgerDropdown'
import ContactModal from '../ContactModal/ContactModal'
// external libraries
import { Link } from 'react-scroll'
// internal assets
import Logo from '../../../public/images/logoIcon.png'
import LogoTransparent from '../../../public/images/logoTransparent.png'
import LogoTransparentWhite from '../../../public/images/logoTransparentWhite.png'
import WavesLogoTransparent from '../../../public/images/wavesLogoTransparent.png'

function Header() {
    const dropdownRef = useRef<HTMLDivElement>(null);
    // dropdown navbar menu on smaller screens:
    const [isDropdownActive, setIsDropdownActive] = useState(false);
  
    // toggle dropdown navbar menu on smaller screens:
    const toggleDropdown = () => {
        setIsDropdownActive((prev) => !prev); /* relies on prior state so dont change it to just !isDropdownActive */
    }
  
    // closes dropdown menu on nav item click
    const onNavItemClickCloseDropdown = () =>{
        setIsDropdownActive(false)
    }
  
    // closes dropdown menu when clicking outside the dropdown menu
    useEffect(() => {
        const closeDropdownHandler = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownActive(false)
            }
        }
        document.addEventListener('mousedown', closeDropdownHandler)
  
      return () => {
        document.removeEventListener('mousedown', closeDropdownHandler)
      }
    }, [])

    // open and close contact modal
    const [isContactModalActive, setIsContactModalActive] = useState(false);

    const onClickOpenModal = () => {
      setIsContactModalActive(true);                                               
    }
  
    const onClickCloseModal = () => {
      setIsContactModalActive(false);                                               
    }
    
  return (
    <header className={styles.header} ref={dropdownRef}>
        {/* toggle contact modal */}
        {isContactModalActive && <ContactModal onClickCloseModal={onClickCloseModal}/>}
        {/*  dropdown icon displays >950 px screen size*/}
        <HamburgerDropdown isDropdownActive={isDropdownActive} toggleDropdown={toggleDropdown}/>
        <Image 
          src={WavesLogoTransparent} 
          alt="Blue Wave Dev's logo. A circle with two small waves"
          className={styles.logo}
          height={75}
          width={75}
          priority
        />

        <nav className={styles.navbar}>
            <ul>
                <li><Link to="services" spy={true} smooth={true} duration={500} offset={-10} > Services </Link></li>
                <li><Link to="portfolio" spy={true} smooth={true} duration={500} offset={-10} > Portfolio </Link></li>     
                <li><Link to="about" spy={true} smooth={true} duration={500} offset={-10} > About </Link></li>
                <li><Link to="" onClick={onClickOpenModal}> Contact </Link></li>  
            </ul>
        </nav>
        
        {/* dropdown nav displays on >950 px screen size */}
        { isDropdownActive &&
            <NavBarDropdown>
                    {/* <li><Link to="home" spy={true} smooth={true} duration={500} offset={-850} onClick={onNavItemClickCloseDropdown}> Home </Link></li>  */}
                    <li><Link to="services" spy={true} smooth={true} duration={500} offset={-25}  onClick={onNavItemClickCloseDropdown}> Services </Link></li>  
                    <li><Link to="portfolio" spy={true} smooth={true} duration={250} offset={-25} onClick={onNavItemClickCloseDropdown}> Portfolio </Link></li>     
                    <li><Link to="testimonials" spy={true} smooth={true} duration={500} offset={-25} onClick={onNavItemClickCloseDropdown}> Testimonials </Link></li>
                    <li><Link to="about" spy={true} smooth={true} duration={500} offset={-25} onClick={onNavItemClickCloseDropdown}> About </Link></li>
                    {/* <li><Link to='' onClick={onClickOpenModal}> Contact </Link></li> */}
            </NavBarDropdown>
        }
    </header>
  )
}

export default Header