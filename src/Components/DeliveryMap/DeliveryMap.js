import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import CallIcon from '@mui/icons-material/Call';
import ForumIcon from '@mui/icons-material/Forum';

export default function DeliveryMap() {
    return (
        <Container component='main' maxWidth='sm'>
            <Box sx={{ textAlign: 'center' }}>
                <img width='90%' src='map.png' alt='Map' />
            </Box>
            <Paper
                sx={{
                    border: '1px solid lightgrey',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'lightgray',
                    width: '85%',
                    m: 'auto',
                    mt: 2,
                    mb: 3,
                }}
            >
                <Typography sx={{ textAlign: 'center', fontSize: '25px' }}>
                    15 mins
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <Typography sx={{ fontSize: ' 24px' }}>6 kms</Typography>
                    <Typography sx={{ fontSize: ' 24px' }}>22:30pm</Typography>
                </Box>
            </Paper>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '90%',
                    m: 'auto',
                    mb: 4,
                }}
            >
                <Box>
                    <Typography sx={{ fontSize: '22px' }}>
                        Shreeman Restaurant
                    </Typography>
                    <Typography sx={{ color: 'gray', fontSize: '18px' }}>
                        Meal for 10 People
                    </Typography>
                </Box>
                <Box
                    sx={{
                        color: 'gray',
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '25%',
                    }}
                >
                    <CallIcon large />
                    <ForumIcon large />
                </Box>
            </Box>
            <Box display='flex'>
                <Button
                    href='/PickUp'
                    sx={{
                        background: 'white',
                        color: 'black',
                        width: '35%',
                        margin: 'auto',
                        mt: 1,
                        mb: 5,
                        p: 2,
                        textTransform: 'none',
                        border: '1px solid gray',
                        borderRadius: '40px',
                        fontSize: '18px',
                        display: 'block',
                        textAlign: 'center',
                    }}
                >
                    Cancel
                </Button>
                <Button
                    sx={{
                        background: 'lightgray',
                        '&:hover': {
                            backgroundColor: 'white',
                            border: '1px solid gray',
                            opacity: [0.9, 0.8, 0.7],
                        },
                        color: 'black',
                        width: '40%',
                        margin: 'auto',
                        mt: 1,
                        mb: 5,
                        p: 2,
                        textTransform: 'none',
                        borderRadius: '40px',
                        fontSize: '18px',
                        display: 'block',
                    }}
                >
                    Pick up completed
                </Button>
            </Box>
        </Container>
    );
}
