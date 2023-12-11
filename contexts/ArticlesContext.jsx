import { createContext, useState, useEffect} from "react";

export const ArticlesContext=createContext()

export const ArticlesProvider=(props)=>{
    const [articles, setArticles]=useState([])
    useEffect(()=>{
        fetch(`https://xing-wei-app.onrender.com/api/articles`)
        .then((response)=>{ return response.json() })
        .then((data)=>{
            
            setArticles(data.articles)
        })
    },[])

    return(
    <ArticlesContext.Provider value={{articles, setArticles}}>
    {props.children}
    </ArticlesContext.Provider>)
}

