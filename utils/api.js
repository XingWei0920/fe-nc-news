import axios from "axios"

const NCAPI= axios.create({baseURL:"https://xing-wei-app.onrender.com/"})

export const getArticle=(article_id)=>{
    return axios.get(`https://xing-wei-app.onrender.com/api/articles/${article_id}`)
    .then(({data})=>{
    return data.article})
}

export const getArticles=()=>{
    return axios.get(`https://xing-wei-app.onrender.com/api/articles/`)
    .then(({data})=>{
    return data.articles})
}

export const updateArticleById=(article_id, newVote)=>{
    return axios.patch(`https://xing-wei-app.onrender.com/api/articles/${article_id}`, newVote)
    .then(({data})=>{
        return data.article})
    .catch()

}