import React from "react";
import banner from "../Images/PrivacyPolicy/termsofuse.jpg";
import TopReasons from "../Reuse/TopReasons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TermsOfServices = () => {
  const communicationdData = [
    {
      text: "Upon transacting on the Site, you will receive an e-mail from Sunshine Travels informing the status of your transaction. The e-mail will be sent to e-mail address provided by you and Sunshine Travels is not responsible towards the receipt of the said e-mail in your inbox. You will have to take due care and caution. You are responsible for entering the proper and accurate contact details including your name (as per Passport), email ID to ensure that we can effectively communicate with you.",
    },
    {
      text: "The customer acknowledges that the SMS (Short Messaging Service) provided by Sunshine Travels is an additional facility provided for the customer’s convenience. It is not mandatory under the law in force to provide SMS service alerts to the customers. In case you do not receive any SMS for whatsoever reason, Sunshine Travels is not liable for the same.",
    },
    {
      text: "Sunshine Travels is not responsible to provide information on any change in flight schedules, cancellation, status of airline/hotel etc.",
    },
    {
      text: "Any grievance regarding the service should be communicated as per the grievance policy laid out herein.",
    },
  ];
  return (
    <div>
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Terms Of Services
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
            Terms of Services
          </h1>
          <h2 className="font-[650] text-xl opacity-85 ">
            Sunshine Travels Terms of Service
          </h2>
          <p className="text-gray-500 text-[16.5px] ">
            This web site www.sunshinetravels.com (the “Site”) including the
            mobile site, Smartphone App Platforms such as iOS, Android, Windows
            is published and maintained by Sunshine Travels Tours & Travel
            (“Sunshine Travels”), a company incorporated and existing in
            accordance with the laws of the Republic of India (together with its
            subsidiaries and other affiliates, “us”, “We”, “our” or “Sunshine
            Travels”). By accessing or using the Site or by using the Service
            on the Site you agree to be bound by these terms and conditions set
            forth below including any additional guidelines and future
            modifications. When you access any sub-site, webpage, hyperlink
            (whether belonging to an ‘associate’ of Sunshine Travels or
            otherwise) through this site, then such sub-site may have its own
            terms and conditions of use which is specific to such sub-site,
            webpage, hyperlink. The sub-sites, webpage, hyperlink may contain
            such additional terms and conditions of use as may be set out in
            such sub-sites, webpage, hyperlink.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            Sunshine Travels may add to, change or remove any part of these
            Terms and Conditions of Use at any time, without notice. Any changes
            to these Terms and Conditions of Use or any terms posted on this
            Site apply as soon as they are posted. You shall re-visit the “Terms
            & Conditions” link from time to time to stay abreast of any changes
            that the “Site” may introduce.
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">
            Your Agreement to these Terms and Conditions for availing Service
          </h2>
          <p className="text-gray-500 text-[16.5px] ">
            The Terms and Conditions is a legal contract between you being, an
            individual customer, user, or beneficiary of this service, and
            Sunshine Travels Tours & Travel (Sunshine Travels) having its
            registered office at 6, Karnik House, Above Alok Hotel, Ambedkar
            Chowk, Thane (W) - 400602,India.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            Sunshine Travels acts as an “Intermediary” solely to assist
            customers in gathering travel information, determining the
            availability of travel-related products and services, making
            legitimate reservations or otherwise transacting business with
            travel suppliers, and for facilitating travel requirements. You
            acknowledge that Sunshine Travels merely provides intermediary
            services in order to facilitate services to you. Sunshine Travels
            is not the last mile service provider to you and therefore
            Sunshine Travels shall not be deemed to be responsible for any
            lack or deficiency of services provided by any person or entity
            including airline, hotel, activity provider or similar agency, you
            shall engage, hire from the content available on the Site.
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">
            Communication Policy of the site
          </h2>
          {communicationdData.map((item, index) => {
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
          <h2 className="font-[650] text-xl opacity-85 ">
            Site and its Content
          </h2>
          <p className="text-gray-500 text-[16.5px] ">
            This Site is only for your personal use. You shall not copy,
            license, adapt, distribute, exchange, modify, sell or transmit any
            content or material from this Site, including but not limited to any
            text, images, audio, video or links for any business, commercial or
            public purpose.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            Sunshine Travels grants you a non-exclusive, non-transferable,
            limited right to enter, view, use and transact on this Site. You
            agree not to interrupt or attempt to interrupt the operation of this
            Site in any way. Access to certain areas of the Site may only be
            available to registered members. To become a registered member, you
            may be required to answer certain questions and provide certain
            details. Answers to such questions and details is mandatory. You
            represent and warrant that all information you supply to us, about
            yourself, and others, is true and accurate.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            You understand that except for information, products or services
            clearly indicated as being supplied by Sunshine Travels, we do
            not operate, control, or endorse any information, products or
            services on the Internet in anyway. You also understand that
            Sunshine Travels cannot and does not guarantee or warrant that
            files available for downloading through the Site will be free of
            viruses, worms or other code that may be damaging. You are
            responsible for implementing procedures to satisfy your particular
            requirements and for accuracy of data input and output.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            Sunshine Travels may add, change, discontinue, remove or suspend
            any other Content or services posted on this Site, including
            features and specifications of products described or depicted on the
            Site, temporarily or permanently, at any time, without notice and
            without liability.
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">Ownership</h2>
          <p className="text-gray-500 text-[16.5px] ">
            All materials on this Site, including but not limited to audio,
            images, software, text, icons and such like (the “Content”), are
            protected by copyright under international conventions and
            intellectual property laws. You cannot use or license the Content,
            except as specified herein. You agree to follow all instructions on
            this Site limiting the way you may use the Content.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            There are a number of proprietary logos, service marks and
            trademarks found on this Site whether owned/used by Sunshine
            Travels or otherwise. By displaying them on this Site, Sunshine
            Travels is not granting you any license to utilize those
            proprietary logos, service marks, or trademarks. Any unauthorized
            use of the Content may violate copyright laws, trademark laws, the
            laws of privacy and publicity, civil and criminal statutes.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            The content and information on this Website (including, but not
            limited to, price and availability of travel services), as well as
            the infrastructure used to provide such content and information, is
            proprietary to us or our suppliers and providers.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            While you may make limited copies of your travel itinerary (and
            related documents) for travel or service reservations booked through
            this Website, you agree not to otherwise modify, copy, distribute,
            transmit, display, perform, reproduce, publish, license, create
            derivative works from, transfer, or sell or re-sell any information,
            software, products, or services obtained from or through this
            Website.
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">
            Availability, Rules of Service
          </h2>
          <p className="text-gray-500 text-[16.5px] ">
            The products and services displayed on the Site may not be available
            for purchase in your particular country or locality. The reference
            to such products and services on the Site does not imply or warrant
            that these products or services will be available at any time in
            your particular geographical location. The products and services
            also are subject to availability, Sunshine Travels shall not be
            responsible if at the time of completing the transaction on the
            Site, the product is not available or is sold out. You should check
            with customer support (add hyper link) for the availability of
            specific products and services in your area.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            All the products and services available on the Website are governed
            by the rules of service and regulations including the terms of
            contract of carriage, of the respective service provider. You are
            requested to refer to, acquaint and abide by those rules of service
            and regulations of the respective service provider, prior to booking
            with us.
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">Visa Guidelines</h2>
          <p className="text-gray-500 text-[16.5px] ">
            Please carry a valid visa for the country you will be visiting or
            transiting through. Please check with the concerned airline and
            embassy for concerned Visa requirements
          </p>
          <h2 className="font-[650] text-xl opacity-85 ">
            Sunshine Travels Rights
          </h2>
          <p className="text-gray-500 text-[16.5px] ">
            If you send any communications or materials to Sunshine Travels
            by electronic mail or otherwise, including any comments, data,
            questions, suggestions or the like, all such communications are, and
            will be treated by Sunshine Travels, as non-confidential.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            You hereby give up any and all claim that any use of such material
            violates any of your rights including moral rights, privacy rights,
            proprietary or other property rights, publicity rights, rights to
            credit for material or ideas, or any other right, including the
            right to approve the way Sunshine Travels uses such material.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            Any material submitted to this Site may be adapted, broadcasted,
            changed, copied, disclosed, licensed, performed, posted, published,
            sold, transmitted or used by Sunshine Travels anywhere in the
            world, in any medium, forever.
          </p>
        </div>
        <TopReasons />
      </div>
    </div>
  );
};

export default TermsOfServices;
