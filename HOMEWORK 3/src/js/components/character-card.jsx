import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function CharacterCard(props) {
    const { cardItem } = props;
    return (
        <Card className='card'>
            <CardMedia className='card-image'
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-Vmr-FKDQFasTaKasvWuQ41ZPFmaGU60tHBcipwNarFr3ZwVXg"
                title="Placeholder"
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {cardItem.name}
                </Typography>
                <Typography component="p">
                    Birth Year: {cardItem.birth_year}
                </Typography>
                <Typography component="p">
                    Gender: {cardItem.gender}
                </Typography>
                <Typography component="p">
                    Height: {cardItem.height}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Share
          </Button>
                <Button size="small" color="primary">
                    Learn More
          </Button>
            </CardActions>
        </Card>
    );
}
