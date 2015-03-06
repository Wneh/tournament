var React = require('react');
var TournActions = require('../actions/TournActions');

var StartPage = React.createClass({
	render: function() {

		if(this.props.currentView != "Home"){
			return null;
		}

		return (
			<div>
				<div className="page-header">
	  				<h1>Tournament <small>by Failkidz</small></h1>
				</div>
				<div>
					<p>Simple torunamt web app for 2 player teams. Minimum is 4 players.</p>
					<h3>Data</h3>
					<p>All the game data i stored locally in your browser(local storage). 
					Until you clear out your browser or use the button below the data will be saved. Even if you close this page.</p>

					<button 
						type="button"
						className="btn btn-danger"
						onClick={this._clickClearData}
					>Clear saved data</button>

					<h3>Source code</h3>
					<p>Source code avaible on <a href="http://github.com/failkidz/tournament">Github</a></p>
				</div>
			</div>
		);
	},

	_clickClearData: function(){
		var person = prompt("Type delelete to erase your tournament data");
		if (person != null && person === "delete") {
			TournActions.deleteData();
		} else {
			alert("Wrong input");
		}
	}
});

module.exports = StartPage;