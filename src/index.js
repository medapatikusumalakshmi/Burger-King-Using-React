import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import data from './data';
import Cards from './Components/Cards';
import App from './App';
import Footer1 from './Components/Footer/Footer1';
import Footer2 from './Components/Footer/Footer2';
import Footer3 from './Components/Footer/Footer3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App></App>
  <div style={{display:'flex',flexWrap:'wrap',paddingLeft:"120px",paddingRight:'120px', paddingBottom:'120px'}}>
    {data.map(x=>{
      return(
        <Cards bsrc={x.bsrc} balt={x.balt} bHead={x.bHead} bcon={x.bcon} bterm={x.bterm} bbtn={x.bbtn} key={x.bHead}></Cards>
      )
    })}
  </div>
  <Footer1></Footer1>
  <Footer2></Footer2>
  <Footer3></Footer3>
  </>
);

