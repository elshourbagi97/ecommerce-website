import NavBar from "../navBar/navbar";
import Footer from "../footer/footer";
import { useState,useEffect } from "react";
import Item from "../item/item";
import {Navigate, useNavigate} from "react-router-dom";
import "../style/Products.scss"

export default function Products(props){
    const navigate = useNavigate();
    // console.log("from nav",props.state1)
    const handelHome=()=>{
        navigate("/",{
          state:props.state1
        })
    }
    console.log("rom product",props)
    const [state, setState] = useState([]);
    const [Cart,setCart]=useState(props.state1?.cart || []);

    useEffect(() => {
      fetch("./furniture.json")
        .then((response) => response.json())
        .then((data) => {
          setState(data.products);
        });
    }, []);

  

    return(
      <div className="ProductContent">
         <div className="navBar">
                <NavBar number={props.state1}/>
              </div>
         <div className="header">
            <h3>Products</h3>
            <ul>
                <li><a onClick={handelHome} title="Home">Home </a></li>
                <li> &#60;</li>
                <li><a> Shop</a></li>
            </ul>
         </div>
         <div className="main">
         {state.map((item,index)=>
            { return(<Item key={index} thumbnail={item.image}
               title={item.title} 
               price={item.price} 
               description={item.description}
               rate={item.rating}
               category={item.category}
               numberOfCart = { typeof props.state1 === "object" ? props.state1?.count || 0 : props.state1 || 0}
               cart={Cart}
               />)
            })}
         </div>
        <div className="footer">
                      <Footer/>
             </div>

      </div>
    )
}