
function Home(){
  return (
    <Card
      txtcolor="white"
      bgcolor="primary"
      header="Welcome to Bad Bank"
      title="Proceed With Caution"
      text="Utilization of this banking app is at your own risk. BadBank is not liable for any miscalculation of funds."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
