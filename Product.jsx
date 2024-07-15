import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Alert,
} from "@mui/material";
// import { BillingTable } from "./BillingTable";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export const Product = () => {
  const [desc, setDesc] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [amt, setAmt] = useState(0);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [msg, setMsg] = useState("");
  const [index, setIndex] = useState(null);
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setAmt(qty * price);
  }, [qty, price]);

  const handleDetails = () => {
    if (edit === true) {
      data.splice(index, 1, { desc, qty, price, amt });
      setIndex(null);
      setEdit(false);
      setShow(false);
      setDesc("");
      setQty("");
      setPrice("");
    } else {
      setDesc("");
      setQty("");
      setPrice("");
      setAmt(0);
      setData([...data, { desc, qty, price, amt }]);
      setTotal(total + amt);
    }
  };

  const handleDelete = (ind) => {
    const result = data.filter((elem, i) => i != ind);
    setData(result);
    setMsg("Your List Item Deleted Successfully...");
    setTimeout(() => {
      setMsg("");
    }, 3000);
  };

  const handleUpdate = (item, ind) => {
    setDesc(item.desc);
    setQty(item.qty);
    setPrice(item.price);
    setIndex(ind);
    setEdit(true);
    setShow(true);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Card style={{ border: "5px solid black" }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <img
                  height={200}
                  style={{ position: "relative", left: 130 }}
                  src="https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=612x612&w=0&k=20&c=ecrvXZhimUHnYES-kx7L5b-TDtRU5kAFPpNm0ZtAp1Y="
                  alt=""
                />
                <h1 style={{ textAlign: "center" }}>New Motor Care</h1>
              </Grid>
              <Grid item xs={6}>
                <h3>Enter Your Clients Name</h3>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Enter Your Clients Name"
                />
              </Grid>
              <Grid item xs={6}>
                <h3>Enter Your Clients Address</h3>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Enter Your Clients Address"
                />
              </Grid>
              <Grid item xs={4}>
                <h4>Invoice Number</h4>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Invoice Number"
                />
              </Grid>
              <Grid item xs={4}>
                <h4>Invoice Date</h4>
                <TextField variant="outlined" fullWidth label="Invoice Date" />
              </Grid>
              <Grid item xs={4}>
                <h4>Due Date</h4>
                <TextField variant="outlined" fullWidth label="Vehicle No." />
              </Grid>
              <Grid item xs={3}>
                <h4>Vehicle No.</h4>
                <TextField variant="outlined" fullWidth label="Vehicle No." />
              </Grid>
              <Grid item xs={3}>
                <h4>Kilometer</h4>
                <TextField variant="outlined" fullWidth label="Kilometer" />
              </Grid>
              <Grid item xs={3}>
                <h4>Model No.</h4>
                <TextField variant="outlined" fullWidth label="Model No." />
              </Grid>
              <Grid item xs={3}>
                <h4>Brand Name</h4>
                <TextField variant="outlined" fullWidth label="Brand Name" />
              </Grid>
              <Grid item xs={6}>
                <h4>Client Mobile No.</h4>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Client Mobile No."
                />
              </Grid>
              <Grid item xs={6}>
                <h4>Clients Email Address</h4>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Clients Email Address"
                />
              </Grid>
              <Grid item xs={12}>
                <h4>Item Description</h4>
                <TextField
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  variant="outlined"
                  fullWidth
                  label="Item Description"
                />
              </Grid>
              <Grid item xs={4}>
                <h4>Quantity</h4>
                <TextField
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  variant="outlined"
                  fullWidth
                  label="Quantity"
                />
              </Grid>
              <Grid item xs={4}>
                <h4>Price</h4>
                <TextField
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  variant="outlined"
                  fullWidth
                  label="Price"
                />
              </Grid>
              <Grid item xs={4}>
                <h4>Amount</h4>
                <h4>{amt}</h4>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <Button
                  onClick={handleDetails}
                  style={{ backgroundColor: edit ? "orange" : "green" }}
                  variant="contained"
                  fullWidth
                >
                  {edit ? "Update table Item" : "Add Table Item"}
                </Button>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={12}>
                {/* <BillingTable msg={msg} setTotal={setTotal} amt={amt} setMsg={setMsg} setData={setData} data={data} total={total}/> */}
                <Grid container spacing={3} align="center">
                  <Grid item xs={2.8}>
                    <h2>Description</h2>
                  </Grid>
                  <Grid item xs={2.5}>
                    <h2>Quantity</h2>
                  </Grid>
                  <Grid item xs={2.5}>
                    <h2>Price</h2>
                  </Grid>
                  <Grid item xs={2.5}>
                    <h2>Amount</h2>
                  </Grid>
                  <Grid item xs={1.3}>
                    <h2>Delete</h2>
                  </Grid>
                  {data.map((item, ind) => (
                    <React.Fragment>
                      <Grid item xs={2.8}>
                        <span>{item.desc}</span>
                      </Grid>
                      <Grid item xs={2.5}>
                        <span>{item.qty}</span>
                      </Grid>
                      <Grid item xs={2.5}>
                        <span>{item.price}</span>
                      </Grid>
                      <Grid item xs={2.5}>
                        <span>{item.amt}</span>
                      </Grid>
                      <Grid item xs={1.6}>
                        <DeleteIcon
                          onClick={() => handleDelete(ind)}
                          style={{ color: "red", cursor: "pointer" }}
                        />
                        <BorderColorIcon
                          onClick={() => handleUpdate(item, ind)}
                          style={{
                            color: "blue",
                            cursor: "pointer",
                            display: show ? "none" : "",
                          }}
                        />
                      </Grid>
                    </React.Fragment>
                  ))}
                  <Grid item xs={6}>
                    {msg && <Alert severity="error">{msg}</Alert>}
                  </Grid>
                  <Grid item xs={6}>
                    <h1>Rs. {total}</h1>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
