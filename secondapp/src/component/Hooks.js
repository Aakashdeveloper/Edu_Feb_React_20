import React,{useState, useEffect} from 'react';

const url = "http://localhost:8900/topics";

function MyComponent(){
    const [title] = useState('My Hooks Page');
    const [Details] = useState('Erlang is simply dummy text of the printing and typesetting industry')
    const [count, setCount] = useState()
    const [product, setProduct] = useState(0)



    useEffect(() => {

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
    },[product])


    return(
        <div className="panel panel-warning">
            <div className="panel-heading">
               <h2>{title}</h2>
            </div>
            <div className="panel-body">
                <p>{Details}</p>
                <h2>Counter value is {count}</h2>
                <div className="btn btn-success"
                onClick={() => {setCount(count+1)}}>Click me</div>
            </div>
           
        </div>
    )
}

export default MyComponent;