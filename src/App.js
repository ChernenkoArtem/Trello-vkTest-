import React from 'react';
import './App.css';
import ColumnList from "./components/ColumnList/ColumnList"
import AddNewColumn from "./components/AddNewColumn/AddNewColumn"

function App() {

  return (
    <div className="App">
      <ColumnList/>
      <AddNewColumn/>
    </div>
  );
}

export default App;
