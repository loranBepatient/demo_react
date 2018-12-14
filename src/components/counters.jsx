import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  componentDidMount() {
    console.log(this.state);
  }

  onDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
      // <div>
      //   {this.state.counters.map(counter => (
      //     <Counter
      //       key={counter.id}
      //       value={counter.value}
      //       id={counter.id}
      //       onDelete={this.onDelete}
      //     />
      //   ))}
      // </div>
    );
  }
}

export default Counters;
