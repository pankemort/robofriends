import React from 'react';

const Cards = ({email,name ,id})=> {
	return(
		<div className = 'tc bg-light-blue dib br3 grow pa3 ma2 bw2 shadow-5'>
			<img alt='robots'src ={`https://robohash.org/${id}?size=200x200`} />
		
			<div>
				<h2>{name} </h2>
				<p>{email}</p>
			</div>
		</div>
	)
}
export default Cards;