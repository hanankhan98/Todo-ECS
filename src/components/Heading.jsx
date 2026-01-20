import React,{useState}from 'react'
import {Link, useNavigate,Outlet} from 'react-router-dom';

const Heading=({todos,setTodos})=> {
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let [status, setStatus] = useState(false);
    let [color, setColor] = useState("");
    let [option, setOption] = useState("All");

    let navigate = useNavigate()

const handleCreate = ()=>{
        let id = todos.length ? todos[todos.length -1].id+1 : 1 // fetch the last index element.id+1 or if array is empty id will be 1
        let newArray = [...todos]  // deep copy or Immutability
        newArray.push({
          id,
          name,
          description,
          status
        })
        setTodos(newArray)
        navigate('/display/all')
      }
     
       
  return <> <h1 className="text-center HeaderColor">My Todo</h1>
  
   <div className="col col-md-5 ">
  <div className="row row-cols-1 row-cols-md-3 g-4">

  <div className="col justify-content-start mt-6 text-align-center"  >
    <div className=" text-center">
      <input type="text1" placeholder="Todo Name" onChange={(e)=>{setName(e.target.value)}}></input>
    </div>
  </div>
 <br></br>
  <div className="col justify-content-end  ml-5">
    <div className=" text-center ">
  <input type="text" placeholder="Todo Description" onChange={(e)=>{setDescription(e.target.value)}}></input>
    </div>
  </div>
  <br></br>
  <div className="col">
    <div className=" text-center">
      <button type="submit "onClick={()=>{handleCreate()}} className="btn btn-primary">Add Todo</button>
    </div>
  </div>

  </div>
  {/* //topnav complete */}

  <div className="d-flex justify-content-between align-items-center p-5">
          <h2 className="fw-bold">My Todos</h2>
          <div>
            <h3>
            <div className="card-text d-flex gap-2">
              Status Filter :{" "}
              <span>
              {" "}            
                  <div className="dropdown">
                       <button className={`btn btn-success dropdown-toggle ${color}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">{option}</button>
                       <ul className="dropdown-menu">
                         <li><Link to={'all'}           className="dropdown-item" onClick={()=>{setOption("All");          setColor("bg-info");  }} >All</Link></li>
                         <li><Link to={'completed'}     className="dropdown-item" onClick={()=>{setOption("Completed");    setColor("bg-success");}} >Completed</Link></li>
                         <li><Link to={'notcompleted'}  className="dropdown-item" onClick={()=>{setOption("NotCompleted"); setColor("bg-danger"); }} >Not Completed</Link></li>                         
                       </ul>
                  </div>
              </span>
              </div>
            </h3>
          </div>
          </div>
        </div> 
        {/* //middle contents completed */}

        <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-2 g-4">
           <Outlet></Outlet>       
        </div>
        </div>
     
        </>
        

}
export default Heading