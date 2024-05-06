"use client";
import TextfieldStyle from "@/app/component/textfield/textfieldStyle";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { HotelLists, RecommendedHotel } from "@/app/type/type"
import { usePathname, useRouter } from 'next/navigation'

export default function HotelListsPage() {

    const [hotelLists, setHotelLists] = useState<HotelLists[]>();
    const [hotelRecommended, setHotelRecommended] = useState<RecommendedHotel[]>();

    const fetchHotelLists = async () => {
        try {
            const response = await fetch('/mocks/hotel_lists.json');
            const data = await response.json();
            console.log('fetching HotelLists', data);
            setHotelLists(data);
        } catch (error) {
            console.error('Error fetching HotelLists:', error);
        }
    };

    const fetchHotelRecomandedHotel = async () => {
        try {
            const response = await fetch('/mocks/hotel_recomanded.json');
            const data = await response.json();
            console.log('fetching HotelRecomandedHotel', data);
            setHotelRecommended(data);
        } catch (error) {
            console.error('Error fetching HotelRecomandedHotel:', error);
        }
    };

    useEffect(() => {
        fetchHotelLists();
        fetchHotelRecomandedHotel();
    }, [])

    const router = useRouter()
    const pathname = usePathname()

    return (<Stack direction={'row'}>
        <Box display={'table-cell'} sx={{ width: '80%', height: 'auto', p: 2 }} justifyContent={'center'}>
            <Box width={'100%'}>
                <TextfieldStyle id="search" name="search" placeholder="Search city , Country, Place for Travel advisory"></TextfieldStyle>
                <Grid container mt={2} mb={1}>
                    <Grid md={8} >
                        <Typography fontSize={'20px'} fontWeight={'500'}>Best places to enjoy your stay</Typography>
                    </Grid >
                    <Grid md={2}>

                    </Grid>
                    <Grid md={2} display={'flex'} justifyContent={'center'}>
                        <Stack direction={'row'} spacing={2}>
                            <Button variant="outlined">Sort By</Button>
                            <Button variant="outlined">Filter</Button>
                        </Stack>
                    </Grid>
                </Grid>
                <Box>
                    <Grid container rowSpacing={3}>

                        {hotelLists && hotelLists.map((item) => {
                            return (<Grid item xs={12} sm={12} md={4} display={'flex'} justifyContent={'center'} key={item.id}>
                                <Stack direction={'column'}>
                                    <img src={item.hotel_img} style={{ width: '449px' }}></img>
                                    <Stack direction={'row'} spacing={1} display={'flex'} justifyContent={'space-between'} maxWidth={'425px'}>
                                        <Box sx={{ mt: -1.5 }}>
                                            <p style={{ fontSize: '20px' }}>
                                                {item.hotel_name}
                                            </p>
                                            <p style={{ fontSize: '16px' }}>
                                                {item.hotel_details}
                                            </p>
                                        </Box>
                                        <Box display={'flex'} textAlign={'center'} justifyContent={'center'}>
                                            <Button onClick={
                                                () => {
                                                    router.push(pathname + '/Details', { scroll: false })
                                                }

                                            } sx={{
                                                bgcolor: '#fff', height: '52px', width: '184px', border: '1px solid #fff',
                                                '&:hover': {
                                                    backgroundColor: '#fff',
                                                }
                                            }} variant="contained"><p style={{ color: '#2D3DDF', fontWeight: '500' }} >View Details</p></Button>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>)
                        })}
                    </Grid>
                </Box>
            </Box>


        </Box>
        <Box display={'flex'} sx={{ width: '20%' }} justifyContent={'end'}>
            <Paper sx={{ width: '85%', mt: 11 }}>
                <Box mx={2} my={2}>
                    <Typography mb={1} fontSize={'18px'} fontWeight={'400'}>
                        Recomanded
                    </Typography>
                    <Stack direction={'column'} spacing={2}>
                        {hotelRecommended && hotelRecommended.map((item) => {
                            return (
                                <Box key={item.id}>
                                    <img src={item.hotel_img} style={{ width: '256px', marginBottom: '5px' }}></img>
                                    <p style={{ fontSize: '14px', fontWeight: '400' }}>{item.hotel_title1}</p>
                                    <p style={{ fontSize: '14px', fontWeight: '400' }}>{item.hotel_title2}</p>
                                </Box>
                            )
                        })}
                    </Stack>
                </Box>
            </Paper>
        </Box>
    </Stack>);
}