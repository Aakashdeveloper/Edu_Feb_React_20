import React, {Component} from 'react';
import Header from './Header'
import NewsDetails from './NewsDetails';
import JSON from '../db.json'

class Home extends  Component {

    constructor(){
        super()

        this.state= {
            news: JSON
        }
    }

    filterNew(keyword){
        console.log(keyword)
    }

    render(){
        //console.log(this.state.news)
        return(
            <React.Fragment>
                <Header newsSearch={(userInput) => this.filterNew(userInput)}/>
                <NewsDetails newsdata={this.state.news}/>
            </React.Fragment>
    
        )
    }
}

export default Home;

//<a href=""></a>
//<img src=""/>
