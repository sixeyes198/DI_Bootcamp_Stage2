import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errorInfo: null,
      hasError: false,
    };
  }

  componentDidCatch = (error, errorInfo) => {
    this.setState({ error: error, errorInfo: errorInfo, hasError: true });
    console.log(error);
  };

  render() {
    if (this.state.hasError) {
      return (
        <details style={{ whiteSpace: "pre-wrap", textAlign: "center" }}>
          {this.state.hasError && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
