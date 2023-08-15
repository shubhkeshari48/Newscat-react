import React, { Component } from 'react'
import { Navbar } from './components/Navbar'
import News from './components/News'
import { BrowserRouter,Routes,Route } from "react-router-dom";



export default class App extends Component {
  pageSize=12;
  render() {
    return (
        <BrowserRouter>
        <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
        <Route path="/business" element={<News key="business"pageSize={this.pageSize} country="in" category="business"/>}/>
        <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
        <Route path="/health" element={<News key="health"pageSize={this.pageSize} country="in" category="health"/>}/>
        <Route path="/science" element={<News key="science"pageSize={this.pageSize} country="in" category="science"/>}/>
        <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
        <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
        <Route path="/us" element={<News key="us" pageSize={this.pageSize} country="us" />}/>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}