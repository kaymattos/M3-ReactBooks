import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import API from "../model/API"
import BtnAddLivro from "../components/BtnAddLivro"
import styles from "../styles/LivrosCatalogo.module.css"

const CatalogoLivros = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await API.get("/Livros")

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
    <div>
      <BtnAddLivro />
      <div className={styles.catalogo}>
        {posts.length === 0 ? (
          <div className={styles.loading}>
          </div>
        ) : (
          posts.map((post) => (
            <Link to={`/livro/${post.id}`}>
            <div className={styles.livros} key={post.id}>
                <img src={`${post.capa}`} className={styles.imgItem} />
                <h2 className={styles.titulo}>{post.titulo}</h2>
              <p className={styles.autor}>{post.autor}</p>
            </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default CatalogoLivros