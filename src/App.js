// import React,{useEffect} from "react";
// import './App.css';
// import BookInfo from "./components/BookInfo";
// import Menu from "./components/Menu"
// import Footer from "./components/Footer";
// import BooksList from "./components/BooksList";
// import Home from "./components/Home";
// import {AuthProvider} from "./components/Auth";



// const App = () => {
//
//     return(
//     <>
//         <Home/>
//
//     </>
//     )
// }
//
// export default App;
// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import { AuthProvider } from "./components/Auth";
// import PrivateRoute from "./components/PrivateRoute";
// import { HashRouter } from 'react-router-dom';


// const App = () => {
//     return (
//         <AuthProvider>
//             <Router>
//                 <div>
//                     <PrivateRoute exact path="/" component={Home} />
//                     <Route exact path="/login.scss" component={Login} />
//                     <Route exact path="/signup" component={SignUp} />
//                 </div>
//             </Router>
//         </AuthProvider>
//     );
// };
// import React from "react";
// import "./App.css";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import { AuthProvider } from "./components/Auth";
// import PrivateRoute from "./components/PrivateRoute";
// import { HashRouter, BrowserRouter,Routes, Route } from 'react-router-dom';
// const App = () => {
//     return (
//         <AuthProvider>
//             <BrowserRouter>
//                 <Routes>
//                     <div>
//                         <PrivateRoute path="/" element={Home} />
//                         <Route exact path="/login.scss" element={Login} />
//                         <Route exact path="/signup" element={SignUp} />
//                     </div>
//                 </Routes>
//             </BrowserRouter>
//         </AuthProvider>
//     );
// };
// export default App;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
