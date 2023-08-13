import { Box, Grid } from "@mui/material";
import AppCard from "./Card";


const CardList = ({ items }) => {
  return (
    <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
            {items?.length &&
            items?.map((item) => {
                return (
                    <Grid key={item?.etag} item xs={12} sm={6} md={4} lg={3}>
                        <AppCard
                            url={item?.snippet?.thumbnails.high.url}
                            title={item?.snippet?.title}
                            channelTitle={item?.snippet?.channelTitle}
                            videoId={item?.id.videoId}
                        />
                    </Grid>
                );
            })}
        </Grid>
    </Box>
  )
}

export default CardList