import React, {Component} from 'react';

const url = "http://localhost:8900/topics"
class FormsComponent extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            details:''
        }

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeDetails = this.handleChangeDetails.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName(event){
        this.setState({name:event.target.value})
    }
    handleChangeDetails(event){
        this.setState({details:event.target.value})
    }

    handleSubmit(event){
        //console.log(this.state)
        var id = Math.floor(Math.random()*1000)
        var data = {
            id:id,
            name:this.state.name,
            details:this.state.details
        }
        //alert('submited')
        console.log(data)

        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => {console.log(res)})
    }

    render(){
        return(
            <div className="panel panel-info">
                <div className="panel-heading">
                    Topic Forms
                </div>
                <div className="panel-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" id="name"
                            value={this.state.name}
                            onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>Details</label>
                            <input type="text" className="form-control" id="details"
                            value={this.state.details}
                            onChange={this.handleChangeDetails}/>
                        </div>
                        <button className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Submit
                        </button>
                </div>
            </div>
        )
    }
}

export default FormsComponent