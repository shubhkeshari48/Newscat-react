import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinerr extends Component {
  render() {
    return (
      <div className="text-center">
        <img style={{width:"200px"}}src={loading} alt="Loading..."/>
      </div>
    )
  }
}
