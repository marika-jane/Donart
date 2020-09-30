// snapshot not passing

import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Home from '../Home'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Home />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})