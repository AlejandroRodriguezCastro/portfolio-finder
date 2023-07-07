import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from '@mui/material'

export default function Icons () {
  return (
    <>
      <Link href='https://github.com/AlejandroRodriguezCastro' variant='body2'>
        <GitHubIcon fontSize='large' color='primary' />
      </Link>
      <Link href='https://www.linkedin.com/in/alejandro-rodriguez-castro'>
        <LinkedInIcon fontSize='large' />
      </Link>
    </>
  )
}
