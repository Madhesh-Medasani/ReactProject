import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Avatar, IconButton, CardMedia } from "@material-ui/core";

const SellerProductCard = props => {
  const { avatarUrl, title, subtitle, description, imageUrl } = props;
  return (
    <Card>
      {/* <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      /> */}
      <CardMedia style={{ height: "150px" }} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvcMbxT5lRH4-nYz3QTqPJQmnV9FQDGPzTQ&usqp=CAU" />
      <CardContent>
        <Typography variant="body2" component="p">
          Hello
        </Typography>
        <Typography variant="body2" component="p">
          Hello
        </Typography>
        <Typography variant="body2" component="p">
          Hello
        </Typography>
        <Typography variant="body2" component="p">
          Hello
        </Typography>

      </CardContent>
      {/* <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions> */}
    </Card>
  );
};

export default SellerProductCard;