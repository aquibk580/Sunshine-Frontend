import React from "react";
import banner from "../Images/PrivacyPolicy/Privacy.jpg";
import TopReasons from "../Reuse/TopReasons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Privacy = () => {
  const collectInfo = [
    {
      text: "Personally Identifiable Information like name(s) and contact details which may include e-mail address or contact number(s), password etc.",
    },
    {
      text: "Transactional Information like financial information such as Bank account or credit card or debit card or other payment instrument details etc.",
    },
    {
      text: "Booking information which includes information about the travel, bookings, co-passengers, travel preferences etc.",
    },
    {
      text: "Other information that may be requested or gathered while you visit, access or use the Site.",
    },
  ];
  const usedInfo = [
    {
      text: "To conduct bookings, ticketing and payment transactions for the services available on the Site;",
    },
    {
      text: "To personalize your experience and give you better service: (your information helps us to better respond to your individual needs)",
    },
    {
      text: "To improve the user friendliness of the site; (we continually strive to improve the site offerings based on the information we receive from you)",
    },
    {
      text: "To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs) Website traffic analysis",
    },
    {
      text: "To administer a contest, promotion, survey or other site feature",
    },
    {
      text: "To send emails, SMS and other communications for providing services, responding to inquiries, and/or other requests or questions.",
    },
    {
      text: "To respond to queries of the authorities in regard to your accessing of the site and services availed by you.",
    },
    {
      text: "Automatic Logging of Session Data",
    },
  ];
  return (
    <div>
      <div className=" flex items-center justify-center">
        <h1 className="sm:text-8xl text-3xl text-white font-bold z-20 absolute">
          Privacy Policy
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
            Privacy Policy
          </h1>
          <h2 className="font-[650] text-xl opacity-85 ">
            Sunshine Travels is fanatical about protecting your privacy.
          </h2>
          <p className="text-gray-500 text-[16.5px] ">
            This website is published and maintained by Subshine Travles Tours &
            travel (“Sunshine Travels”). The Privacy Policy is applicable to the
            websites of Sunshine Tours & travel including
            www.SunshineTravles.com, which also comprises of the mobile site,
            Smartphone App Platforms such as iOS, Android, Windows (all together
            referred to as “Site”). This privacy policy does not apply to the
            websites of our business partners, corporate affiliates or to any
            other third parties, even if their websites are linked to the site.
            We recommend you to review the respective privacy statements of the
            other parties with whom you interact.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            By browsing, visiting, accessing and/or using the services on this
            Site (or searching for any of the pages on this Site), the customer
            (“You”) explicitly consents and agrees to our Privacy Policy laid
            out herein. You also agree that the information furnished by you is
            lawful, true and correct and does not violate or infringe any laws.
            In case of any violations, infringement, furnishing of wrongful or
            unauthorized information, Sunshine Travels shall not be liable for
            the same.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            We encourage you to review our Privacy Policy, and familiarise with
            it. Please note that we review our Privacy Policy from time to time,
            and we may make periodic changes to the policy in connection with
            that review. Therefore, you may wish to bookmark this page and/or
            periodically review this page to make sure you have the latest
            version of the Privacy Policy.
          </p>
          <h2 className="font-[650] text-xl opacity-85">
            What information does Sunshine Travels collect, collate and/or use?
          </h2>
          <p className="text-gray-500 text-[16px] ">
            On your accessing of this Site, certain information about you, such
            as :
          </p>
          {collectInfo.map((item, index) => {
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
          <p className="text-gray-500 text-[16px] ">
            Besides the above, when you browse the Website, Sunshine Travels may
            collect information regarding the domain and host from which you
            access the Internet, the Internet Protocol address of the computer
            or Internet Service Provider you are using, and anonymous site
            statistical data, information furnished while navigating the Site,
            the systems and programs used and the time spent on our Site along
            with any other relevant information. The Website uses cookie and
            tracking technology depending on the features offered. Aggregate
            cookie and tracking information may be shared with third parties to
            cater to provide you a better service and experience.
          </p>
          <p className="text-gray-500 text-[16px] ">
            We may also collect and furnish such other information as is
            required in compliance of various laws, court order, as requested by
            other government or law enforcement authority, or in the good faith
            believe that disclosure is otherwise necessary or advisable
            including, without limitation, to protect the rights or properties
            of Sunshine Travels or any or all of its affiliates, associates,
            employees, directors or officers or when we have reason to believe
            that disclosing the information is necessary to identify, contact or
            bring legal action against someone who may be causing interference
            to our operations rights, interests, whether intentionally or
            otherwise, or when anyone else could be harmed by such activities.
          </p>
          <h2 className="font-[650] text-xl opacity-85">
            What is this information used for?
          </h2>
          {usedInfo.map((item, index) => {
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
            Of course, you are solely responsible for maintaining the secrecy of
            your passwords, and your Site membership account information. Please
            be very careful, responsible, and alert with this information,
            especially whenever you’re online.
          </p>
          <h2 className="font-[650] text-xl opacity-85">
            Cookies and how do we use it?
          </h2>
          <p className="text-gray-500 text-[16.5px] ">
            Cookies are small files that a site or its service provider
            transfers to your computers hard drive through your Web browser (if
            you allow) to enables the sites or service providers systems to
            recognize your browser and capture and remember certain information.
            Yes, we use cookies to understand and save your preferences for
            future visits and keep track of advertisements. This helps us to
            serve you better and more efficiently, and to personalize your
            experience at our Website.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            Similarly, a cookie may be placed by our third – party advertising
            companies or advertisement providers. These companies may use
            aggregated statistics about your visits to this and other websites
            in order to provide you advertisements about travel – related goods
            and services, your preferences in or any goods and services of
            potential interest to you. The third – party advertising companies
            or advertisement providers may also employ technology that is used
            to measure the effectiveness of our ads, your preference and other
            relevant statistical data to serve you better. Any such information
            may be anonymous about your visits to this and other sites and does
            not link online actions to an identifiable person.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            Mostly the Web browsers are programmed to automatically accept
            cookies but if you desire to opt from receiving the cookies you can
            do so by changing the options on your web browser or using certain
            software programs, you can control how and whether the cookies will
            be accepted by your browser. Sunshine Travels does respects your
            right to block any unwanted Internet activity, especially that of
            unscrupulous websites, though blocking cookies from usage of
            Sunshine Travels Site may disable certain features on the Site, and
            may make it impossible to purchase or use certain services available
            on the Site. Please note that it is possible to block cookie
            activity from certain websites while permitting cookies from
            websites you trust, like Sunshine Travels Website.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            We do not sell, trade, or otherwise transfer to outside parties your
            personally identifiable information. However, we do transmit your
            information to trusted third parties who assist us in operating our
            website, conducting our business, or servicing you, so long as those
            parties agree to keep this information confidential. We may also the
            release your information when we believe release is appropriate to
            comply with the law, enforce our site policies, or protect ours or
            others rights, property, or safety. However, other non-personally
            identifiable visitor information may be provided to other parties
            for marketing, advertising, or other uses.
          </p>
          <h2 className="font-[650] text-xl opacity-85">Third party links</h2>
          <p className="text-gray-500 text-[16.5px] ">
            Sunshine Travels Site contains links to other websites. Please note
            that when you click on one of these links, you are entering another
            website for which Sunshine Travels has no responsibility and these
            third party sites have separate and independent privacy policies
            which you will have to acquaint yourselves with. We encourage you to
            read the privacy statements of all such sites as their policies may
            be materially different from our Privacy Policy. We therefore have
            no responsibility or liability for the content and activities of
            these linked sites. Nonetheless, we seek to protect the integrity of
            our site and welcome any feedback about these sites.
          </p>
          <h2 className="font-[650] text-xl opacity-85">Grievance policy</h2>
          <p className="text-gray-500 text-[16.5px] ">
            Sunshine Travels strongly believes in a sincere and transparent
            approach to its users. You trust and love us and we would never put
            growth before trust. This policy document aims at minimizing
            instances of customer complaints, grievances and disappointments via
            channelized approach, review and redressal.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            You can file a grievance / share feedback if you are disappointed
            with the services rendered by Sunshine Travels or any other issues.
            You can give your grievance / feedback through email or snail mail.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            In order to make Sunshine Travels redressal channels more meaningful
            and effective, a structured system has been put in place. This
            system will ensure that the complaints are redressed seamlessly and
            well within the stipulated timeframe.
          </p>
          <h2 className="font-[650] text-xl opacity-85">
            How to reach Sunshine Travels for privacy related Issues
          </h2>
          <p className="text-gray-500 text-[16.5px] ">
            For concerns regarding our Privacy Policy or our privacy practices
            and related Issues, write to us at Aquib@sunshinetravels.com.
          </p>
          <p className="text-gray-500 text-[16.5px] ">
            If you are not satisfied (after a period of 10 days from the date of
            writing to Aquib@sunshinetravels.com), please write to:
          </p>
          <p className="text-gray-500 text-[16.5px] w-[250px]">
            Grievance Officer, Sunshine Tours & travel, Ground Floor,
            Shanti Heights, Raghoba Shankar Road , Thane 400604
          </p>
        </div>
        <TopReasons />
      </div>
    </div>
  );
};

export default Privacy;
