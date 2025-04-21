import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
    const [ctime, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval) // cleanup
    }, [])

    return ctime
}

export default Timer