import  React, { useEffect, useContext } from 'react';
const axios = require('axios');
const qs = require('qs');

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import illustration from "images/logo.png";
import logo from "images/logo.png";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import spinnerImageSrc from "images/Hourglass.gif";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { ReactComponent as MessageIcon } from "feather-icons/dist/icons/message-square.svg";
import { ReactComponent as PhoneIcon } from "feather-icons/dist/icons/phone-call.svg";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const SpinnerImage = tw.img`h-56 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h2`text-2xl xl:text-3xl font-extrabold`;
const SubHeading = tw.h3`text-2xl xl:text-3xl font-bold`;
const MessageOptionHeader = tw.h5`text-2xl xl:text-3xl font-bold`;
const FormContainer = tw.div`w-full mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const SubmitEmergencyButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-4 rounded-lg hover:bg-red-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const SubmitMessageButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const SubmitWhatappButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  SubHeadingText = "This vehicle belongs to",
  
  SubmitButtonMsgIcon = MessageIcon,
  SubmitButtonCallIcon = PhoneIcon,

}) => {
  const [ownerContact, setOwnerContact] = React.useState('');
  const [otherContacts, setOtherContacts] = React.useState({});
  const [scanedVehical, setScanedVehical] = React.useState({});
  const [detailsFetched, setDetailsFetched] = React.useState(false);
  const [message, setMessage] = React.useState('something is wrong with your vehicle.');
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  
  console.log("window: ",  window.document.URL.split('qrScreen/')[1]);
  
  useEffect(() => {
    // setTimeout(() => { 
    if(!detailsFetched){
      var data = JSON.stringify({
        "qr_code": window.document.URL.split('qrScreen/')[1]
      });
      let devURL = 'http://192.168.48.43:8080/api/getVehicleDetailsByQR';
      let prodURL = 'http://rakshaksvc.cyberimprintsolutions.com/api/getVehicleDetailsByQR';
      var config = {
        method: 'post',
        url: prodURL,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {      
        if(response.data.length !== 0){
        //   alert("data fetched")
          setDetailsFetched(true);
          setScanedVehical(response.data[0]);
          setOwnerContact(JSON.parse(response.data[0]['primary_contacts'])['ownerContact']);
          setOtherContacts(JSON.parse(response.data[0]['primary_contacts']));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
  // }, 3000); 
  }, [detailsFetched])

  const sendMessage = () => {
    // const numberPlateError = fieldValidator(numberPlate.value)
    let numberPlate = document.getElementById('reg').value;
    
    if(numberPlate !== ""){
      let messageBody = "Hi, "+scanedVehical.owner_name+ " a user from Rakshak code reported that "+ message +" The plate number of your vehicle is "+ numberPlate +" - adsxenium";
      // let contact = 
      var data = qs.stringify({
        'data': '{\n"FORMAT":"1",\n"USERNAME":"xenium",\n"PASSWORD":"dwhx2346DW",\n"SENDERID":"ADSXEN",\n"TEXTTYPE":"TEXT",\n"EntityID":"1701162816759889599",\n"TemplateID":"1707163185943480571",\n"SMSTEXT":"'+messageBody+'",\n"MOBLIST":["'+ownerContact+'"]\n}' 
      });
      
      var config = {
        method: 'post',
        url: 'http://182.18.144.182/Api/smsapi/JsonPost',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setOpenDialog(false)

      })
      .catch(function (error) {
        console.log(error);
      });

    }
  }

  const callOwner = () => {
    let numberPlate = document.getElementById('reg').value;
    
    if(numberPlate !== ""){
      const args = {
        number: ownerContact,
        prompt: true,
      };
      // Make a call
      
    }
  }

  return (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer >
          { !detailsFetched ? <SpinnerImage src={spinnerImageSrc} /> :
          <>
          <LogoLink href={logoLinkUrl}>
            <DirectionsCarIcon color='#3C0D99' />
            {/* <LogoImage src={logo} /> */}
          </LogoLink>
          <MainContent style={{marginTop: "1rem"}}>
            <SubHeading>{SubHeadingText}</SubHeading>
            <Heading>{scanedVehical.owner_name}</Heading>
            
            <FormContainer style={{marginTop: '1rem', maxWidth: '40rem'}}>
            <DividerTextContainer style={{marginTop: 0, marginBottom: '2rem'}}>
              <DividerText>Message options to send to vehicle owner</DividerText>
            </DividerTextContainer>
              
              {/* <Form style={{maxWidth: 'none'}}> */}
                <RadioGroup
                  aria-label="gender"
                  name="controlled-radio-buttons-group"
                  value={message}
                  onChange={handleMessageChange}
                >
                  <FormControlLabel value="your Vehicle is in No Parking OR Wrong Parking" control={<Radio />} label="Vehicle is in No Parking OR Wrong Parking." />
                  <FormControlLabel value="your vehicle is being towed away." control={<Radio />} label="Your vehicle is being towed away." />
                  <FormControlLabel value="your vehicle is Not Locked Parking OR Light in ON." control={<Radio />} label="Your vehicle is Not Locked Parking OR Light in ON." />
                  <FormControlLabel value="something is wrong with your vehicle." control={<Radio />} label="Something is wrong with your vehicle." />
                </RadioGroup>
                
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <SubmitMessageButton onClick={() => setOpenDialog(true)}>
                      <SubmitButtonMsgIcon className="icon" />
                      {/* <span className="text">Message owner</span> */}
                    </SubmitMessageButton>
                  </Grid>
                  <Grid item xs={4}>
                    <SubmitWhatappButton >
                      <WhatsappIcon  />
                    </SubmitWhatappButton>
                  </Grid>
                  <Grid item xs={4}>
                    <SubmitButton >
                      <SubmitButtonCallIcon className="icon" />
                      {/* <span className="text">Call owner</span> */}
                    </SubmitButton>
                  </Grid>
                  
                  
                </Grid>
                
                <SubmitEmergencyButton >
                  <SubmitButtonCallIcon className="icon" />
                  <span className="text">Emergency</span>
                </SubmitEmergencyButton>
              {/* </Form> */}
            </FormContainer>
          </MainContent>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Verify vehicle</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please verify the vehicle to send the notification to the vehicle owner.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="reg"
                    label="Vehicle Reg. No."
                    type="text"
                    fullWidth
                    variant="standard"
                    style={{textTransform: 'uppercase'}}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button onClick={sendMessage}>Send</Button>
                </DialogActions>
            </Dialog>
          </>
          }
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
};
