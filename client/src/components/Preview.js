import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser'

import Carousel from 'react-bootstrap/Carousel'

const Preview = (props) => {
    // console.log(typeof props)

    const { html, subject, presend, varList, setPresend, getGridValue } = props

    /* const html = props.html
    const presend = props.presend
    const varList = props.varList
    const setPresend = props.setPresend
    const getGridValue = props.getGridValue */

    const [peopleCount, setPeopleCount] = useState(1) //1~10
    const [carousel, setCarousel] = useState(null)

    const renderVar = (count, html, varList) => {
        varList.forEach((vari) => {
            let id = vari.id
            let varname = vari.varname

            console.log(id)
            console.log(varname)

            let regex = new RegExp(`<input class="btn" id="${id}" .+?>`, 'gm')

            html = html.replace(regex, `${getGridValue(count, varname)}`)
        })

        console.log('parser', html)

        return html

        // setPresend(html)
    }

    const renderPresend = () => {
        let newPresend = []

        for (let i = 1; i < 11; i++) {
            newPresend.push(renderVar(i, html, varList))
        }

        setPresend(newPresend)
    }

    const renderCarousel = (presend) => {
        let newCarousel = presend.map((html, index) => {
            if (getGridValue(index + 1, 'EMAIL_ADDRESS') !== '') {
                return (
                    <Carousel.Item>
                        <div
                            className='container d-block justify-content-start col-10 carousel-content'
                            style={{
                                color: 'var(--light)',
                                height: '100%',
                                // backgroundColor: 'white',
                                // zIndex: -1,
                                borderRadius: '10px',
                            }}
                        >
                            {parse(html)}
                        </div>
                        <Carousel.Caption>
                            <h3 style={{ color: 'var(--light)' }}>
                                {getGridValue(index + 1, 'EMAIL_ADDRESS')}
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        })

        setCarousel(newCarousel)
    }

    useEffect(() => {
        console.log('html', html)
        // console.log('presend')
        // console.log('grid', grid)
        renderPresend()
    }, [])

    // useEffect(() => {
    //     // renderVar(peopleCount, html, varList)
    // }, [peopleCount])

    useEffect(() => {
        renderCarousel(presend)
    }, [presend])

    return (
        <div className='w100 h100'>
            <div className='newAnimation h100'>
                {!presend.every((i) => {
                    return i === ''
                }) ? (
                    <div className='w100 h100'>
                        <p>Subject: {subject}</p>
                        <Carousel>{carousel}</Carousel>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}

export default Preview
