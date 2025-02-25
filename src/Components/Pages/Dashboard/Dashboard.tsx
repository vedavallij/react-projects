import './Dashboard.css';

function Dashboard({products}) {
    return (
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
        </div>
    );
}

export default Dashboard;
