import { Button } from '@mui/material'
import { Link  } from "react-router-dom"

const FooterLink = ({ text }: { text: string }) => {
  return (
    <Button
      href="#"
      component={Link}
      to="/"
      sx={{
        fontSize: '0.9rem',
        fontWeight: '400',
        textDecoration: 'none',
        color: '#414141',
        textTransform: 'capitalize',
        "&:hover": {
          color: '#1c2859',
        }
      }}
    >
      {text}
    </Button>
  )
}

export default FooterLink
