import React, {useState} from "react";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import About from "../components/About";
import { homeObjOne } from "../components/About/Data";

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
		</>
	);
};

export default Home;
