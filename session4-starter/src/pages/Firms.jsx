import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container"
import { Button, Grid, Typography } from "@mui/material";
import FirmCard from "../components/Cards/FirmCard";
// import {useDispatch, useSelector} from "react-redux"
// import { fetchStart, firmSuccess } from '../features/stockSlice'
// import axios from "axios"

const Firms = () => {
  //? firms verileri bana birden fazla yerde lazım olduğu için fonksiyonu burada değil de her yerden erişebileceğim bir noktada tanımlıyorum. İçerisinde react hookları lazım olduğu için de bu ortak nokta en iyi custom hook olmuş oluyor.
  // const dispatch = useDispatch()
  // const token = useSelector(state=> state.auth.token)

  // const getFirms = async () => {
  //   dispatch(fetchStart())
  //   try {
  //     const {data} = await axios(`${import.meta.env.VITE_BASE_URL}firms`, {
  //       headers : {
  //           Authorization:`Token ${token}`
  //       }
  //     })
  //     console.log(data)
  //     dispatch(firmSuccess(data))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const {
    // getFirms,
    getStockData,
  } = useStockCall();

  const {firms} = useSelector(state=> state.stock)
  console.log(firms)
  useEffect(() => {
    // getFirms()
    getStockData("firms");
  }, []);

  return <Container>
    <Typography
     align="center"
     color="secondary.second"
     variant="h4"
     component="h1"
    >
      Firms
    </Typography>
    <Button variant="contained">New Firm</Button>
    <Grid container spacing={2} mt={2}>
      {
        firms.map(firm => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
            <FirmCard/>
          </Grid>
        ))
      }
    </Grid>
  </Container>;
};

export default Firms;
