import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  ButtonGroup,
} from "@mui/material";

export default function AddUser({ open, setModalOpen, getUsers }) {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [student, setStudent] = useState({
    name: "",
    email: "",
    city: "",
  });

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    setStudent((preValue) => {
      switch (name) {
        case "name":
          return { ...preValue, name: value };
        case "email":
          return { ...preValue, email: value };
        default:
          return { ...preValue, city: value };
      }
    });
  }

  async function addStudent() {
    const res = await axios.post("http://localhost:12911/adduser", student);
    console.log(res);
    getUsers()
    setModalOpen(false);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          console.log("closed");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Add Student
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TextField
              onChange={handleInput}
              value={student.name}
              name="name"
              label="Name"
              sx={{ mb: 2 }}
            ></TextField>
            <TextField
              onChange={handleInput}
              value={student.email}
              name="email"
              label="Email"
              sx={{ mb: 2 }}
            ></TextField>
            <TextField
              onChange={handleInput}
              value={student.city}
              name="city"
              label="City"
            ></TextField>
            <Box>
              <ButtonGroup sx={{ mt: 2 }} variant="contained">
                <Button onClick={addStudent}>Add</Button>
                <Button
                  color="warning"
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  Cancel
                </Button>
              </ButtonGroup>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
