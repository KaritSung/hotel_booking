"use client";
import { Box, Button, Card, CardContent, CardMedia, Stack, TextField, Typography, Grid, Rating, Chip } from "@mui/material";
import TextfieldStyle from "../component/textfield/textfieldStyle";
import { usePathname, useRouter } from 'next/navigation';
import InputAdornment from '@mui/material/InputAdornment';
import { Bath, Calendar, CarFront, Dumbbell, Ellipsis, MapPin, Users, Wifi, Wine } from "lucide-react";
import StarRateIcon from '@mui/icons-material/StarRate';

export default function Explore() {
    const router = useRouter()
    const pathname = usePathname()

    return (<Stack direction={'row'} height={'100%'} overflow={'hidden'}>
        <Box display={'flex'} sx={{ width: '50%', height: 'auto', p: 2 }} justifyContent={'center'}>
            <Box width={'95%'} height={10}>
                <TextfieldStyle id="search" name="search" placeholder="Search city , Country, Place for Travel advisory"></TextfieldStyle>
                <Typography mt={8} fontSize={'38px'} color={'#2D3DDF'} fontWeight={'400'}>What Are You Looking For? </Typography>
                <Box display={'flex'} ml={13} my={5}>
                    <img src="/img/bg/type_search.png" style={{}}></img>
                </Box>

                <Stack spacing={2}>
                    <TextField
                        sx={{
                            fontWeight: '400',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#2D3DDF',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#2D3DDF',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#2D3DDF',
                                }
                            }
                        }}
                        fullWidth
                        required
                        id="outlined-required"
                        defaultValue="Pattaya"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MapPin style={{ marginRight: '3rem' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Stack direction={'row'}>
                        <TextField
                            sx={{
                                fontWeight: '400',
                                bgcolor: '#F2F3FF',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#BEC3FF',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#BEC3FF',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#BEC3FF',
                                    }
                                }
                            }}
                            fullWidth
                            required
                            id="outlined-required"
                            defaultValue="Thu,28 Jan-2021"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Calendar style={{ marginRight: '3rem' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            sx={{
                                fontWeight: '400',
                                bgcolor: '#F2F3FF',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#BEC3FF',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#BEC3FF',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#BEC3FF',
                                    }
                                }
                            }}
                            fullWidth
                            required
                            id="outlined-required"
                            defaultValue="Fri,29 Jan-2021"

                        />
                    </Stack>
                    <TextField
                        sx={{
                            fontWeight: '400',
                            bgcolor: '#F2F3FF',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#BEC3FF',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#BEC3FF',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#BEC3FF',
                                }
                            }
                        }}
                        fullWidth
                        required
                        id="outlined-required"
                        defaultValue="2 adult ,1 children - 1 room"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Users style={{ marginRight: '3rem' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>
                <Box display={'flex'} textAlign={'center'} justifyContent={'center'}>
                    <Button onClick={() => {
                        router.push(pathname + '/Hotel_Lists', { scroll: false })
                    }} fullWidth sx={{ bgcolor: '#2D3DDF', height: '68px', width: '256px', mt: '1rem' }} variant="contained">Search</Button>
                </Box>
                <Typography mt={0.2} fontSize={'20px'} fontWeight={'400'}>Recent Searches</Typography>
                <Card sx={{ display: 'flex', boxShadow: 3 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 200, objectFit: 'fill' }}
                        image="/img/bg/hotel_card_1.png"
                        alt="hotal_card"

                    />
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                        <CardContent sx={{}}>
                            <Grid container>
                                <Grid md={12}>
                                    <Typography fontSize={'18px'} fontWeight={'400'} color={'black'} >Hotel JW Marriott</Typography>
                                </Grid>
                                <Grid md={12}>
                                    <Rating name="read-only" value={4} readOnly />
                                </Grid>
                                <Grid md={12}>
                                    <Stack direction={'row'} spacing={1}>
                                        <Chip sx={{ bgcolor: '#FF6969' }} avatar={<StarRateIcon fontSize="small" style={{ color: 'white' }} />} label={<Typography color={'white'} fontWeight={'500'} fontSize={'12'} mt={0.5}> 4.9</Typography>} />
                                        <Typography color={'#A8A8A8'} style={{ marginTop: '3px' }}>
                                            {'1366 Reviews'}
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid md={12}>
                                    <Typography color={'#A8A8A8'} style={{
                                        marginTop: '3px',
                                    }}>
                                        {'Amenities'}
                                    </Typography>
                                    <Stack direction={'row'} spacing={3}>
                                        <Box width={30} height={30} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={6}>
                                            <CarFront color="#003AA8" />
                                        </Box>
                                        <Box width={30} height={30} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={3}>
                                            <Bath color="#003AA8" />
                                        </Box>
                                        <Box width={30} height={30} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={3}>
                                            <img src="/img/icon/wine.png" alt="arrow_circle"></img>
                                        </Box>
                                        <Box width={30} height={30} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={3}>
                                            <Wifi color="#003AA8" />
                                        </Box>
                                        <Box width={30} height={30} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={3}>
                                            <img src="/img/icon/bell.png" alt="arrow_circle"></img>
                                        </Box>
                                        <Box width={30} height={30} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ borderRadius: '6px' }} boxShadow={3}>
                                            <Ellipsis color="#003AA8" />
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid md={12}>
                                    <Typography mt={0.5} fontWeight={'500'} color={'#2D3DDF'}>{'1,000/night'}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <div onClick={() => {
                            router.push(pathname + '/Hotel_Lists' + '/Details' + '/Booking', { scroll: false })
                        }}>
                            <Box height={'100%'} width={'80px'} bgcolor={'#2D3DDF'} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{ cursor: 'pointer' }}>
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

            </Box>


        </Box>
        <Box sx={{ width: '50%', height: 'auto', backgroundImage: "url('/img/bg/bgHotal.png')", borderBottomLeftRadius: '23px' }}>
            {/* <img src="/img/bg/bgHotal.png" style={{ height: '100%', width: '100%',position:'relative' }} ></img> */}
            <Box mt={'25rem'} mr={2} display={'flex'} justifyContent={'end'} alignContent={'center'}>
                <img src="/img/icon/arrow_circle.png" alt="arrow_circle"></img>
            </Box>
            <Box mt={'3rem'} mx={'4rem'}>
                <Stack direction={'column'}>
                    <Typography style={{ color: 'white', fontSize: '63px' }}>Incredible India</Typography>
                    <p style={{ color: 'white', fontSize: '33px', wordWrap: "break-word" }}>
                        “For where thy treasure is, <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; there also will thy heart be.”
                    </p>
                    <Box display={'flex'} textAlign={'center'} mt={2}>
                        <Button fullWidth sx={{ bgcolor: 'rgba(255, 255, 255, 0.36)', height: '64px', width: '179px', mt: '1rem', borderRadius: '0', border: '1px solid #fff' }} variant="contained">Take Tour</Button>
                    </Box>
                </Stack>
            </Box>
        </Box>
    </Stack>);
}