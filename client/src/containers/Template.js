import React, { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'
// GraphQL dependencies
import { useMutation } from '@apollo/client'
import { LOOKUP_TEMPLATE } from '../graphql'

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

    const [lookupTemplate] = useMutation(LOOKUP_TEMPLATE)

    const [data, setData] = useState(null)

    useEffect(async () => {
        const temp = await lookupTemplate({
            variables: {
                userId: props.userInfo.id,
            },
        })
        console.log(temp.data.lookupTemplate)
        setData(temp.data.lookupTemplate)
    }, [])

    return (
        <React.Fragment>
            <div className='frameUp'>Template</div>
            <div className='frameDown'>
                <div className='grid frameIn2'>
                    <Scrollbars renderThumbVertical={renderThumb}>
                        <div className='flex-row'>
                            {!data ? (
                                <div></div>
                            ) : (
                                data.map((ele) => {
                                    console.log('ele:', ele)
                                    return <TempCard ele={ele}></TempCard>
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
