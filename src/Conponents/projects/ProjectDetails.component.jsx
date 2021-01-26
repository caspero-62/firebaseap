import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = ({ auth, project }) => {
    return (
        !auth.uid ? (
            <Redirect to='/signin'/>
        ) : (
            project ? (
            
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{ project.title }</span>
                            <p>{ project.content }</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
                            <div>{moment(project.createdAt.toDate()).calendar()}</div>
                        </div>
                    </div>
                </div>
                 
            ) : (
        
                <div className='container center'>Loading Project...</div>
            
            )
        )
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;

    const projects = state.firestore.ordered.projects;

    const project = projects ? projects.filter( (project) => {
        return id === project.id;
    })[0] : null ;

    return {
        project: project,
        auth: state.firebase.auth
    }
} 

export default compose(
    connect(mapStateToProps),
    firestoreConnect(['projects'])
)(ProjectDetails);
