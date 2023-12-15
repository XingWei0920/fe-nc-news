import './ItemCard.css'


const CommentCard=(props)=>{
    const {article}=props
    return (
        
        <li className="itemBlock">
        <p> Commented By {article.author}</p>
        <p>{article.votes} votes!</p>
        <p>Created At: {new Date(article.created_at).toUTCString()}</p>
        <p><small> {article.body}</small></p>
        </li>
    )
}
export default CommentCard