function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(ctx.users[0].balance);
  const [movements, setMovements] = React.useState(ctx.users[0].movements);

  return (
    <Card
      txtcolor="white"
      bgcolor="success"
      header="Deposit"
      status={status}
      body={
        show ? (
          <DepositForm setShow={setShow} />
        ) : (
          <DepositMessage setShow={setShow} />
        )
      }
    />
  );

  function DepositForm(props) {
    const [deposit, setDeposit] = React.useState("");
    const [disabled, setDisabled] = React.useState(true);

    function handleDeposit() {
      if (!validate(Number(deposit), balance)) return;

      setBalance(balance + Number(deposit));
      ctx.users[0].balance = balance + Number(deposit);
      ctx.users[0].movements.push({
        date: getDate(),
        type: "deposit",
        amount: deposit,
      });
      setDeposit("");
      setShow(false);
    }

    return (
      <>
        <span className="balance-information">Balance ${balance} </span>
        <br />
        <br />
        Deposit Amount
        <input
          type="input"
          className="form-control"
          id="deposit"
          placeholder="Deposit Amount"
          value={deposit}
          onChange={(e) => {
            setDeposit(e.currentTarget.value);
            setDisabled(false);
          }}
        />
        <br />
        <button
          type="submit"
          className="btn btn-light"
          onClick={handleDeposit}
          disabled={disabled}
        >
          Deposit
        </button>
      </>
    );
  }

  function DepositMessage(props) {
    return (
      <>
        <span className="balance-information">Account Balance ${balance}</span>
        <br />
        <br />
        <h5>Successful Deposit</h5>
        <button
          type="submit"
          className="btn btn-light"
          onClick={() => props.setShow(true)}
        >
          Deposit Again
        </button>
      </>
    );
  }

  function validate(deposit, balance) {
    if (isNaN(deposit)) {
      setStatus("Error: did not enter a valid number");
      setTimeout(() => setStatus(""), 8000);
      return false;
    }
    if (deposit < 1) {
      setStatus("Error: Lowest deposit amount is $1");
      setTimeout(() => setStatus(""), 8000);
      return false;
    }
    return true;
  }
}
