import React from "react";
import  NavBar from "./navbar.js";
import Footer from "./footer.js"
import Cards from "./cards"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		
			<NavBar/>
			<Cards/>
			
			<Footer/>

		</>
	);
};

export default Home;
