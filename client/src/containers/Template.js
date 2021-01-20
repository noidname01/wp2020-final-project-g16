import React, { useState, useEffect } from 'react'
import neon from '../images/neon.png'
import trash from '../images/delete.png'
import { useLocation, Link } from 'react-router-dom'
// GraphQL dependencies
import { useQuery, useMutation } from '@apollo/client'
import { GET_TEMPLATE, LOOKUP_TEMPLATE, DELETE_TEMPLATE } from '../graphql'

import Scrollbars from 'react-custom-scrollbars'
import { Element } from 'react-summernote'

import 'bootstrap/js/src/modal'
import 'bootstrap/js/src/dropdown'
import 'bootstrap/js/src/tooltip'
import 'bootstrap/dist/css/bootstrap.css'

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: 'rgba(192,192,200, 0.5)',
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
}

const card = (ele) => {
    const [tempInfo, setTempInfo] = useState(ele)
    const handleClick = () => {
        console.log(tempInfo)
    }

    return (
        <div className='grid-col'>
            <div className='card flex-card border-secondary mb-3'>
                <div className='card-header' style={{ color: '#5e5e5e' }}>
                    {ele.timestamp}
                </div>
                <div className='card-body text-secondary'>
                    <h5 className='card-title' style={{ color: '#2e2e2e' }}>
                        {ele.name}
                    </h5>
                    <div className='flex-row'>
                        <p className='card-text flex'>{ele.description}</p>
                        <button className='trash ml-auto' onClick={handleClick}>
                            <img className='w-40' src={trash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Template = (props) => {
    /*const { loading, error, data } = useQuery(GET_TEMPLATE, {
        variables: {
            userId: props.userInfo.id,
        },
    })*/
    const [lookupTemplate] = useMutation(LOOKUP_TEMPLATE)
    //const [deleteTemplate] = useMutation(DELETE_TEMPLATE)
    /*
    useEffect(() => {
        console.log(data)
    }, [data])*/

    const [data, setData] = useState(null)

    const handleClick = async () => {
        const temp = await lookupTemplate({
            variables: {
                userId: props.userInfo.id,
            },
        })
        console.log(temp.data.lookupTemplate)
        setData(temp.data.lookupTemplate)
    }

    return (
        <React.Fragment>
            <div className='frameUp'>Template</div>
            <div className='frameDown'>
                <div className='grid frameIn2'>
                    <button
                        className='btn btn-info mr-auto ml-3 mb-2'
                        onClick={handleClick}
                    >
                        Render
                    </button>
                    <Scrollbars renderThumbVertical={renderThumb}>
                        <div className='flex-row'>
                            {!data ? (
                                <div></div>
                            ) : (
                                data.map((ele) => {
                                    console.log('ele:', ele)
                                    return card(ele)
                                })
                            )}
                        </div>
                    </Scrollbars>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Template
