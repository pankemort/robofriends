import React from 'react';
import Cards from './Cards.js'
const CardList =({robots})=>{
	const cardcomponent = robots.map((user,i)=>{
		return <Cards key={i} id={robots[i].id} name ={robots[i].name} email={robots[i].email}/>
})
	return	(
				 <div>
	   				{cardcomponent}
  				 </div>	

			)
}
export default CardList;