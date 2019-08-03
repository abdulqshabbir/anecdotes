import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notification.isVisible === true) { 
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
    notification: state.notificationVisibility
  }
}

export default connect(mapStateToProps, null)(Notification)