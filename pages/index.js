import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";

export default function Home() {
  return (
    <div className="px-12">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header start */}
      <Header>
      </Header>
      {/* Header end */}
      {/* Navbar start */}
      <Navbar></Navbar>
      {/* Navbar end */}
      {/* Results end */}
      <Results></Results>
      {/* Results end */}
    </div>
  );
}
