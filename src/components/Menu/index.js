import React, { Component } from 'react'
import MenuItem from './MenuItem'

export class Menu extends Component {
  render() {
    return (
      <nav>
        <h3>Main Menu</h3>
        <ul>{this.props.children}</ul>
      </nav>
    )
  }
}

export { MenuItem }
export default Menu
