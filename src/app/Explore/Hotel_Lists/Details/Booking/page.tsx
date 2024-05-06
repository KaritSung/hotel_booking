"use client";
import TextfieldStyle from "@/app/component/textfield/textfieldStyle";
import {
    Box,
    Button, Grid, Paper,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    first_name: yup.string().required("Please enter your first name"),
    last_name: yup.string().required("Please enter your Last name"),
    email: yup.string().email("Please enter a valid email format").required("Please enter your email"),
    mobile: yup.string().required("Please enter your mobile number"),
    special_request: yup.string().nullable()
});

export default function Booking() {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = async (data: any) => {
        console.log({ data });
        // const { first_name, last_name, email, mobile, special_request } = data;
        // let requestOptions: RequestInit = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ first_name, last_name, email, mobile, special_request }),

        // };
        // let response = await fetch("/api/service", requestOptions);
        // console.log(response);
        // if (!response.ok) {
        //     console.log("Error creating booking.");
        //     console.log(response);
        //     return;
        // }

        // //success
        // console.log(response);
        router.replace('/Payment')
    };

    return (
        <form noValidate onSubmit={handleSubmit(onSubmitHandler)}>
            <Box width={"100%"} height={"100%"}>
                <Box bgcolor={"#F4F7FF"} display={"flex"} ml={-5}>
                    <Box ml={5} display={"flex"} width={"100%"}>
                        <Box width={"95%"} sx={{ mt: 3 }}>
                            <Box sx={{ mb: 2 }}>
                                <TextfieldStyle
                                    id="search"
                                    name="search"
                                    placeholder="Search city , Country, Place for Travel advisory"
                                ></TextfieldStyle>
                            </Box>
                            <Grid container spacing={4}>
                                <Grid item sm={12} md={3}>
                                    <TextField
                                        sx={{
                                            fontSize: "188px",
                                            fontWeight: "400",
                                            bgcolor: "#F2F3FF",
                                            backgroundColor: "#fff",
                                            "& .MuiOutlinedInput-root": {
                                                "& fieldset": {
                                                    borderColor: "#707070",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "#707070",
                                                },
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#707070",
                                                },
                                            },
                                        }}
                                        fullWidth
                                        required
                                        id="outlined-required"
                                        defaultValue="Where are you going?"
                                    />
                                </Grid>
                                <Grid item sm={12} md={3}>
                                    <Stack direction={"row"}>
                                        <Box width={"50%"}>
                                            <TextField
                                                sx={{
                                                    fontSize: "188px",
                                                    fontWeight: "400",
                                                    bgcolor: "#F2F3FF",
                                                    backgroundColor: "#fff",
                                                    "& .MuiOutlinedInput-root": {
                                                        "& fieldset": {
                                                            borderColor: "#707070",
                                                        },
                                                        "&:hover fieldset": {
                                                            borderColor: "#707070",
                                                        },
                                                        "&.Mui-focused fieldset": {
                                                            borderColor: "#707070",
                                                        },
                                                    },
                                                }}
                                                fullWidth
                                                required
                                                id="outlined-required"
                                                defaultValue="20 Dec,2020"
                                            />
                                        </Box>
                                        <Box width={"50%"}>
                                            <TextField
                                                sx={{
                                                    fontSize: "188px",
                                                    fontWeight: "400",
                                                    bgcolor: "#F2F3FF",
                                                    backgroundColor: "#fff",
                                                    "& .MuiOutlinedInput-root": {
                                                        "& fieldset": {
                                                            borderColor: "#707070",
                                                        },
                                                        "&:hover fieldset": {
                                                            borderColor: "#707070",
                                                        },
                                                        "&.Mui-focused fieldset": {
                                                            borderColor: "#707070",
                                                        },
                                                    },
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
                                            fontSize: "188px",
                                            fontWeight: "400",
                                            bgcolor: "#F2F3FF",
                                            backgroundColor: "#fff",
                                            "& .MuiOutlinedInput-root": {
                                                "& fieldset": {
                                                    borderColor: "#707070",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "#707070",
                                                },
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#707070",
                                                },
                                            },
                                        }}
                                        fullWidth
                                        required
                                        id="outlined-required"
                                        defaultValue="2 adult ,0 children - 1 room"
                                    />
                                </Grid>
                                <Grid item sm={12} md={2}>
                                    <Box
                                        display={"flex"}
                                        textAlign={"center"}
                                        justifyContent={"center"}
                                    >
                                        <Button
                                            fullWidth
                                            sx={{ bgcolor: "#2D3DDF", height: "56px", width: "100%" }}
                                            variant="contained"
                                        >
                                            Search
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                            <div style={{ marginBottom: "1rem" }}></div>
                        </Box>
                    </Box>
                </Box>
                <Box width={"100%"}>
                    <Stack direction={"row"} width={"100%"} height={"100%"}>
                        <Box width={"60%"}>
                            <Box mt={3}>
                                <Box>
                                    <Typography fontSize={'24px'} fontWeight={'500'} color={'#221F3C'}>Review your booking</Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                                    <Typography mr={1} fontSize={'22px'} fontWeight={'500'} color={'#2D3DDF'}>Holiday In Resort</Typography>
                                    <img src="/img/icon/rating_4.png"></img>
                                </Box>
                                <Box>
                                    <Typography fontSize={'20px'} fontWeight={'300'} color={'#737373'}>Tambudki, Arpora, goa, Goa, India</Typography>
                                    <Typography fontSize={'20px'} fontWeight={'300'} color={'#737373'}>This hotel is reviewed by global firm</Typography>
                                </Box>
                                <Box my={3} bgcolor={'#F4F7FF'} sx={{ borderRadius: '12px' }}>
                                    <Grid container sx={{ px: 2.5, py: 2.5 }}>
                                        <Grid sm={12} md={3}>
                                            <Typography fontSize={'16px'} fontWeight={'300'} color={'#737373'}>Check-in</Typography>
                                            <Typography fontSize={'20px'} fontWeight={'500'} color={'#221F3C'}>Sunday 21, Dec</Typography>
                                            <Typography fontSize={'18px'} fontWeight={'300'} color={'#737373'}>10am</Typography>
                                        </Grid>

                                        <Grid sm={12} md={3} alignContent={'center'}>
                                            <Box borderRadius={'3px'} bgcolor={'#B7BCF3'} width={'131px'} textAlign={'center'}> <Typography py={1.5} fontSize={'16px'} fontWeight={'300'} color={'#737373'}>1 night</Typography></Box>
                                        </Grid>
                                        <Grid sm={12} md={3}>
                                            <Typography fontSize={'16px'} fontWeight={'300'} color={'#737373'}>Check-out</Typography>
                                            <Typography fontSize={'20px'} fontWeight={'500'} color={'#221F3C'}>Monday 22,Dec</Typography>
                                            <Typography fontSize={'18px'} fontWeight={'300'} color={'#737373'}>10am</Typography>
                                        </Grid>
                                        <Grid sm={12} md={3} alignContent={'center'}>
                                            <Typography fontSize={'20px'} fontWeight={'500'} color={'#221F3C'}>2 Adult - 1 room</Typography>
                                        </Grid>

                                    </Grid>
                                </Box>
                                <Box>
                                    <Typography fontSize={'20px'} fontWeight={'400'} color={'#221F3C'}> Guest Details </Typography>
                                </Box>
                                <Box width={'90%'} mt={1}>
                                    <Grid container rowSpacing={2} columnSpacing={2}>
                                        <Grid item sm={12} md={6}>
                                            <TextField
                                                {...register("first_name")}
                                                sx={{
                                                    fontWeight: '400',
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        }
                                                    }
                                                }}
                                                fullWidth
                                                required
                                                id="outlined-required"
                                                placeholder="First Name"
                                            />
                                            <p style={{ color: 'red' }}>{errors.first_name?.message}</p>
                                        </Grid>
                                        <Grid item sm={12} md={6}>

                                            <TextField
                                                {...register("last_name")}
                                                sx={{
                                                    fontWeight: '400',
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        }
                                                    }
                                                }}
                                                fullWidth
                                                required
                                                id="outlined-required"
                                                placeholder="Last Name"

                                            />
                                            <p style={{ color: 'red' }}>{errors.last_name?.message}</p>
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <TextField
                                                {...register("email")}
                                                sx={{
                                                    fontWeight: '400',
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        }
                                                    }
                                                }}
                                                fullWidth
                                                required
                                                id="outlined-required"
                                                placeholder="E-mail address"

                                            />
                                            <p style={{ color: 'red' }}>{errors.email?.message}</p>
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <TextField
                                                {...register("mobile")}
                                                inputProps={{ maxLength: 10 }}
                                                sx={{

                                                    fontWeight: '400',
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#B7BCF3',
                                                        }
                                                    }
                                                }}
                                                fullWidth
                                                required
                                                id="outlined-required"
                                                placeholder="Mobile number"


                                            />
                                            <p style={{ color: 'red' }}>{errors.mobile?.message}</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Button sx={{ color: 'black' }} variant="text">Add Guest +</Button>
                                <Typography fontSize={'18px'} fontWeight={'400'} color={'#221F3C'}>Special Request(optional)</Typography>
                                <Box width={'90%'} mt={1}>
                                    <TextField
                                        {...register('special_request')}
                                        sx={{
                                            fontWeight: '400',

                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#B7BCF3',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#B7BCF3',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#B7BCF3',
                                                }
                                            }
                                        }}
                                        fullWidth
                                        multiline
                                        id="outlined-required"
                                        inputProps={{
                                            style: {
                                                height: 130,
                                                padding: '0 14px',
                                            },
                                        }}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        sx={{ bgcolor: "#2D3DDF", width: "30%", height: '62px', my: 5 }}
                                        variant="contained"
                                    >
                                        Continue
                                    </Button>
                                </Box>

                            </Box>
                        </Box>
                        <Box width={"40%"} display={'flex'} justifyContent={'center'}>
                            <Box mt={4} width={'73%'}>

                                <Grid container justifyContent={'center'} rowSpacing={1} width={'100%'}>
                                    <Grid item md={6}>
                                        <Typography fontSize={'20px'} fontWeight={'300'} color={'#737373'}>
                                            {'1 room X 1 night'}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6} textAlign={'end'}>
                                        <Typography fontSize={'20px'} fontWeight={'300'} color={'#B7BCF3'}>
                                            {'1,000.00'}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6} justifyContent={'end'}>
                                        <Typography fontSize={'20px'} fontWeight={'300'} color={'#737373'}>
                                            {'Total discount'}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6} textAlign={'end'}>
                                        <Typography fontSize={'20px'} fontWeight={'300'} color={'#B7BCF3'}>
                                            {'0.00'}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6} justifyContent={'end'}>
                                        <Typography fontSize={'20px'} fontWeight={'300'} color={'#737373'}>
                                            {'Price after discount'}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6} textAlign={'end'}>
                                        <Typography fontSize={'20px'} fontWeight={'300'} color={'#B7BCF3'}>
                                            {'1,000.00'}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6} justifyContent={'end'}>
                                        <Typography fontSize={'20px'} fontWeight={'300'} color={'#737373'}>
                                            {'Taxes & service fees'}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6} textAlign={'end'}>
                                        <Typography fontSize={'20px'} fontWeight={'300'} color={'#B7BCF3'}>
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
                                <Paper sx={{ boxShadow: 6, borderRadius: '12px', mt: 3 }}>
                                    <Box sx={{ px: 2, py: 2 }}>
                                        <Typography fontSize={'20px'} fontWeight={'400'} color={'#221F3C'}>
                                            {'Cancellation Charges'}
                                        </Typography>
                                        <Typography my={2} fontSize={'16px'} fontWeight={'400'} color={'#221F3C'}>
                                            {'Non Refundable'}
                                        </Typography>
                                        <p style={{ fontSize: '16px', color: '#737373', marginBottom: '1rem' }}>
                                            Penalty may be charged by the airline & by MMT<br />
                                            based on how close to departure date you cancel. <br />
                                            View fare rules to know more.
                                        </p>

                                        <p style={{ fontSize: '16px', color: '#737373' }}>
                                            VIEW POLICY
                                        </p>
                                    </Box>
                                </Paper>
                            </Box>
                        </Box>
                    </Stack>
                </Box >
            </Box >
        </form>
    );
}
