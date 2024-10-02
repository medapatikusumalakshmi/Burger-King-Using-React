import { Component } from "react";

export default class Footer1 extends Component{
    render(){
        return(
            <>
            <div id="sec2">
                <div id="sec21">
                <img alt='mobile' src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=1125&q=80&fit=max&auto=format"></img>
                </div>
                <div id="sec22">
                <h1 style={{fontWeight:"bold",fontSize:"3rem",marginBottom:"10px"}}>Save$$$<br></br>With offers on demand</h1>
                <img src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg' style={{height:"50px",width:"160px",marginBottom:"10px"}}></img>
                <img src='https://w7.pngwing.com/pngs/462/120/png-transparent-iphone-google-play-android-get-started-now-button-electronics-text-logo-thumbnail.png' style={{height:"50px",width:"160px",marginBottom:"10px"}}></img>
                <p style={{fontWeight:'bold'}}>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
                </div>
            </div>
            </>
        )
    }
}