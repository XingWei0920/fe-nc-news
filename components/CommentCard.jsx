import './ItemCard.css'


const CommentCard=(props)=>{
    const {article}=props
    console.log(props)
    return (
        
        <li className="itemBlock">
            
        <p>Author: {article.author}</p>
        <p>Votes: {article.votes}</p>
        <p>Created At: {new Date(article.created_at).toUTCString()}</p>
        <p><small> Body: {article.body}</small></p>
        </li>
    )
}
export default CommentCard