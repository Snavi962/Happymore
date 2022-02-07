import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import SmallCard from '../components/SmallCard';

 export default function Home ({exploreData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Header></Header>
      <Banner></Banner>
      
      <main className="max-w-7xl mx-auto px-8 sm-px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5"> Explore Nearby </h2>

          
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map(({img, distance, location }) => {
            return (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location} />
            );
          })}
         </div>
        </section>
        <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Best Booking"
        description="Wishlist curated by Happyhours."
        buttonText="Get Booking"/>
      </main>
        <Footer /> 
      
    </div>
  )
}
export async function getStaticProps() {
  const exploreData = await fetch ("https://links.papareact.com/pyp"). then(
     (res) => res.json()
  );
  return {
    props:{
      exploreData
    }
  };
}