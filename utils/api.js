import axios from "axios"

const NCAPI= axios.create({baseURL:"https://xing-wei-app.onrender.com/"})

export const getArticle=(article_id)=>{
    return axios.get(`https://xing-wei-app.onrender.com/api/articles/${article_id}`)
    .then(({data})=>{
    return data.article})
    .catch((err)=>{
        return Promise.reject({status: err.response.request.status, message:err.response.data.msg})
    })
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

export const getCommentsOfAnArticle=(article_id)=>{
    return axios.get(`https://xing-wei-app.onrender.com/api/articles/${article_id}/comments`)
    .then(({data})=>{
    return data.comments})
}


export const postComment=(newComment,article_id)=>{
    console.log(article_id)
    console.log(newComment)
    return axios.post(`https://xing-wei-app.onrender.com/api/articles/${article_id}/comments`, newComment)
    .then(({data})=>{
    return data.comment})
    .catch()

}

