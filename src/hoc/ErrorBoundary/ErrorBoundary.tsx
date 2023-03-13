import React from 'react';

type ErrorBoundaryState = {
 hasError: boolean;
};

interface ErrorBoundary {
 props: any;
 state: ErrorBoundaryState;
}

class ErrorBoundary extends React.Component<ErrorBoundary> {
 constructor(props: ErrorBoundary) {
  super(props);
  this.state = {
   hasError: false,
  };
 }

 static getDerivedStateFromError(error: any) {
  return { hasError: true };
 }

 render() {
  if (this.state.hasError) {
   return <div className="something_wrong">Something went wrong...</div>;
  }
  return this.props.children;
 }
}

export default ErrorBoundary;
