import { Box, Button, Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { flex, scrollWrapper, shortsCard, shortsHeader, shortsWrapper } from "../Styles/style";
import { CgYoutube } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import { shortsItems } from "../Data/app.data";

const Shorts = ({ hideShorts, isHidden, undoHide }) => {
  return (
    <Box>
        <Box component='div' sx={shortsWrapper}>
            <Box sx={flex}>
                <CgYoutube size={32} color='red' />
                <Typography sx={shortsHeader} variant='h6'>
                    Shorts
                </Typography>
            </Box>
            <Button onClick={hideShorts}>
                <RiCloseFill size={24} />
            </Button>
        </Box>
        {
            isHidden ? (
                <Box>
                    <Typography>
                        This shelf will be hidden for 30 days.
                        <Button onClick={undoHide}>Undo</Button>
                    </Typography>
                </Box>
            ) : (
                <Box component='div' sx={scrollWrapper}>
                    <Box component='div' sx={flex}>
                        {
                            shortsItems.map(({ id, shortsUrl, url, text, views }) => {
                                return (
                                    <Link key={id} href={shortsUrl}>
                                        <Card sx={shortsCard}>
                                            <CardMedia
                                                component='img'
                                                height={300}
                                                image={url}
                                                alt='shorts image'
                                            />
                                            <CardContent>
                                                <Typography noWrap gutterBottom variant='h5' component='div'>
                                                    {text}
                                                </Typography>
                                                <Typography variant='body2' color='text.secondary'>
                                                    {views} Views
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                </Box>
            )
        }
    </Box>
  )
}

export default Shorts