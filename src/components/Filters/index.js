import React, { Component } from 'react'
import {connect} from "react-redux";
import SelectFilter from './select'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Filters extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DayPicker />
      </div>
    )
  }
}

export default connect((state) => ({
  articles: state.articles
}))(Filters);
