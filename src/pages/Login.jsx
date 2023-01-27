import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import API from "../model/API"
import "../styles/Login.css"

export default function Cadastro() {
  const navigate = useNavigate()

  const [Usuario, setUsuario] = useState("")
  const [Senha, setSenha] = useState("")
  const [ListaUsuarios, setListaUsuarios] = useState([])

  useEffect(() => {
    API.get("/Usuarios").then((e) => setListaUsuarios(e.data))
  }, [])

  function UsuarioHandle(e) {
    setUsuario(e.target.value)
  }

  function SenhaHandle(e) {
    setSenha(e.target.value)
  }

  function validarUsuario() {
    let e = ListaUsuarios.find(
      (usuario) => usuario.usuario === Usuario && usuario.senha === Senha
    )
    if (e === undefined) {
      alert("Conta não existe.")
    } else {
      localStorage.setItem('logado', 'true')
      navigate('/catalogolivros')
    }
  }

  return (
    <div className="reactlogin">   
      <form>
        <h1>Entre na sua conta</h1>
        <div class="form-group">
          <label for="inputUsuario"></label>
          <input
            onChange={(e) => UsuarioHandle(e)}
            value={Usuario}
            type="text"
            class="form-control"
            id="inputUsuario"
            placeholder="Usuário"
          />
        </div>
        <div class="form-group">
          <label for="idSenha"></label>
          <input
            onChange={(e) => SenhaHandle(e)}
            value={Senha}
            type="password"
            class="form-control"
            id="idSenha"
            placeholder="Senha"
          />
        </div>
        <button type="button" className="btnentrar" onClick={validarUsuario}>Entrar</button>
        <hr />
        <Link to="/novaconta">
        <button className="btncriarconta">Criar uma conta</button>
        </Link>
      </form>
    </div>
  )
}