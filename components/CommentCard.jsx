import './ItemCard.css'


const CommentCard=(props)=>{
    const {article}=props
    return (
        
        <li className="itemBlock">
        <p><large> Commented By {article.author}</large></p>
        <p>{article.votes} votes!</p>
        <p>Created At: {new Date(article.created_at).toUTCString()}</p>
        <p><small> {article.body}</small></p>
        </li>
    )
}
export default CommentCard