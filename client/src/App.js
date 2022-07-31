import React from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import RegisterUser from "./components/Register/RegisterUser";
import RegisterAdmin from "./components/Register/RegisterAdmin";
import Header from "./components/Header/header";


//   const [data,setData]=React.useState(null);
//   React.useEffect(() => {
//     fetch("./api")
//     .then((res) => res.json())
//     .then((data) => setData(data.message));
//   },[]);

// <BrowserRouter>
//     <Header/>
//     <Routes>
//         <Route path="/" component={Login} exact />
//         <Route path="/login" component={() => <Login/>} />
//         <Route path="/registerUser" component={RegisterUser} exact/>
//         <Route path="/registerAdmin" component={RegisterAdmin} exact/> 
//     </Routes>
    
// </BrowserRouter>


const App = () => (

    <Login/>
)

// function App(){
//   return(
//   );
// }

export default App;
