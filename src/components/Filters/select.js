import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from "react-redux"
import { changeSelection } from "../../ac"

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
      />
    )
  }
  
  handleChange = (selected) => this.props.changeSelection(selected);
  
  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }
}

export default connect(null, { changeSelection })(SelectFilter);