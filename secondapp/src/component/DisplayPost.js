import React from 'react';
import { Link } from 'react-router-dom'

const DisplayPost = (props) => {
    console.log(">>>>",props)
    const renderList = ({topicData}) => {
        if(topicData){
            return topicData.map((item) => {
                return(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <Link to={`/post/${item.id}`}>Details</Link>
                    </div>

                )
            })
           
        }
    }

    return(
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h2>Post</h2>
                </div>
                <div className="panel-body">
                 {renderList(props)}
                </div>
            </div>
       
    )
}

export default DisplayPost;

//function add(a,b){return a+b}
//add(1,2)