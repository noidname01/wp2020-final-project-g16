import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// GraphQL dependencies
import { useQuery } from '@apollo/client'
import { GET_TEMPLATE } from '../graphql'

import Scrollbars from 'react-custom-scrollbars'

import 'bootstrap/js/src/modal'
import 'bootstrap/js/src/dropdown'
import 'bootstrap/js/src/tooltip'
import 'bootstrap/dist/css/bootstrap.css'

import TempCard from './TempCard'

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: 'rgba(192,192,200, 0.5)',
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
}

const Template = (props) => {
    useLocation()

    const { loading, data, error } = useQuery(GET_TEMPLATE, {
        variables: { userId: props.userInfo.id },
    })

    /*  useEffect(() => {
        console.log(data)
    }, [data]) */

    return (
        <React.Fragment>
            {!loading ? (
                <>
                    <div className='frameUp'>Template</div>
                    <div className='frameDown'>
                        <div className='grid frameIn2'>
                            <Scrollbars renderThumbVertical={renderThumb}>
                                <div className='flex-row'>
                                    {!data ? (
                                        <div></div>
                                    ) : (
                                        data.getTemplate.map((ele) => {
                                            return (
                                                <TempCard ele={ele}></TempCard>
                                            )
                                        })
                                    )}
                                </div>
                            </Scrollbars>
                        </div>
                    </div>
                </>
            ) : (
                <div></div>
            )}
        </React.Fragment>
    )
}

export default Template
