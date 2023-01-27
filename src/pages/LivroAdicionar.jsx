import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ImPlus } from "react-icons/im"
import { MdOutlineCleaningServices } from "react-icons/md"
import { BiArrowBack } from "react-icons/bi"
import API from "../model/API"
import style from "../styles/LivroAdicionar.module.css"

const LivroAdicionar = () => {

  const navigate = useNavigate()

  const [capa, setCapa] = useState()
  const [titulo, setTitulo] = useState()
  const [genero, setGenero] = useState()
  const [autor, setAutor] = useState()
  const [sinopse, setSinopse] = useState()

  const createPost = async (e) => {
    e.preventDefault();
    const post = { titulo, genero, autor, sinopse, capa }
    await API.post("/Livros", post)
    navigate("/catalogolivros")
  }

  return (
    <div>
      <form onSubmit={(e) => createPost(e)} className={style.addback}>
        <h1 className={style.addtitulo}>Cadastrar um novo livro</h1>
        <div className={style.addopcoes}>
          <section>
            <div>
              <label htmlFor="titulo">Título:</label>
              <input type="text" name="titulo" id="titulo" placeholder="Digite o título" onChange={(e) => setTitulo(e.target.value)} />
            </div>
            <div>
              <label htmlFor="genero">Gênero:</label>
              <input type="text" name="genero" id="genero" placeholder="Escolha o gênero" onChange={(e) => setGenero(e.target.value)} />
            </div>
            <div>
              <label htmlFor="autor">Autor:</label>
              <input type="text" name="autor" id="autor" placeholder="Digite o nome do autor" onChange={(e) => setAutor(e.target.value)} />
            </div>
            <div>
              <label htmlFor="sinopse">Sinopse:</label>
              <input type="text" name="sinopse" id="sinopse" placeholder="Digite a sinopse" onChange={(e) => setSinopse(e.target.value)} />
            </div>
            <div>
              <label htmlFor="capa">Capa:</label>
              <input type="text" name="capa" id="capa" placeholder="Digite o link da capa" onChange={(e) => setCapa(e.target.value)} />
            </div>
          </section>
        </div>
        <div className={style.addbotoes}>
          <Link to="/catalogolivros">
          <button className={style.addbvoltar}><BiArrowBack /></button>
          </Link>
          <button type="reset" className={style.addbreset}><MdOutlineCleaningServices /></button>
          <button type="submit" className={style.addbotao}><ImPlus /></button>
        </div>
      </form>
    </div>
  )
}

export default LivroAdicionar
