"use client";
import TextfieldStyle from "@/app/component/textfield/textfieldStyle";
import { Box, Button, Card, CardMedia, Grid, ImageList, ImageListItem, Paper, Stack, TextField, Typography } from "@mui/material";
import { Bath, CarFront, Ellipsis, Wifi } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";



const itemData = [
    {
        img: '/img/bg/bg_details_1.png',
        title: 'bg_details_1',
        rows: 2,
        cols: 2,
    },
    {
        img: '/img/bg/bg_details_2.png',
        title: 'bg_details_2',
        cols: 2,
    },
    {
        img: '/img/bg/bg_details_3.png',
        title: 'bg_details_3',
    },
    {
        img: '/img/bg/bg_details_4.png',
        title: 'bg_details_4',
    },

];


function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function Details() {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <Box width={'100%'} height={'100%'}>
            <Box bgcolor={'#F4F7FF'} display={'flex'} ml={-5}>
                <Box ml={5} display={'flex'} width={'100%'}>
                    <Box width={'95%'} sx={{ mt: 3 }}>
                        <Box sx={{ mb: 2 }}>
                            <TextfieldStyle id="search" name="search" placeholder="Search city , Country, Place for Travel advisory"></TextfieldStyle>
                        </Box>
                        <Grid container spacing={4}>
                            <Grid item sm={12} md={3}>
                                <TextField
                                    sx={{
                                        fontSize: '188px',
                                        fontWeight: '400',
                                        bgcolor: '#F2F3FF',
                                        backgroundColor: '#fff',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#707070',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#707070',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#707070',
                                            }
                                        }
                                    }}
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    defaultValue="Where are you going?"

                                />
                            </Grid>
                            <Grid item sm={12} md={3}>
                                <Stack direction={'row'}>
                                    <Box width={'50%'}>
                                        <TextField
                                            sx={{
                                                fontSize: '188px',
                                                fontWeight: '400',
                                                bgcolor: '#F2F3FF',
                                                backgroundColor: '#fff',
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: '#707070',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#707070',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#707070',
                                                    }
                                                }
                                            }}
                                            fullWidth
                                            required
                                            id="outlined-required"
                                            defaultValue="20 Dec,2020"
                                        />
                                    </Box>
                                    <Box width={'50%'}>
                                        <TextField
                                            sx={{
                                                fontSize: '188px',
                                                fontWeight: '400',
                                                bgcolor: '#F2F3FF',
                                                backgroundColor: '#fff',
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: '#707070',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: '#707070',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#707070',
                                                    }
                                                }
                                            }}
                                            fullWidth
                                            required
                                            id="outlined-required"
                                            defaultValue="21 Dec,2020"
                                        />
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item sm={12} md={4}>
                                <TextField
                                    sx={{
                                        fontSize: '188px',
                                        fontWeight: '400',
                                        bgcolor: '#F2F3FF',
                                        backgroundColor: '#fff',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#707070',

                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#707070',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#707070',
                                            }
                                        }
                                    }}
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    defaultValue="2 adult ,0 children - 1 room"

                                />
                            </Grid>
                            <Grid item sm={12} md={2}>
                                <Box display={'flex'} textAlign={'center'} justifyContent={'center'}>
                                    <Button fullWidth sx={{ bgcolor: '#2D3DDF', height: '56px', width: '100%' }} variant="contained">Search</Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <div style={{ marginBottom: '1rem' }}></div>
                    </Box>
                </Box>
            </Box>
            <Box width={'100%'}>
                <Stack direction={'row'} width={'100%'} height={'100%'} mt={-0.5}>
                    <Box width={'60%'} height={'45.5%'}>
                        <ImageList

                            sx={{ width: '93%', height: '100%' }}
                            variant="quilted"
                            cols={4}
                            rowHeight={200}
                        >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                    <img
                                        style={{ borderRadius: '5px' }}
                                        {...srcset(item.img, 2000, item.rows, item.cols)}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ width: '93%' }}
                            mb={3}
                        >
                            <Grid item md={6}>
                                <Stack direction={'column'}>
                                    <Typography fontSize={'28px'} fontWeight={'500'}>
                                        Holiday Inn Resort
                                    </Typography>
                                    <Typography color={'#B7BCF3'} fontSize={'18px'} fontWeight={'300'}>
                                        Mobor,Cavelossim,Goa
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item md={6} textAlign={'end'}>
                                <Button variant="outlined" onClick={() => { router.push(pathname + '/Booking', { scroll: false }) }}><Typography color={'#2D3DDF'} fontWeight={'500'}>Price Starting from 1,000 BAHT</Typography></Button>
                            </Grid>

                        </Grid>

                        <Grid container sx={{ width: '100%' }} columnSpacing={8} rowSpacing={3}>
                            <Grid item md={6}>
                                <Card sx={{ height: '144px', width: '100%', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', boxShadow: 6 }}>
                                    <Box sx={{ display: 'flex', height: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 140, borderRadius: '15px' }}
                                            image="/img/bg/bg_booking.png"
                                            alt="hotal_card"

                                        />
                                        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>

                                            <Typography fontWeight={'500'} fontSize={'14px'}>Deluxe Room</Typography>
                                            <Typography fontWeight={'500'} fontSize={'20px'} color={'#2D3DDF'}>1,500 BAHT/night</Typography>
                                        </Box>
                                        <div onClick={() => {
                                            router.push(pathname + '/Booking', { scroll: false })
                                        }}>
                                            <Box height={'100%'} width={'60px'} bgcolor={'blue'} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ cursor: 'pointer', borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px' }}>
                                                <Typography sx={{
                                                    writingMode: 'vertical-lr',
                                                    textOrientation: 'mixed',
                                                    color: '#fff',
                                                    fontSize: '18px',
                                                }}>Book Now</Typography>
                                            </Box>
                                        </div>
                                    </Box>

                                </Card>
                            </Grid>
                            <Grid item md={6}>
                                <Card sx={{ height: '144px', width: '100%', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px', boxShadow: 6 }}>
                                    <Box sx={{ display: 'flex', height: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 140, borderRadius: '15px' }}
                                            image="/img/bg/bg_booking.png"
                                            alt="hotal_card"

                                        />
                                        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>

                                            <Typography fontWeight={'500'} fontSize={'14px'}>Standard Room</Typography>
                                            <Typography fontWeight={'500'} fontSize={'20px'} color={'#2D3DDF'}>1,000 BAHT/night</Typography>
                                        </Box>
                                        <div onClick={() => {
                                            router.push(pathname + '/Booking', { scroll: false })
                                        }}>
                                            <Box height={'100%'} width={'60px'} bgcolor={'blue'} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ cursor: 'pointer', borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px' }}>

                                                <Typography sx={{
                                                    writingMode: 'vertical-lr',
                                                    textOrientation: 'mixed',
                                                    color: '#fff',
                                                    fontSize: '18px',
                                                }}>Book Now</Typography>

                                            </Box>
                                        </div>
                                    </Box>

                                </Card>
                            </Grid>
                        </Grid>

                    </Box>
                    <Box width={'40%'} height={'100%'}>
                        <Box width={'88%'}>
                            <Paper
                                sx={{
                                    // textAlign: 'center'
                                }}
                            >
                                <Box px={4} py={4}>
                                    <Grid container>
                                        <Grid>
                                            <Box width={'75px'} height={'59px'} sx={{ backgroundImage: "url('/img/icon/rating.png')" }} display={'flex'} alignItems={'center'}>
                                                <Typography fontSize={'28px'} fontWeight={'500'} color={'#fff'} ml={1.5}>8.4</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid>
                                            <Box display={'flex'} alignItems={'start'} flexDirection={'column'}>
                                                <Typography fontSize={'20px'} fontWeight={'400'} color={'#000'} ml={1.5}>Excellent</Typography>
                                                <Typography fontSize={'16px'} fontWeight={'300'} color={'#B7BCF3'} ml={1.5}>6879 Reviews</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container mt={3} rowSpacing={1}>
                                        <Grid item md={12}>
                                            <Box display={'flex'} alignItems={'start'} flexDirection={'row'}>
                                                <Typography width={'30%'} fontSize={'16px'} fontWeight={'300'} color={'#000'} ml={1.5}>Housekeeping</Typography>
                                                <img src="/img/icon/rating_4.png"></img>
                                            </Box>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Box display={'flex'} alignItems={'start'} flexDirection={'row'}>
                                                <Typography width={'30%'} fontSize={'16px'} fontWeight={'300'} color={'#000'} ml={1.5}>Food</Typography>
                                                <img src="/img/icon/rating_4dot5.png"></img>
                                            </Box>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Box display={'flex'} alignItems={'start'} flexDirection={'row'}>
                                                <Typography width={'30%'} fontSize={'16px'} fontWeight={'300'} color={'#000'} ml={1.5}>Service</Typography>
                                                <img src="/img/icon/rating_4.png"></img>
                                            </Box>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Box display={'flex'} alignItems={'start'} flexDirection={'row'}>
                                                <Typography width={'30%'} fontSize={'16px'} fontWeight={'300'} color={'#000'} ml={1.5}>Staff</Typography>
                                                <img src="/img/icon/rating_4.png"></img>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                    <Typography color={'#000'} style={{
                                        marginTop: '40px',
                                        marginBottom: '1rem'
                                    }}>
                                        {'Services'}
                                    </Typography>
                                    <Stack direction={'row'} spacing={3}>
                                        <Box width={50} height={50} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={6}>
                                            <CarFront color="#2D3DDF" />
                                        </Box>
                                        <Box width={50} height={50} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={3}>
                                            <Bath color="#2D3DDF" />
                                        </Box>
                                        <Box width={50} height={50} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={3}>
                                            <img src="/img/icon/wine.png" />
                                        </Box>
                                        <Box width={50} height={50} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={3}>
                                            <Wifi color="#2D3DDF" />
                                        </Box>
                                        <Box width={50} height={50} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={3}>
                                            <img src="/img/icon/bell.png" />
                                        </Box>
                                        <Box width={50} height={50} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={3}>
                                            <Ellipsis color="#2D3DDF" />
                                        </Box>
                                    </Stack>
                                </Box>
                            </Paper>
                            <Box display={'flex'} flexDirection={'row'} mt={3}>
                                <img src="/img/icon/star.png"></img>
                                <Typography ml={2} mt={1} fontSize={'20px'} fontWeight={'400'} color={'#2D3DDF'}>This property is in highly demand today.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Stack>


            </Box>
        </Box>)
}