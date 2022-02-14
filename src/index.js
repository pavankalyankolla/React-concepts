import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// need to import
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    {/* <Home /> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/learn" element={<Learn/>} >
        <Route path="courses" element={<Courses/>}>
          <Route path=":courseid" element={<CourseId/>}/>
        </Route>
        <Route path="bundles" element={<Bundles/>}/>

      </Route>
      <Route path="/myapps" element={<Navigate replace to="/learn"/>} />
      <Route path="/dashboard" element={<DashBoard/>} />


    </Routes>
  </Router>,
  document.getElementById('root')
);

function Home(){
  return(
    <div>
      <h1>Home Route</h1>
    </div>
  )
}

function Learn(){
  return(
    <div>
      <h1>Learn</h1>
      <h4>React Route session</h4>
      <Link className="button" to="/learn/courses">courses</Link> 
      <Link className="button" to="/learn/bundles">Bundle</Link>

    <Outlet/>
    </div>
  )
}

function Courses(){
  const list = ['React','Angular','Vue']
  const randomName = list[Math.floor(Math.random() * list.length)]
  return(
    <div>
      <h1>Courses Route</h1>

      
      <p>More Test</p>
      <NavLink to={`/learn/courses/${randomName}`}>{randomName}</NavLink>
      <Outlet/>
    </div>
  )
}

function Bundles(){
  return(
    <div>
      <h1>Bundles Route</h1>
    </div>
  )
}

function CourseId(){
  const navigate = useNavigate()
  const {courseid} = useParams()
  return(
    <div>
      <h1>URL params is : {courseid}</h1>
      <button onClick={() =>{
        navigate("/dashboard",{state:"Learn Frontend technologies"})
      }}>View In Detail</button>
    </div>
  )
}


function DashBoard(){
  const location = useLocation()
  return(
    <div>
      <p>Info that i got <b>{location.state}</b></p >
    </div>
  )
}
