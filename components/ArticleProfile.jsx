import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"


import ArticleCard from "./ArticleCard"

import CommentCard from "./CommentCard"
import {getArticle, getCommentsOfAnArticle, updateArticleById} from "../utils/api"

 


const ArticleProfile=()=>{

    const {article_id}=useParams()
    const [article, setArticle]=useState([])
    const [comments, setComments]=useState([])
    const [isLoading, setIsLoading]=useState(true)
    const [err, setErr]=useState(null)
   
    
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

     const handleSubmitOrder=()=>{
      setArticle((article)=>({
        ...article,
      votes:article.votes+1}))
      setErr(null)

      const newVote={inc_votes:article.votes+1}
      updateArticleById(article_id,newVote)
      .catch((err)=>{
        setArticle((article)=>({
          ...article,
        votes:article.votes-1}))
        setErr('Something went wrong, please try again.')
      })
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

        {err? <p>{err}</p> : null}
        <h2>Like this article?</h2>



<button className="form-button" data-alt-text="Thanks for Voting" onClick={handleSubmitOrder}>Vote!</button>

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