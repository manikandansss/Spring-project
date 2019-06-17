import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class First extends React.Component{
call=(e)=>{
    alert("inserted sucess")
}

render(){

    return(

<div> <h3> STUDENT DETAIL </h3>
<Paper >
        
<TextField label="RollNumber" ></TextField><br></br>
<TextField label="Name"></TextField><br></br>
<TextField label="Age"></TextField><br></br>
Male <Radio name="gen" value="Male"></Radio>
Female<Radio name="gen" value="female"></Radio> <br></br>
DEPARTMENT :<Select>
       <MenuItem value="CSE">CSE</MenuItem>
      <MenuItem value="EEE">EEE</MenuItem>
      <MenuItem value="ECE">ECE</MenuItem>
</Select><br></br>

<Button variant="contained" color="primary" onClick={this.call}>INSERT</Button>

      </Paper>
</div>

    );
}}
class Second extends React.Component{
render(){
return(
    <div><h5> ENTER YOUR CORRECT ROLLNUMBER </h5>
    <TextField label="Rollnumber"></TextField>
    <Button variant="contained" color="primary" href="#/first">SUBMIT</Button>
    </div>
);
}}
class Third extends React.Component{
    render(){
        return(
            <div><h3></h3>
            <TextField label="Rollnumber"></TextField>
            <Button variant="contained" color="primary">VIEW</Button><br></br>
         
            <LinearProgress color="secondary" value="ssssssss"/>
            <p>Current student detail to show press on view button</p>

            <Button variant="contained" color="primary">VIEW_ALL</Button>
            </div>
            );
    }
}
class Corout extends React.Component{
constructor(){

    super();
    this.state={


        route:window.location.hash.substr(1)
    }
}
componentDidMount(){
  window.addEventListener('hashchange',()=>{

this.setState({
    route:window.location.hash.substr(1)
})

  })

}
    render(){
        


let Link ;
switch (this.state.route) {
    case '/first':
        Link =First;
    break;
        
        case '/second':
            Link =Second;
        break;
case '/third':
    Link=Third;
    break;

    default :
        Link=First;
       
}

return(
    <div>

<AppBar position="static">
        <Toolbar variant="dense">
         
         
         
          <Typography variant="h6" color="inherit">
            
            <Button variant="" color="inherit"  href="#first">INSERT</Button>
        <Button variant=""  color="inherit" href="#/second" > UPDATE  </Button>
        <Button variant=""  color="inherit" href="#/third">VIEW</Button>
          </Typography>
        </Toolbar>
      </AppBar>


      
      <Link/>
    </div>

)
      
    }
}export default Corout;