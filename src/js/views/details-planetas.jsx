import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const DetailsPlanetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getDetallePlaneta(params.id);
		window.scrollTo(0, 0)
	}, []);

	return (
		<div className="jumbotron">


			{/* card */}
			<div className="card mb-3" style={{ maxWidth: "80%", margin: "auto", background: "#282727" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/planets/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title text-light">{store.detallesPlaneta?.name}</h2>
							<p className="card-text text-light">orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus lobortis mi ut tempor. Curabitur ultrices dapibus nisl. Sed dictum tempor ligula, eget varius enim dignissim eu. Maecenas ut sapien sagittis odio elementum eleifend convallis sollicitudin erat. Praesent finibus ligula turpis, ac placerat enim euismod ut. Maecenas laoreet dolor leo, ut ultricies ex ultricies vel.</p>
							<p className="card-text text-light"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
				<div className="container text-center">
					<div className="row row-cols-6">
						<div className="col text-light"><h5>Name</h5><h5>{store.detallesPlaneta?.name}</h5></div>
						<div className="col text-light"><h5>Population</h5><h5>{store.detallesPlaneta?.population
						}</h5></div>
						<div className="col text-light"><h5>Rotation Period</h5><h5>{store.detallesPlaneta?.rotation_period}</h5></div>
						<div className="col text-light"><h5>Surface Water</h5><h5>{store.detallesPlaneta?.surface_water}</h5></div>
						<div className="col text-light"><h5>Gravity</h5><h5>{store.detallesPlaneta?.gravity
						}</h5></div>
						<div className="col text-light"><h5>Climate</h5><h5>{store.detallesPlaneta?.climate}</h5></div>
					</div>
				</div>
			</div>
			<div><img src="https://i.pinimg.com/originals/e5/7b/9d/e57b9d4790971b74b3462a533ee7669a.jpg" alt="" /></div>
		</div>
	);
};

DetailsPlanetas.propTypes = {
	match: PropTypes.object
};
