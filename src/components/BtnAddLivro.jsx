import { Link } from "react-router-dom"
import { AiFillPlusCircle } from "react-icons/ai"
import Styles from "../styles/BtnAddLivro.css"

const BtnAddLivro = () => {
  return (
    <div id="btnaddlivro">
        <Link to="/adicionarlivro">
          <button><AiFillPlusCircle /></button>
        </Link>
    </div>
  )
}

export default BtnAddLivro