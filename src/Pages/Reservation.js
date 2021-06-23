import axios from "axios";
import React, { Component } from "react";

import Navbar from '../Components/Navbar';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Phone: "",
      name: "",
      persons: "",
      message:"",
      loading: true,
    };
  }

  

  handleName(e) {
    let name = e.target.value;
    this.setState({ name: name });
  }

  handlPhone(e) {
    let phone = e.target.value;
    this.setState({ phone: phone });
  }

  handlePerson(e) {
    let persons = e.target.value;
    this.setState({ persons: persons });
  }


  handleSubmit(e) {

    let phone = this.state.phone;
    let name = this.state.name;
    let persons = this.state.persons;

    let formdata = new FormData();

    formdata.append("phone", phone);
    formdata.append("name", name);
    formdata.append("persons", persons);

    axios({
      url: `http://localhost:8020/book/waiterreservation`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      data: formdata,
    })
      .then((res) => res.data)
      .then((data) => {
        const { message } = data;
        this.setState({ message  });
      });
     
  }

  render() {
    return (
      <div>
        <Navbar/>
        <h1>Reservation</h1>

        <div className="mk">
          <div className="mk1">
            <div className="mk2">
              <div className="mon">Name</div>
              <div className="mon1">
                <input
                  type="text"
                  className="mon2"
                  name="name"
                 
                  onChange={(e) => this.handleName(e)}
                />
              </div>

              <div className="moe">Phone Number</div>
              <div className="moe1">
                <input
                  type="text"
                  className="moe2"
               maxLength="10"
                  name="Phone"
                  onChange={(e) => this.handlPhone(e)}
                />
              </div>

              <div className="mot">Person</div>
              <div className="mot1">
                <input
                  type="number"
                  className="mot2"
                min="1"
               
                  name="person"
                  onChange={(e) => this.handlePerson(e)}
                />
              </div>

              <div className="mob">
                <button className="mob1" onClick={(e) => this.handleSubmit(e)}>
                 Reservation
                </button>
                </div>
                <div className="mks">{this.state.message}</div>
           
            </div>
          </div>
        </div>

      
      </div>
    );
  }
}

export default Reservation;
