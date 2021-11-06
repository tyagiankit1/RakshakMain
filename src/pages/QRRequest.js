import React from "react";
const axios = require('axios');
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../images/dot-pattern.svg"
// import Header from "components/headers/light.js";
import FiveColumnWithBackground from "components/footers/FiveColumnWithBackground.js";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent  text-base font-medium tracking-wide border-b-2 py-2  hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`
w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

    
    
export default () => {

  const [open, setOpen] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [payload, setPayload] = React.useState({});  

  const orderQRCCode = () => {
    let devURL = 'http://192.168.1.4:8080/api/requestQRByUser';
    let prodURL = 'http://services.rakshakcode.com/api/requestQRByUser';
    var config = {
        method: 'post',
        url: prodURL,
        headers: { 
        'Content-Type': 'application/json'
        },
        data : payload
    };
    console.log("config--------->", config);
    axios(config)
    .then(function (response) {  
        console.log("response: ", response);
        setOpen(false);
        setOpenConfirm(true);
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  const handleClickOpen = () => {
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let address = document.getElementById("address-input").value;
    let state = document.getElementById("state-input").value;
    let contact = document.getElementById("contact-input").value;
    let referred = document.getElementById("referred-input").value;
    let city = document.getElementById("city-input").value;
    let pincode = document.getElementById("pincode-input").value;
    

    if(name !== "" && address !== "" && state !== "" && contact !== "" && city !== "" &&  pincode !== ""){
        let payload = {
            "name": name,
            "email": email,
            "address": address,
            "state": state,
            "contactNo": contact,
            "referred": referred,
            "city": city,
            "pincode": pincode,
            "orderStatus": "Requested"
        }
      setPayload(payload);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <Container>
      {/* <Content> */}
      <Header />
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Personal Details</h2>
            {/* <form > */}
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Name</Label>
                    <Input id="name-input" type="text" name="name" placeholder="E.g. John Doe" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Email Address</Label>
                    <Input id="email-input" type="email" name="email" placeholder="E.g. john@mail.com" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="address-input">Address</Label>
                    <Input id="address-input" type="text" name="address" placeholder="E.g. House no. x, xyz road" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="address-input">State</Label>
                    <Input id="state-input" type="text" name="state" placeholder="E.g. Uttar Pradesh" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer>
                    <Label htmlFor="contact-input">Contact Number</Label>
                    <Input id="contact-input" type="number" name="contact" placeholder="E.g. 1234567892" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="referred-input">Referred By</Label>
                    <Input id="referred-input" type="text" name="referredBy" placeholder="E.g. john123" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="city-input">City</Label>
                    <Input id="city-input" type="text" name="city" placeholder="E.g. Meerut" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="pincode-input">Pincode</Label>
                    <Input id="pincode-input" type="number" name="pincode" placeholder="E.g. 250002" />
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton type="submit" value="Submit" onClick={handleClickOpen}>Submit</SubmitButton>
            {/* </form> */}
          </div>
          <SvgDotPattern1 />
        </FormContainer>
        <FiveColumnWithBackground />
      {/* </Content> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book Now</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is the demo version for booking the QR code.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={orderQRCCode}>Book Now</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openConfirm} onClose={handleCloseConfirm}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            RakshakQR Code is successfully Booked.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={orderQRCCode}>Okay</Button> */}
          <PrimaryLink href="/">Okay</PrimaryLink>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
