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

  

  handleTable(e) {
    let table = e.target.value;
    this.setState({ table: table });
  }

  }
  const mockJournalEntry: journalEntry = {
    id: '1',
    title: 'Updated Entry',
    content: 'This is an updated entry.'
  };
  const mockJournalEntryId = '1';
  const mockUserId = 'abc';
  
  const App = () => {
    const [mutate] = useMutation(updateJournalEntryForUser);
  
    const handleJournalEntryUpdate = async () => {
      try {
        const data = await mutate(mockJournalEntry, mockJournalEntryId, mockUserId);
        console.log(data);
      } catch {
      }
    };
  
    return <button onClick={handleJournalEntryUpdate}>Click me!</button>;
  };

  const mockJournalEntry: journalEntry = {
    id: '1',
    title: 'Updated Entry',
    content: 'This is an updated entry.'
  };

  
  const App = () => {

    const [mutate] = useMutation(updateJournalEntryForUser);
  
    const handleJournalEntryUpdate = async () => {
 

    };
  
    return <button onClick={handleJournalEntryUpdate}>Click me!</button>;
  };
  
  handleSend(e) {
    axios({
      url: `http://localhost:8020/order/tokitchen/${this._id}/${this.props._id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.data)
      .then((data) => {
        const { message } = data;
        this.setState({ message });
      });
  }


  render() {
    return (
      <div>
        <h1>Make Order</h1>
        <div className="top">
        <div className="top1">
          <div className="topb">
            <button className="topb1" onClick={this.props.closePopup}>
              X
            </button>
          </div>
          <Scrollbars style={{ width: 1535, height: 625 }}>
            <label className="tod">Order Details</label>

            {this.state.list.map((order) => (
              <div key={order._id}>
                <div className="ton">
                  <div> Name :- {order.name}</div>
                  <div> Time :- {order.createdAt}</div>
                </div>
                <table className="tot">
                  <td>Product</td>
                  <td>Qty</td>
                  <td>Priority</td>
                  <td>
                    <div className="pp">Price(RS)</div>
                  </td>
                  <td>
                    <div className="pp">Total(RS)</div>
                  </td>
                </table>

                {order.items.map((item) => (
                  <div key={item._id}>
                    <table className="tot1">
                      <tr>
                        <td>
                          <div>{item.product_id.name}</div>
                        </td>

                        <td>
                          <div>{item.qty}</div>
                        </td>
                        <td>
                          <div>{item.priority}</div>
                        </td>

                        <td>
                          <div className="pp">{item.productPrice}</div>
                        </td>

                        <td>
                          <div className="pp">{item.total}</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                ))}
              </div>
            ))}
          </Scrollbars>
        </div>
      </div>

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
            </div>
          ))}
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
     
  }
  }



  async handleClick(_id) {
    const url = "http://localhost:8020/menu/menu/" + _id;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ carts: data.products, loading: false });
    this.searchArray = data;
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

  async componentDidMount() {
    const url = "http://localhost:8020/order/getorders";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.orders, loading: false, _id : data.orders._id});
    this.searchArray = data;
    
  }

  componentDidMount() {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
}


componentDidMount() {
  const recipeUrl = 'http://localhost:8080/api/recipes';
  const postBody = {
      type: "hot",
      limit: 10
  };
  const requestMetadata = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(postBody)
  };

  axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    const responesThree = responses[2]
    // use/access the results 
  })).catch(errors => {
    // react on errors.
  })

  @PostMapping("/cart")
public Cart create(String productName, @RequestBody Map<String, String> body){
    String productid = body.get("productid");
    String productname=("productname");

    return cartRepository.save(new Cart(productid,productname));
}

  fetch(recipeUrl, requestMetadata)
      .then(res => res.json())
      .then(recipes => {
          this.setState({ recipes });
      });
    }

    getAbandonedCart() {

      let start_date = moment().subtract(6,'d').format('YYYY-MM-DD')
      let end_date = moment().format('YYYY-MM-DD')
      let measurement = 'value'
      let where1 = JSON.stringify([["Campaign Name","=", this.campaignID]])
      let where2 = JSON.stringify([["$attributed_message","=", 'Abandonded Cart: Email 1']])

      axios.get('/api/v1/metric/' + this.metrics[3].id + '/export?start_date=' + start_date + '&end_date=' + end_date + '&measurement=' + measurement + '&where=' + where1 + '&where=' + where2).then(({data}) => {

          for (let i = 0; i < data.results[0].data.length; i++) {
             this.series[4]['data'].push(data.results[0].data[i].values[0])
          }

      });
  },

    async addTimes(ctx) {
      return new Promise((resolve, reject) => {
      let query = "INSERT INTO AdvisingTimes (id, Day, StartTime, EndTime, TimeBlock) VALUES (?, ?, ?, ?, ?);";
      console.log('About to run this query.', query);
          dbConnection.query(
              {
                  sql: query,
                  values: [ctx.params.id, ctx.params.day, ctx.params.starttime, ctx.params.endtime, ctx.params.timeblock]
              }, (error) => {
                  if (error) {
                      return reject(error);
                  }
              }
  
          )
      }).catch(err => {
          ctx.body = {
              status: "Failed",
              error: err,
              user: null
          };
      });
  
  }

  handleSubmit = e => {
    
    this.setState({ buttonload : true });
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch("api/Authentication/Login", {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            data:{
              CompanyCode : this.props.selectedCompany,
           
              Password : values.password
            }
          })
         })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
          },
     
          (error) => {
            this.setState({ buttonload : false });
            console.log(error)
          })
      }
    });

    render() {
      let list = this.props.data.map(function (comp, i) {
       return (
        <tr key={i+1}>
          <thathname:`/competitions/${comp.id}`,query:{league:comp.league}}}> {comp.caption} </Link></td>
          <td>{comp.league}</td>
          <td>{comp.numberOfTeams}</td>
        </tr>
       );
      }, this);
    
     return (
      <tbody>{list}</tbody>

      
 dataSource(props) {
  var url = 'http://api.football-data.org/v1/competitions/x/teams';
  this.setState({source: url.replace(url.split('/')[5],  this.props.params.id)});
 }

 getTeamsData(){

   cache:false,
   success: function(data){
    this.setState({teamData: data.teams});
   }.bind(this),
   error: function(xhr, status, err){
    console.log(err);
   }
  })}
     );
    }};
  };

  handleSend(e) {
    axios({
      url: `http://localhost:8020/order/tokitchen/${this._id}/${this.props._id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.data)
      .then((data) => {
        const { message } = data;
        this.setState({ message });
      });
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
};


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


           
    );
  }


 