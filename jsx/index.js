import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux'
import Actions from '../redux/Actions'
import store from 'redux-store'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getRandomColor() {
  return  Math.floor(Math.random() * 16777215).toString(16)
}

const DynamicPostTitle = (p) => (
  <div
    onClick={() => p.setColor(getRandomColor())}
    style={{ color: p.color }}
  >
    {p.children}
  </div>
)

const mapStateToProps = (state) => {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

const ConnectedDynamicPostTitle = connect(mapStateToProps)(DynamicPostTitle)

const components = document.querySelectorAll('.entry-content h2')

for (let i = 0; i < components.length; i++) {
  const title = component.innerHTML
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedDynamicPostTitle>
        {title}
      </ConnectedDynamicPostTitle>
    </Provider>,
    component
  )
}
