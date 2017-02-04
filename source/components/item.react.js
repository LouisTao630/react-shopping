var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass({

	getInitialState: function(){
		return {

		};
	},

	render:function(){
		return(
			<li identify={this.props.item.identify}>
				<img className="item_pic" src={this.props.item.pic_url}></img>
				<span className="item_name">{this.props.item.name}</span>
				<span className="item_price">{this.props.item.price}</span>
				<span className="item_count">{this.props.item.count}</span>
				<span className="item_amount">{this.props.item.amount}</span>
				<span className="item_weight">{this.props.item.weight}</span>
			</li>
			);
	}
});

module.exports = Item;