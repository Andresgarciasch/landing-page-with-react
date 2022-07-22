import React from "react";
import  NavBar from "./navbar.js";
import Footer from "./footer.js"
import Cards from "./cards.js"
import Jumbotron from "./jumbotron.js"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		
			<NavBar/>
			<Jumbotron/>
			<div className="d-flex align-content-start flex-wrap justify-content-center">
				<Cards/>
				<Cards/>
				<Cards/>
				<Cards/>
				<Cards/>
				<Cards/>
				<Cards/>
				<Cards/>
			</div>
			<Footer/>

		</>
	);
};

export default Home;
