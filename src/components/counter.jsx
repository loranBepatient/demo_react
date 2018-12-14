import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    const { count } = this.state;

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses(count)}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
      //   <React.Fragment>
      //     <ul>
      //       {this.state.tags.map(tag => (
      //         <li>{tag}</li>
      //       ))}
      //     </ul>
      //   </React.Fragment>
      //   <React.Fragment>
      //     {this.state.tags.length === 0 && "Please Create Tag"}
      //     {this.renderTags()}
      //   </React.Fragment>
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

  renderTags() {
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
