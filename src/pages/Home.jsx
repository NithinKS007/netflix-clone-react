import React,{Suspense,lazy} from "react"

const NavBar = lazy(() => import('../components/NavBar'));
const Banner = lazy(() => import('../components/Banner'));
const Footer = lazy(() => import('../components/Footer'))

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Banner />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home
