import { Box, Container, Typography,Paper,BottomNavigation } from "@material-ui/core";
import React from "react";
import CustomizedAccordions from "../components/Accordion";
import QuiltedImageList from "../components/ImageCollage";
import BasicModal from "../components/Modal"
function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in vegas
      </Typography>
      <Box  marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.istockphoto.com/photos/las-vegas-picture-id954500850?b=1&k=20&m=954500850&s=170667a&w=0&h=LdiSayYN68kDD0A_tgtB2ozbe3cIOTCRMjLb3z_8GY8="
          alt=""
          height={325}
        />
        <QuiltedImageList />
      </Box>
      <Box>

      <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet
        consequat ante. Phasellus pulvinar pharetra sollicitudin. Nunc ultricies
        ac ante non ornare. Aliquam iaculis maximus enim. Duis efficitur
        sollicitudin erat, quis varius erat accumsan commodo. Nunc luctus purus
        mi, ut rhoncus justo efficitur vel. Mauris libero enim, mattis a arcu
        nec, placerat cursus ipsum. Praesent metus justo, consequat ut lacinia
        non, vestibulum in mauris.
      </Typography>
      </Box>
      
      <Box marginBottom={10}>
          <Typography variant="h6" component="h4" marginTop={3}  marginBottom={2}>
              Frequently Asked Questions
          </Typography>
          <CustomizedAccordions/>
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation

        >
          <BasicModal/>
        </BottomNavigation>
      </Paper>
    </Container>
  );
}

export default Tour;
