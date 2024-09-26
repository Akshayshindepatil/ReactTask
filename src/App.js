import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div style={{ border: "2px solid black" }}>
      <div
        style={{
          display: "flex",
          backgroundColor: "blue",
          color: "white",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <h6 style={{ margin: "20px" }}>Inventory Management System</h6>
        <h6 style={{ margin: "20px" }}> Home</h6>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form>
          <input type="checkbox"></input>
          <label>Item</label>
          <input type="checkbox"></input>
          <label>Supplier</label>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Item Details</h2>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "lightblue",
            width: "70%",
            height: "300px",
            borderRadius: "20px",
          }}
        >
          <form>
            <label>Item Name</label>
            <br></br>
            <input type="text"></input>
            <br></br>
            <label>Quntity</label>
            <br></br>
            <input type="number"></input>
            <br></br>
            <label>Unit Price</label>
            <br></br>
            <input type="number"></input>
            <br></br>
            <label>Date Of Submission</label>
            <br></br>
            <input type="Date"></input>
            <br></br>
          </form>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Suplier Detail</h2>

      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "lightblue",
            width: "70%",
            height: "300px",
            borderRadius: "20px",
          }}
        >
          <form>
            <label>Suplier Name</label>
            <br></br>
            <input type="text"></input>
            <br></br>
            <label>Company Name</label>
            <br></br>
            <input type="text"></input>
            <br></br>
            <label>Contry</label>
            <br></br>
            <input type="text" >
            
            </input>
            <br></br>
            <label>State</label>
            <br></br>
            <input type="text"></input>
            <br></br>
            <label>City</label>
            <br></br>
            <input type="text"></input>
            <br></br>
            <label>Email Adress</label>
            <br></br>
            <input type="text"></input>
            <br></br>
          </form>
        </div>
        </div>
      
      

    </div>
  );
}

export default App;
