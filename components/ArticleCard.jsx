import './ItemCard.css'

const ArticleCard=(props)=>{
    const {article}=props
    return (
        <li className="itemBlock">
        <p>Article id: {article.article_id}</p>
        <p>Article Author: {article.author}</p>
        <p>Article Topic: {article.topic}</p>
        <p>Article Votes: {article.price}</p>
        <p>Article Title: {article.title}</p>
        <p>Article Created At: {article.created_at}</p>
        <p>Article Comment Count: {article.comment_count}</p>
        <p>Article Article Img URL: {article.article_img_url}</p>
        </li>
    )
}
export default ArticleCard