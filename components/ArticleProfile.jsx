import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

import CommentCard from "./CommentCard"
import {getArticle, getCommentsOfAnArticle, postComment} from "../utils/api"
 


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

     
     const handleSubmitComment=(event)=>{
      event.preventDefault()
      const inputs = [...document.getElementsByClassName("comment")]
      console.log( inputs)
      const postBody={"body": inputs[0].value, "created_at":inputs[1].value, "article_id":article_id, "votes":0, "author":inputs[2].value}
      postComment(postBody, article_id).then((newItemsFromApi)=>{
          setItems((currItems)=>{
              console.log(currItems)
              console.log(newItemsFromApi)
              return [newItemsFromApi, ...currItems]
          })
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
      
        <form class="comment-form" id="form" onSubmit={handleSubmitComment}>
    <p>
<label class="label" for="comment">Please enter yout comment for this article.</label>
</p>
<p>
<input
  type="text"  class="comment"  placeholder="Your comment"  id="comment"  name="comment" required
/>
</p>
<p>
<label class="label" for="comment">Please choose a time.</label>
</p>
<p>
<input
  type="datetime-local"  class="comment"  id="comment"  name="comment" required
/>
</p>
<p>
<label class="label" for="comment">Author.</label>
</p>
<p>
<input
  type="text"  class="comment"  placeholder="Your name"  id="comment"  name="comment" required
/>
</p>
<button class="form-button">Submit!</button>
</form>


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