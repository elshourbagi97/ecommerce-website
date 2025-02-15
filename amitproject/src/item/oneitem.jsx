import { useEffect, useRef, useState } from "react";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import "../style/oneItem.scss";

export default function ItemOne(props) {
console.log("from oneitem",props)
const [count, setCount] = useState( Number(props.state.numberOfCart) );
const [cart, setCart] = useState(props.state?.cart||[]);

const navigate = useNavigate();
const handelBack = () => {
  navigate("/products", {
    state: {
      ...props,
      count:count,
      cart:cart
    }
    });
  };

  // console.log("fromone itemone",props,count)
  const handelCount = () => {
    setCount(prevCount => prevCount + 1);
    setCart(prevCart => [...prevCart, props.state])
    console.log("itemCart",cart)
  };
  return (
    <div className="itemContent">
      <div className="upperPart">
        <div onClick={handelBack}>
          <i className="fa-solid fa-arrow-left"></i>
          <p>Back</p>
        </div>
        <span>
          <i  className="fa-solid fa-bag-shopping"></i>
         {count > 0 && (<p >{count}</p>)}
        </span>
      </div>
      <div className="middlePart">
        <div>
          <p>{props.state.category}</p>
          <h2>{props.state.title}</h2>
          <p className="price">Price is :</p>
          <h2>{props.state.price}</h2>
          <h3 title={`The rate is ${props.state.rate}`}>
            Rating is :<br/> 
           {[...Array(5)].map((_,index)=>{
            let fullStar = Math.floor(props.state.rate)
            let halfStar = props.state.rate-fullStar >= 0.1
            if(index<fullStar){
              return(<i key={index} className="fa-solid fa-star full"></i>)
            }
            else if (index === fullStar && halfStar){
              return(<i key={index} className="fa-regular fa-star-half-stroke half"></i>)
            }else{
              return(<i key={index} className="fa-regular fa-star empty"></i>)
            }
           })} 
          </h3>
        </div>
        <img src={props.state.image} title={props.state.title} />
      </div>
      <div className="lowerPart">
        <button onClick={handelCount}> add to cart</button>
      </div>
      <div className="footerItem">
        <Footer />
      </div>
    </div>
  );
}
