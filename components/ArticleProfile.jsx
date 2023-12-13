import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

import CommentCard from "./CommentCard"
import {getArticle, getCommentsOfAnArticle} from "../utils/api"
 


const ArticleProfile=()=>{

    const {article_id}=useParams()
    const [article, setArticle]=useState([])
    const [comments, setComments]=useState([])
    const [isLoading, setIsLoading]=useState(true)
    
    useEffect(()=>{
    getArticle(article_id)
      .then((response)=>{ 
        setArticle(response[0])
        setIsLoading(false)
        })
      },[])

    useEffect(()=>{
      getCommentsOfAnArticle(article_id)
        .then((response)=>{ 
          setComments(response)
          setIsLoading(false)
          })
        },[])

      
     if (isLoading)
     {
        return <h2>Loading ...</h2>
     }

    return (
        <>
        <h2 className="itemBlock">
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Votes: {article.votes}</p>
        <p>Title: {article.title}</p>
        <p> Body: {article.body}</p>
        <p> Created At: {new Date(article.created_at).toUTCString()}</p>
        <p> Comment Count: {article.comment_count}</p>
        <img src={article.article_img_url} alt="image" width="100" height="100"></img>
        </h2>  

        <ul>
            {comments.map((comment)=>
            {
                return <CommentCard article={comment} key={comment.comment_id}/>
            })}
        </ul>
       
  </>
    )
}
export default ArticleProfile