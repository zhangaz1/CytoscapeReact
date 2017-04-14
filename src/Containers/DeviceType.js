import React from 'react';

class DeviceType extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			typeList : []
		};
		this.selectTypeList = this.selectTypeList.bind(this)
	}

	selectTypeList() {
		let listData = ["GCB", "VCB"];
		this.setState({
			typeList : listData
		});
	}

	componentWillMount(){}

	componentDidMount() {
		this.selectTypeList();
	}

	render() {
		return (
			<div className="form-group" >
				<label htmlFor="Type">Type</label>
				<select className="form-control" id="Type">
	  				<option>Type</option>
	  				{this.state.typeList.map((item) =>
		  			<option value="" key={item}>
		  				{item}
		  			</option>
	  				)}
				</select>
	    	</div>
		);
	}
}

export default DeviceType;