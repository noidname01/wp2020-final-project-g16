import React, { useState, useEffect } from 'react'

const Preivew = (props) => {
    const { html, grid, varList } = props

    const renderVar = (html, varList) => {
        // varList.forEach((var)=>)
    }

    useEffect(() => {
        console.log('html', html)
        console.log('grid', grid)
    }, [])

    useEffect(() => {}, [])
    return <></>
}

export default Preivew
