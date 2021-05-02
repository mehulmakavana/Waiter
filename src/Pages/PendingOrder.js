import React, { Component } from "react";
import "./PendingOrder.css";

export class PendingOrder extends Component {
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
          OrderIs: "Pending",
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
        <h1>Orders</h1>

        <div className="flex">
          <table id="table1">
            <tr>
              <th>ProductId</th>
              <th>Qty</th>
              <th>Priority</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </table>
        </div>

        <div>
          {this.state.AllOrder.map((order) => (
            <div key={order._id}>
              <div></div>
              {order.items.map((item) => (
                <div key={item._id}>
                  <table className="all">
                    <tr >
                      <td>
                        <div className="pi">{item.productId}</div>
                      </td>                      
                      <td>
                        <div className="qty">{item.qty}</div>
                      </td>
                      <td>
                        <div className="prt">{item.priority}</div>
                      </td>
                      <td>
                        <div className="prc">{item.productPrice}</div>
                      </td>
                      <td>
                        <div className="ttl">{item.total}</div>
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

export default PendingOrder;
