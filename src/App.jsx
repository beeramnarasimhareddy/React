// import React from 'react'
// import {BrowserRouter as Router,Routes,Route, Outlet, NavLink} from 'react-router-dom'
// import Services from './components/Services'
// import Home from './components/Home'
// import Contact from './components/Contact'
// import Navlink from './components/Navlink'
// import About from './components/About'

// const App = () => {

  
//   return (
//       <Router>
//         <>
//         <Routes>
//           <Route path='/' element={<Navlink/>}>

//           <Route index element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/services' element={<Services/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//             </Route>
          

//         </Routes>
//         </>
       
//       </Router>
//   )
// }

// export default App




import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Home from './components/Home';
import Contact from './components/Contact';
import Navlink from './components/Navlink';
import About from './components/About';
import ServiceDetails from './components/ServiceDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the API data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Navlink />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About users={users} />} />
            <Route path="/services" element={<Services />}>
          <Route path=":serviceId" element={<ServiceDetails />} />
        </Route>
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
};

export default App;
