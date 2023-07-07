import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from '@mui/material'

export default function Icons () {
  return (
    <>
      <div className='icons' style={{ display: 'flex', justifyContent: 'center' }}>
        <Link href='https://github.com/AlejandroRodriguezCastro' variant='body2' style={{ marginRight: '15px' }}>
          <GitHubIcon fontSize='large' color='primary' />
        </Link>
        <Link href='https://www.linkedin.com/in/alejandro-rodriguez-castro'>
          <LinkedInIcon fontSize='large' />
        </Link>
      </div>

    </>
  )
}
