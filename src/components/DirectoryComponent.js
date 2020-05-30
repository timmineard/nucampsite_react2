import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import CampsiteInfo from './CampsiteInfoComponent';

class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCampsite: null,
		};
	}

	onCampsiteSelect(campsite) {
		this.setState({ selectedCampsite: campsite, });
	}



	render() {
		const directory = this.props.campsites.map(c => {
			return (
				<div key={c.id} className="col-md-5 m-1">
					<Card onClick={() => this.onCampsiteSelect(c)}>
						<CardImg width='100%' src={c.image} alt={c.name} />
						<CardImgOverlay>
							<CardTitle>{c.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			)
		})

		return (
			<div className='container'>
				<div className='row'>
					{directory}
				</div>
			<CampsiteInfo campsite = {this.state.selectedCampsite} />
			</div>
		)
	}
}

export default Directory;
//				<div className='row'>
//					<div className='col-md-5 m-1'>
//						{this.renderSelectedCampsite(this.state.selectedCampsite)}
//					</div>
//				</div>;
//	renderSelectedCampsite(campsite) {
//		if (campsite) {
//			return (
//				<Card>
//					<CardImg top src={campsite.image} alt={campsite.name} />
//					<CardBody>
//						<CardTitle>{campsite.name}</CardTitle>
//						<CardText>{campsite.description}</CardText>
//					</CardBody>
//				</Card>
//			)
//		}
//		return <div />;
//	}