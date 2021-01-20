import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser'

const Preview = (props) => {
    // console.log(typeof props)

    const { html, presend, varList, setPresend, getGridValue } = props

    /* const html = props.html
    const presend = props.presend
    const varList = props.varList
    const setPresend = props.setPresend
    const getGridValue = props.getGridValue */

    const [peopleCount, setPeopleCount] = useState(1) //1~10

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
        console.log(presend)
    }, [presend])

    return (
        <>
            <div>
                {parse(
                    presend[peopleCount - 1] ? presend[peopleCount - 1] : ''
                )}
            </div>
            {/* {console.log(presend[peopleCount])} */}
            <button
                onClick={(e) => {
                    e.preventDefault()
                    if (!(peopleCount >= 10)) {
                        setPeopleCount(peopleCount + 1)
                    }
                }}
            >
                +
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    if (!(peopleCount <= 1)) {
                        setPeopleCount((peopleCount) => peopleCount - 1)
                    }
                }}
            >
                -
            </button>
        </>
    )
}

export default Preview
