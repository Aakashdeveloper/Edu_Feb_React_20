import React,{Component} from 'react';
import  DisplayPost from './DisplayPost';
const url = "http://localhost:8900/topics"

class Posts extends Component {

    constructor(){
        super()

        this.state={
            topics:''
        }
    }

    render(){
        return(
           <DisplayPost topicData={this.state.topics}></DisplayPost>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => 
        {
           this.setState({topics:data}) 
        })
    }
    
}

export default Posts;