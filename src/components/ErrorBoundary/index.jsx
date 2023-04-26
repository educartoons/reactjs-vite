import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    addDoc(collection(db, 'errors'), { info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing{' '}
          <Link to="/">Click here to go to home page</Link>{' '}
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
