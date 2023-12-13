import './ItemCard.css'
import {Link} from 'react-router-dom'

const ArticleCard=(props)=>{
    const {article}=props
    return (
        <li className="itemBlock">
        <Link to={`/api/users/${article.article_id}`}>
            Details
            </Link>
        <p>Article Author: {article.author}</p>
        <p>Article Topic: {article.topic}</p>
        <p>Article Votes: {article.votes}</p>
        <p>Article Title: {article.title}</p>
        <p>Article Created At: {new Date(article.created_at).toUTCString()}</p>
        <p>Article Comment Count: {article.comment_count}</p>
        <img src={article.article_img_url} alt="image" width="100" height="100"></img>
        </li>
    )
}
export default ArticleCard