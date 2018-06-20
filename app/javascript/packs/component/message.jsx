import React from 'react'

const Message = (props) => {
  return(
    <ul>
      {props.data.map((item) => {
        return (
          <li key={item.id} className="items">{item.text}</li>
        )
      })}
    </ul>
  )
}

export default Message;
