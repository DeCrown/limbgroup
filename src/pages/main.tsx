import React from 'react';
import Header from "../components/header/Header";
import About from "../components/about/About";
import CountPrice from "../components/countPrice/CountPrice";
import Clients from "../components/clients/Clients";
import Projects from "../components/projects/Projects";
import RelaxZone from "../components/relaxZone/RelaxZone";
import Footer from "../components/footer/Footer";

const Main = () => {
    return (
        <div>
            <Header />
            <About />
            <CountPrice />
            <Clients />
            <Projects />
            <RelaxZone />
            <Footer />
        </div>
    );
};

export default Main;
