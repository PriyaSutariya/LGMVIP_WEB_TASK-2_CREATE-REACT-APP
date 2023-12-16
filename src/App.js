import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import logo from "./logo.png";
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  const loadUser = () => {
    axios.get("https://reqres.in/api/users?page=1").then((res) => {
      setUsers(res.data.data);
    }).catch((e) => {
      console.log(e);
    })
  };

  return (
    <div className="App" style={{background: "linear-gradient(45deg, #ffccb3, #2D5CFE)", marginTop: "-8px", marginLeft: "-8px", marginRight: "-8px"}}>
      <div className="header" style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{display: "flex", columnGap: "10px"}}>
          <img src={logo} alt=" Company Logo" style={{width: "70px"}}></img>
          <h1 style={{fontSize: "30px"}}>True Solutions</h1>
        </div>
        <Button variant="contained" color="success" onClick={loadUser} style={{borderRadius: "20%", marginRight: "10px"}}>Get Users</Button>
      </div>
      <div className="content" style={{display: "flex", marginTop: "72px"}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginLeft: "20px", marginRight: "40px", justifyContent: "center"}}>
          {users.map((user) => (
            <Grid item xs={2} sm={4} md={4} key={user.id}>
                <div className="card" style={{border: "1px solid black", background: "white"}}>
                  <div className="main" style={{paddingTop: "10px"}}>
                    <center>
                      <img src={user.avatar} alt="user Avatar"></img>
                    </center>
                    <div className="body">
                      <center>
                        <h3 key={user.id}>ID : {user.id}</h3>
                        <h4 key={user.id}>
                          {`${user.first_name} ${user.last_name}`}
                        </h4>
                        <h6 key={user.id}>{user.email}</h6>
                      </center>
                    </div>
                  </div>
                </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default App;
