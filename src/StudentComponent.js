import React, { Component } from 'react'

class StudentComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            emailId:'',
            address:'',
            gender:''
        }

        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changegenderHandler=this.changegenderHandler.bind(this);
      
        this.saveStudent=this.saveStudent.bind(this);
       
    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }

    changeAddressHandler=(event)=>{
        this.setState({address: event.target.value});
    }
    changegenderHandler=(event)=>{
        this.setState({gender: event.target.value});
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student={firstName: this.state.firstName,lastName: this.state.lastName,emailId: this.state.emailId, address: this.state.address,gender:this.state.gender};
        console.log('Student=>'+JSON.stringify(student));
       
        
    }

    cancel(){
        this.props.history.push();
    }

    render(){
        return(
            <div>

            <div className="container">
                <div className="row">
                    <br></br>
                    <h1 className="text-center">Student Registration Form</h1>
                    <br></br>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Date of Birth</label>
                                    <input type="date" placeholder="date of birth" name="lastName" className="form-control"
                                    value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Class:</label>
                                    <select placeholder="Email" name="emailId" className="form-control"
                                    value={this.state.emailId} onChange={this.changeEmailIdHandler}>
                                     <option value="1">l</option>
                                     <option value="2">ll</option>
                                     <option value="3">lll</option>
                                     <option value="4">lV</option>
                                     <option value="5">V</option>
                                     <option value="6">Vl</option>
                                     <option value="7">Vll</option>
                                     <option value="8">Vlll</option>
                                     <option value="9">lX</option>
                                     <option value="10">X</option>
                                     <option value="11">Xl</option>
                                     <option value="12">Xll</option>
                                     
                                   
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Division:</label>
                                    
                                    <select placeholder="Address" name="address" className="form-control"
                                    value={this.state.address} onChange={this.changeAddressHandler}>
                                         <option value="A">A</option>
                                     <option value="B">B</option>
                                     <option value="C">C</option>

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Gender</label><br/>
                                    <input type="radio"  name="gender"  
                                    value="male" onChange={this.changegenderHandler}/>
                                     <label>male</label><br/>
                                     <input type="radio"  name="gender"  
                                    value="female" onChange={this.changegenderHandler}/>
                                     <label>female</label>
                                </div>
                                <div>
                                
                                </div>
                                <br></br>
                                <br></br>
                                <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div  className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h5>Name :{this.state.firstName}</h5>
                    <h5>Date of Birth:{this.state.lastName}</h5>
                    <h5>Class :{this.state.emailId}</h5>
                    <h5>Division :{this.state.address}</h5>
                    <h5>Gender :{this.state.gender}</h5>
                    </div>
                    
                </div>
            </div>
            </div>
        )
    }
}

export default StudentComponent
