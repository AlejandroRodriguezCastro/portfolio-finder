import urlWebServices from './constants.api.js'

const saveContact = async (name, phone, email, message) => {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      name,
      phone,
      email,
      message
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
        return ({ status: 200, message: 'Contacto creado' })
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
        return ({ status: 200, message: 'Contactos obtenidos' })
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

export { saveContact, getContacts, getContactById, deleteContact }
