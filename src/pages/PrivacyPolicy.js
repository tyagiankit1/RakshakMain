import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import FiveColumnWithBackground from "components/footers/FiveColumnWithBackground.js";
import { SectionHeading } from "components/misc/Headings";


const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "Privacy Policy" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Last updated: April 21, 2020</p>

            <p> This privacy policy (“Privacy Policy” or Policy”) describes www.rakshakcode.com (hereinafter referred to as “Site” or “Website”) or its mobile application (hereinafter referred to as “App” or “Mobile Application”) policy on the collection, use, and disclosure of information about you in connection with your use of the domain, www.rakshakcode.com and / or its Mobile Application. The terms “we”, “us” or “our” refer to www.rakshakcode.com and Rakshak Code Mobile Application. When you use the service available at our Website or / and Mobile Application, you consent to our collection, use, and disclosure of information about you as described in this Privacy Policy. The Site and Mobile Application is owned and controlled by -------company name and address ----------- </p>

            <p>We reserve the right to update, change, amend or modify this Privacy Policy at any time and said changes will be effective upon posting. Every time there is a change, we will display a notice on our Site and Mobile Application thereof. We shall also notify you by email. We will use your personal information in a manner consistent with the Privacy Policy in effect at the time you submitted the information unless you consent to the new or revised policy.
            </p>
            <p>In every respect, by using the Site, or our Mobile Application, you agree to be bound by the terms of this Privacy Policy. This Privacy Policy is effective from ------date---------and continues until revoked by the Company.</p>
            
            <h2>1. INTRODUCTION</h2>
            <ul>
              <li> Your privacy is important to you and to us, so we’ll protect the information you share with us. To protect your privacy, we follow different principles in accordance with worldwide practices for customer privacy and data protection. </li>
              <li> We at Rakshak Code are committed to respecting your online privacy and recognize your need for appropriate protection and management of any personally identifiable information (“Personal Information”) you share with us. For the purpose of this Policy, Personal Information means any information that may be used to identify an individual, including, but not limited to, your first, middle and last name, home or other physical address and an email address or other contact information, whether at work or at home, your phone number, email address, car that you own - its registration number, insurance and pollution control details, family members in your house driver’s license and other sensitive information such as passwords, authentication/authorization credentials, credit card information, credit card numbers, CVV numbers (three digit codes for Visa and MasterCard, four digit code for American Express) and magnetic stripe information, government issued identification card, biometric data and real time geolocation data which can identify an individual, your phone contacts and photos in your Mobile Device. We may collect, store, and use your user data on our servers to provide you with the ability to better maintain and improve our services. We may also use data in an aggregated form for our own purposes (together “Personal Information”). In general, you can visit the website without telling us who you are or revealing any Personal Information about yourself. You will not be allowed to use our mobile application and our prime or/and paid services without providing your Personal Information to us. </li>
              <li> If, however, Personal Information is revealed to us, we won’t sell or give away any content of your Personal Information to anyone and use industry best practices to protect your information from unauthorized users. The company can use the provided personal information to identify, contact, or locate a single person, or to identify an individual in context. </li>
            </ul>
            
            <h2>2. INFORMATION WE COLLECT AND HOW WE USE IT</h2>
            <ul>
              <li>When you visit our Site or use our Mobile Application, we collect and store information about you, your computer or mobile device and your activities, whether personal, professional or otherwise. This information may include, but is not limited to:</li>
              <ul>
                <li>Your computer or mobile’s IP address; technical information about your computer or/and mobile device (such as type of mobile device, web browser or operating system).</li>
                <li>Your mobile device’s unique ID number (when available), your mobile device’s geographic location (specific geographic location if you’ve enabled collection of that information, or general geographic location automatically).</li>
                <li>Your provided full name, mobile number, email address, zip code and other information you may provide with your account, such as your gender and birth date;</li>
                <li>How long have you visited our site, which features you used, pages you browsed or services you availed, masked call voice recordings including your purchase behaviour. Etc.</li>
              </ul>
            </ul>

            <h2>3. LIMITATION OF LIABILITY:</h2>
            <ul>
              <li> Additionally, we shall not be liable for any loss or damage sustained by reason of any disclosure (inadvertent or otherwise) of any information concerning the user’s account and / or information relating to or regarding online transactions using credit cards / debit cards and / or their verification process and particulars nor for any error, omission or inaccuracy with respect to any information so disclosed and used whether or not in pursuance of a legal process or otherwise. </li>
              <li> We use the information to improve the Service’s functionality, quality and also personalize your experience. We also use this information to display relevant advertising, provide support, message you, and comply with legal obligations. </li>
            </ul>

            <h2>How You Can Access or Correct Your Information</h2>
              <p>You can access your personally identifiable information that we collect online and maintain by logging in and "Editing" your account. Your password is needed to edit this information, even if you are already logged in. We use this procedure to better safeguard your information. You may not be able to edit or delete past entries and information collected regarding past updates.</p>
              <p>To protect your privacy and security, we will also take reasonable steps to verify your identity before granting access or making corrections. The main form of identity management is your email address. Please always use a valid and up-to-date email address.</p>
             
            <h2>Use of User Information</h2>
              <p>Information you provide to us about yourself, or that we collect and infer based upon your entries and posts to a Rakshak Code Site may be used to improve your user experience, provide or suggest targeted services and to allow third party advertisements and messaging to be tailored or targeted. We may use or provide to third parties aggregated data entered by users or inferred from usage. We may collect IP addresses and cookies for the primary purpose of assisting with ease of use by you. However, except as legally required, we will not sell or provide your email address, IP address, cookies, address or phone number to third parties for advertising or other purposes. In the future we may provide third parties with the ability to provide customizable or targeted advertising or messages and in such cases we may allow third party applications to access your user data in determining the messaging or advertising applicable to you.</p>
            

            <h2>Compliance</h2>
              <p>Access to your Personal Information. You have a right to access, modify, correct and request that Rakshak Code internally delete any Personal Information provided to or obtained by Rakshak Code. If you update, modify or correct any Personal Information, we may keep copies of your Personal Information prior to such update, modification or correction for uses provided for in this Policy. You may update, modify or correct your Personal Information via your account Preferences. Alternatively, you may contact ----support email id------- for updates, modifications and corrections to your Personal Information, or to request access to your Personal Information.</p>
              <p>Retention Of Your Personal Information. You may request internal deletion of your Personal Information at any time by contacting Rakshak Code in the manner provided on Rakshak Code. Rakshak Code will endeavor to respond to your request in a timely manner. Please note, however, that Personal Information you have published on Facebook or other social channels may remain available even if you request that such information be internally deleted by Rakshak Code. Once a request to delete a Rakshak Code user's Personal Information is received, it will be removed from our servers within 60 days. You may contact ----- support email id----- to delete your account.</p>

            
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <FiveColumnWithBackground />
    </AnimationRevealPage>
  );
};
