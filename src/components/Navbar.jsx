import { Link } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi"
import Styles from "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <div className="reactlibmarca">
            <img src="https://user-images.githubusercontent.com/113939119/214470755-b7208d2f-bcaa-4ad6-911e-92145e0e6db9.png" width="150" height="150" />
        </div>
      </Link>
      <div className="navbaropcoes">
        <ul>
          <Link to="/login">
            <li>LOGIN</li>
          </Link>
          <Link to="/catalogolivros">
            <li>LIVROS</li>
          </Link>
          <li>
            <Link to="/sobrenos">
              <li>SOBRE NÓS</li>
            </Link>
          </li>
          {/* <li>
            <input type="search" placeholder="Busque por um livro" />
            <button type="subimit">
              <BiSearchAlt2 />
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
