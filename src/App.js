import React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';  // Adds AWS Amplify Authentication

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to DesiNanny</h1>
        <p>Find the best nanny services tailored to your needs</p>
      </header>
    </div>
  );
}

export default withAuthenticator(App);  // Adds login functionality
