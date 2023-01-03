import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/Done';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

export default function PickUp() {
    return (
        <Container component='main' maxWidth='sm'>
            <Button
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    m: 'auto',
                    mt: 10,
                    background: 'lightgray',
                    borderRadius: '50%',
                    p: '20px',
                }}
            >
                <DoneIcon large sx={{ fontSize: '3rem', color: 'black' }} />
            </Button>

            <Typography
                sx={{
                    mt: 5,
                    mb: 1,
                    textAlign: 'center',
                    fontSize: '22px',
                }}
            >
                Sent Confirmation
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '18px',
                    width: '70%',
                    m: 'auto',
                    mb: 1,
                }}
            >
                Pick up time starts now
            </Typography>
            <Box display='flex'>
                <Button
                    href='/DeliveryMap'
                    sx={{
                        background: 'lightgray',
                        textAlign: 'center',
                        color: 'black',
                        width: '45%',
                        margin: 'auto',
                        border: '1px solid transparent',
                        mt: 5,
                        mb: 5,
                        p: 2,
                        textTransform: 'none',
                        borderRadius: '40px',
                        fontSize: '19px',
                        display: 'block',
                        '&:hover': {
                            backgroundColor: 'white',
                            border: '1px solid gray',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    View delivery location
                </Button>
            </Box>
            <Typography sx={{ fontSize: '19px' }}>Order Details</Typography>
            <Paper
                sx={{
                    border: '1px solid grey',
                    position: 'relative',
                    backgroundColor: 'white',
                    mb: 3,
                    display: 'flex',
                    width: 'inherit',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        m: 2,
                        width: '150px',
                        height: '150px',
                        overflow: 'hidden',
                        backgroundImage: 'url(/food1.jpg)',
                        backgroundSize: 'cover',
                        borderRadius: '8px',
                    }}
                ></Box>
                <Typography
                    sx={{
                        color: 'grey',
                        mt: 2,
                        mr: 10,
                    }}
                >
                    <Link href='#' variant='h6' sx={{ color: 'black' }}>
                        Shreeman Restaurant
                    </Link>
                    <Typography
                        sx={{
                            mt: 1,
                        }}
                    >
                        Meal for 20 available
                    </Typography>
                    <Box display='flex' justifyContent='space-between'>
                        <Box
                            sx={{
                                mt: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '15px',
                                    color: 'black',
                                }}
                            >
                                <LocationOnIcon
                                    sx={{ fontSize: '20px', mr: 0.5 }}
                                />
                                6 Kms
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 1,
                                    display: 'flex',
                                    fontSize: '15px',
                                    color: 'black',
                                }}
                            >
                                4.2
                                <StarIcon
                                    sx={{
                                        ml: 0.5,
                                        fontSize: '20px',
                                        color: 'gray',
                                    }}
                                />
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    mt: 3.75,
                                    display: 'flex',
                                    fontSize: '15px',
                                }}
                            >
                                <Box sx={{ color: 'black', mr: 1 }}>32 </Box>
                                Reviews
                            </Typography>
                        </Box>
                    </Box>
                </Typography>
            </Paper>
            <Paper
                sx={{
                    border: '1px solid grey',
                    backgroundColor: 'white',
                    mb: 3,
                    mt: 3,
                    display: 'block',
                    width: 'inherit',
                    borderRadius: '8px',
                }}
            >
                <Typography sx={{ fontSize: '20px', mt: 1, mb: 1, ml: 2 }}>
                    Your food is ready to pick up.
                </Typography>
                <Typography sx={{ color: 'grey', mb: 1, ml: 2 }}>
                    Waiting to be picked up
                </Typography>
            </Paper>
            <Paper
                sx={{
                    border: '1px solid grey',
                    backgroundColor: 'white',
                    mb: 3,
                    mt: 3,
                    display: 'block',
                    width: 'inherit',
                    borderRadius: '8px',
                }}
            >
                <Typography sx={{ fontSize: '20px', mt: 1, mb: 1, ml: 2 }}>
                    Get help with your order over phone
                </Typography>
                <Link
                    href=''
                    sx={{
                        display: 'inline-block',
                        color: 'black',
                        mb: 2,
                        ml: 2,
                        textDecoration: 'none',
                        borderBottom: '1px solid grey',
                    }}
                >
                    Request a callback {'>'}
                </Link>
            </Paper>
        </Container>
    );
}
