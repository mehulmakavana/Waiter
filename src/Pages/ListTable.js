import React, { Component } from 'react';
import './ListTable.css'

export class ListTable extends Component {

    constructor(props) {

        super(props);
        this.state = {

            tables: [],

        }
    }


    async componentDidMount() {

        const url = "http://localhost:8020/book/tables"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ tables: data.tables, loading: false });
        this.searchArray = data
      }
     

    render() {

        return (

            <div>
        <h1>Table List</h1>

        <div>
          <table className="tlt">
            <td>User Id</td>
            <td>Waiting List</td>
            <td>Table No</td>
            <td>Table Size</td>
            <td>Status</td>
          </table>
      
          {this.state.tables.map((list) => (
            <div key={list._id}>
                  <table className="tlt1">
                    <tr>
                      <td>
                        <div>{list._id}</div>
                      </td>
                      <td>
                        <div>{list.waiting}</div>
                      </td>
                      <td>
                        <div>{list.table}</div>
                      </td>
                      <td>
                        <div>{list.size}</div>
                      </td>
                      <td>
                        <div>{list.Status}</div>
                      </td>
                    </tr>
                  </table>
                </div>
             
           
          ))}
        </div>
      </div>
    );
  }
}

export default ListTable

