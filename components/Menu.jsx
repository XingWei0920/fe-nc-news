import "./Menu.css"
const Menu=()=>{
    return (
        <ul className="nav">
            <p><a href="/">Home</a></p>
            <p><a href="/api/articles">Articles</a></p>
            <p><a href="/api/topics">Topics</a></p>
        </ul>
    )
}

export default Menu