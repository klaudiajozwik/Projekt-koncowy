import React,{useEffect} from "react";
import './App.css';
import BookInfo from "./components/BookInfo";
import Menu from "./components/Menu"
import Footer from "./components/Footer";
import BooksList from "./components/BooksList";



const App = () => {

    return(
    <>
        <Menu/>
        <BookInfo/>
        <Footer/>

    </>
    )
}

export default App;
