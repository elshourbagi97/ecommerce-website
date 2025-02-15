import { useState , useEffect } from "react";
import "../style/cart.scss";
import { useNavigate } from "react-router-dom";


export default function CartProduct(item) {

  const navigate=useNavigate()
  const numCount = (item.state?.count || 0)
  const [cart, setcart] = useState(item.state?.cart || []);
  const [itemNum,setItemNum] = useState(Number(item.state?.state?.numberOfCart)||1)
  const[updateNum,setUpdateNum] = useState(numCount)
  console.log("cart",item.state.cart)
 const handelplus=()=>{
    setItemNum(itemNum+1)
 }
 const handelmins=()=>{
    if(itemNum === 1 ){
        return false
    }else{
        setItemNum(itemNum-1)
    }
        
 }
 const handelProduct=()=>{
  navigate("/products",{
    state:updateNum
  })
 }
 const handelDelete=(index)=>{
  const updatecart=cart.filter((item,ind)=>ind !== index)
  setcart(updatecart)
  setUpdateNum(updateNum-1)
 }
  return (
    <div className="cartContent">
      <div className="upperPart">
        <div onClick={handelProduct}>
          <i className="fa-solid fa-arrow-left"></i>
          <p>Back</p>
        </div>
        <span>
          <i className="fa-solid fa-bag-shopping"></i>
          {updateNum > 0 && (<p>{updateNum}</p>)}
        </span>
      </div>
      
       {cart.map((item,index)=>(
        <div className="itemCart">
          <p key={index}className="number">{index+1}</p>
         <img src={item.image||""} alt={item.title||""} />
         <div className="info">
           <h2>{item.title || ""}</h2>
           <p>{item.category|| ""}</p>
           <p className="price">{item.price||""}</p>
         </div>
         <div className="switches">
         <button className="mins" onClick={()=>handelmins()}></button>
         <p>{itemNum}</p>
         <button className="plus" onClick={handelplus}></button>
         </div>
         <button className="Xbutton" onClick={()=>handelDelete(index)}> X </button>   
      </div>
       ))}
    </div>
  );
}
