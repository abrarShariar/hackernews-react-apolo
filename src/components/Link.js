import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Link extends Component {
  render () {
    const { link } = this.props;
    return (
      <div>
        <div>
          {link.description} ({link.url})
        </div>
      </div>
    )
  }
}

Link.propTypes = {
  link: PropTypes.object.isRequired
}

export default Link;
