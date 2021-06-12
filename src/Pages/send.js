import React, { Component } from "react";
import "./SendItem.scss";
import axios from "axios";


export default class MakeOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      table: "",
      items: [],
      message:"",
      loading: true,
    };
  }

  handlEmail(e) {
    let email = e.target.value;
    this.setState({ email: email });
  }

  handleName(e) {
    let name = e.target.value;
    this.setState({ name: name });
  }

  handleTable(e) {
    let table = e.target.value;
    this.setState({ table: table });
  }

  handleOrder(e) {
    let email = this.state.email;
    let name = this.state.name;
    let table = this.state.table;
    let formdata = new FormData();

    formdata.append("email", email);
    formdata.append("name", name);
    formdata.append("table", table);

    axios({
      url: `http://localhost:8020/order/waiter/makeorder`,
      method: "PUT",
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
        <h1>Make Order</h1>

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

              <div className="moe">Email Id</div>
              <div className="moe1">
                <input
                  type="text"
                  className="moe2"
                  name="email"
                  onChange={(e) => this.handlEmail(e)}
                />
              </div>

              <div className="mot">Table Number</div>
              <div className="mot1">
                <input
                  type="number"
                  className="mot2"
                  min="1"
                  name="table"
                  onChange={(e) => this.handleTable(e)}
                />
              </div>

              <div className="mob">
                <button className="mob1" onClick={(e) => this.handleOrder(e)}>
                  Make Order
                </button>
                <div className="mks">{this.state.message}</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="rnv">
          <div className="rnv1">
            <div className="rnv2">
              <table className="rnt">
                <td>Name</td>
                <td>Email Id</td>
                <td>Table Number</td>
              </table>

              <div>
                <table className="rnt1">
                  <tr>
                    <td>{this.state.name}</td>
                    <td>
                      <div>{this.state.email}</div>
                    </td>
                    <td>{this.state.table}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}



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
                   
                  </div>
                ))}
                {this.state.people.map((person) => (
                <div key={person._id}>
                  <div
                    className="cardItems"
                    onClick={() => this.handleClick(person._id)}
                  >
                    <div className="content-data">
                      <div className="category-content">
                        {person.categoryName}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
                 {this.state.people.map((person) => (
                  <div key={person._id}>
                    <div
                      className="cardItems"
                      onClick={() => this.handleClick(person._id)}
                    >
                      <div className="content-data">
                        <div className="category-content">
                          {person.categoryName}
                        </div>
                        <div className="category-content">{person.name}</div>
                      </div>
                    </div>
                  </div>
                ))}
                 <div className="card-menus">
              {this.state.carts.map((person) => (
                <div key={person._id}>
                  <div className="cardItem-menus">
                    <div classname="image">
                      <img
                        width="230px"
                        height="230px"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="content-data">
                      <div className="menu-data">{person.name}</div>
                      <div className="menu-description">
                        Description :- {person.description}
                      </div>
                      <div className="price">
                        <div className="menu-price">
                          price :- {person.originalPrice} ₹{" "}
                        </div>
                      </div>
                      <div>
                        <div className="priority-set">
                          <button
                            type="button"
                            className="priority-btn"
                            onClick={this.incrementCount}
                            
                          >
                            +
                          </button>
                          <div classNam="p-data">
                            Priority : {this.state.priority}
                          </div>
                          <button
                            type="button"
                            className="priority-btn"
                            onClick={this.DecrementCount}
                          >
                            -
                          </button>
                        </div>

                        <div className="Quantity-set">
                          <button
                            type="button"
                            className="Quantity-btn"
                            onClick={this.incrementQTY}
                          >
                            +
                          </button>
                          <div className="q-data">
                            Quantity : {this.state.quantity}
                          </div>
                          <button
                            type="button"
                            className="Quantity-btn"
                            onClick={this.DecrementQTY}
                          >
                            -
                          </button>
                        </div>

                        <div className="Order-Note" htmlFor="Order-Name">
                          Add Notes
                        </div>
                        <div>
                          <input
                            className="input-notes"
                            type="text"
                            name="name"
                            
                            placeholder="Enter Order Note"
                            onChange={(e) => this.handleName(e)}
                          />
                        </div>
                      </div>
                      <button
                        className="addCart"
                        onClick={() =>
                          this.addCart(
                            person._id,
                            this.state.priority,
                            this.state.quantity,
                            this.state.name
                          )
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
           
            ))}
        </div>
      </div>
    );
  }
}

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
    if (this.state.loading) {
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
                  <button className="cart-menu">Send</button>
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
    }

    return (
      <div>
        <div className="cartbox1">
          <div className="ListS">
            <h1 className="titleS">Cart</h1>
          </div>

          <div className="cartView">
            {this.state.cartItem.map((item) => (
              <div key={item._id}>
                <div className="cartItems1">
                  <div classname="cart-images">
                    <img
                      height="100px"
                      width="100px"
                      src={item.product_id.imageUrl}
                      alt=""
                    />
                    <div className="fontS">Name:{item.product_id.name}</div>
                  </div>
                  <div className="fontS">Priority:{item.priority}</div>
                  <div className="fontS">
                    Price:{item.productPrice} 🗙 Quantity:{item.qty}
                  </div>
                  <div className="fontS-total">SubTotal:{item.total}</div>
                </div>
                <div className="Line">
                  ______________________________________________________________
                </div>
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
              Delete Cart
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
}