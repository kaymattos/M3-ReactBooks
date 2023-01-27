import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { BiSave, BiArrowBack } from "react-icons/bi"
import API from "../model/API"
import style from "../styles/LivroEditar.module.css"

const LivroEditar = () => {
  const navigate = useNavigate()

  const [capa, setCapa] = useState()
  const [titulo, setTitulo] = useState()
  const [genero, setGenero] = useState()
  const [autor, setAutor] = useState()
  const [sinopse, setSinopse] = useState()

  const { id } = useParams()

  const getPost = async () => {
    try {
      const response = await API.get(`/Livros/${id}`)

      const data = response.data

      setCapa(data.capa)
      setTitulo(data.titulo)
      setGenero(data.genero)
      setAutor(data.autor)
      setSinopse(data.sinopse)

    }
    catch (error) {
      console.log(error)
    }
  }

  const editar = async (e) => {
    e.preventDefault()

    const post = { capa, titulo, genero, autor, sinopse }
    await API.put(`/Livros/${id}`, post)
    navigate("/catalogolivros")
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      <form onSubmit={(e) => editar(e)} className={style.editback}>
        <h1 className={style.showedit}>Editando: "{titulo}"</h1>
        <div className={style.cols}>
          <section className={style.col1}>
            <div>
              <label htmlFor="titulo">Título:</label>
              <input
                type="text"
                name="titulo"
                id="titulo"
                onChange={(e) => setTitulo(e.target.value)}
                value={titulo || ""}
              />
            </div>
            <div>
              <label htmlFor="genero">Gênero:</label>
              <input
                type="text"
                name="genero"
                id="genero"
                placeholder="Digite o gênero"
                onChange={(e) => setGenero(e.target.value)}
                value={genero || ""}
              />
            </div>
            <div>
              <label htmlFor="autor">Autor:</label>
              <input
                type="text"
                name="autor"
                id="autor"
                onChange={(e) => setAutor(e.target.value)}
                value={autor || ""}
              />
            </div>
            <div>
              <label htmlFor="sinopse">Sinopse:</label>
              <input
                type="text"
                name="sinopse"
                id="sinopse"
                placeholder="Digite a sinopse"
                onChange={(e) => setSinopse(e.target.value)}
                value={sinopse || ""}
              />
            </div>
            <div>
              <label htmlFor="valor">Capa:</label>
              <input
                type="text"
                name="capa"
                id="capa"

                onChange={(e) => setCapa(e.target.value)}
                value={capa || ""}
              />
            </div>
          </section>
        </div>
        <div className={style.botoesedit}>
          <Link to="/catalogolivros">
            <button className={style.beditvoltar}><BiArrowBack /></button>
          </Link>
          <Link to="/catalogolivros">
            <button onClick={(e) => editar(e)} className={style.beditsalvar}><BiSave /></button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LivroEditar
