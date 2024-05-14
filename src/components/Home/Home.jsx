import React from "react";
import { Grid } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Grid container spacing={2} className="container_home">
        <Grid item xs={12} md={6} className="img1">
          <div>
            <img src="/img/logo.png" alt="Logo" className="image" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="img2">
          <div>
            <img
              src="/img/f.elconfidencial.com_original_969_a33_ee1_969a33ee159951475e24bd1f87771f69.png"
              alt="Imagen2"
              className="image"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
