import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    constructor(){
        super()

        this.state={
            title:'React App',
            userText:'User Search Text'
        }
    }
    inputChanges(event){
        // console.log(event.target.value)
        this.setState({userText:event.target.value?event.target.value:"User Search Text"});
        this.props.newsSearch(this.state.userText);
    }

    render(){
        return(
            <header>
               <div className="logo" onClick={()=>{ console.log('clicked')}}>
                   {this.state.title}
               </div>
               <center>
                <input onChange={this.inputChanges.bind(this)}/>
                <p>{this.state.userText}</p>
               </center>
               <hr/>
            </header>
        )
    }
    
}

export default Header;