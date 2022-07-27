// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/pra_components/Header';
import AddEmployee from './components/pra_components/AddEmployee';
import EmployeeFooter from './components/pra_components/EmployeeFooter';
import ViewEmployees from './components/pra_components/ViewEmployees';
import ViewSalaryEmployees from './components/pra_components/ViewSalaryEmployees';
import UpdateEmployee from './components/pra_components/UpdateEmployee';
import AddSalary from './components/pra_components/addSalary';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';



function App() {
  return (
    
   
    <div className="App">
      
      {/* <Header/> */}
      <Router>
      <Switch>
      <Route path = "/update/:id" component = {UpdateEmployee}/>
      <Route path = "/addsalary/:id" component = {AddSalary}/>
      <Header/>
      </Switch>
      <Route path = "/add" component = {AddEmployee}/>
      
      <Route path = "/viewe" component = {ViewEmployees}/>
      <Route path = "/views" component = {ViewSalaryEmployees}/>
      
     

      {/* </Switch> */}
      </Router>
      <EmployeeFooter/>
    </div>
    
   
  );
}

export default App;
