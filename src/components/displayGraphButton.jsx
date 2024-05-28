import * as React from 'react';
import Fab from '@mui/material/Fab';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Tooltip from '@mui/material/Tooltip';

export default function DisplayGraphButton() {

    return (
        <>
            <Tooltip title="Display with Graph">
                <Fab size="small" color="primary" aria-label="add" sx={{ width: 40, height: 40 }}>
                    <QueryStatsIcon />
                </Fab>
            </Tooltip>
        </>
    );
}