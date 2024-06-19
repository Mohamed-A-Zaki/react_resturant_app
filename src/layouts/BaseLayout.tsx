import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      <Toaster />
    </>
  );
}
