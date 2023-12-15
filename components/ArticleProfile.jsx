import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

import CommentCard from "./CommentCard"
import {getArticle, getCommentsOfAnArticle, postComment} from "../utils/api"
 


const ArticleProfile=()=>{

    const {article_id}=useParams()
    const [article, setArticle]=useState([])
    const [comments, setComments]=useState([])
    const [isLoading, setIsLoading]=useState(true)
    const [newComment,setNewComment]=useState()
    const [newAuthor,setNewAuthor]=useState()
    const [isPosting,setIsPosting]=useState(false)
    const [err,setErr]=useState(null)

    
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

     
     const handleSubmitComment=(event)=>{
      setIsPosting(true)
      event.preventDefault()
      const postBody={"body": newComment, "author":newAuthor}
      postComment(postBody, article_id).then((newCommentsFromApi)=>{
        setComments((currItems)=>{
              setIsPosting(false)
              return [newCommentsFromApi, ...currItems]
          })
      })
      .catch((err)=>{setErr('Something went wrong, please try again.')})
      setNewComment("")
      setNewAuthor("")
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
      
        <form class="comment-form" id="form" onSubmit={handleSubmitComment}>
    <p>
<label class="label" for="comment">Please enter yout comment for this article.</label>
</p>
<p>
<input
  type="text"  class="comment" value={newComment} onChange={(event)=>setNewComment(event.target.value)} placeholder="Your comment"  id="comment" rows={5} cols={50} name="comment" required
/>
</p>
<p>
<label class="label" for="comment">Author</label>
</p>
<p>
<input
  type="text"  class="comment" value={newAuthor} onChange={(event)=>setNewAuthor(event.target.value)} placeholder="Your name"  id="comment"  name="comment" required
/>
</p>
<button class="form-button" disabled={isPosting}>{isPosting ? "Posting..." :"Submit!"}</button>
</form>
{err ? <p>{err}</p> : null}


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