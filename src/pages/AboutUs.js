import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import FiveColumnWithBackground from "components/footers/FiveColumnWithBackground.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature2
        // subheading={<Subheading>About RakshakQR Code</Subheading>}
        heading="About RakshakQR Code"
        description= "Digital Work India has come up with a unique idea, RakshakQR Code to solve accidents ,parking and roadside assistance related problems. Considering that these issues are still not given that much importance that they deserve, unlike the problems. Problems are big and sometimes life taking. We have gotten so advanced in our lives that we can order food sitting on our comfortable beds and sofas but when we get into an accident or similar situation, we still have to ask for help or have to look for an emergency number. Similarly when we are on the highway or out late at night and our car stops due to some technical issue, then in that situation we have to look for the mechanic. But not anymore because Rakshak Code has all in one app, wherein you can locate the nearest mechanic to your location and call them for help. Or in emergency situations, you can call in an ambulance or your loved ones to help you, or some other person can do the same on behalf of you just by scanning your QR code, stick on our vehicle.  Likewise parking is also an issue in our societies or localities, registered parking spaces are quite packed nowadays, people usually end up parking in front of someone’s cars, or blocking their residence, office spaces and gates. You never know what may happen to the vehicle when you park it and walk away. When you encounter unexpected situations and couldn’t contact the vehicle’s owner - you give a thought WHAT IF THERE WAS A SOLUTION TO IT. Well... We are here for it."
        // buttonRounded={false}
        // primaryButtonText="See Portfolio"
        // imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to make the travel more easy and safe."
        description = "We have been doing this to solve accidents, parking and roadside assistance related problems."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="We are very strict on our values so that we could provide better assistance to our customers."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "We are 24/7 available for our customers to help and support them with their problems."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "We are a strong team with a strong network to help you."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "We give higher importance to our customer's satisfaction with our services."
          },
        ]}
        linkText=""
      />
      
      <FiveColumnWithBackground />
    </AnimationRevealPage>
  );
};
