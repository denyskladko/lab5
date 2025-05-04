import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import SideBar from './components/SideBar';
import './App.css';
import getId from './components/helpers';
const Home = () => <div>Welcome to the Home Page</div>;
const About = () => <div>About Us</div>;
const Contact = () => <div>Contact Us</div>;

function App() {
  const menuItems = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
    { text: 'External Link', url: 'https://example.com' },
  ];
console.log(getId('menu-item')); // menu-item_1
console.log(getId('menu-item')); // menu-item_2
console.log(getId('button'));    // button_1
console.log(getId());            // key_1
console.log(getId());            // key_2
console.log(getId('menu-item')); // menu-item_3
  return (
    <div className="App">
      <Header title="Header Component" />
      <div className="main-layout">
         <SideBar title="My Sidebar" menuList={menuItems} />
        <Content title="Content Component" />
      </div>
            <Footer title="Footer Menu" menuList={menuItems} />
    </div>
  );
}
export default App;
