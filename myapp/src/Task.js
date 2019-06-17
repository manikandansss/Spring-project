import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

 class Task extends React.Component{
constructor(){
    super();
this.state={

Accountnumber:"",
Name:"",
BalanceAmount:"",
AccountType:"",
BankName:"",
tat:"",
isToggleOn: false

}}

addnumber=(e)=>{

    this.setState({
        Accountnumber: e.target.value
              
    });
}
addname=(e)=>{
 this.setState({
    Name :e.target.value
 });

}
addbalance=(e)=>{

    this.setState({
        BalanceAmount :e.target.value
    });
}
onClick = () => {
    console.log("sucesss")
    this.setState ({
    isToggleOn:!this.state.isToggleOn
    
 
})
}
Acctype=(e)=>{
  
this.setState({
  AccountType : e.target.value
})

}
selectbank=(e)=>{
  
this.setState({

  BankName : e.target.value
})
}
appbartab=(event)=>{

  this.setState({
    tat:event.target.value
  })
}
 
render(){
  
   
return(

      <div>
     

        
    


        
 

<TextField    label="Accountnumber"  onChange={this.addnumber} /><br></br>
<TextField label="Name"   onChange={this.addname} /><br></br>
<TextField label="BalanceAmount" onChange={this.addbalance}/><br></br>

 
<form>--AccountType--<br></br>
Saving<Radio name="type" value="saving" onChange={this.Acctype}  />
Current<Radio name="type" value="current" onChange={this.Acctype} />

</form>
<h2>{this.state.BankName}</h2>

Choose bank :<Select onChange={this.selectbank}>
          <MenuItem name ="s" value="SBI">SBI</MenuItem>
          <MenuItem name ="s2" value="IOB">IOB</MenuItem>
          <MenuItem value="IB">IB</MenuItem>
          <MenuItem value ="ICICI">ICICI</MenuItem>
          <MenuItem value ="HDFC">HDFC</MenuItem>
</Select><br></br>
<Button variant="contained" color="primary" onClick={this.onClick} >  CLICK </Button>



{this.state.isToggleOn &&

<Child Accno={this.state.Accountnumber}Child name={this.state.Name}Child bal={this.state.BalanceAmount}
Child acctype={this.state.AccountType}Child bankname={this.state.BankName}/>
}
 

</div>



);

} }


 class Child extends React.Component{
render(){

    

      return(
<div>


<Table >
          <TableHead backgroundcolor="green">
            <TableRow>
           
              <TableCell align="right">Accountnumber</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">BalanceAmount</TableCell>
              <TableCell align="right">Account_Type</TableCell>
              <TableCell align="right">Bank</TableCell>
            </TableRow>
          </TableHead>
        
          <TableBody>
            <TableRow >
                
                <TableCell align="right">{this.props.Accno}</TableCell>
                <TableCell align="right">{this.props.name}</TableCell>
                <TableCell align="right">{this.props.bal}</TableCell>
                <TableCell align="right">{this.props.acctype}</TableCell>
                <TableCell align="right">{this.props.bankname}</TableCell>
              </TableRow>
            
          </TableBody>
        </Table>

</div>

);
}
 }

export default Task;