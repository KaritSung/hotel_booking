"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";


export default function Complete() {
    const router = useRouter();

    return (
        <Stack direction={'row'}>
            <Box display={'table-cell'} sx={{ width: '100%', height: 'auto', p: 2 }} justifyContent={'center'}>
                <Box display={'flex'} alignContent={'center'} justifyContent={'center'} >
                    <Stack direction={'column'} mt={5}>
                        <img width={'637px'} src="/img/bg/bg_complete.png" alt="bg_complete"></img>
                        <Typography ml={-20} fontSize={'48px'} fontWeight={'500'} color={'#2D3DDF'}>Booking Successfully completed</Typography>
                        <Typography ml={-8} fontSize={'20px'} fontWeight={'300'} color={'#000000'}>Your trip schedule is ready,please check under profile.</Typography>
                        <Box textAlign={'center'} ml={-20} mt={5}>
                            <Button onClick={() => { router.replace('/Explore') }} variant="contained" sx={{ bgcolor: '#2D3DDF', width: '243px', height: '50px' }}>HOME</Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Stack>
    )
}