import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/system";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CustomButton from "./CustomButton";
import { useParams } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  //   {
  //     label: "San Francisco – Oakland Bay Bridge, United States",
  //     imgPath:
  //       "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  //   },
  //   {
  //     label: "Bird",
  //     imgPath:
  //       "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  //   },
  //   {
  //     label: "Bali, Indonesia",
  //     imgPath:
  //       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  //   },
  //   {
  //     label: "Goč, Serbia",
  //     imgPath:
  //       "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  //   },
  "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const PetDetail = ({ name, location, photos }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const image_urls = photos.length ? photos : images;

  const maxSteps = image_urls.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: "0px 0px 12px 8px #faeff0",
        }}
      >
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {image_urls.map((step, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step}
                    alt="Pet"
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ justifyContent: "center" }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </CardContent>
        <CardActions>
          <CustomButton variant="primary">Adopt {name}</CustomButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PetDetail;
