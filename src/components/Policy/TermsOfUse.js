import React from "react";
import banner from "../Images/PrivacyPolicy/termsofuse.jpg";
import TopReasons from "../Reuse/TopReasons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  const prohibitedData = [
    {
      text: "use this Website or its contents for any commercial purpose;",
    },
    {
      text: "use this Website or its contents for any commercial purpose;",
    },
    {
      text: "access, monitor or copy any content or information of this Website using any robot, spider, scraper or other automated means or any",
    },
    {
      text: "manual process for any purpose without our express written permission;",
    },
    {
      text: "violate the restrictions in any robot exclusion headers on this Website or bypass or circumvent other measures employed to prevent or limit access to this Website;",
    },
    {
      text: "take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure; deep-link to any portion of this Website (including, without limitation, the purchase path for any travel services) for any purpose without our express written permission; or",
    },
    {
      text: '"frame", "mirror" or otherwise incorporate any part of this Website into any other website without our prior written authorization.',
    },
  ];
  return (
    <div>
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Terms Of Use
        </h1>
        <div
          className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="flex flex-row my-24 justify-around sm:mx-24 sm:flex-nowrap flex-wrap">
        <div className="flex flex-col space-y-7 items-center sm:items-start sm:mb-0 mb-10 sm:w-[870px] w-[300px]">
          <h1 className="font-bold opacity-80 sm:text-6xl text-2xl">
            Terms of use
          </h1>
          <p className="text-gray-500 text-[16.5px] ">
            Welcome to the sunshinetravels.com website (the "Website"). This
            Website is provided solely to assist customers in gathering travel
            information, determining the availability of travel-related goods
            and services, making legitimate reservations or otherwise
            transacting business with travel suppliers, and for no other
            purposes. The terms "we", "us", "our" and "sunshinetravels" refer
            to sunshinetravels.com , a company incorporated in Mumbai, India.
            The term "you" refers to the customer visiting the Website and/or
            booking a reservation through us on this Website, or through our
            customer s ervice agents.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            This Website is offered to you conditioned upon your acceptance
            without modification of all the terms, conditions, and notices set
            forth below (collectively, the "Agreement"). By accessing or using
            this Website in any manner, you agree to be bound by the Agreement.
            Please read the Agreement carefully. If you do not accept all of
            these terms and conditions, please do not use this Website.
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">Use of the website</h2>
          <p className="text-gray-500 text-[16.5px] ">
            As a condition of your use of this Website, you warrant that:
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            you are at least 18 years of age <br /> you possess the legal
            authority to create a binding legal obligation <br /> you will use
            this Website in accordance with this Agreement <br /> you will only
            use this Website to make legitimate purchases for you or for another
            person who is at least 18 years of age and for whom you are legally
            authorized to act <br />
            all information supplied by you on this Website is true, accurate,
            correct and complete <br /> you are a resident of India <br /> We
            retain the right at our sole discretion to deny access to anyone to
            this Website and the services we offer, at any time <br /> and for
            any reason, including, but not limited to, for violation of this
            Agreement.
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">
            Prohibited activites
          </h2>
          <p className="text-gray-500 text-[16.5px] ">
            The content and information on this Website (including, but not
            limited to, price and availability of travel services), as well as
            the infrastructure used to provide such content and information, is
            proprietary to us or our suppliers and providers. While you may make
            limited copies of your travel itinerary (and related documents) for
            travel or services booked through this Website, you agree not to
            otherwise modify, copy, distribute, transmit, display, perform,
            reproduce, publish, license, create derivative works from, transfer,
            or sell or re-sell any information, software, products, or services
            obtained from or through this Website. Additionally, you agree not
            to:
          </p>
          {prohibitedData.map((item, index) => {
            return (
              <div className="flex flex-row space-x-4 " key={index}>
                <FontAwesomeIcon
                  icon="fa-solid fa-check"
                  className="text-green-500"
                  size="lg"
                />
                <p className="sm:text-[16.5px] text-gray-500">{item.text}</p>
              </div>
            );
          })}
          <p className="text-gray-500 text-[16.5px] ">
            You understand that any violations of this clause may result in the
            cancellation of your reservation(s), in your being denied access to
            the applicable travel product or services, in your forfeiting any
            monies paid for such reservation(s), and/or in our debiting your
            account for any costs we incur as a result of such violation.
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">
            Airline flight tickets
          </h2>
          <p className="text-gray-500 text-[16.5px] ">
            You agree to the standard air travel rules for all full service
            airline flights and to the conditions of carriage for all your
            flights, which are available upon request. You acknowledge that your
            flight tickets do not include amenities, baggage allowances, baggage
            fees, beverages, meals, or fees which must be paid directly at an
            airport, unless explicitly stated otherwise.
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">General</h2>
          <p className="text-gray-500 text-[16.5px] ">
            This Website is operated by Sunshine Travels , a company
            incorporated in Mumbai, India and this Agreement is governed by the
            laws of India. You hereby consent to the exclusive jurisdiction and
            venue of courts in Mumbai, India, in all disputes arising out of or
            relating to the use of this Website. Use of this Website is
            unauthorized in any jurisdiction that does not give effect to all
            provisions of these terms and conditions, including, without
            limitation, this paragraph.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            You agree that no joint venture, partnership, or employment
            relationship exists between you and the Sunshine Travels
            Companies as a result of this Agreement or use of this Website.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            Our performance of this Agreement is subject to existing laws and
            legal process, and nothing contained in this Agreement limits our
            right to comply with law enforcement or other governmental or legal
            requests or requirements relating to your use of this Website or
            information provided to or gathered by us with respect to such use.
            To the extent allowed by applicable law, you agree that you will
            bring any claim or cause of action arising from or relating to your
            access or use of this Website within two (2) years from the date on
            which such claim or action arose or accrued or such claim or cause
            of action will be irrevocably waived.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            If any part of this Agreement is determined to be invalid or
            unenforceable pursuant to applicable law including, but not limited
            to, the warranty disclaimers and liability limitations set forth
            above, then the invalid or unenforceable provision will be deemed
            superseded by a valid, enforceable provision that most closely
            matches the intent of the original provision and Agreement shall
            continue in effect.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            his Agreement (and any other terms and conditions referenced herein)
            constitutes the entire agreement between you and Sunshine Travels
            with respect to this Website and it supersedes all prior or
            contemporaneous communications and proposals, whether electronic,
            oral, or written, between the customer and sunshinetravels with
            respect to this Website. A printed version of this Agreement and of
            any notice given in electronic form shall be admissible in judicial
            or administrative proceedings based upon or relating to this
            Agreement to the same extent and subject to the same conditions as
            other business documents and records originally generated and
            maintained in printed form.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            Fictitious names of companies, products, people, characters, and/or
            data mentioned on this Website are not intended to represent any
            real individual, company, product, or event.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            Any rights not expressly granted herein are reserved.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            You can expect to receive text alerts or Emails from us on news,
            important information, and offers. And you can opt-out at any time.
            Just reply with STOP to any text message from us. Or for more
            information reply HELP to any message.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
          For more info Please <Link to="/contact" className="text-orange-500"> Contact Us </Link> or email us at sunshine@gmail.com
          </p>
        </div>
        <TopReasons />
      </div>
    </div>
  );
};

export default TermsOfUse;
