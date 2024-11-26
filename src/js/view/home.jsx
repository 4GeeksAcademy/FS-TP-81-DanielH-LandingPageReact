import React from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Card from "../component/card";
import Footer from "../component/footer";

const Home = () => {
	return (
		<>
			<Navbar />

			<div className=" container p-3">

				<Jumbotron />
				<div className="d-flex justify-content-center ">
					<div className="row ">
						<div className="col-xl-3 col-md-6 col-sm-12">
							<Card />
						</div>
						<div className="col-xl-3 col-md-6 col-sm-12">
							<Card />
						</div>
						<div className="col-xl-3 col-md-6 col-sm-12">
							<Card />
						</div>
						<div className="col-xl-3 col-md-6 col-sm-12">

							<Card />


						</div>

					</div>
				</div>

			</div>
				<Footer/>s
		</>

	);
};

export default Home;
