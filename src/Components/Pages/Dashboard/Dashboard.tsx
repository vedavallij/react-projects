import './Dashboard.css';

function Dashboard() {
    const stockData = [
        { id: 1, fruit: 'Apples', quantity: '150 kg', price: '₹100/kg', value: '₹15000' },
        { id: 2, fruit: 'Bananas', quantity: '200 dozen', price: '₹50/dozen', value: '₹10000' },
        { id: 3, fruit: 'Oranges', quantity: '10 kg', price: '₹120/kg', value: '₹1200' },
        { id: 4, fruit: 'Grapes', quantity: '20 kg', price: '₹50/kg', value: '₹1000' },
        { id: 5, fruit: 'Guava', quantity: '30 kg', price: '₹30/kg', value: '₹900' },
        { id: 6, fruit: 'Mustard Apple', quantity: '10 kg', price: '₹90/kg', value: '₹900' },
        { id: 7, fruit: 'Pomegranate', quantity: '15 kg', price: '₹100/kg', value: '₹1500' },
        { id: 8, fruit: 'Papaya', quantity: '10 kg', price: '₹40/kg', value: '₹400' }
    ];

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
                            <th>Quantity</th>
                            <th>Price per Unit</th>
                            <th>Stock Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.fruit}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
