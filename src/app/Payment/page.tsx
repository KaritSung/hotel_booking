"use client";
import { Box, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { PaymentMethod } from "../type/type";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const StyledBox = styled(Box)(({ theme }) => ({
    background: "#fff",
    cursor: 'pointer',
    borderRadius: '12px',

    '.arrow_right': {
        display: "none"
    },
    '&:hover': {
        border: '1px solid #2D3DDF',
        boxShadow: 5
    },
    '&:hover .arrow_right': {
        display: "block"
    }
}));

export default function Payment() {
    const router = useRouter();
    const pathname = usePathname();
    const [paymentChannels, setPaymentChannels] = useState<PaymentMethod[]>();

    const fetchPaymentChannels = async () => {
        try {
            const response = await fetch('/mocks/payment_channels.json');
            const data = await response.json();
            console.log('fetching PaymentChannels', data);
            setPaymentChannels(data);
        } catch (error) {
            console.error('Error fetching PaymentChannels:', error);
        }
    };

    useEffect(() => {
        fetchPaymentChannels();
    }, [])

    return (
        <Stack direction={'row'}>
            <Box display={'table-cell'} sx={{ width: '60%', height: 'auto', p: 2 }} justifyContent={'center'}>
                <Box mx={3} my={10}>
                    <Typography fontSize={'24px'} fontWeight={'400'} color={'#221F3C'}>Payment Details</Typography>
                    <Stack direction={'column'} spacing={2} mt={3} ml={3}>
                        {paymentChannels?.map((item) => {
                            return (
                                <StyledBox width={'50%'} onClick={() => {
                                    router.replace(pathname + '/Complete')
                                }}>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Box py={2} px={2} display={'flex'} flexDirection={'row'} alignContent={'center'}>
                                            <img src={item.payment_img} alt="Logo"></img>
                                            <Box ml={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                                <Typography fontSize={'20px'} fontWeight={'400'} color={'#221F3C'}>{item.payment_name}</Typography>
                                            </Box>
                                        </Box>
                                        <Box display={'flex'} alignItems={'center'} justifyContent={'end'}><ChevronRight color="#2D3DDF" className="arrow_right" /></Box>
                                    </Stack>

                                </StyledBox>
                            )
                        })}

                    </Stack>


                </Box>
            </Box>
            <Box display={'table-cell'} sx={{ width: '40%' }}>
                <Box display={'flex'} width={'100%'} justifyContent={'center'}>
                    <Paper sx={{ width: '55%', mt: 16 }} >
                        <Grid py={3} px={2} container justifyContent={'center'} rowSpacing={1} width={'100%'}>
                            <Grid item md={6}>
                                <Typography fontSize={'16px'} fontWeight={'300'} color={'#737373'}>
                                    {'Base fare'}
                                </Typography>
                            </Grid>
                            <Grid item md={6} textAlign={'end'}>
                                <Typography fontSize={'16px'} fontWeight={'300'} color={'#B7BCF3'}>
                                    {'1,000.00'}
                                </Typography>
                            </Grid>
                            <Grid item md={6} justifyContent={'end'}>
                                <Typography fontSize={'16px'} fontWeight={'300'} color={'#737373'}>
                                    {'Total discount'}
                                </Typography>
                            </Grid>
                            <Grid item md={6} textAlign={'end'}>
                                <Typography fontSize={'16px'} fontWeight={'300'} color={'#B7BCF3'}>
                                    {'0.00'}
                                </Typography>
                            </Grid>
                            <Grid item md={6} justifyContent={'end'}>
                                <Typography fontSize={'16px'} fontWeight={'300'} color={'#737373'}>
                                    {'Price after discount'}
                                </Typography>
                            </Grid>
                            <Grid item md={6} textAlign={'end'}>
                                <Typography fontSize={'16px'} fontWeight={'300'} color={'#B7BCF3'}>
                                    {'1,000.00'}
                                </Typography>
                            </Grid>
                            <Grid item md={6} justifyContent={'end'}>
                                <Typography fontSize={'16px'} fontWeight={'300'} color={'#737373'}>
                                    {'Taxes & service fees'}
                                </Typography>
                            </Grid>
                            <Grid item md={6} textAlign={'end'}>
                                <Typography fontSize={'16px'} fontWeight={'300'} color={'#B7BCF3'}>
                                    {'140.00'}
                                </Typography>
                            </Grid>
                            <Grid item md={6} justifyContent={'end'}>
                                <Typography fontSize={'22px'} fontWeight={'500'} color={'#221F3C'}>
                                    {'Total Amount'}
                                </Typography>
                            </Grid>
                            <Grid item md={6} textAlign={'end'}>
                                <Typography fontSize={'22px'} fontWeight={'500'} color={'#2D3DDF'}>
                                    {'1,140.00'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Box>
        </Stack>
    );
}