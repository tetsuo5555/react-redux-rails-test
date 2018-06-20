import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';

import Hoge from './component/hoge'
import Message from './component/message'
import ComposedTextField from './component/form'

const REQUEST_URL_BASE = 'http://localhost:3000'

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };

    this.addTask = this.addTask.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(REQUEST_URL_BASE + '/messages.json')
      .then((response) =>
        response.json()
      )
      .then((responseData) => {
        this.setState({
          data: responseData,
        })
      })
  }

  addTask(){
    var formValue = document.getElementById('form1').value
    fetch(REQUEST_URL_BASE + '/messages.json', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify({ text: formValue })
    })
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      const current_data = this.state.data
      const new_data = current_data.concat(responseData)
      this.setState({
        data: new_data
      })
    })
  }

  render(){
    return(
      <React.Fragment>
        <h2>タスク一覧</h2>
        <Message data={this.state.data} />
        <ComposedTextField />
        <Button variant="contained" color="primary" onClick={this.addTask} >
          addHoge
        </Button>
      </React.Fragment>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="I am React" />,
    document.getElementById('hello'),
  )
})
