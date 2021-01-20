import React, { useState, useEffect } from 'react'
import trash from '../images/delete.png'

// GraphQL dependencies
import { useQuery, useMutation } from '@apollo/client'
import { DELETE_TEMPLATE } from '../graphql'
import { Link } from 'react-router-dom'
// html parser
import parse from 'html-react-parser'

//modal dependencies
import 'bootstrap/js/src/modal'
import 'bootstrap/js/src/dropdown'
import 'bootstrap/js/src/tooltip'
import 'bootstrap/dist/css/bootstrap.css'

function TempCard(props) {
    const [show, setShow] = useState(true)
    const [tempInfo, setTempInfo] = useState(props.ele)
    const [deleteTemplate] = useMutation(DELETE_TEMPLATE)

    const handleDelete = async () => {
        setShow(false)

        if (tempInfo.id) {
            await deleteTemplate({
                variables: {
                    id: tempInfo.id,
                },
            })
        }
    }

    return (
        <div>
            {show === true ? (
                <div className='grid-col'>
                    <div className='card flex-card border-secondary mb-3'>
                        <div
                            className='card-header'
                            style={{ color: '#5e5e5e' }}
                        >
                            {props.ele.timestamp}
                        </div>
                        <div className='card-body text-secondary'>
                            <h5
                                className='card-title'
                                style={{ color: '#2e2e2e' }}
                            >
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
                                        onClick={handleDelete}
                                    />
                                </button>

                                {/* <button
									type='button'
									className='btn btn-primary'
									data-toggle='modal'
									data-target='#exampleModalLong'
								>
									View
								</button> */}
                                <Link
                                    className='btn btn-info'
                                    to={{
                                        pathname: '/ee/new',
                                        state: {
                                            html: tempInfo.content,
                                        },
                                    }}
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
            {/*<div
				className='modal fade'
				id='exampleModalLong'
				tabindex='-1'
				role='dialog'
				aria-labelledby='exampleModalLongTitle'
				aria-hidden='true'
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5
								className='modal-title'
								id='exampleModalLongTitle'
							>
								{props.ele.name}
							</h5>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>...</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-dismiss='modal'
							>
								Close
							</button>
							<button
								type='button'
								className='btn btn-danger'
								data-dismiss='modal'
							>
								Delete
							</button>
							<button type='button' className='btn btn-success'>
								Import
							</button>
						</div>
					</div>
				</div>
			</div>*/}
        </div>
    )
}

export default TempCard
