import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ShelfItem({item}) {

    console.log(item.description);
    return (
        <Card sx={{ maxWidth: 345, m:1, p:2 }}>

        <CardMedia
          height="250"
          
        />
        <CardContent>
            <img src={item.image_url} alt={item.description} />
          <Typography variant="body2" color="text.secondary">
          {item.description}
          </Typography>
        </CardContent>
      
      </Card>

    );
};
export default ShelfItem;


