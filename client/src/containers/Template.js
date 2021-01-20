import React, { useState, useEffect } from 'react'
import neon from '../images/neon.png'
import trash from '../images/delete.png'
import { useLocation, Link } from 'react-router-dom'
// GraphQL dependencies
import { useQuery, useMutation } from '@apollo/client'
import { GET_TEMPLATE, LOOKUP_TEMPLATE } from '../graphql'

import Scrollbars from 'react-custom-scrollbars'

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: 'rgba(192,192,200, 0.5)',
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
}

const card = (name, des) => {
    return (
        <div className='grid-col'>
            <div className='card flex-card border-secondary mb-3'>
                <div className='card-header' style={{ color: 'black' }}>
                    Header
                </div>
                <div className='card-body text-secondary'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>{des}</p>
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
            <button onClick={handleClick}>test</button>

            <div className='frameUp'>Template</div>
            <div className='frameDown'>
                <div className='grid frameIn2'>
                    <Scrollbars renderThumbVertical={renderThumb}>
                        <div className='flex-row'>
                            {!data ? (
                                <div></div>
                            ) : (
                                data.map((ele) => {
                                    //console.log(ele.name, ele.description)
                                    return card(ele.name, ele.description)
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
