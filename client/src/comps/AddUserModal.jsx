import React, { useState } from 'react'
import { Modal, Box, Typography, TextField, Button, ButtonGroup } from '@mui/material'

export default function AddUserModal({ open, setModalOpen }) {
    console.log(open, setModalOpen);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Modal
                open={open}
                onClose={() => { console.log("closed"); }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Add Student
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField label=" Name"></TextField>
                        <TextField label=" Email"></TextField>
                        <TextField label=" City"></TextField>
                        <ButtonGroup style={{ marginTop: '1rem' }} variant='contained'>
                            <Button>Add</Button>
                            <Button color='warning' onClick={() => { setModalOpen(false) }}>Cancel</Button>
                        </ButtonGroup>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}
