import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from '../container/Home';
import Header from '../component/Header';
import Footer from '../component/Footer';
import NewsDetails from '../container/NewsDetails';


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/details/:id" component={NewsDetails}></Route>
                <hr/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;