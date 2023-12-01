import Logo from '../../assets/images/logo-dynamox.png'
import Image from 'next/image'
import { MenuToggle } from '../MenuToggle'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-content container">
          <a href=" https://dynamox.net/" target="_blank" rel="noreferrer">
            <Image src={Logo} alt="logo" className="logo" />
          </a>
          <nav className="header-nav">
            <ul className="nav-list">
              <li>
                <a
                  href="https://dynamox.net/dynapredict/"
                  target="_blank"
                  rel="noreferrer"
                >
                  DynaPredict
                </a>
              </li>
              <li>
                <a href="#sensors">Sensores</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
          <MenuToggle />
        </div>
      </header>
      <div className="space-header"></div>
    </>
  )
}

export default Header
