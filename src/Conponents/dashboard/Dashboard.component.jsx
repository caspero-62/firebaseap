import React from 'react';
import ProjectList from '../projects/ProjectList.conponent';
import Notifications from './Notifications.component';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ projects, auth }) => {
    return (
        !auth.uid ? (
    
            <Redirect to='/signin'/>
    
        ) : (
            
             <div className='dashboard container'>
                 <div className="row">
                     <div className="col s12 m6">
                         <ProjectList projects={projects}/>
                     </div>
                     <div className="col c12 m5 offset-m1">
                         <Notifications />
                     </div>
                 </div>
             </div>
            
        )
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(['projects'])
)(Dashboard);
