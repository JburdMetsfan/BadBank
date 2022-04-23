function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>User Account Data</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}