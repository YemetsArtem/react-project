import React from 'react'

export default (OriginalComponent) =>
  class Accordion extends React.Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) =>
      this.setState({
        openItemId: this.state.openItemId === openItemId ? null : openItemId
      })

    render() {
      return <OriginalComponent {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem} />
    }
  }
