import React from 'react'

const Card = () => {
	return (
		<div className='card draftcard'>
			<div className='card-body'>
				<h5 className='card-title'>Draft #</h5>
				<p className='card-text'>
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href='#' className='card-link'>
					Go somewhere
				</a>
			</div>
		</div>
	)
}

const Draft = () => {
	return (
		<div className='grid'>
			<div className='row'>
				<div className='grid-col'>
					<Card />
				</div>
				<div className='grid-col'>
					<Card />
				</div>
				<div className='grid-col'>
					<Card />
				</div>
				<div className='grid-col'>
					<Card />
				</div>
			</div>
			<div className='row'>
				<div className='grid-col'>
					<Card />
				</div>
				<div className='grid-col'>
					<Card />
				</div>
				<div className='grid-col'>
					<Card />
				</div>
				<div className='grid-col'>
					<Card />
				</div>
			</div>
		</div>
	)
}

export default Draft
