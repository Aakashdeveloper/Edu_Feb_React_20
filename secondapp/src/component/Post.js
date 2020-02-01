import React,{Component} from 'react';
import  DisplayPost from './DisplayPost';
import axios from 'axios';
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
        axios.get(url)
        .then((res) => {
            const mydata = res.data;
            this.setState({topics:mydata})
        })
    }
    
}

export default Posts;