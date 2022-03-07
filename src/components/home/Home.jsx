import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import data from  "../../data/data.json";



function Home()
{
    return(
<>
<Header />
<Tours tours={data}/>
<Footer />
</>
)
}
export default Home;