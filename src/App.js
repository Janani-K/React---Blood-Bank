import React from 'react';
import './App.css';
import Header from './Header/Header.react';
// import Footer from './Footer/Footer.react';
// import Content from './Content/Content.react';
// import ove from '../src/o+ve.jpg'
import Navigation from './Navigation/Navigation.react';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
        {/* <Content request={request} /> */}
    </div>
  );
}

export default App;
