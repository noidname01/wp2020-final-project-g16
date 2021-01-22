import React, { useState } from 'react'
import trash from '../images/delete.png'

// GraphQL dependencies
import { useMutation } from '@apollo/client'
import { DELETE_TEMPLATE } from '../graphql'
import { Link } from 'react-router-dom'
// html parser

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

                                <Link
                                    className='btn btn-info'
                                    to={{
                                        pathname: '/ee/new',
                                        state: {
                                            html: tempInfo.content,
                                        },
                                    }}
                                >
                                    Import
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default TempCard
