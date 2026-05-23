import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
import LenisScroll from "@/components/lenis";
import ScrollToTop from "@/components/ScrollToTop";

function Layout() {


  return (
    <>


      <LenisScroll />
      <ScrollToTop />

      <Navbar />

      <div className="min-h-screen">
        <Outlet />
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Layout;