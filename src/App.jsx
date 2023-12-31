import Header from '../components/Header'
import ArticleList from '../components/ArticleList'
import { Routes, Route } from 'react-router-dom';
import Menu from '../components/Menu'
import './App.css'
import Home from '../components/Home';
import ArticleProfile from '../components/ArticleProfile'
import Error from '../components/Error';
import { ArticlesProvider } from '../contexts/ArticlesContext';
function App() {
  

  return (
    <>
    <ArticlesProvider>
    <Menu/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/api/articles" element={<ArticleList/>} /> 
      <Route path="/api/articles/:article_id" element={<ArticleProfile/>} />
      <Route path="/*" element={<Error message="Route not found!"/>} /> 
    </Routes>
    </ArticlesProvider>
     
    </>
  )
}

export default App
