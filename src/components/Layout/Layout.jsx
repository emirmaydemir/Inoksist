import React, { Fragment } from "react";
import Whatsapp from "../UI/WhatsappButton";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Stil dosyasını import et

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <Whatsapp />
      <Footer />
      <ToastContainer /> {/* ToastContainer'ı burada ekleyin */}
    </Fragment>
  );
};

export default Layout;
