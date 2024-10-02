import { Component } from "react";

export default class Backgrnd extends Component{
   render(){
    return(
        <>
        <div id="sec1">
            <div id="sec11">
              <h1><b>Start your<br></br>BK® order</b>.</h1>
              <button id="btn1"><i class="fa-solid fa-bag-shopping"></i>  Order Pickup</button>
              <button id="btn2"><i class="fa-solid fa-motorcycle"></i>  Order Delivery</button>
            </div>
            <div id="sec12">
            <img alt="gif" src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/abe90c6f781580dcf7622b9497663d510c3398d5-600x338.gif?w=1125&q=90&fit=max&auto=format "></img>
            </div>
        </div>
        </>
    )
   }
}