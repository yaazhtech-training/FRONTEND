import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; //The Constuctor managed using this.state keyword
  }
  handleChangeIncrement() {
    this.setState({
      //Update the state to use this.setState method
      count: this.state.count + 1,
    });
  }
  handleChangeDecrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  handleChangeReset() {
    this.setState({
      count: (this.state.count = 0),
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-[3rem] font-bold font-serif underline">
          ClassComponent
        </h1>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={this.handleChangeIncrement.bind(this)}
            className="flex text-[2rem] px-3 text-white font-bold  rounded-full bg-[red]"
          >
            +
          </button>
          <p className="text-2xl font-serif font-bold">
            Count:{this.state.count}
          </p>
          <button
            onClick={this.handleChangeDecrement.bind(this)}
            className="flex text-[2rem] px-4  text-white font-bold  rounded-full bg-[red]"
          >
            -
          </button>
        </div>
        <button
          onClick={this.handleChangeReset.bind(this)}
          className="px-2 bg-black text-white rounded-lg"
        >
          Reset
        </button>

        <hr />
      </div>
    );
  }
}