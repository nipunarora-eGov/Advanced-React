import React from 'react'

const SplitScreen = ({Left,Right}) => {
  return (
    <div>
      <div>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  )
}

export default SplitScreen