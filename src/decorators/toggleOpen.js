import React from 'react'

export default (OriginalComponent) =>
  class ToggleOpen extends React.Component {
    state = {
      isOpen: false
    }

    toggleOpenItem = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
