import React, {Fragment} from 'react';
import Routes from "./components/common/Routes";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = () => (
    <Fragment>
        <Header/>
        <Routes/>
        <Footer/>
    </Fragment>
);

export default App;
