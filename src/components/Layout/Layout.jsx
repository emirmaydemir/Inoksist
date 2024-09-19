import React, { Fragment } from "react";
import Whatsapp from "../UI/WhatsappButton";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <Whatsapp />
      <Footer />
    </Fragment>
  );
};

export default Layout;
