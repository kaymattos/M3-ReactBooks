import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../model/API"
import style from "../styles/NovaConta.module.css"

const NovaConta = () => {

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()


  const createPost = async (e) => {
    e.preventDefault()
    const post = { usuario, senha }
    await API.post("/Usuarios", post)
    navigate("/login")

  }

  return (
    <div className={style.novaconta}>
      <form onSubmit={(e) => createPost(e)}>
        <h1 className={style.titulo}>Cadastre-se</h1>
        <p className={style.subtitulo}>É rápido e fácil.</p>
        <div className={style.addopcoes}>
          <section>
            <div>
              <label htmlFor="titulo">Usuário:</label>
              <input type="text" name="usuario" id="usuario" onChange={(e) => setUsuario(e.target.value)} />
            </div>
            <br />
            <div>
              <label htmlFor="genero">Senha:</label>
              <input type="text" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)} />
            </div>
          </section>
        </div>
          <button type="submit" className={style.btncriar}>Cadastre-se</button>
      </form>
    </div>
  )
}

export default NovaConta