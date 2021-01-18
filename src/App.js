import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import NewPost from './NewPost';
import Post from './Post';

import { BrowserRouter, Route } from 'react-router-dom';
import "./App.css";
function App(){

  return (

    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Route exact path="/" component={Home}></Route>
        <Route path="/add-post" component={NewPost}></Route>
        <Route path="/post/:id" component={Post}></Route>
      </BrowserRouter>
    </div>



  );

}

export default App;
