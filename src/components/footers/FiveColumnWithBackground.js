import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line


import LogoImage from "../../images/logo.png";
import mockupImageSrc from "images/app-mockup.png"
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";

import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import appleIconImageSrc from "images/apple-icon.png";
import googlePlayIconImageSrc from "images/google-play-icon.png"

const Container = tw.div`relative bg-primary-500 text-gray-100 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const FiveColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const ColumnContainer = tw.div`max-w-2xl`
const TextContainer = tw(ColumnContainer)``;
const Text = tw(SectionHeading)`text-gray-100 lg:text-left max-w-none text-3xl leading-snug`;
const Subheading = tw(SubheadingBase)`text-yellow-500 mb-4 tracking-wider`
// const Container = tw(ContainerBase)`bg-gray-900 -mx-8`
// const Content = tw(ContentWithPaddingXl)``
const Row = tw.div`px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const AppLinksContainer = tw.div`mt-8 lg:mt-16 flex flex-col items-center sm:block`
const AppLink = styled.a`
  ${tw`w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 first:ml-0 bg-gray-100 hocus:bg-gray-300 text-gray-900 hocus:text-gray-900 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300`}
  img {
    ${tw`inline-block h-8 mr-3`}
  }
  span {
    ${tw`leading-none inline-block`}
  }
`;
const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;

const Divider = tw.div`my-16 border-b-2 border-primary-400 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-100`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-400`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const ImageContainer = tw(ColumnContainer)`mt-16 lg:mt-0 lg:ml-16 flex justify-end`;
const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-primary-700 opacity-50`;

export default ({
  subheading = "Download Application",
  text = "Developers all over the world are happily using Treact.",
  link1Text = "App Store",
  link1Url = "http://apple.com",
  link1IconSrc = appleIconImageSrc,
  link2Text = "Google Play",
  link2Url = "http://play.google.com",
  link2IconSrc = googlePlayIconImageSrc,
  imageSrc = mockupImageSrc,
}) => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/blog">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/faq">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Support</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/aboutUs">About Us</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              {/* <LinkListItem>
                <Link href="#">GDPR</Link>
              </LinkListItem> */}
              <LinkListItem>
                <Link href="/privacyPolicy">Privacy Policy</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/termsAndConditions">Terms of Service</Link>
              </LinkListItem>
              {/* <LinkListItem>
                <Link href="#">Disclaimer</Link>
              </LinkListItem> */}
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Download Application</ColumnHeading>
            {/* <Row> */}
          {/* <TextContainer> */}
          {/* {subheading && <Subheading>{subheading}</Subheading>} */}
            <AppLinksContainer style={{marginTop: '2rem'}}>
              <AppLink href={link1Url}>
                <img src={link1IconSrc} alt=""/>
                <span>{link1Text}</span>
              </AppLink><br /><br />
              <AppLink style={{marginLeft: 0}} href={link2Url}>
                <img src={link2IconSrc} alt=""/>
                <span>{link2Text}</span>
              </AppLink>
            </AppLinksContainer>
          {/* </TextContainer> */}
        {/* </Row> */}
          </Column>
        </FiveColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>RakshakQR Code</LogoText>
          </LogoContainer>
          <CopywrightNotice>&copy; 2021 Digital Work India. All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
      <DecoratorBlobContainer>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </DecoratorBlobContainer>
    </Container>
  );
};
