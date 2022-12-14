import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const DetailsVehiculo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	
	useEffect(() => {
		actions.getDetalleVehiculo(params.id);
		window.scrollTo(0, 0)
	}, []);

	return (
		<div className="jumbotron">

			
			{/* card */}
			<div className="card mb-3" style={{ maxWidth: "80%", margin: "auto" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">{store.detallesVehiculo?.name}</h2>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus lobortis mi ut tempor. Curabitur ultrices dapibus nisl. Sed dictum tempor ligula, eget varius enim dignissim eu. Maecenas ut sapien sagittis odio elementum eleifend convallis sollicitudin erat. Praesent finibus ligula turpis, ac placerat enim euismod ut. Maecenas laoreet dolor leo, ut ultricies ex ultricies vel.</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
				<div className="container text-center">
  <div className="row row-cols-6">
    <div className="col text-danger"><h5>Name</h5><h5>{store.detallesVehiculo?.name}</h5></div>
    <div className="col text-danger"><h5>Model</h5><h5>{store.detallesVehiculo?.model
}</h5></div>
    <div className="col text-danger"><h5>Manufacturer</h5><h5>{store.detallesVehiculo?.manufacturer}</h5></div>
    <div className="col text-danger"><h5>Passengers</h5><h5>{store.detallesVehiculo?.passengers}</h5></div>
	<div className="col text-danger"><h5>Cargo capacity</h5><h5>{store.detallesVehiculo?.cargo_capacity
}</h5></div>
	<div className="col text-danger"><h5>Vehicle class</h5><h5>{store.detallesVehiculo?.vehicle_class}</h5></div>
  </div>
</div>
			</div>
		</div>
	);
};

DetailsVehiculo.propTypes = {
	match: PropTypes.object
};