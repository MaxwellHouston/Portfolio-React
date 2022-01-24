import React from "react";
import '../App.css';
import projectData from "../Utility/projectData";

const ProjectTable = ({toggleArticle, moreArticle}) => {

    const highlight = (project) => {
        if(project === moreArticle.name){
            return {
                color: 'red'
            }
        } else {
            return null;
        }
    };

    const populateTable = () => {
        let projectArray = [];
        for( const project in projectData.more) {
            projectArray.push(
                <tr key={projectData.more[project].name}>
                    <td>
                    <button value={project} onClick={handleClick} className="smaller" id={project} style={highlight(projectData.more[project].name)}>
                    {projectData.more[project].name}
                    </button>
                    </td>
                    <td className="smaller">{projectData.more[project].github}</td>
                    <td>{projectData.more[project].html ? String.fromCharCode(215) : '-'}</td>
                    <td>{projectData.more[project].css ? String.fromCharCode(215) : '-'}</td>
                    <td>{projectData.more[project].js ? String.fromCharCode(215) : '-'}</td>
                </tr>
            );
       }
       return projectArray;
    };

    const handleClick = ({target}) => {
        let newProject = projectData.more[target.value];
        toggleArticle(newProject);
    };

    return(
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Project Name</th>
                        <th scope="col">Git Hub</th>
                        <th scope="col">HTML</th>
                        <th scope="col">CSS</th>
                        <th scope="col">JS</th>
                    </tr>
                </thead>
                <tbody>
                    {populateTable()}
                </tbody>
                <tfoot className="smaller">
                    <tr>
                        <td colSpan="5">Click project to display in Code Viewer</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default ProjectTable;