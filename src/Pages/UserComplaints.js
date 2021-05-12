import React, { Component } from 'react';
import './UserComplaints.scss'

export class UserComplaints extends Component {

  constructor(props) {

    super(props);
    this.state = {

      people: [],
      
    }
  }

  async componentDidMount() {

    const url = "http://localhost:8020/complaint/complaints"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.complaints, loading: false });
    this.searchArray = data

  }


  render() {

    return (

      <div>
      <h1>Complaints</h1>
      <div>
      <table className="ucmt">
       
       <td>Title</td>
       <td>Message</td>
       <td>Time</td>
  
    
     </table>
        {this.state.people.map((complaints) => (
          <div key={complaints._id}>
            <div>
           
              <table className="ucmt1">
                  <tr>
                    <td> {complaints.title}</td>
                    <td> {complaints.message}</td>
                    <td>{complaints.created_At}</td>
                    
                  </tr>
                  </table>
              
              </div>

           
          </div>
        ))}
      
      </div>
    </div>
  );
}
}

export default UserComplaints

