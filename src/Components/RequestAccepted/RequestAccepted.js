import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function RequestAccepted() {
    return (
        <Container
            component='main'
            maxWidth='sm'
            sx={{
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
            }}
        >
            <Typography sx={{ mt: 2, mb: 1, fontSize: '20px' }}>
                Hurrey!
            </Typography>
            <Typography sx={{ mt: 1, mb: 2, fontSize: '20px' }}>
                You get a donor
            </Typography>
            <Box
                sx={{
                    mt: 4,
                    border: '1px solid black',
                    borderRadius: '8px',
                    pt: 5,
                    pl: 2.5,
                    pr: 2.5,
                    pb: 3.5,
                }}
            >
                <Typography sx={{ fontSize: '16px', mb: 0.75 }}>
                    E - mart Supermarket reviewed your request
                </Typography>
                <Typography
                    sx={{ color: 'grey', fontSize: '12.5px', mb: 0.75 }}
                >
                    They have surplus dry food to donate you
                </Typography>
                <Typography sx={{ color: 'grey', fontSize: '12.5px', mb: 4.5 }}>
                    Do you want to confirm the order?
                </Typography>
                <Link
                    href='/ConfirmOrder'
                    sx={{
                        color: '#000',
                        fontSize: '18px',
                        textDecoration: 'none',
                        borderBottom: '2px solid grey',
                    }}
                >
                    View Donor Details
                </Link>
            </Box>
        </Container>
    );
}

export default RequestAccepted;
