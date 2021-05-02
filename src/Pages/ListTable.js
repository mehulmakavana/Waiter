import React, { Component } from 'react';
import './ListTable.css'

export class ListTable extends Component {

    constructor(props) {

        super(props);
        this.state = {

            people: [],

        }
    }


    async componentDidMount() {

        const url = "http://localhost:8020/book/tables"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.tables, loading: false });
        this.searchArray = data
      }

     

      renderTableData() {
        return this.state.people.map((data) => {
            const { _id, table,size,Status } = data
            return (

                <table id="table1">

                <tr key={_id}>

                    <td><div className="tablelist">{table}</div></td>

                    <td><div className="size">{size}
                    </div></td>

                    <td><div className="status">{Status}
                    </div></td>

                </tr>
                </table>
            )
        })
    }

    render() {

        return (

            <div>

                <h1>List Of Table</h1>

                <div className="flex">

                    <div className="content">

                        <table id="table1" >

                            <tr>
                                <th>Table</th>
                                <th>Size</th>
                                <th>Status</th>
                            </tr>

                        </table>

                    </div>

                    <div>

                        <table id='students1'>
                            <tbody>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        )
    }
}

export default ListTable

