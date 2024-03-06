import React from "react";

class Error extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch = (error, errorInfo) => {
    this.setState({ hasError: true });
    console.log(error);
  };

  render() {
    if (this.state.hasError) {
      return <h1>We have an issue</h1>;
    }
    return this.props.children;
  }
}
export default Error;
