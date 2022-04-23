function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark primary">
        <a className="navbar-brand" href="#">
          <span title="Home">BadBank</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">
                <span title="Click Here if you need to create an account">Create Account</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">
                <span title="Click here to put money in to your account">Deposit</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">
                <span title="Click here to take money out of your account">
                  Withdraw
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">
                <span title="User account data">AllData</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}