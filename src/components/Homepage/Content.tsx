import {
    Box, Grid, styled, Typography
} from "@mui/material";
import imgDetail from '/assets/images/card1.svg';
import imgDetail2 from '/assets/images/card2.svg';
import { Link } from 'react-router-dom'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

export default function Content() {
    const CustomGridItem = styled(Grid)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })

    const CustomTypography = styled(Typography)({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    const Title = ({ text, textAlign }: { text: string, textAlign: string }) => {
        return (
            <Typography
                variant='h4'
                component='h3'
                sx={{
                    fontWeight: '700',
                    textAlign: textAlign,
                }}
            >
                {text}
            </Typography>
        )
    }
    return (
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}
            sx={{
                py: 10,
                px: 2,

            }}
        >
            <CustomGridItem item xs={12} sm={8} md={6}

            >
                <Box component='article'
                    sx={{
                        px: 4,
                    }}
                >
                    <Title
                        text={
                            'Bosen sendirian? Cari teman jalan!'
                        }
                        textAlign={'start'}
                    />
                    <CustomTypography>
                        #bersamalebihasyik
                    </CustomTypography>
                    <Typography
                        variant='h5'
                        component={Link}
                        to='/'
                        sx={{
                            py: 3,
                            lineHeight: 1.6,
                        }}
                    >
                        Ajak jalan sekarang <ArrowCircleRightRoundedIcon fontSize="large" />
                    </Typography>
                </Box>

            </CustomGridItem>

            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt=""
                    style={{
                        width: '100%',
                    }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
                sx={{
                    order: { xs: 4, sm: 4, md: 3 }
                }}
            >
                <img src={imgDetail2} alt=""
                    style={{
                        width: "100%",
                    }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
                sx={{
                    order: { xs: 3, sm: 3, md: 4 }
                }}
            >
                <Box component='article'
                    sx={{
                        px: 4,
                    }}
                >
                    <Title
                        text={
                            'Dapatkan promo menarik dari EaseWallet'

                        }
                        textAlign={'start'}
                    />
                    <CustomTypography>
                        Aktivasinya GRATIS dan dapatkan diskon untuk pesanan pertamamu! S&K Berlaku~
                    </CustomTypography>
                    <button
                        style={{
                            backgroundColor: '#9B274F',
                            fontSize: '1.1rem',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '20px',
                            marginTop: '20px',
                        }}
                    >
                        Coba EaseWallet
                    </button>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}
