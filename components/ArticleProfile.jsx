import {useParams} from "react-router-dom"
import {useState, useEffect, useContext} from "react"
import { ArticlesContext } from "../contexts/ArticlesContext"
import ArticleCard from "./ArticleCard"
import {getArticle} from "../utils/api"
 


const ArticleProfile=()=>{

    const {article_id}=useParams()
    const [article, setArticle]=useState([])
    const [isLoading, setIsLoading]=useState(true)
    
    useEffect(()=>{
    getArticle(article_id)
      .then((response)=>{         setArticle(response[0])
        setIsLoading(false)
        })
      },[])

     if (isLoading)
     {
        return <h2>Loading ...</h2>
     }

    return (
        <>
        <li>
        <h2 className="itemBlock">
        <p>Article Author: {article.author}</p>
        <p>Article Topic: {article.topic}</p>
        <p>Article Votes: {article.votes}</p>
        <p>Article Title: {article.title}</p>
        <p>Article Created At: {new Date(article.created_at).toUTCString()}</p>
        <p>Article Comment Count: {article.comment_count}</p>
        <img src={article.article_img_url} alt="image" width="100" height="100"></img>
        </h2>
        </li>
       
  </>
    )
}
export default ArticleProfile