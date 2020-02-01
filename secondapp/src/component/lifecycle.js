//1.) Get Default State
//2.) Set Initail state
//3.) Before get Created
//4.) Render JSX
//5.) After Get Created
//6.) When leaving Context
import React, {Component} from 'react';

class LifeCycle extends Component {
    //1.) Get Default State
    constructor(props){
        super(props)

       //2.) Set Initail state
        this.state={
            title:'Learning flow'
        }

        console.log(">>>>> Inside constructor")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>shouldComponentUpdate",nextState.title)
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    componentWillUpdate(){
        console.log(">>>>> Inside componentWillUpdate");
    }

    componentDidUpdate(){
        console.log(">>>>> Inside componentDidUpdate");
    }


    //3.) Before get Created
    componentWillMount(){
        console.log(">>>>> Inside componentWillMount")
    }


    //4.) Render JSX
    render(){
        console.log(">>>>> Inside render")
        return(
            <div>
                <h1>LifeCycle Hooks</h1>
                <hr/>
                <h2>{this.state.title}</h2>
                <div className="btn btn-danger"
                onClick={() => {this.setState({title:'Something else'})}}>
                    Check Cycle
                </div>
            </div>
            
        )
    }

    //5.) After Get Created
    componentDidMount(){
        console.log(">>>>> Inside componentDidMount")
    }

    //6.) When leaving Context
    componentWillUnmount(){
        alert('leaving the pae')
    }
}

export default LifeCycle;