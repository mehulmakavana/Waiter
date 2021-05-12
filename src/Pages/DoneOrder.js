import React, { Component } from "react";
import "./DoneOrder.css";

export class DoneOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllOrder: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const url = "http://localhost:8020/order/list";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          OrderIs: "Done",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      this.setState({ AllOrder: data.list });
      this.searchArray = data;
    } catch (err) {}
  }

  render() {
    return (
      <div>
        <h1>Done Orders</h1>
        <div>
          <table className="dot">
            <td>ProductId</td>
            <td>Qty</td>
            <td>Priority</td>
            <td>Price</td>
            <td>Total</td>
          </table>

          {this.state.AllOrder.map((item) => (
            <div key={item._id}>
             
              {item.items.map((order) => (
                <div key={order._id}>
                  <table className="dot1">
                    <tr>
                      <td>
                        <div>{order.productId}</div>
                      </td>
                      <td>
                        <div>{order.qty}</div>
                      </td>
                      <td>
                        <div>{order.priority}</div>
                      </td>
                      <td>
                        <div>{order.productPrice}</div>
                      </td>
                      <td>
                        <div>{order.total}</div>
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

export default DoneOrder;
