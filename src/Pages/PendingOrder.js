import React, { Component } from "react";
import "./PendingOrder.css";

export class PendingOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllOrder: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const url = "http://localhost:8020/order/list";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          OrderIs: "Pending",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      this.setState({ AllOrder: data.list });
      this.searchArray = data;
    } catch (err) {}
  }

  render() {
    return (
      <div>
        <h1>Pending Orders</h1>
        <div className="pdoc">
          <div className="poc">
            <div className="poc1">
              {this.state.AllOrder.map((order) => (
                <div key={order._id}>
                  <div className="pon">
                    <div > Name :- {order.name}</div>
                    <div> Time :- {order.createdAt}</div>

                  </div>

                  <table className="pot">
                    <td>Product</td>
                    <td>Qty</td>
                    <td>Priority</td>
                    <td>
                      <div className="pp">Price(RS)</div>
                    </td>
                  </table>

                  {order.items.map((item) => (
                    <div key={item._id}>
                      <table className="pot1">
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
                        </tr>
                      </table>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PendingOrder;

// import React, { Component } from 'react';
// import './ListTable.css'

// class Popup extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       list: [],
     
      
//     };
//   }

//   async componentDidMount() {
//     try {
//       const url = "http://localhost:8020/order/orderlist/" + this.props._id;
//       const response = await fetch(url, {
//         method: "GET",
//       });
//       const data = await response.json();
//       this.setState({
//         list: data.list.orders,
//         loading: false,
        
//       });
//       this.searchArray = data;
//     } catch (err) {}
//   }

//   render() {
//     return (
//       <div className="top">
//         <div className="top1">
//           <div className="topb">
//             <button className="topb1" onClick={this.props.closePopup}>
//               X
//             </button>
//           </div>

//           <label className="tod">Order Details</label>

        

//           {this.state.list.map((order) => (
//             <div key={order._id}>
//               <div className="ton">
//                     <div > Name :- {order.name}</div>
//                     <div> Time :- {order.createdAt}</div>

//                   </div>
//                   <table className="tot">
//                     <td>Product</td>
//                     <td>Qty</td>
//                     <td>Priority</td>
//                     <td>
//                       <div className="pp">Price(RS)</div>
//                     </td>
//                     <td>
//                       <div className="pp">Total(RS)</div>
//                     </td>

//                   </table>

//                   {order.items.map((item) => (
//                     <div key={item._id}>
//                       <table className="tot1">
//                         <tr>
//                           <td>
//                             <div>{item.name}</div>
//                           </td>

//                           <td>
//                             <div>{item.qty}</div>
//                           </td>
//                           <td>
//                             <div>{item.priority}</div>
//                           </td>

//                           <td>
//                             <div className="pp">{item.productPrice}</div>
//                           </td>

//                           <td>
//                             <div className="pp">{item.total}</div>
//                           </td>
//                         </tr>
//                       </table>
//                     </div>
//                   ))}

//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }


// export class ListTable extends Component {

//     constructor(props) {

//         super(props);
//         this.state = {

//             tables: [],
//             showPopup: false,

//         }
//         this.togglePopup = this.togglePopup.bind(this);
//     }


//     async componentDidMount() {

//         const url = "http://localhost:8020/book/tables"
//         const response = await fetch(url);
//         const data = await response.json();
//         this.setState({ tables: data.tables, loading: false });
//         this.searchArray = data
//       }

//       togglePopup(list) {
//         this.setState({
//           showPopup: !this.state.showPopup,
//           id: list._id,
//         });
//       }
     

//     render() {                     

//         return (

//             <div>
//         <h1>Table List</h1>

//         <div>
//           <table className="tlt">
           
//             <td>Table No</td>
//             <td>Person</td>
//             <td>Status</td>
//           </table>
      
//           {this.state.tables.map((list) => (
//             <div key={list._id}>
//                   <table className="tlt1" onClick={() => this.togglePopup(list)}>
//                     <tr>
                                        
//                       <td>
//                         <div>{list.table}</div>
//                       </td>
//                       <td>
//                         <div>{list.size}</div>
//                       </td>
//                       <td>
//                         <div>{list.Status}</div>
//                       </td>
//                     </tr>
//                   </table>

//                   {this.state.showPopup ? (
//                     <Popup
//                       _id={this.state.id}
//                       closePopup={() => this.togglePopup(list)}
//                     />
//                   ) : null}

//                 </div>
             
           
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ListTable


