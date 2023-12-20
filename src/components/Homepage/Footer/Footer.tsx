import {
  Box,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack)(() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    backgroundColor: '#ededed',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (

    <BoxRow
      component='footer'
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <div className='max-w-7xl flex flex-col sm:flex-row mx-auto'>
        <StackColumn>
          <FooterTitle text={'Alamat'} />
          <FooterLink
            text={'info@friendease.id'}
          />
        </StackColumn>

        <StackColumn>
          <FooterTitle text={'Layanan Kami'} />
          <FooterLink text={'Daftar sebagai talent'} />
          <FooterLink text={'Cari Teman Jalan'} />
        </StackColumn>

        <StackColumn>
          <FooterTitle text={'hBSales'} />
          <Stack
            direction='row'
            width='70px'
            maxWidth='100%'
            justifyContent='space-between'
          >
            <Link href="#" variant="body2"
              sx={{
                color: '#414141',
                "&:hover": {
                  color: '#1c2859',
                }
              }}
            >
              <InstagramIcon />
            </Link>
            <Link href="#" variant="body2"
              sx={{
                color: '#414141',
                "&:hover": {
                  color: '#1c2859',
                }
              }}
            >
              <FacebookIcon />
            </Link>
          </Stack>
          <Typography
            variant='caption'
            component='p'
          >
            &copy; 2023 FriendEase.id
          </Typography>
        </StackColumn>
      </div>
    </BoxRow>
  )
}

export default Footer
