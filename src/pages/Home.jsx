import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Carrossel from "../components/Carrossel"
import API from "../model/API"
import styles from "../styles/Home.module.css"


const Home = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await API.get("/Livrarias")

      const data = response.data

      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className={styles.home}>
      <Carrossel />
      <div className={styles.maislidos}>
        <h1>Mais lidos</h1>
        <div className={styles.maislidosimg}>
          <Link to="/livro/1">
            <img src="https://m.media-amazon.com/images/I/51phf-WQthL._SY346_.jpg"></img>
          </Link>
          <Link to="/livro/5">
            <img src="https://m.media-amazon.com/images/I/81LRk6+p1HL.jpg"></img>
          </Link>
          <Link to="/livro/9">
            <img src="https://m.media-amazon.com/images/I/51wt58SEkUL._AC_SY1000_.jpg"></img>
          </Link>
        </div>
        <div className={styles.maislidosimg}>
          <Link to="/livro/15">
            <img src="https://m.media-amazon.com/images/I/91R8S52UP6L.jpg"></img>
          </Link>
          <Link to="/livro/16">
            <img src="https://m.media-amazon.com/images/I/517DdyXpc5L._SY344_BO1,204,203,200_QL70_ML2_.jpg"></img>
          </Link>
          <Link to="/livro/20">
            <img src="https://m.media-amazon.com/images/I/31sVWemoFjL._SY344_BO1,204,203,200_QL70_ML2_.jpg"></img>
          </Link>
        </div>
        <Link to="/catalogolivros">
          <button>CONHEÇA NOSSO CATALOGO COMPLETO</button>
        </Link>
      </div>
      <div>
         <h1>Visite esses locais para ler esses livros</h1>
        <div className={styles.catalogolojas}>
          {posts.length === 0 ? (
            <div></div>
          ) : (
            posts.map((post) => (
              <div className={styles.maps}>
                <iframe src={`${post.gps}`} width="500" height="90"></iframe>
                <h2 className={styles.nomeloja}>{post.loja}</h2>
                <p>{post.endereço}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
