const Error = (props)=>{
   const {message}=props
    return (
        <div>
            <h2>An Error!</h2>
            <h3>{message}</h3>
        </div>
    )
};

export default Error