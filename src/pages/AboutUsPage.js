
import { Paper } from "@mui/material";
import PageContent from "../components/PageContent";

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function AboutUsPage() {
  let title = "About Us";

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ p: 3}} elevation={6}>
       <PageContent title={title}>
       <Box
      sx={{ bgcolor: 'background.paper', display: 'flex', height: 224}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Who we are" {...a11yProps(0)} />
        <Tab label="What we do" {...a11yProps(1)} />
        <Tab label="Where we are" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <div style={{ maxWidth: '700px'}}>Welcome to our pet adopting web application, your one-stop destination for finding the perfect furry companion!
            Our platform connects compassionate individuals with lovable pets in need of forever home.
            With a user-friendly interface, you can easily browse throuth a diverse range of pets by location and type, making
            it convenient to find your ideal match. Wheather you're searching for playful puppy, a cuddly kitten, or a loyal companion
            of any age or breed, our app simplifies the adoption process, allowing you to connect with shelters and rescue organizations
            directly from your device. Join us in making a diffrence in the lives of pets across the nation by welcoming a new member into your family today!
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{ maxWidth: '700px'}}>
        Our purpose is to provide stable and user friendly platform for Pet owner and Pet adopter.
        Where user can search for pet and if intrested they can adopt the pet.
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        We provide our service only in States for now.
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
        </PageContent>
    </Paper>
    
  );

//   return (
//     <Paper sx={{ p: 3}} elevation={6}>
//       <PageContent title={title}>
//         <p>Welcome to our pet adopting web application, your one-stop destination for finding the perfect furry companion!
//             Our platform connects compassionate individuals with lovable pets in need of forever home.
//             With a user-friendly interface, you can easily browse throuth a diverse range of pets by location and type, making
//             it convenient to find your ideal match. Wheather you're searching for playful puppy, a cuddly kitten, or a loyal companion
//             of any age or breed, our app simplifies the adoption process, allowing you to connect with shelters and rescue organizations
//             directly from your device. Join us in making a diffrence in the lives of pets across the nation by welcoming a new member into your family today!
//         </p>
//       </PageContent>
//     </Paper>
//   );
}

export default AboutUsPage;

