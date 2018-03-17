import _ from 'lodash';
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

const FIELDS = [
{label: "Title", name: "title"},
{label: "Categories", name: "categories"},
{label: "Blog Post", name: "content"}
];

class PostsNew extends Component{

renderFields({input, meta, label, name}){
    const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;
    return (
        <div className={className}>
        <label>{label}</label>
         <input
           type="text"
           name={name}
           className="form-control"
            {...input}
         />
         <div className="text-help">
         {meta.touched ? meta.error : ''}
         </div>
        </div>
    )
}

renderFieldVals(){
    return _.map(FIELDS, ({label, name}) => {
       return <Field key={name} label={label} name={name} component={this.renderFields} />
    });
}

onSubmit(values){

   this.props.createPost(values, () => {
    this.props.history.push('/');
   });
}

    render(){
        const {handleSubmit} =  this.props;
        return(
            <div className="container">
               <form className="form-control" onSubmit={handleSubmit(this.onSubmit.bind(this))}>                
                {this.renderFieldVals()}
                <button type="submit" className="btn btn-danger">Post</button>
                <Link to="/" className="btn btn-primary" style={{marginLeft: '10px'}}>Cancel</Link>
               </form> 
            </div>
        )
    }
}

const validate = ({title, categories, content}) => {
    const errors = {};

        if(!title){
            errors.title = `Enter a Title`;
          }

          if(!categories){
            errors.categories = `Enter a Category`;
          }

          if(!content){
            errors.blogPost= `Enter some content`;
          }
          return errors;

}

export default reduxForm({
    validate,
    form: 'newPostsForm'
})(
    connect(null, { createPost })(PostsNew)
);