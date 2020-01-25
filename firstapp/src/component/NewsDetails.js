import React from 'react';

const NewsDetails = (props) => {
    console.log("In Neews>>>", props)
    const renderlist = props.newsdata.map((data,index) => {
        return(
            <div key={index}>
                <h2>{data.title}</h2>
                <div>{data.feed}</div>
            </div>
        )
    }) 

    return(
        <div>
           {renderlist}
        </div>
    )
}

export default NewsDetails;