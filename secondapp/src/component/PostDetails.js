import React,{Component} from 'react';
const url = "http://localhost:8900/topics"


class PostDetails extends Component {
    constructor(){
        super();

        this.state={
            details:''
        }
    }

    componentDidMount(){
        fetch(`${url}/${this.props.match.params.id}`,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({details:data})
        })
    }
    
    render(){
        return(
            <div className="panel panel-primary">
               <div className="panel-heading">
                   <h2>Post Details</h2>
               </div>
               <div className="panel-body">
                <h1>Details for {this.state.details.name}</h1>
                {this.state.details.details}
               </div>
            </div>
        )
    }
    
}

export default PostDetails;