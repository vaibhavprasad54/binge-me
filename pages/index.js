import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
// import "tailwindcss/tailwind.css";

export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Binge Me!</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

// SERVER SIDE RENDERING ( NEXTJS )
//This gets executed befor the jsx part. ( This is the server part )
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(                                          //Fetching the data from the server using API.
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url               // Fetching using genre url
    }`
  ).then((res) => res.json()); 

  return {                                             // Passing info to the component using props
    props: {
      results: request.results,
    }
  }

}
