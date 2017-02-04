var React = require('react');
var ReactDOM = require('react-dom');
var Item = require('./item.react');

var Shop = React.createClass({
	render: function(){
		return(
			<li>
				<header className="shop_head">{this.props.shop.name}</header>
				{
					this.props.shop.items.map(function(elem) {
						return <Item item={elem}/>
					})
				}
			</li>
			);
	}
});

module.exports = Shop;