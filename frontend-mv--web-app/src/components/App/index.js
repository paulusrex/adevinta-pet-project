import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const App = ({children}) => (
  <div className="App">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/list">List</Link>
    </nav>
    {children}
  </div>
)
App.propTypes = {children: PropTypes.element}

export default App
