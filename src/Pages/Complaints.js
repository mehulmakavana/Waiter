import React, { Component } from 'react';
import './Complaints.scss'

export class Complaints extends Component {

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
       <tr>
       <th>Title</th>
       <th>Message</th>
       </tr>
    
   
        {this.state.people.map((complaints) => (
          <div key={complaints._id}>
            <div>
           
          
                  <tr>
                    <td> {complaints.title}</td>
                    <td> {complaints.message}</td>
                    
                  </tr>
                 
              
              </div>

           
          </div>
        ))}
       </table>
      </div>
    </div>
  );
}
}

export default Complaints

