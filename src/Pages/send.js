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

  

  async handleClick(_id) {
    const url = "http://localhost:8020/menu/menu/" + _id;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ carts: data.products, loading: false });
    this.searchArray = data;
  }

  async addCart(_id, priority, quantity, name) {
    try {
      const response = await fetch(
        "http://localhost:8020/cart/addtocart/" + _id,
        {
          method: "POST",
          body: JSON.stringify({
            priority: priority,
            qty: quantity,
            notes: name,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ` + localStorage.getItem("token"),
          },
        }
      );
      this.setState({
        counter: this.state.counter + 1,
        priority: 1,
        quantity: 1,
      });
      this.setState({ index: this.state.index + 1 });

      let data = await response.json();
      alert("Your Order in Cart!");
      console.log(data);
      window.location.reload(false);

     
    } catch (err) {
      console.log(err);
    }
  }


 


  DecrementCount() {
    this.setState({
      priority: this.state.priority - 1,
    });
  }

  incrementQTY() {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  DecrementQTY() {
    this.setState({
      quantity: this.state.quantity - 1,
    });
  }

  handleName(e) {
    let name = e.target.value;
    this.setState({ name: name });
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




