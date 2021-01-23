import React, { useState, useEffect } from 'react'
import neon from '../images/neon.png'
import trash from '../images/delete.png'
import { useLocation, Link } from 'react-router-dom'
// GraphQL dependencies
import { useQuery } from '@apollo/client'
import { GET_TEMPLATE } from '../graphql'

import Scrollbars from 'react-custom-scrollbars'
import { Element } from 'react-summernote'

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

    // const [lookupTemplate] = useMutation(LOOKUP_TEMPLATE)
    const { loading, data, error } = useQuery(GET_TEMPLATE, {
        variables: { userId: props.userInfo.id },
    })

    // const [data, setData] = useState(null)

    /* useEffect(async () => {
        const temp = await lookupTemplate({
            variables: {
                userId: props.userInfo.id,
            },
        })
        console.log(temp.data.lookupTemplate)
        setData(temp.data.lookupTemplate)
    }, []) */
    useEffect(() => {
        console.log(data)
    }, [data])

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
                                            console.log('ele:', ele)
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
