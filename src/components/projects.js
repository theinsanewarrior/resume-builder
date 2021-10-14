import "../styles/projects.css"

function ProjectDetails(props){
    return(
        <div className="projects">
            <h4>Projects {props.counter}</h4>
            <input
                placeholder="Title"
                value={props.projectDetails.titl}
                onChange={props.titlHandler}
            />
            <input 
                placeholder="Description"
                value={props.projectDetails.describe}
                onChange={props.describeHandler} 
            />
        </div>
    )
}
export default ProjectDetails