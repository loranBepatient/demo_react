import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     console.log("increment clicked", this);
  //   }

  //   handleIncrement = () => {
  //     console.log("increment clicked", this);
  //     let { count } = this.state;
  //     count++;
  //     this.setState({ count });
  //   };
//   handleIncrement = nb => {
//     console.log("increment clicked", nb);
//     let { count } = this.state;
//     count = count + nb;
//     this.setState({ count });
//   };

  render() {
    const { count } = this.state;

    return (
      //   <React.Fragment>
      //     <span className={this.getBadgeClasses(count)}>
      //       {this.formatCount()}
      //     </span>
      //     <button
      //       onClick={this.handleIncrement}
      //       className="btn btn-secondary btn-sm"
      //     >
      //       Increment
      //     </button>
      //   </React.Fragment>
    //   <React.Fragment>
    //     <span className={this.getBadgeClasses(count)}>
    //       {this.formatCount()}
    //     </span>
    //     <button
    //       onClick={() => this.handleIncrement(1)}
    //       className="btn btn-secondary btn-sm"
    //     >
    //       Increment
    //     </button>
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
}

export default Counter;
