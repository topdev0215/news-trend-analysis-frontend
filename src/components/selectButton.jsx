import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function SelectLabels() {
    const [type, setType] = React.useState(1);

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={type}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value={1}>Amount</MenuItem>
                        <MenuItem value={2}>Sentiment</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </ThemeProvider>
    );
}