import axios from "axios";
import React, { Component } from "react";
import "./SuperAdmin.scss";
import Navbar from "../Components/Navbar";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RestaurantName: "",
      rest: [],
      message: "",
      loading: true,
    };
  }

  handleRestaurantName(e) {
    let RestaurantName = e.target.value;
    this.setState({ RestaurantName: RestaurantName });
  }

  handleSubmit(e) {
    let RestaurantName = this.state.RestaurantName;

    let formdata = new FormData();

    formdata.append("RestaurantName", RestaurantName);

    axios({
      url: `http://localhost:8020/restaurant/addresto`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      data: formdata,
    })
      .then((res) => res.data)
      .then((data) => {
        const { message } = data;
        this.setState({ message });
      });
  }

  async componentDidMount() {
    const url = "http://localhost:8020/restaurant/totalrestaurants";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ rest: data.list, loading: false });
    this.searchArray = data;
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Create Restaurants</h1>

        <div className="cr">
          <div className="cr1">
            <div className="cr2">
              <div className="resn">Restaurant Name</div>
              <div className="resn1">
                <input
                  type="text"
                  className="resn2"
                  placeholder="Enter The Restaurant Name"
                  name="RestaurantName"
                  onChange={(e) => this.handleRestaurantName(e)}
                />
              </div>

              <div className="rcb">
                <button className="rcb1" onClick={(e) => this.handleSubmit(e)}>
                  Create
                </button>
              </div>
              <div className="rcm">{this.state.message}</div>
            </div>

            <div>
              <table className="rdt">
                <td>Restaurant Name</td>
                <td>Payment</td>
                <td>Restaurant Create Time</td>
                <td>Restaurant Expiry Time</td>
              </table>

              {this.state.rest.map((list) => (
                <div key={list._id}>
                  <table className="rdt1">
                    <tr>
                      <td>
                        <div>{list.RestaurantName}</div>
                      </td>
                      <td>
                        <div>{list.payment}</div>
                      </td>
                      <td>
                        <div>{list.created_At}</div>
                      </td>
                      <td>
                        <div>{list.expireAt}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
