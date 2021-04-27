import React, { Component } from "react";
import "./UserOrder.css";
import axios from 'axios';


export class UserOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {

      orders: [],
      OrderIs: null,
      loading:true
    };
  }

  handleOrderIs(e) {
    let OrderIs = e.target.value
    this.setState({ OrderIs: OrderIs })
  }

  handleUpload(e) {
    let OrderIs = this.state.OrderIs
    let formdata = new FormData()

    formdata.append('OrderIs', OrderIs)

    axios({
      url: `http://localhost:8020/order/list`,
      method: "POST",
      headers: {
        authorization: `your token`
      },
      data: formdata
    })
      .then(res => {
        const orders = res.data;
        this.setState({ orders });
      })

  }

  renderTableData() {

    this.state.orders.map(list => <div>
      <div>{list.name}</div>
    </div>
    )
  }

  render() {
    const { id } = this.state;

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

          <div className="text1">
            <input type="text" className="text2" name="OrderIs" onChange={(e) => this.handleOrderIs(e)} />
          </div>

          <div className="button1">
            <button className="btn1" onClick={(e) => this.handleUpload(e)}>Upload</button>
          </div>
        </div>

          <div>
            <table id="students1">
              <tbody>{this.renderTableData()}</tbody>
            </table>
          </div>
        </div>
     
    );
  }
}

export default UserOrder;
