import { Avatar, Box, Card, CardContent, CardMedia, Link, List, ListItem, ListItemAvatar, Typography } from "@mui/material"
import { appCardList, flexColumnCenter } from "../Styles/style"
import { trimText } from "../Data/app.data"
import { AiFillCheckCircle } from "react-icons/ai"

const AppCard = ({ url, title, channelTitle, videoId }) => {
  return (
    <Card sx={{ boxShadow: 0 }}>
        <Link href={`https://www.youtube.com/watch?v=${videoId}`} target='_blank'>
            <CardMedia component='img' height='240' image={url} alt='title' />
        </Link>
        <CardContent sx={{ m:0, p:0 }}>
            <List sx={appCardList}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar
                            alt='channel avatar'
                            src={`https://i.pravatar.cc/150?`}
                        />
                    </ListItemAvatar>
                    <Box sx={flexColumnCenter}>
                        <Typography sx={{ fontWeight: 'bold', mb: 1 }} variant="h5" component='div' gutterBottom>
                            {trimText(title)}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ mr:1, mb:0, p:0 }} gutterBottom variant='h5' component='div'>
                                {channelTitle}
                            </Typography>
                            <AiFillCheckCircle />
                        </Box>
                    </Box>
                </ListItem>
            </List>

        </CardContent>
    </Card>
  )
}

export default AppCard