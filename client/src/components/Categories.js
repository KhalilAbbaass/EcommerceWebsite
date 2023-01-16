import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import greenWear from '../Assets/greenwear.jpg';




const categoriesButton = {
    backgroundColor: "#005f6a" 
}
const cardActionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const cardContentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}
  



const Categories = () => {

    let numberOfItems = ['1','2','3','4'];

  return (

    <div>
        <h2>Shop By Category</h2>
         <Grid container spacing={2}>

            {
                numberOfItems.map((items, i) => (
                    <Grid key = {i} item sm={4} md={3}>
                        <Card sx={{ maxWidth: 345 , minWidth: 210 }}>
                            <CardMedia 
                                sx={{ height: 140 , display: {xs:'none' ,sm:'none', md:'block'} }}
                                image={greenWear}
                                title="green iguana"
                                    />
                            <CardContent style={cardContentStyle}>
                                <Typography gutterBottom variant="h5" component="div">
                                Category{i}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Categories are {i}
                                </Typography>
                            </CardContent>
                            <CardActions style={cardActionStyle}>
                            <Button style={categoriesButton} variant="contained">Start Shopping</Button>
                                
                            </CardActions>
                            </Card>
                        </Grid>
                ))
            }

        
      </Grid>
    </div>
  )
}

export default Categories