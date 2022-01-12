export const TodoItem=({title,status,id,handleDelete})=>{
  return <div style={{border:"2px solid black",width:"300px",margin:"20px",padding:"20px"}}>
   <img style={{width:"200px"}} src="https://icons-for-free.com/iconfiles/png/512/full+products+round+icon-1320165923168064523.png"></img>
  <div>Product Name={title}</div>
  <button onClick={()=>{handleDelete(id)}}>delete</button></div>;
}
