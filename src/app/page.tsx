"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  return (
    <Stack direction={'row'}>
      <Box display={'table-cell'} sx={{ width: '100%', height: 'auto', p: 2 }} justifyContent={'center'}>
        <Box display={'flex'} alignContent={'center'} justifyContent={'center'} >
          <Stack direction={'column'} mt={45} justifyContent={'center'} textAlign={'center'}>
            <Typography ml={-20} fontSize={'48px'} fontWeight={'500'} color={'#2D3DDF'}>Welcome to hotel booking application</Typography>
            <Typography ml={-20} fontSize={'20px'} fontWeight={'300'} color={'#000000'}>By using Next.js Developed by Karit Sittisak</Typography>
            <Box textAlign={'center'} ml={-20} mt={5}>
              <Button onClick={() => { router.replace('/Explore') }} variant="contained" sx={{ bgcolor: '#2D3DDF', width: '243px', height: '50px' }}>Go to Explore</Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
