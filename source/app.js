var React = require('react');
var ReactDOM = require('react-dom');
var Shop = require('./components/shop.react');

var shop={name:"YHD",
	items:[{ 
			name:"chocolate",
			pic_url:"http://d6.yihaodianimg.com/N01/M0A/95/FD/CgQCr1PQy1CAF7vaAABDexsiEYM24800.jpg",
			price:16.00,
			count:15,
			amount:240,
			weight:'10kg'
		},{ 
			name:"soap",
			pic_url:"http://d6.yihaodianimg.com/N01/M0A/95/FD/CgQCr1PQy1CAF7vaAABDexsiEYM24800.jpg",
			price:30.00,
			count:80,
			amount:2400,
			weight:'15kg'
		}]};

ReactDOM.render(<Shop shop={shop}/>,document.getElementById('react-shopping'));