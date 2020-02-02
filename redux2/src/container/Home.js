import React,{Component} from 'react';
import { connect } from 'react-redux';
import { latestNews,articleNews,galleryNews } from '../actions';
import PropTypes from 'prop-types'

import LatestNews from '../component/Home/LatestNews';
import ArticlesNews from '../component/Home/ArticlesNews';
import GalleryNews from '../component/Home/GalleryNews';


class Home extends Component {
    componentDidMount(){
        this.props.dispatch(latestNews());
        this.props.dispatch(articleNews());
        this.props.dispatch(galleryNews());
    }


    render(){
        return(
            <div>
                <LatestNews latData={this.props.artilces.latestdata}></LatestNews>
                <ArticlesNews artData={this.props.artilces.articledata}></ArticlesNews>
                <GalleryNews galData={this.props.gallery.galleryData}></GalleryNews>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        artilces: state.articles,
        gallery: state.gallery
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}


export default connect(mapStateToProps)(Home);