import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/StarBorder';
import { Chip, Grid, IconButton, Tooltip } from '@mui/material';
import { StyledChip } from '../Chip';


type Props = {materia: string}


const BasicCard: React.FC<Props> = ({materia})=> {
  return (
    <Card sx={{ 
      width: 320,
      height: 170,
      cursor: "pointer", 
      overflow: "hidden",
      position: "relative"
      }}>
        <Box bgcolor="#000" height="30%"  display="flex" justifyContent="flex-end">
          <IconButton>
            <StarIcon color="primary"/>
          </IconButton>
        </Box>
        <Box  height="70%"  p="1rem" display="flex" alignItems="center">
          <Typography variant="h5" gutterBottom>
            {materia}
          </Typography>
          <StyledChip  label="active"/>
        </Box>
    </Card>
  );
}


export default BasicCard