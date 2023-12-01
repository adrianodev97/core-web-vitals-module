import { useState } from 'react'

export const MenuToggle = () => {
  const [toggle, setToggle] = useState('')

  return (
    <>
      <div
        className={['menuBtn', toggle].join(' ')}
        onClick={() => {
          toggle ? setToggle('') : setToggle('active')
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section className={['menu-mobile', toggle].join(' ')}>
        <nav className="nav-mobile">
          <ul className="nav_list">
            <li className="nav_item">
              <a
                href="https://dynamox.net/dynapredict/"
                target="_blank"
                rel="noreferrer"
                className="nav_link"
              >
                DynaPredict
              </a>
            </li>
            <li className="nav_item">
              <a
                className="nav_link"
                onClick={() => {
                  setToggle('')
                }}
                href="#sensors"
              >
                Sensores
              </a>
            </li>
            <li className="nav_item">
              <a
                className="nav_link"
                onClick={() => {
                  setToggle('')
                }}
                href="#contact"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}
