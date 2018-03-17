import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component{
componentDidMount(){
    if(!this.props.post){
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
    }
}

onDelete(){
    const { id } = this.props.match.params;
    console.log(id);
    this.props.deletePost(id, () => {
        this.props.history.push('/');
    });
}
    render(){
        const {post} = this.props;
        if(!post){
            return <div>Loading...</div>
        }
        return(
            <div className="card" style={{padding:'10px'}}>
                <div className="card-body">
                <div className="card-title">{post.title}</div>
                <div className="card-text"><h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                </div>
                <div className="row" style={{marginTop:'10px'}}>
                <Link to="/" className="btn btn-primary">Go Home</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDelete.bind(this)}>Delete Post!</button>
                </div>
              </div>
            </div>
        );
    }
}

const mapStateToProps = ({posts}, ownProps) => {
   return {post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);