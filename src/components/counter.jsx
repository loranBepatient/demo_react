import React, { Component } from "react";

class Counter extends Component {
  state = {};
  //   state = {
  //     count: 0
  //   };

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold"
  //   };

  render() {
    // const { count } = this.state;

    return (
      <div>
        <h1>Hello World</h1>
        <button>Increment</button>
      </div>
      //   <React.Fragment>
      //     <span>{this.state.count}</span>
      //     <button>Increment</button>
      //   </React.Fragment>
      //   <React.Fragment>
      //     <span className="badge badge-primary m-2">{this.formatCount()}</span>
      //     <button className="btn btn-secondary btn-sm">Increment</button>
      //   </React.Fragment>
      //   <React.Fragment>
      //     <span style={this.styles} className="badge badge-primary m-2">
      //       {this.formatCount()}
      //     </span>
      //     <button className="btn btn-secondary btn-sm">Increment</button>
      //   </React.Fragment>
      //   <React.Fragment>
      //     <span className={this.getBadgeClasses(count)}>
      //       {this.formatCount()}
      //     </span>
      //     <button className="btn btn-secondary btn-sm">Increment</button>
      //   </React.Fragment>
    );
  }

  //   getBadgeClasses(count) {
  //     let badgeClasses = "badge m-2 badge-";
  //     return (badgeClasses += count === 0 ? "warning" : "primary");
  //   }

  //   formatCount() {
  //     const { count } = this.state;
  //     return count === 0 ? "Zero" : count;
  //   }
}

export default Counter;
