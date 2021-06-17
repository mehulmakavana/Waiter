import React, { Component } from "react";
import "./SendItem.scss";
import axios from "axios";

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

  fetch(recipeUrl, requestMetadata)
      .then(res => res.json())
      .then(recipes => {
          this.setState({ recipes });
      });
    }



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

  render() {
    return (
      <div>
        <h1> Create Complaints </h1>
        <div>
          <table className="ccmt">
            <td>Name</td>
            <td>Table Number</td>
          </table>

         
        </div>
      </div>
    );
  }
}

export default CreateComplaints;


