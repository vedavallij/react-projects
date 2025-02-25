import { NavLink } from 'react-router';
import './Home.css';

function Home({products}) {
  return (
    <><div className="home-intro">
      <h1>Keep Track of Your Fresh Fruits!</h1>
      <p>
        Never lose track of your fruit inventory with our smart stock management system! Stay up-to-date with the availability
        of your favorite fruits and ensure that you're always ready to meet customer demands. Our simple interface lets you
        monitor your stock in real-time, making it easy to manage purchases and restocking.
      </p>

      <button className="product-button"> <NavLink className="Link" to="/Dashboard"> Check Your Stock Now <span className='arrow'> &rarr; </span> </NavLink> </button>
    </div>

      <h2 className='dashboard'> Our Dashboard </h2>

      <div className="container">

        <div className="left-section">
          <div className="card">
            <h2>Total Fruits in Stock</h2>
            <p>500 kg</p>
          </div>
          <div className="card">
            <h2>Top Selling Fruit</h2>
            <p>Pomegranate</p>
          </div>
          <div className="card">
            <h2>Low Stock Alert!</h2>
            <p>Oranges - 10 kg left</p>
          </div>
        </div>

        <div className="right-section">
          <h2>Current Stock</h2>
          <table>
            <thead>
              <tr>
                <th>Fruit</th>
                <th>Stock</th>
                <th>Price per Kg</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.stock}kg</td>
                  <td>₹{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></>


  );
};

export default Home;


