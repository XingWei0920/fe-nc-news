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

export const getCommentsOfAnArticle=(article_id)=>{
    return axios.get(`https://xing-wei-app.onrender.com/api/articles/${article_id}/comments`)
    .then(({data})=>{
    return data.comments})
}

export const postComment=(newComment,article_id)=>{
    return axios.post(`https://xing-wei-app.onrender.com/api/articles/${article_id}/comments`, newComment)
    .then(({data})=>{
        console.log(data)
    return data.comment})

}
