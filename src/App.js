import React from 'react';
import './App.css';
import Header from './Header'
import CardList from './CardList'
function App() {
  return (
    <div>
    <Header 
      text = "Staff List"
    />
   <CardList />
    </div>
  );
}

export default App;
