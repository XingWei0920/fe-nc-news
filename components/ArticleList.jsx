import {useContext, useEffect, useState} from "react"
import ArticleCard from "./ArticleCard"
import { ArticlesContext } from "../contexts/ArticlesContext"



const ArticleList=()=>{
    const {articles}=useContext(ArticlesContext)
    // const [items, setItems]=useState([])
    // const [isLoading, setIsLoading]=useState(true)
    //const [searchTerm, setSearchTerm]=useState(4)

//  useEffect(()=>{
//     fetch(`https://nc-marketplace-sem-2.onrender.com/api/items?limit=10&p=1`)
//     .then((response)=>{ return response.json() })
//     .then((data)=>{
        
//         setItems(data.items)
//         setIsLoading(false)
//     })
//  },[])

//  if (isLoading)
//  {
//     return <h2>Loading ...</h2>
//  }
//  console.log(items)

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