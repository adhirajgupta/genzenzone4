import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import Typography from 'markdown-to-jsx';
import {markdown,markdown2,markdown3} from './pos1'

function Main(props) {
  const {  title } = props;


  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {/* {posts.map((post) => ( */}
        {/* <Typography >
          {markdown}
        </Typography>
        <Typography >        
          {markdown2}
        </Typography>
        
        <Typography >        
          {markdown3}
        </Typography> */}
      {/* ))} */}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default Main;
