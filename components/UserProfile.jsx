import {useParams} from "react-router-dom"
import {useState, useEffect, useContext} from "react"
import { ArticlesContext } from "../contexts/ArticlesContext"
import { postItem, orderItem, deleteItem } from "../utils/api"
import ArticleCard from "./ArticleCard"


const UserProfile=()=>{
    const {items,setItems}=useContext(ItemsContext)

    const {username}=useParams()
    const [user, setUser]=useState([])
    const [orderItems, setOrderItems]=useState([])
    const [isLoading, setIsLoading]=useState(true)
 
    useEffect(()=>{
        fetch(`https://xing-wei-app.onrender.com/api/articles/${username}`)
        .then((response)=>{ return response.json() })
        .then((data)=>{
            console.log(data)
            setUser(data.user)
            setIsLoading(false)
        })
     },[])

     if (isLoading)
     {
        return <h2>Loading ...</h2>
     }

   

    return (
        <>
        <h2 className="itemBlock">
        <p>User name: {user.username}</p>
        <p>User kudos: {user.kudos}</p>
        </h2>
        <h2>Order List</h2>
        <ul>
            {orderItems.map((orderItem)=>
            {
                return <ItemCard item={orderItem} key={orderItem.item_id}/>
            })}
        </ul>
<h3>Order an Item</h3>
<form class="account-form" id="form" onSubmit={handleSubmitOrder}>
    <p>
<label class="label" for="item_name">Item_id:</label>
<input
  type="text"  class="order"  placeholder="Item_id"  id="item_id"  name="item_id"
/>
</p>
<button class="form-button">Order An Item</button>
</form>

<h3>Delete an Item</h3>
<form class="account-form" id="form" onSubmit={handleDeleteOrder}>
    <p>
<label class="label" for="item_name">Item_id:</label>
<input
  type="text"  class="delete"  placeholder="Item_id"  id="item_id"  name="item_id"
/>
</p>
<button class="form-button">Delete An Item</button>
</form>


        <h3>Add an Item</h3>
<form class="account-form" id="form" onSubmit={handleSubmit}>
    <p>
<label class="label" for="item_name">Title:</label>
<input
  type="text"  class="input"  placeholder="Item_name"  id="item_name"  name="item_name"
/>
</p>
<p>
<label class="label" for="description">Description:</label>
<input
  type="text"  class="input"  placeholder="Description"  id="description"  name="description"
/>
</p>
<p>
<label class="label" for="category_name">Category:</label>
<input
  type="text"  class="input"  placeholder="Category"  id="category_name"  name="category_name"
/>
</p>
<p>
<label class="label" for="img_url">Image URL:</label>
<input
  type="text"  class="input"  placeholder="Img_URL"  id="img_url"  name="img_url"
/>
</p>
<p>
<label class="label" for="price">Cost:</label>
<input
  type="text"  class="input"  placeholder="Cost"  id="price"  name="price"
/>
</p>
<button class="form-button">Add Item</button>
</form>
  </>
    )
}
export default UserProfile