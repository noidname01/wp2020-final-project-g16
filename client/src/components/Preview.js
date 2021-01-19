import React, { useState, useEffect } from 'react'

const Preivew = (props) => {
    const { html, grid, varList } = props
    const [peopleCount, setPeopleCount] = 1 //1~10

    const renderVar = (html, grid, varList) => {
        varList.forEach((vari) => {
            let id = vari.id
            let varname = vari.varname

            let regex = new RegExp(`/<input class="btn" id="${id}" .+?>`, 'g')
            // html = html.replace(regex,
        })
    }

    useEffect(() => {
        console.log('html', html)
        console.log('grid', grid)
    }, [])

    useEffect(() => {}, [])
    return <></>
}

export default Preivew
