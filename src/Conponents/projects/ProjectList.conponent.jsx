import React from 'react';
import { Link } from 'react-router-dom';
import ProjectSummary from './ProjectSummary.component';

const ProjectList = ({projects}) => {
    return (
        <div className='section project-list'>

          {
            projects && projects.map(project => {
              return (
                <Link to={`/project/${project.id}`} key={project.id}>
                  <ProjectSummary  
                    title={project.title} 
                    content={project.content}
                    authorFirstName={project.authorFirstName}
                    authorLastName={project.authorLastName}
                    createdAt={project.createdAt}
                  />
                </Link>
              )
            })
          }

        </div>
    );
}

export default ProjectList;
