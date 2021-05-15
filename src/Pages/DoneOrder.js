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
        <div className="dnoc">
          <div className="doc">
            <div className="doc1">
              {this.state.AllOrder.map((item) => (
                <div key={item._id}>
                  <div className="don">
                    <div className="don1"> Name :- {item.name}</div>
                    <div className="don1"> Time :- {item.createdAt}</div>
                    <div className="don1"> Grand Total(Rs) :- {item.grandTotal}</div>
                    

                  </div>

                  <table className="dot">
                    <td>Product</td>
                    <td>Qty</td>
                    <td><div className="pt">Price(Rs)</div></td>
                    <td><div className="pt">Total(Rs)</div></td>
                  </table>

                  {item.items.map((order) => (
                    <div key={order._id}>
                      <table className="dot1">
                        <tr>
                          <td>
                            <div>{order.product_id.name}</div>
                          </td>
                          <td>
                            <div>{order.qty}</div>
                          </td>
                          <td>
                            <div className="pt">{order.product_id.offerPrice}</div>
                          </td>
                        
                          <td>
                            <div className="pt">{order.total}</div>
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

export default DoneOrder;
