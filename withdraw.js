
function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(ctx.users[0].balance);
  const [movements, setMovements] = React.useState([]);

  return (
    <Card
      txtcolor="white"
      bgcolor="warning"     
      header="Withdraw"
      status={status}
      body={
        show ? (
          <WithdrawForm setShow={setShow} />
        ) : (
          <WithdrawMessage setShow={setShow} />
        )
      }
    />
  );

  function WithdrawForm(props) {
    const [withdraw, setWithdraw] = React.useState("");
    const [disabled, setDisabled] = React.useState(true);

    function handleWithdraw() {
      if (!validate(Number(withdraw), balance)) return;

      setBalance(balance - withdraw);
      ctx.users[0].balance = balance - Number(withdraw);
      ctx.users[0].movements.push({
        date: getDate(),
        type: "withdraw",
        amount: withdraw,
      });
      setWithdraw("");
      setShow(false);
    }

    return (
      <>
        <span className="balance-information">Account Balance ${balance}</span>
        <br />
        <br />
        Withdraw Amount
        <input
          type="input"
          className="form-control"
          id="withdraw"
          placeholder="Withdraw Amount"
          value={withdraw}
          onChange={(e) => {
            setWithdraw(e.currentTarget.value);
            setDisabled(false);
          }}
        />
        <br />
        <button
          type="submit"
          className="btn btn-light"
          onClick={handleWithdraw}
          disabled={disabled}
        >
          Withdraw
        </button>
      </>
    );
  }

  function WithdrawMessage(props) {
    return (
      <>
        <span className="balance-information">Account Balance ${balance}</span>
        <br />
        <br />
        <h5>Successful Withdrawl</h5>
        <button
          type="submit"
          className="btn btn-light"
          onClick={() => props.setShow(true)}
        >
          Withdraw Again
        </button>
      </>
    );
  }

  function getDate() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  }

  function validate(withdraw, balance) {
    if (isNaN(withdraw)) {
      setStatus("Error: did not enter a valid number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (withdraw > balance) {
      setStatus("Error: Insuffienct funds");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (withdraw < 1) {
      setStatus("Error: Lowest withdrawl amount is $1");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }
}