import React, { Component } from "react";
import "./UserOrder.css";

export class UserOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  async componentDidMount() {
    const url = "http://localhost:8020/order/getorders";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.orders, loading: false });
    this.searchArray = data;
  }

  renderTableData() {
    return this.state.people.map((data) => {
      const { _id, grandTotal, name, OrderIs, paymentMethod, userId,qty } = data;
      return (
        <tr key={_id}>
          <div className="userorder">
          <td>
            
            <div className="userid">{userId}</div>
          </td>
          <td>
            <div className="name">{name}</div>
          </td>

          <td>
            <div className="orderis">{OrderIs}</div>
          </td>

          <td>
            <div className="grandtotal">{grandTotal}</div>
          </td>

          <td>
            <div className="payment">{paymentMethod}</div>
          </td>
          </div>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Orders</h1>

        <div className="flex">
          <div className="content">
            <table id="table1">
              <tr>
                <th>User-Id</th>
                <th>Name</th>
                <th>Order-Is</th>
                <th>Grand-Total</th>
                <th>Payment Method</th>

              </tr>
            </table>
          </div>

          <div>
            <table id="students1">
              <tbody>{this.renderTableData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserOrder;
