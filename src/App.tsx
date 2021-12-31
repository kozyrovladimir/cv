import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills.";
import RemoteWork from "./components/remoteWork/RemoteWork";
import ContactsForm from "./components/contaсtsForm/ContactsForm";
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <RemoteWork/>
            <ContactsForm/>
            <Footer/>
        </div>
    );
}

export default App;
