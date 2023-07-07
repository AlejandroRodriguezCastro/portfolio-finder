/* eslint-disable react/jsx-key */
import { useState, useCallback, useEffect, useMemo } from 'react'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box } from '@mui/material'
import { deleteContact, getContacts, updateContact } from '../../controller/contact.api'
import Message from './Message'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function ColumnTypesGrid () {
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedName, setSelectedName] = useState('')
  const [selectedPhone, setSelectedPhone] = useState('')
  const [selectedEmail, setSelectedEmail] = useState('')
  const [selectedMessage, setSelectedMessage] = useState('')
  const [selectedId, setSelectedId] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contacts = await getContacts()
        if (contacts.status === 500) {
          alert(contacts.message)
        }
        if (contacts.status === 401) {
          alert(contacts.message)
        }
        if (contacts.status === 404) {
          alert(contacts.message)
        }
        if (contacts.status === 200) {
          setRows(contacts.message.map((contact) => ({
            id: contact._id,
            name: contact.name,
            phone: contact.phone,
            email: contact.email,
            message: contact.message,
            createdAt: new Date(contact.createdAt),
            readed: contact.readed
          })))
        }
      } catch (error) {
        console.error('Error fetching contacts:', error)
      }
    }
    fetchContacts()
  }, [])

  const deleteUser = useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id))
      })
      deleteContact(id)
    },
    []
  )

  const doubleClickHandler = useCallback(
    (params, event) => {
      setSelectedId(params.row.id)
      setSelectedName(params.row.name)
      setSelectedEmail(params.row.email)
      setSelectedPhone(params.row.phone)
      setSelectedMessage(params.row.message)
      handleClickOpen()
    },
    []
  )

  const updateContactReadStatus = useCallback(
    async (id) => {
      const updatedContact = { ...rows.find((row) => row.id === id), readed: true }
      updateContact(id, updatedContact)
      window.location.reload()
    },
    [rows]
  )

  const handleClose = () => {
    setOpen(false)
    updateContactReadStatus(selectedId)
  }

  const toggleReaded = useCallback(
    (id) => () => {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, readed: !row.readed } : row
        )
      )
    },
    []
  )

  const columns = useMemo(
    () => [
      { field: 'name', headerClassName: 'super-app-theme--header', headerName: 'Nombre', type: 'string', width: 200 },
      { field: 'phone', headerClassName: 'super-app-theme--header', headerName: 'Telefono', type: 'string', width: 200 },
      { field: 'email', headerClassName: 'super-app-theme--header', headerName: 'Email', type: 'string', width: 200 },
      { field: 'createdAt', headerClassName: 'super-app-theme--header', headerName: 'Fecha', type: 'date', width: 100 },
      { field: 'readed', headerClassName: 'super-app-theme--header', headerName: 'Leido', type: 'boolean' },
      {
        field: 'actions',
        headerClassName: 'super-app-theme--header',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label='Delete'
            onClick={deleteUser(params.id)}
          />
        ]
      }
    ],
    [deleteUser, toggleReaded]
  )

  return (
    <>
      <div style={{ height: 300, width: 880 }}>
        <Message />
        <Box
          sx={{
            height: 400,
            width: '100%',
            '& ': {
              backgroundColor: 'rgb(255 255 255 / 100%)'
            },
            '& .super-app-theme--header': {
              backgroundColor: 'rgb(181 181 181 / 100%)'
            }
          }}
        >
          <DataGrid
            columns={columns}
            rows={rows}
            onCellDoubleClick={(params, event) => {
              doubleClickHandler(params, event)
            }}
          />
        </Box>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title' style={{ color: 'black' }}>
            {selectedName}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Mensaje: {selectedMessage}
              <br />
              Telefono: {selectedPhone}
              <br />
              Email: {selectedEmail}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Leido
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}
