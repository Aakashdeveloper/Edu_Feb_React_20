import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import {Query } from 'react-apollo';

const client = new ApolloClient({
    uri:`http://localhost:8600/graphql`
});

const GET_PRODUCTS = gql`
query product($id: Int)
{
    product(id:$id){
        name,
        price,
        rating,
        category
    }
}
`
class ProductList extends Component{
    constructor(props){
        super(props)

        this.state={
            id:4
        }
    }

    render(){
        return(
            <div>
                <h1>React With GraphQL</h1>
                <Query query={GET_PRODUCTS} client={client} variables={{id:this.state.id}}>
                    {({loading,error,data}) => {
                        if(loading) return <p>loading.....</p>
                        if(error) return <h2>Error...</h2>
                        return(
                            <div>
                                <h3>GraphQL</h3>
                                <h3>{data.product.price}</h3>
                                <h3>{data.product.name}</h3>
                                <h3>{data.product.rating}</h3>
                                <h3>{data.product.category}</h3>
                            </div>
                        )
                    }}

                </Query>
            </div>
        )
    }
}

ReactDOM.render(<ProductList />, document.getElementById('root'));

