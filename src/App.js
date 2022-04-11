import './App.css';
import axios from 'axios';
import React from 'react';
import Order from './Order';

const baseUrl = "http://localhost:8080/api/v1"
export default function App() {
  const [ orders, setOrders ] = React.useState(null)

  React.useEffect(() => {
    axios.get(baseUrl + "/orders")
    .then(response => {
      setOrders(response.data)
    })
  }, [])

  if (!orders) return null

  return (
    <div className="App">
      { orders.map(order => <Order key={order.id} order={order}/>)}
    </div>
  );
}
