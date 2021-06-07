import React, { Component } from "react";
import "./SendItem.scss";
import axios from "axios";

export class CreateComplaints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      _id :'',
      showPopup: false,
      loading: true,
    };
  }

  async componentDidMount() {
    const url = "http://localhost:8020/order/getorders";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.orders, loading: false, _id : data.orders._id});
    this.searchArray = data;
    
  }


  handleSend(e) {
    axios({
      url: `http://localhost:8020/order/tokitchen/${this._id}/${this.props._id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.data)
      .then((data) => {
        const { message } = data;
        this.setState({ message });
      });
  }

  render() {
    return (
      <div>
        <h1> Create Complaints </h1>
        <div>
          <table className="ccmt">
            <td>Name</td>
            <td>Table Number</td>
          </table>

          {this.state.people
            .filter((order) => order.OrderIs === "Pending")
            .map((order) => (
              <div key={order._id}>
                <table className="ccmt1">
                  <tr>
                    <td>{order._id}</td>
                    <td>{order.name}</td>
                  </tr>
                </table>

                {order.items.map((item) => (
                  <div key={item._id}>
                    <table className="ccmt1">
                      <tr>
                        <td>{item._id}</td>
                        <td>
                          <button onClick={(e) => this.handleSend(e)}>
                            Send
                          </button>
                        </td>
                      </tr>
                    </table>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default CreateComplaints;
