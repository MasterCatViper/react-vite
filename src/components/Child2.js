import React from 'react'
import { useSelector } from 'react-redux'

const Child2 = () => {
    const message = useSelector(state => state.messageReducer.message)

    return (
    <div>The data from child1 is : {message} </div>
  )
}

export default Child2