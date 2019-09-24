import React, { Component } from "react";
import SelectFilter from "./select";
import DateRange from "./date-range";

class Filters extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <SelectFilter />
        <DateRange />
      </div>
    );
  }
}

export default Filters;
