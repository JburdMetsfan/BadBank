function App() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{users:[{name: "hannah",email: "hannah@mit.edu",password: "donottell",balance: 100,},],}}>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); */