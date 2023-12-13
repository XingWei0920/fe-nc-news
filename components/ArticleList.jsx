import {useContext, useEffect, useState} from "react"
import ArticleCard from "./ArticleCard"
import { ArticlesContext } from "../contexts/ArticlesContext"
import {getArticles} from "../utils/api"


const ArticleList=()=>{
    //const {articles}=useContext(ArticlesContext)
    const [articles, setArticles]=useState([])
    const [isLoading, setIsLoading]=useState(true)
   

    useEffect(()=>{
        getArticles()
          .then((response)=>{ 
            setArticles(response)
            setIsLoading(false)
            })
          },[])

 if (isLoading)
 {
    return <h2>Loading ...</h2>
 }
 
    return (
        <div>
        <h2>All Article Lists</h2>    
        <ul>
            {articles.map((article)=>
            {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
        </div>
    )
 }
 
 export default ArticleList