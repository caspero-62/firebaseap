import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../Redux/actions/projectActions';

const CreateProject = ({ auth, createProject, history }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChange = (e) => {
        e.target.id === 'title' ? (
            setTitle(e.target.value)
        ) : (
            setContent(e.target.value)
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createProject({title, content});
        history.push('/');
    }

    return (
        !auth.uid ? (
            <Redirect to='/signin'/>
        ) : (
            <div className="container">
                <form className="white" onSubmit={handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={title} onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea name="content" id="content" className="materialize-textarea" value={content} onChange={handleChange}></textarea>
                    </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Create</button>
                        </div>
                </form>
            </div>
        )

    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
