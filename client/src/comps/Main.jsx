import React, {useState} from 'react'
import { Grid, Alert, TableBody, Button, ButtonGroup, TableFooter } from '@mui/material'
import { Table, TableHead, TableRow, TableCell } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Footer from './Footer'
import ReadUsers from './ReadUsers'
import AddUserModal from './AddUserModal'

export default function Main() {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" style={{overflowX: 'auto'}}>
                <Grid item>
                    <Table style={{ background: "gainsboro" }} p='2'>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <ReadUsers />
                        </TableBody>
                        <TableFooter>

                            {/* Add user  */}
                            <TableRow>
                                <TableCell colSpan={5}>
                                    <Button onClick={()=>{setModalOpen(true)}} style={{ marginInline: 'auto', display: 'block' }} color='primary' >Add New Student</Button>
                                </TableCell>
                            </TableRow>

                        </TableFooter>
                    </Table>
                </Grid>
            </Grid>
             {/* Modal window for adding user  */}
            <AddUserModal open={modalOpen} setModalOpen={setModalOpen} />
            <Footer />
        </>
    )
}
