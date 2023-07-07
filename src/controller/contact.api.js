import urlWebServices from './constants.api.js'

const saveContact = async (name, email, message, phone) => {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      name,
      email,
      message,
      phone
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    const response = await fetch(urlWebServices.contact, requestOptions)
    const jsonData = await response.json()
    console.log(jsonData)
    switch (response.status) {
      case 200:
      {
        return ({ status: 200, message: 'Mensaje de contacto creado' })
      }
      default:
        return ({ status: 500, message: 'Error interno del servidor' })
    }
  } catch (error) {
    console.log(error)
  }
}

const getContacts = async () => {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    const response = await fetch(urlWebServices.contact, requestOptions)
    const jsonData = await response.json()
    console.log(jsonData)
    switch (response.status) {
      case 200:
      {
        return ({ status: 200, message: jsonData })
      }
      case 401:
      {
        return ({ status: 401, message: 'Usuario no autenticado' })
      }
      case 404:
      {
        return ({ status: 404, message: 'No hay contactos' })
      }
      default:
        return ({ status: 500, message: 'Error interno del servidor' })
    }
  } catch (error) {
    console.log(error)
  }
}

const getContactById = async (id) => {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }
    const response = await fetch(`${urlWebServices.contact}/${id}`, requestOptions)
    const jsonData = await response.json()
    console.log(jsonData)
    switch (response.status) {
      case 200:
      {
        return ({ status: 200, message: 'Contacto obtenido' })
      }
      case 401:
      {
        return ({ status: 401, message: 'Usuario no autenticado' })
      }
      case 404:
      {
        return ({ status: 404, message: 'Contacto no encontrado' })
      }
      default:
        return ({ status: 500, message: 'Error interno del servidor' })
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteContact = async (id) => {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    }
    const response = await fetch(`${urlWebServices.contact}/${id}`, requestOptions)
    const jsonData = await response.json()
    console.log(jsonData)
    switch (response.status) {
      case 200:
      {
        return ({ status: 200, message: 'Contacto eliminado' })
      }
      case 401:
      {
        return ({ status: 401, message: 'Usuario no autenticado' })
      }
      case 404:
      {
        return ({ status: 404, message: 'Contacto no encontrado' })
      }
      default:
        return ({ status: 500, message: 'Error interno del servidor' })
    }
  } catch (error) {
    console.log(error)
  }
}

const updateContact = async (id, body) => {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const raw = JSON.stringify(
      body)
    console.log('raw', raw)

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }
    const response = await fetch(`${urlWebServices.contact}/${id}`, requestOptions)
    const jsonData = await response.json()
    console.log(jsonData)
    switch (response.status) {
      case 200:
      {
        return ({ status: 200, message: 'Contacto actualizado' })
      }
      case 401:
      {
        return ({ status: 401, message: 'Usuario no autenticado' })
      }
      case 404:
      {
        return ({ status: 404, message: 'Contacto no encontrado' })
      }
      default:
        return ({ status: 500, message: 'Error interno del servidor' })
    }
  } catch (error) {
    console.log(error)
  }
}

export { saveContact, getContacts, getContactById, deleteContact, updateContact }
