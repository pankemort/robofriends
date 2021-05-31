import React,{ Component} from 'react';

import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll.js'
import './app.css'
import ErrorBoundary from '../components/ErrorBoundary'


// const state =()=>{
// 	robots:'robots'
// 	searchfield:''
// }


class App extends Component{
	constructor(){
		super()
		this.state= {
				robots:[],
				searchfield:''

		}


	}
componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
		return response.json();
	})
	.then(users=>this.setState({robots:users}));
}



onSearchChange =(event)=>{
	this.setState({searchfield:event.target.value})
	
	// const filteredrobots = this.state.robots.filter(robots => {
	// 	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	// })
	// console.log(filteredrobots);
}


render(){
	const {robots,searchfield} = this.state

	const filteredrobots = robots.filter(robots => {
		return robots.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	if (robots.length===0) {
		return <h1>Loading </h1>
	}else{
			return(
				<div className='tc'>
					<h1 className='f1'>ROBOFRIENDS</h1>
					<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredrobots}/>	
					</ErrorBoundary>
				</Scroll>
				</div>
				)
			}

}

}





// const App = ()=> {
// // 	return(
// 	<div className='tc'>
// 		<h2>ROBOFRIENDS</h2>
// 		<SearchBox />
// 		<CardList robots={robots}/>	
	
// 	</div>
// 	)

// }
export default App;