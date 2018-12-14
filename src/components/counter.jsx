/* import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  handleIncrement = () => {
    console.log("increment clicked", this);
    let { count } = this.state;
    count++;
    this.setState({ count });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <span className={this.getBadgeClasses(count)}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses(count) {
    let badgeClasses = "badge m-2 badge-";
    return (badgeClasses += count === 0 ? "warning" : "primary");
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter; */

import React from "react";

const Counter = props => {
  const { counter } = props;
  return (
    <div>
      <span className={getBadgeClasses(counter.value)}>
        {formatCount(counter.value)}
      </span>
      <button
        onClick={() => props.onIncrement(counter)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
};

function getBadgeClasses(value) {
  let badgeClasses = "badge m-2 badge-";
  return (badgeClasses += value === 0 ? "warning" : "primary");
}

function formatCount(count) {
  return count === 0 ? "Zero" : count;
}

export default Counter;
