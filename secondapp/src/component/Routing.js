import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Posts from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';
import FormsComponent from './FormsComponent';
import Hooks from './Hooks';
import LifeCycle from './lifecycle'

const Routing = () => {
    return(
        <div>
        <BrowserRouter>
        <div>
            <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">Edureka</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/post">Post</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/forms">Forms</Link></li>
                        <li><Link to="/hooks">Hooks</Link></li>
                        <li><Link to="/lifeCycle">LifeCycle</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>
            </header>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post" component={Posts}></Route>
            <Route path="/post/:id" component={PostDetails}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/forms" component={FormsComponent}></Route>
            <Route path="/hooks" component={Hooks}></Route>
            <Route path="/lifeCycle" component={LifeCycle}></Route>
            
        </div>
        </BrowserRouter>
        </div>
    )
}

export default Routing