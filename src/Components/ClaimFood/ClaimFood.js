import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

export default function ClaimFood() {
    return (
        <Container component='main' maxWidth='sm'>
            <Paper
                sx={{
                    border: '1px solid grey',
                    position: 'relative',
                    backgroundColor: 'white',
                    mb: 3,
                    mt: 3,
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
                        mr: 6,
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
                                sx={{ color: 'black', fontSize: '15px' }}
                            >
                                1 hour ago
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 1,
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
                elevation={2}
                sx={{
                    width: '100%',
                    height: '60vh',
                }}
            >
                <Stack spacing={3} sx={{ width: '85%', m: 'auto' }}>
                    <Typography
                        sx={{
                            pt: 5,
                            m: 'auto',
                            textAlign: 'center',
                            width: '70%',
                            color: 'gray',
                        }}
                    >
                        Type your message here to know any more information or
                        queries.
                    </Typography>

                    <TextField
                        margin='normal'
                        fullWidth
                        name='message'
                        label='Type here'
                        type='message'
                        id='message'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='start'>
                                    <Link
                                        href=''
                                        sx={{
                                            textDecoration: 'none',
                                            color: 'black',
                                        }}
                                    >
                                        Send
                                    </Link>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Box display='flex'>
                        <Button
                            href='/DonationDetails'
                            sx={{
                                textAlign: 'center',
                                background: 'white',
                                color: 'black',
                                width: '35%',
                                margin: 'auto',
                                mt: 5,
                                mb: 5,
                                p: 2,
                                textTransform: 'none',
                                border: '1px solid gray',
                                borderRadius: '40px',
                                fontSize: '18px',
                                display: 'block',
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            href='/ClaimAprooval'
                            sx={{
                                background: 'lightgray',
                                textAlign: 'center',
                                color: 'black',
                                width: '35%',
                                margin: 'auto',
                                mt: 5,
                                mb: 5,
                                p: 2,
                                textTransform: 'none',
                                borderRadius: '40px',
                                fontSize: '18px',
                                display: 'block',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    border: '1px solid gray',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            Claim
                        </Button>
                    </Box>
                </Stack>
            </Paper>
        </Container>
    );
}
