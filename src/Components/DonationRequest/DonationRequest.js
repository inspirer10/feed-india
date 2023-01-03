import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PlaceIcon from '@mui/icons-material/Place';
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';

export default function ActionAreaCard() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Container
            maxWidth='sm'
            sx={{
                marginTop: 5,
                mb: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Paper
                elevation={2}
                sx={{
                    width: '100%',
                }}
            >
                {/**DRUGA SEKCJA !!!! */}
                <Box margin={2}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label'>
                                Select NGO
                            </InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={age}
                                label='Select NGO'
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Option 1</MenuItem>
                                <MenuItem value={2}>Option 2</MenuItem>
                                <MenuItem value={3}>Option 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            name='foodItems'
                            label='NGO Location'
                            id='foodItems'
                            sx={{
                                mt: 3,
                                mb: 3,
                            }}
                            placeholder='242, M.G.Road, Mhalague Bridge, Pune'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <PlaceIcon></PlaceIcon>
                                    </InputAdornment>
                                ),
                            }}
                        ></TextField>
                    </Box>
                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            name='foodItems'
                            label='Food Type'
                            id='foodItems'
                            sx={{
                                mt: 1,
                                mb: 3,
                            }}
                            placeholder='Dry Uncooked Food'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        ></TextField>
                    </Box>
                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            name='foodItems'
                            label='Food quality'
                            id='foodItems'
                            sx={{
                                mt: 1,
                                mb: 3,
                            }}
                            placeholder='Any'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        ></TextField>
                    </Box>
                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            name='foodItems'
                            label='Special instruction'
                            id='foodItems'
                            sx={{
                                mt: 1,
                                mb: 3,
                            }}
                            placeholder='Food should not expire for minimum 20 days'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        ></TextField>
                    </Box>

                    <Box display='flex' justifyContent='space-between'>
                        <Button
                            variant='outlined'
                            size='large'
                            sx={{
                                textTransform: 'capitalize',
                                width: '45%',
                                border: '1px solid gray',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                    borderColor: 'black',
                                },
                            }}
                        >
                            Self Pick up
                        </Button>
                        <Button
                            variant='outlined'
                            size='large'
                            sx={{
                                textTransform: 'capitalize',
                                width: '45%',
                                border: '1px solid gray',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                    borderColor: 'black',
                                },
                            }}
                        >
                            Spot Delivery
                        </Button>
                    </Box>
                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            color=''
                            name='foodItems'
                            label=''
                            id='foodItems'
                            sx={{
                                mt: 3,
                                mb: 0,
                            }}
                            placeholder='Add more details'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AddIcon></AddIcon>
                                    </InputAdornment>
                                ),
                            }}
                        ></TextField>
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography
                            sx={{
                                color: 'gray',
                                mt: 3,
                            }}
                        >
                            Post ID: #7865
                        </Typography>
                        <Link
                            sx={{
                                color: 'gray',
                                mt: 3,
                            }}
                        >
                            Report Post
                        </Link>
                    </Box>
                    <Box display='flex'>
                        <Button
                            href=''
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
                            href='/DonateFood'
                            sx={{
                                textAlign: 'center',
                                background: 'lightgray',

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
                            Accept
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
