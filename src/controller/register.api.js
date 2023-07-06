const register = async (name, email, password) => {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      name,
      email,
      password
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    const response = await fetch('http://localhost:4000/api/users', requestOptions)
    const jsonData = await response.json()
    console.log(jsonData)
    switch (response.status) {
      case 201:
      {
        console.log('Created successfully')
        return ({ status: 201, message: 'Created successfully' })
      }
      case 409:
      {
        console.log('Create fail')
        return ({ status: 409, message: 'Mail en uso' })
      }
      default:
        return ({ status: 500, message: 'Error interno del servidor' })
    }
  } catch (error) {
    console.log(error)
  }
}

export default register
