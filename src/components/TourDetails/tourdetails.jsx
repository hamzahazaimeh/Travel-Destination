import React from "react";
import Header from '../header/Header';
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const TourDetails = ({ data }) => {
  let { id } = useParams();
  let city = data.filter(city => city.id === id);

  const [seeMore,setSeeMore]=useState(false);
  let seeMoreHandle =()=>{
     setSeeMore(!seeMore);
  }
  return (
    <>
      <Header />
      <article>
        <div>
          <h1> {city[0].name} </h1>
          <p> 
           {seeMore ? city[0].info : `${city[0].info.slice(0,100)}.............`} 
            
          <button onClick={()=>seeMoreHandle()}>{seeMore? "See Less" : "see More"}</button>
          </p>

          <img src={city[0].img} alt=""></img>
        </div>
      </article>
      <Footer />
    </>

  )
}
export default TourDetails;