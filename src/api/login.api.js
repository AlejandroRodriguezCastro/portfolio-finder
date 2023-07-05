const login = async (email, password) => {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      email,
      password
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    const response = await fetch('http://localhost:4000/api/users/login', requestOptions)
    const jsonData = await response.json()
    console.log(jsonData)
    switch (response.status) {
      case 200:
      {
        console.log('Login success')
        window.sessionStorage.setItem('accessToken', jsonData.token)
        return ({ status: 200, message: 'Login success' })
      }
      case 401:
      {
        console.log('Login failed')
        return ({ status: 401, message: 'Usuario y/o mail no validos' })
      }
      default:
        return ({ status: 500, message: 'Error interno del servidor' })
    }
  } catch (error) {
    console.log(error)
  }
}

export default login
