import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, TableBody, TableHead, TableCell, TableRow, Button, ButtonGroup } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

export default function ReadUsers() {

    const [users, setUsers] = useState([])

    async function getUsers() {
        const response = await axios.get('http://localhost:12911/')
        setUsers(response.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            {
                users.map((user, index) => {
                    return(
                    <TableRow key={index}>
                        <TableCell> {index+1} </TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.city}</TableCell>
                        <TableCell>
                            <ButtonGroup color='primary' size='small'>
                                <Button>
                                    <EditIcon />
                                </Button>
                                <Button>
                                    <DeleteIcon />
                                </Button>
                            </ButtonGroup>
                        </TableCell>
                    </TableRow>
                    )
                })
            }
        </>
    )
}
