import React, { useState, useEffect } from 'react'
import trash from '../images/delete.png'

function TempCard(props) {
	const [tempInfo, setTempInfo] = useState(props.ele)

	return (
		<div className='grid-col'>
			<div className='card flex-card border-secondary mb-3'>
				<div className='card-header' style={{ color: '#5e5e5e' }}>
					{props.ele.timestamp}
				</div>
				<div className='card-body text-secondary'>
					<h5 className='card-title' style={{ color: '#2e2e2e' }}>
						{props.ele.name}
					</h5>
					<div className='flex-row'>
						<p className='card-text flex'>
							{props.ele.description}
						</p>
						<button className='trash ml-auto'>
							<img
								className='w-40'
								src={trash}
								onClick={() => console.log(tempInfo)}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TempCard
