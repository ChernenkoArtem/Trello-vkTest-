import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout"
import AddNewColumn from "./components/AddNewColumn/AddNewColumn"


function App() {
  return (
    <div className="App">
      <Layout>
        <AddNewColumn/>
      </Layout>

    </div>
  );
}

export default App;
