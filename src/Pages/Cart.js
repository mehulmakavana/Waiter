import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "./carts.jpg";
import "./Cart.scss";
import "./Pop-up.css";
import axios from "axios";

class DeletePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  handleDelete() {
    fetch("http://localhost:8020/cart/emptycart", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ` + localStorage.getItem("token"),
      },
    }).then((data) => {
      data.json().then((response) => {
        window.location.reload(false);
      });
    });
  }

  render() {
    return (
      <div className="Deletepopup">
        <div className="Deletepopup_inner">
          <h1>{this.props.text}</h1>
          <div className="close-set">
            <button className="close-btn" onClick={this.props.closePopup}>
              X
            </button>
          </div>

          <div>
            <div className="form-group">
              <div>Are You Sure to Delete Cart !</div>
              <div className="order-btn">
                <button className="cart-button" onClick={this.handleDelete}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PopupParcel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: null,
    };
  }

  async handleParcel(name) {
    try {
      const response = await fetch(
        "http://localhost:8020/order/parcel/makeorder",
        {
          method: "PUT",
          body: JSON.stringify({
            name: name,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ` + localStorage.getItem("token"),
          },
        }
      );
      let data = await response.json();
      alert("Your Order is Submit !");
      console.log(data);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  }

  handleName(e) {
    let name = e.target.value;
    this.setState({ name: name });
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <div className="close-set">
            <button className="close-btn" onClick={this.props.closeParcelPopup}>
              X
            </button>
          </div>

          <div>
            <div className="form-group">
              <label htmlFor="Order-Name">Order Name</label>
              <div>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Enter Order Note"
                  onChange={(e) => this.handleName(e)}
                />
              </div>
              <div className="order-btn">
                <button
                  className="cart-button"
                  onClick={() => this.handleParcel(this.state.name)}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PopupTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      table: "",
     
      loading: true,
    };
  }

  handleName(e) {
    let name = e.target.value;
    this.setState({ name: name });
  }

  handleTable(e) {
    let table = e.target.value;
    this.setState({ table: table });
  }

  handleUpload(e) {
    let name = this.state.name;
    let table = this.state.table;
    let formdata = new FormData();

    formdata.append("name", name);
    formdata.append("table", table);

    axios({
      url: `http://localhost:8020/order/waiter/makeorder`,
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ` + localStorage.getItem("token"),
      },

      data: formdata,
    })
      .then((res) => res.data)
  }


  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <div className="close-set">
            <button className="close-btn" onClick={this.props.closeTablePopup}>
              X
            </button>
          </div>

          <div>
            <div className="form-group">
              <div className="sd">Name</div>
              <div className="sd1">
                <input
                  type="text"
                  className="sd2"
                  name="name"
                  onChange={(e) => this.handleName(e)}
                />
              </div>

              <div className="ed">Table Number</div>
              <div className="ed1">
                <input
                  type="text"
                  className="ed2"
                  name="table"
                  onChange={(e) => this.handleTable(e)}
                />
              </div>

              <div className="rb">
                <button className="rb1" onClick={(e) => this.handleUpload(e)}>
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cartItem: [],
      quantity: 0,
      subTotal: null,
      showPopup: false,
      showParcelPopup: false,
      showDeletePopup: false,
      showTablePopup: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  toggleTablePopup() {
    this.setState({
      showTablePopup: !this.state.showTablePopup,
    });
  }

  toggleParcelPopup() {
    this.setState({
      showParcelPopup: !this.state.showParcelPopup,
    });
  }

  toggleDeletePopup() {
    this.setState({
      showDeletePopup: !this.state.showDeletePopup,
    });
  }

  async componentDidMount() {
    try {
      const url = "http://localhost:8020/cart/getcart";
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      this.setState({
        cartItem: data.Your_Cart.items,
        subTotal: data.Your_Cart.subTotal,
        loading: false,
      });
      this.searchArray = data;
    } catch (err) {}
  }

  async placeOrder() {
    try {
      const response = await fetch("http://localhost:8020/order/makeorder", {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });
      let data = await response.json();
      alert("Your Order is Submit !");
      console.log(data);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
   
      return (
        <div className="empty-cart">
          <div className="transparent-cart">
            <div className="logo">
              <img height="200px" width="200px" src={img} alt="" />
            </div>
            <div className="text-area">
              <div className="state">Opps ! Your cart is Empty</div>
              <div className="state">Please Visit Our Menu First.</div>
            </div>
            <div className="emptycart_btn">
              <div className="buttons">
                <Link to="/menu">
                  <button className="cart-menu">Menu</button>
                </Link>
              </div>

              <div className="buttons">
                <Link to="/orders">
                  <button className="cart-order">View Order</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    
  

    return (
      <div>
        <div className="cartbox1">
          <div className="ListS">
            <h1 className="titleS">Cart</h1>
          </div>

          <div className="cartView">
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

            <div className="Grand-Total">
              Grand Total = {this.state.subTotal} ₹
            </div>

            <button
              className="cart-button"
              onClick={this.toggleTablePopup.bind(this)}
            >
              Book Table
            </button>

            {this.state.showTablePopup ? (
              <PopupTable
                text="Close Me"
                closeTablePopup={this.toggleTablePopup.bind(this)}
              />
            ) : null}

            <button
              className="cart-button"
              onClick={this.toggleParcelPopup.bind(this)}
            >
              Parcel Order
            </button>

            {this.state.showParcelPopup ? (
              <PopupParcel
                text="Close Me"
                closeParcelPopup={this.toggleParcelPopup.bind(this)}
              />
            ) : null}

            <button
              className="cart-button"
              onClick={this.toggleDeletePopup.bind(this)}
            >
              send
            </button>

            {this.state.showDeletePopup ? (
              <DeletePopup
                text="Close Me"
                closePopup={this.toggleDeletePopup.bind(this)}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
            }
          }
  
export default Cart;
