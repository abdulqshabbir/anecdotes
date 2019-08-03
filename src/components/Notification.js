import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ notificationVisibility }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notificationVisibility === true) {
    return (
      <div style={style}>
        Something
      </div>
    )
  }
  else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    notificationVisibility: state.notificationVisibility
  }
}

export default connect(mapStateToProps, null)(Notification)