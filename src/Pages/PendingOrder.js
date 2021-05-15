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
        <h1>Pending Orders</h1>
        <div className="pdoc">
          <div className="poc">
            <div className="poc1">
              {this.state.AllOrder.map((order) => (
                <div key={order._id}>
                  <div className="pon">
                  <div className="pon1"> Name :- {order.name}</div>
                  <div> Time :- {order.createdAt}</div>
                  </div>

                  <table className="pot">
                    <td>Product</td>
                    <td>Qty</td>
                    <td>Priority</td>
                    <td>
                      <div className="pp">Price(RS)</div>
                    </td>
                  </table>

                  {order.items.map((item) => (
                    <div key={item._id}>
                      <table className="pot1">
                        <tr>
                          <td>
                            <div>{item.product_id.name}</div>
                          </td>

                          <td>
                            <div >{item.qty}</div>
                          </td>
                          <td>
                            <div>{item.priority}</div>
                          </td>


                          <td>
                            <div className="pp">{item.productPrice}</div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PendingOrder;
