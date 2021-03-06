import React, { Component } from 'react'
import PresentationalComponent from './index'
import dao from './dao'
import firebase from 'firebase'

class Container extends Component {
  constructor(props) {
    super(props)
    this.database = firebase.database()
    this.dao = new dao(this.database)
    this.state = { categorys: [] }
  }

  componentDidMount() {
    this.dao.on(categorys => {
      return this.setState({ categorys })
    })
  }

  updateCategoryById = (id, payload) => {
    return this.dao.updateById(id, payload)
  }
  createCategory = payload => {
    return this.dao.create(payload)
  }

  render() {
    const { categorys = [] } = this.state
    return (
      <PresentationalComponent
        categorys={categorys}
        updateCategoryById={this.updateCategoryById}
        createCategory={this.createCategory}
      />
    )
  }
}

export default Container
