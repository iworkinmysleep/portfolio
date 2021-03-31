import React, {useState} from "react";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import About from "../components/About";
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import { homeObjOne, homeObjTwo } from "../components/About/Data";
import Contact from "../components/Contact";
import Resume from "../components/Resume";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }


	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			<Navbar toggle={toggle}/>
			<Hero/>
			<About {...homeObjOne}/>
			<Projects/>
			<Resume/>
			<Contact {...homeObjTwo}/>
			<Footer/>
		</>
	);
};

export default Home;
