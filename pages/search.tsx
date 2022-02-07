import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {format} from "date-fns";
import InfoCard from '../components/InfoCard';
function Search({searchResults}) {
    const router = useRouter();
    const{location,newdate,noOfGuest} = router.query;
 
  return( <div>
      <Header />
        <main className="flex">
            <section className="flex-grow pt-14 px-6">
                <p className="text-xs"> 69+ restaurents for {noOfGuest} Guest </p>
                <h1 className="text-3xl font-semibold mt-2 mb-6"> reserves in {location} </h1>

                <div className="hidden  lg-inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
                    <p className="button"> Cancellation Flexibility  </p>
                    <p className="button"> Types of Stars </p>
                    <p className="button"> Cusines </p>

                </div>
                <div className="flex flex-col">
                {searchResults.map(item => (
                    <InfoCard
                    img={item.img}
                    location={item.location}
                    title={item.title}
                    description={item.description}
                    Star={item.Star}
                    price={item.price}
                    total={item.total}
                    key={item.img} />
                ))};
                </div>
                
            </section>
        </main>
      <Footer />
  </div>
    
    )
}

export default Search;
export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz").then(res =>res.json());

    return{
        props:{
            searchResults: searchResults,
        }
    }

}