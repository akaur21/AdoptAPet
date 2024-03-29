const SignUp = () => {
    const data = {
        "id": 0,
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log({e});
      }
    return (
        <div className="signup-wrapper">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" />
                </fieldset>

                <fieldset>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" placeholder="First Name" />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" placeholder="Last Name" />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" />
                </fieldset>
                <fieldset>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" id="confirmpassword" placeholder="Confirm Password" />
                </fieldset>
                <fieldset>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" placeholder="Phone" />
                </fieldset>
                <button>Signup</button>
            </form>
        </div>
    )
}

export default SignUp;