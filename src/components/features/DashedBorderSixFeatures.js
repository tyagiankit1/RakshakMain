import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";


import FlatTyreIconImage from "../../images/icons/flat-tyre.jpeg";
import AlertIconImage from "../../images/icons/alert.jpeg";
import ChallanIconImage from "../../images/icons/challan.jpeg";
import JumpStartIconImage from "../../images/icons/jumpstart.jpeg";
import LeakIconImage from "../../images/icons/leak.jpeg";

import ScanIconImage from "../../images/icons/scan.jpeg";
import SelfStartIconImage from "../../images/icons/selfstart.jpeg";
import TowingIconImage from "../../images/icons/towing.jpeg";
import RulesIconImage from "../../images/icons/rules.jpeg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw` text-center rounded-full p-8  relative`}
    img {
      ${tw`w-24 h-24`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    { imageSrc: FlatTyreIconImage, title: "Flat Tyre", description: "We provide details for all the mechanics who provide services for repairing the flat type of your vehicle near you."},
    { imageSrc: JumpStartIconImage, title: "Jump Start",description: "We provide details for all the mechanics who provide services for repairing the Car Jumpstart issues in your vehicle near you." },
    { imageSrc: LeakIconImage, title: "Fluid Leakage",description: "We provide details for all the mechanics who provide services for repairing the Car Fluid leakage in your vehicle near you." },
    { imageSrc: ScanIconImage, title: "Engine Scanning", description: "We provide details for all the mechanics who provide services for Scanning the engine in your vehicle near you." },
    { imageSrc: SelfStartIconImage, title: "Self-Start Issue", description: "We provide all the mechanic who provide services for repairing the self-start issues of your vehicle near you." },
    { imageSrc: TowingIconImage, title: "Towing", description: "We provide all the mechanic who provide towing services near you." },
    { imageSrc: AlertIconImage, title: "Alert", description: "We provide alerts for the Vehicle Insurance expiry and Vehicle Pollution Certificate expiry." },
    { imageSrc: ChallanIconImage, title: "Challan", description: "We provide alerts and ways to check the Challan issues on your vehicle and also ways to pay them." },
    { imageSrc: RulesIconImage, title: "Traffic rules & Fines", description: "We provide the list of the Traffic rules and fines provided by the Govt. of India." }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-primary-500">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title" style={{color: '#0098DB'}} >{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
