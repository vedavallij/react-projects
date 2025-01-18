import './Login.css'
function Login() {

    return (
        <div className='login-background'>
        <form className="login-form">
            <h2> Login </h2>
            <div className="identity">
                <input type="email" placeholder="Email"></input>
            </div>
            <div className="encrytion">
                <input type="password" placeholder="Password"></input>
            </div>
            <div className="show-password">
                <input type="checkbox" id="show-password"></input>
                <label htmlFor="show-password">Show Password</label>
            </div>
            <button type="submit" className="login-button"> LOGIN </button>
            <div className="extra-links">
                Forgot <a href="Login-Form.html"> Username / Password </a>?
                <p> Don't have an account? <a href="Login-Form.html"> Sign up </a></p>
            </div>
        </form>
        </div>
    )
}

export default Login;