import React,{Component} from "react";
import "./Menu.scss";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      people: [],
      carts: [],
      counter: 0,
      count: 0,
      priority: 1,
      quantity: 1,
      email: "",
      category: "",
      message: "",
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.DecrementCount = this.DecrementCount.bind(this);
    this.incrementQTY = this.incrementQTY.bind(this);
    this.DecrementQTY = this.DecrementQTY.bind(this);
  }
  async componentDidMount() {
    const url = "http://localhost:8020/categorypost/categories";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.categoryposts });
  }

  async handleClick(_id) {
    const url = "http://localhost:8020/menu/menu/" + _id;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ carts: data.products, loading: false });
    this.searchArray = data;
  }

  async addCart(_id, priority, quantity, email) {
    try {
      const response = await fetch(
        "http://localhost:8020/order/orderlist/" + _id +_id,
        {
          method: "POST",
          body: JSON.stringify({
            priority: priority,
            qty: quantity,
            email: email,
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
      let data = await response.json();
      const { message } = data;
      this.setState({ message });

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }


 

  handleEmail(e) {
    let email = e.target.value;
    this.setState({ email: email });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <div className="Allpage">
            <div className="flex1">
              <div className="Lists">
                <h1 className="titles">Category List</h1>
              </div>
              <div className="category-card">
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
              </div>
            </div>
          </div>
        </div>
      );
    }


    return (
      <div>
        <div className="Allpage">
          <div className="flex1">
            <div className="Lists">
              <h1 className="titles">Send order</h1>
            </div>
            <div className="category-card">
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
            </div>
          </div>

          <div className="flex2">
            <div className="Lists">
              <h1 className="titles">Menu List</h1>
            </div>
            <div className="card-menus">
              {this.state.carts.map((person) => (
                <div key={person._id}>
                  <div className="cardItem-menus">
                    <div classname="image">
                      <img width="250px" height="250px" src={person.imageUrl} />
                    </div>
                    <div className="content-data">
                      <div className="menu-data">{person.name}</div>
                      <div className="menu-description">
                        Description :- {person.description}
                      </div>
                      <div className="price">
                        <div className="menu-price">
                          Price :- {person.originalPrice} ₹{" "}
                        </div>
                      </div>
                     

                        <div className="urel" htmlFor="Order-Name">
                          Email Id
                        </div>
                        <div>
                          <input
                            className="urel1"
                            type="text"
                            name="email"
                            onChange={(e) => this.handleEmail(e)}
                          />
                        </div>
                      </div>

                      <div>{this.state.message}</div>

                      <button
                        className="addCart"
                        onClick={() =>
                          this.addCart(
                            person._id,
                            this.state.priority,
                            this.state.quantity,
                            this.state.email
                          )
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
              
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;


class RDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      showPopup: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup(detail) {
    this.setState({
      showPopup: !this.state.showPopup,
      id: detail._id,
    });
  }

  async componentDidMount() {
    const url = "http://localhost:8020/restaurant/totalrestaurants";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.list, loading: false });
    this.searchArray = data;
  }

  render() {
    return (
      <div>
        <h1>Restaurants Details</h1>
        <div>
          <table className="rd">
            <td>RestaurantName</td>
            <td>Payments</td>
            <td>StartTime</td>
            <td>EndTime</td>
            <td>Action</td>
          </table>

          {this.state.people.map((detail) => (
            <div key={detail._id}>
              <div>
                <div>
                  <table className="rd1">
                    <tr>
                      <td> {detail.RestaurantName}</td>

                      <td> {detail.Payments}</td>
                      <td>{detail.created_At}</td>
                      <td>{detail.expireAt}</td>

                      <td>
                      <button
                          className="rdb rdb1"
                          onClick={() => this.togglePopup(detail)}
                        >
                          Validity
                        </button>
                      </td>
                    </tr>
                  </table>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}






