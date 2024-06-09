import React from "react";
import { useParams } from "react-router-dom";
import TopReasons from "../Reuse/TopReasons";
import package1 from "../Images/Packages/AllPackages/Japan.jpg";
import package2 from "../Images/Packages/AllPackages/southAfrica.jpg";
import package3 from "../Images/Packages/AllPackages/Mauritius.jpg";
import package4 from "../Images/Packages/AllPackages/Switzerland.jpg";
import package5 from "../Images/Packages/AllPackages/Singapore.jpg";
import package6 from "../Images/Packages/AllPackages/Thailand.jpg";
import package7 from "../Images/Packages/AllPackages/Malaysia.jpg";
import package8 from "../Images/Packages/AllPackages/Australia.jpg";
import package9 from "../Images/Packages/AllPackages/NewZealand.jpg";
import package10 from "../Images/Packages/AllPackages/Egypt.jpg";
import package11 from "../Images/Packages/AllPackages/Kenya.jpg";
import package12 from "../Images/Packages/AllPackages/Italy.jpg";
import package13 from "../Images/Packages/AllPackages/Dubai.jpg";
import package14 from "../Images/Packages/AllPackages/France.jpg";
import package15 from "../Images/Packages/AllPackages/Croatia.jpg";
import package16 from "../Images/Packages/AllPackages/Turkey.jpg";
import package17 from "../Images/Packages/AllPackages/Jordan.jpg";
import package18 from "../Images/Packages/AllPackages/Vietnam.jpg";
import package19 from "../Images/Packages/AllPackages/SriLanka.jpg";
import package20 from "../Images/Packages/AllPackages/HongKong.jpg";
import package21 from "../Images/Packages/AllPackages/Kashmir.jpg";
import package22 from "../Images/Packages/AllPackages/Rajasthan.jpg";
import package23 from "../Images/Packages/AllPackages/Sikkim.jpg";
import package24 from "../Images/Packages/AllPackages/wildLifeHolidays.jpg";
import package25 from "../Images/Packages/AllPackages/Himachal.jpg";
import package26 from "../Images/Packages/AllPackages/Utrakhand.jpg";
import package27 from "../Images/Packages/AllPackages/Kerala.jpg";
import package28 from "../Images/Packages/AllPackages/Karnataka.jpg";
import package29 from "../Images/Packages/AllPackages/Andaman.jpg";
import package30 from "../Images/Packages/AllPackages/Arunachal.jpg";
import package31 from "../Images/Packages/AllPackages/MadhyaPradesh.jpg";
import package32 from "../Images/MainCards/mainCard6.jpg";
import package33 from "../Images/MainCards/mainCard5.jpg";
import package34 from "../Images/MainCards/mainCard3.jpg";
import package35 from "../Images/MainCards/mainCard1.jpg";
import package36 from "../Images/MainCards/mainCard2.jpg";
// Banner Images
import banner1 from "../Images/Packages/AllPackages/Banner/japan.jpg";
import banner2 from "../Images/Packages/AllPackages/Banner/sothAfrica.jpg";
import banner3 from "../Images/Packages/AllPackages/Banner/Mauritius.jpg";
import banner4 from "../Images/Packages/AllPackages/Banner/Switzerland.jpg";
import banner5 from "../Images/Packages/AllPackages/Banner/Australia.jpg";
import banner6 from "../Images/Packages/AllPackages/Banner/Thailand.jpg";
import banner7 from "../Images/Packages/AllPackages/Banner/Malaysia.jpg";
import banner8 from "../Images/Packages/AllPackages/Banner/Australia.jpg";
import banner9 from "../Images/Packages/AllPackages/Banner/Newzealand.jpg";
import banner10 from "../Images/Packages/AllPackages/Banner/Egypt.jpg";
import banner11 from "../Images/Packages/AllPackages/Banner/Kenya.jpg";
import banner12 from "../Images/Packages/AllPackages/Banner/Italy.jpg";
import banner13 from "../Images/Packages/AllPackages/Banner/Dubai.jpg";
import banner14 from "../Images/Packages/AllPackages/Banner/France.jpg";
import banner15 from "../Images/Packages/AllPackages/Banner/Croatia.jpg";
import banner16 from "../Images/Packages/AllPackages/Banner/Turky.jpg";
import banner17 from "../Images/Packages/AllPackages/Banner/Jordan.jpg";
import banner18 from "../Images/Packages/AllPackages/Banner/Vietnam.jpg";
import banner19 from "../Images/Packages/AllPackages/Banner/SriLanka.jpg";
import banner20 from "../Images/Packages/AllPackages/Banner/HongKong.jpg";
import banner21 from "../Images/Packages/AllPackages/Banner/Kashmir.jpg";
import banner22 from "../Images/Packages/AllPackages/Banner/Rajasthan.jpg";
import banner23 from "../Images/Packages/AllPackages/Banner/Sikkim.jpg";
import banner24 from "../Images/Packages/AllPackages/Banner/wildLifeHolidays.jpg";
import banner25 from "../Images/Packages/AllPackages/Banner/HimachalpRADESH.jpg";
import banner26 from "../Images/Packages/AllPackages/Banner/Utrakhand.jpg";
import banner27 from "../Images/Packages/AllPackages/Banner/Kerala.jpg";
import banner28 from "../Images/Packages/AllPackages/Banner/Karnataka.jpg";
import banner29 from "../Images/Packages/AllPackages/Banner/Andaman.jpg";
import banner30 from "../Images/Packages/AllPackages/Banner/ArunachalPradesh.jpg";
import banner31 from "../Images/Packages/AllPackages/Banner/MadhyaPradesh.jpg";
import banner32 from "../Images/Packages/AllPackages/Banner/HimachalpRADESH.jpg";
import banner33 from "../Images/Packages/AllPackages/Banner/Utrakhand.jpg";
import banner34 from "../Images/Packages/AllPackages/Banner/Kerala.jpg";
import banner35 from "../Images/Packages/AllPackages/Banner/Karnataka.jpg";
import banner36 from "../Images/Packages/AllPackages/Banner/Andaman.jpg";
import { Link } from "react-router-dom";

const AllPackages = () => {
  const obj = [
    {
      type: "japan",
      packages: [
        {
          img: package1,
          head: "Japan Highlights",
          duration: "Duration 08 Nights / 09 Days",
          name: "Japan",
          banner: banner1,
          text: "Discover the captivating blend of ancient traditions and modern marvels with our Japan Highlights tour, taking you through vibrant cities, serene temples, and stunning landscapes.",
        },
      ],
    },
    {
      type: "southAfrica",
      packages: [
        {
          img: package2,
          head: "South African Wonders",
          duration: "Duration 08 Nights / 09 Days",
          name: "South Africa",
          banner: banner2,
          text: "Experience the breathtaking diversity of South African wonders, from the iconic Table Mountain to the vibrant culture of Cape Town and the wild safaris of Kruger National Park.",
        },
      ],
    },
    {
      type: "mauritius",
      packages: [
        {
          img: package3,
          head: "Exotic Mauritius",
          duration: "Duration 05 Nights / 06 Days",
          name: "Mauritius",
          banner: banner3,
          text: "Indulge in the idyllic beauty of Mauritius as you relax on pristine beaches, explore vibrant coral reefs, and immerse yourself in the island's rich blend of cultures.",
        },
      ],
    },
    {
      type: "switzerland",
      packages: [
        {
          img: package4,
          head: "Scenic Switzerland",
          duration: "Duration 05 Nights / 06 Days",
          name: "Swizerland",
          banner: banner4,
          text: "Embark on a journey through scenic Switzerland, where majestic Alps, charming villages, and pristine lakes come together to create a picturesque landscape like no other.",
        },
      ],
    },
    {
      type: "singapore",
      packages: [
        {
          img: package5,
          head: "Singpore Surprise Package",
          duration: "Duration 03 Nights / 04 Days",
          name: "Singapore",
          banner: banner5,
          text: "Unveil the unexpected treasures of Singapore with our Surprise Package, a curated adventure blending futuristic architecture, diverse culinary experiences, and lush urban gardens.",
        },
      ],
    },
    {
      type: "thailand",
      packages: [
        {
          img: package6,
          head: "Amazing Thailand",
          duration: "Duration 04 Nights / 05 Days",
          name: "Thailand",
          banner: banner6,
          text: "Amazing Thailand boasts a captivating blend of vibrant cultures, stunning landscapes, and unparalleled hospitality, making it a truly enchanting destination for travelers.",
        },
      ],
    },
    {
      type: "malaysia",
      packages: [
        {
          img: package7,
          head: "Magical Malaysia",
          duration: "Duration 06 Nights / 07 Days",
          name: "Malaysia",
          banner: banner7,
          text: "Malaysia captivates with its rich tapestry of diverse cultures, lush rainforests, and modern cities, offering a dynamic and unique experience for every traveler.",
        },
      ],
    },
    {
      type: "australia",
      packages: [
        {
          img: package8,
          head: "Australian Red Center",
          duration: "Duration 02 Nights / 03 Days",
          name: "Australia",
          banner: banner8,
          text: "Australia's vast and breathtaking landscapes, from the iconic Sydney Opera House to the awe-inspiring Outback, make it a land of endless exploration and natural wonder",
        },
      ],
    },
    {
      type: "newzealand",
      packages: [
        {
          img: package9,
          head: "Naturally Newzealand",
          duration: "Duration 08 Nights / 09 Days",
          name: "Newzealand",
          banner: banner9,
          text: "New Zealand invites you to discover its pristine beauty, from majestic fjords and verdant forests to snow-capped mountains, offering an unparalleled experience in harmony with nature.",
        },
      ],
    },
    {
      type: "egypt",
      packages: [
        {
          img: package10,
          head: "Naturally Egypt",
          duration: "Duration 07 Nights / 08 Days",
          name: "Egypt",
          banner: banner10,
          text: "Egypt, a timeless tapestry of ancient wonders along the Nile River, unveils the enigmatic allure of pyramids, temples, and a rich history that continues to captivate the world.",
        },
      ],
    },
    {
      type: "kenya",
      packages: [
        {
          img: package11,
          head: "Kenya Safari",
          duration: "Duration 05 Nights / 06 Days",
          name: "Kenya",
          banner: banner11,
          text: "Kenya safari immerses you in the raw beauty of the African wilderness, where majestic wildlife roams free against the backdrop of stunning savannas",
        },
      ],
    },
    {
      type: "italy",
      packages: [
        {
          img: package12,
          head: "Italy Tour",
          duration: "Duration 09 Nights / 10 Days",
          name: "Italy",
          banner: banner12,
          text: "Discover Italy's treasures from ancient Rome and artistic Florence to romantic Venice and the picturesque Amalfi Coast.",
        },
      ],
    },
    {
      type: "dubai",
      packages: [
        {
          img: package13,
          head: "Dubai Tour",
          duration: "Duration 04 Nights / 05 Days",
          name: "Dubai",
          banner: banner13,
          text: "Experience the opulence and modern marvels of Dubai, from its towering skyscrapers like the Burj Khalifa to its luxurious shopping and desert adventures.",
        },
      ],
    },
    {
      type: "france",
      packages: [
        {
          img: package14,
          head: "France Tour",
          duration: "Duration 03 Nights / 04 Days",
          name: "France",
          banner: banner14,
          text: "Indulge in the romance and elegance of France, from the iconic Eiffel Tower in Paris to the charming vineyards of Bordeaux and the sun-kissed beaches.",
        },
      ],
    },
    {
      type: "croatia",
      packages: [
        {
          img: package15,
          head: "Croatia Tour",
          duration: "Duration 03 Nights / 04 Days",
          name: "Croatia",
          banner: banner15,
          text: "Immerse yourself in the stunning beauty of Croatia, with its historic charm in Dubrovnik, the breathtaking Plitvice Lakes National Park, and the vibrant energy of Split's ancient Roman architecture.",
        },
      ],
    },
    {
      type: "turkey",
      packages: [
        {
          img: package16,
          head: "Turkey Tour",
          duration: "Duration 09 Nights / 10 Days",
          name: "Turkey",
          banner: banner16,
          text: "Explore Turkey's rich tapestry, from Istanbul's historic gems and Cappadocia's unique landscapes to the ancient ruins of Ephesus.",
        },
      ],
    },
    {
      type: "jordan",
      packages: [
        {
          img: package17,
          head: "Jordan Tour",
          duration: "Duration 06 Nights / 07 Days",
          name: "Jordan",
          banner: banner17,
          text: "Embark on a journey through Jordan's wonders, from the ancient city of Petra carved into rose-red cliffs to the otherworldly landscapes of Wadi Rum desert.",
        },
      ],
    },
    {
      type: "vietnam",
      packages: [
        {
          img: package18,
          head: "Vietnam With Columbia",
          duration: "Duration 07 Nights / 08 Days",
          name: "Vietnam",
          banner: banner18,
          text: "Embark on a Southeast Asian adventure as you explore the bustling streets of Hanoi, cruise through the stunning Halong Bay, discover the ancient temples of Angkor Wat in Cambodia, and unwind on the beautiful beaches of Phu Quoc.",
        },
      ],
    },
    {
      type: "sriLanka",
      packages: [
        {
          img: package19,
          head: "Sri Lanka Tour",
          duration: "Duration 07 Nights / 08 Days",
          name: "Sri Lanka",
          banner: banner19,
          text: "Discover Sri Lanka's wonders, from the ancient marvels of Sigiriya to the serene beaches of Mirissa.",
        },
      ],
    },
    {
      type: "hongKong",
      packages: [
        {
          img: package20,
          head: "Hong Kong Tour",
          duration: "Duration 07 Nights / 08 Days",
          name: "Hong Kong",
          banner: banner20,
          text: "Delve into the vibrant cityscape of Hong Kong, where you can marvel at the iconic skyline, savor exquisite cuisine, explore bustling markets, and unwind amidst the lush greenery of Victoria Peak.",
        },
      ],
    },
    {
      type: "kashmir",
      packages: [
        {
          img: package21,
          head: "Valley of Kashmir",
          duration: "Duration 08 Nights / 09 Days",
          name: "Kashmir",
          banner: banner21,
          text: "The Valley of Kashmir is a picturesque region in the Indian-administered union territory of Jammu and Kashmir, known for its breathtaking natural beauty, serene landscapes",
        },
      ],
    },
    {
      type: "rajasthan",
      packages: [
        {
          img: package22,
          head: "Royal Rajasthan",
          duration: "Duration 06 Nights / 07 Days",
          name: "Rajasthan",
          banner: banner22,
          text: "Royal Rajasthan invites travelers to explore its regal history and vibrant culture through majestic forts, opulent palaces, and bustling markets, offering a glimpse into India's rich past.",
        },
      ],
    },
    {
      type: "sikkim",
      packages: [
        {
          img: package23,
          head: "Sikkim Package",
          duration: "Duration 04 Nights / 05 Days",
          name: "Sikkim",
          banner: banner23,
          text: "Explore the enchanting beauty of Sikkim with our curated package tour, immersing you in its breathtaking landscapes, vibrant cultures, and serene monasteries.",
        },
      ],
    },
    {
      type: "wildLifeHolidays",
      packages: [
        {
          img: package24,
          head: "Wildlife Holidays Package",
          duration: "Duration 04 Nights / 05 Days",
          name: "Wildlife Holidays",
          banner: banner24,
          text: "Embarking on a wildlife tour allows enthusiasts to delve into the captivating realm of nature, encountering diverse ecosystems, rare animal species, and the raw beauty of untamed habitats.",
        },
      ],
    },
    {
      type: "himachal",
      packages: [
        {
          img: package25,
          head: "Himachal Pradesh Tour",
          duration: "Duration 05 Nights / 06 Days",
          name: "Himachal Pradesh",
          banner: banner25,
          text: "Explore the breathtaking landscapes of Himachal Pradesh, from the snowy peaks of the Himalayas in Manali and Shimla to the serene beauty of Dharamshala and the lush valleys of Kinnaur.",
        },
      ],
    },
    {
      type: "utrakhand",
      packages: [
        {
          img: package26,
          head: "Best Of Utrakhand",
          duration: "Duration 05 Nights / 06 Days",
          name: "Utrakhand",
          banner: banner26,
          text: "Discover the natural beauty and spiritual serenity of Uttarakhand as you explore the sacred city of Rishikesh, trek through the breathtaking landscapes of the Himalayas.",
        },
      ],
    },
    {
      type: "kerala",
      packages: [
        {
          img: package27,
          head: "Backwaters Of Kerala",
          duration: "Duration 05 Nights / 06 Days",
          name: "Kerala",
          banner: banner27,
          text: "Embark on a tranquil journey through the backwaters of Kerala, where you can cruise in traditional houseboats, witness lush coconut groves, and experience the serene beauty of villages along the waterways.",
        },
      ],
    },
    {
      type: "karnataka",
      packages: [
        {
          img: package28,
          head: "Southen Splendors",
          duration: "Duration 06 Nights / 07 Days",
          name: "Karnataka",
          banner: banner28,
          text: "Discover the rich cultural and natural diversity of Karnataka as you explore the historic ruins of Hampi, the lush Western Ghats in Coorg.",
        },
      ],
    },
    {
      type: "andaman",
      packages: [
        {
          img: package29,
          head: "Andaman Tours",
          duration: "Duration 06 Nights / 07 Days",
          name: "Andaman",
          banner: banner29,
          text: "Dive into the crystal-clear waters of Havelock Island and Neil Island for an unforgettable snorkeling experience, encountering vibrant marine life and coral gardens.",
        },
      ],
    },
    {
      type: "arunachal",
      packages: [
        {
          img: package30,
          head: "Best Of Arunachal Pradesh",
          duration: "Duration 06 Nights / 07 Days",
          name: "Arunachal Pradesh",
          banner: banner30,
          text: "Explore the pristine beauty of Arunachal Pradesh with its captivating Tawang Monastery, Ziro Valley's lush landscapes, and the rich culture of the indigenous tribes.",
        },
      ],
    },
    {
      type: "madhyaPradesh",
      packages: [
        {
          img: package31,
          head: "Enchanting Madhya Pradesh",
          duration: "Duration 08 Nights / 09 Days",
          name: "Madhya Pradesh",
          banner: banner31,
          text: "Explore the enchanting state of Madhya Pradesh with its captivating Khajuraho temples, majestic Bandhavgarh National Park, and the historic city of Gwalior.",
        },
      ],
    },
    {
      type: "punjab",
      packages: [
        {
          img: package32,
          head: "Land Of Five Rivers Punjab",
          duration: "Duration 09 Nights / 10 Days",
          name: "Punjab",
          banner: banner32,
          text: "Explore the pristine beauty of Punjab with its captivating Tawang Monastery, Ziro Valley's lush landscapes, and the rich culture of the indigenous tribes.",
        },
      ],
    },
    {
      type: "telangana",
      packages: [
        {
          img: package33,
          head: "Telangana Tours",
          duration: "Duration 06 Nights / 07 Days",
          name: "Telangana",
          banner: banner33,
          text: "Embark on a tranquil journey through the backwaters of telangana, where you can cruise in traditional houseboats, witness lush coconut groves, and experience the serene beauty of villages along the waterways.",
        },
      ],
    },
    {
      type: "tamilNadu",
      packages: [
        {
          img: package34,
          head: "Tamil Nadu Packages",
          duration: "Duration 04 Nights / 05 Days",
          name: "Tamil Nadu",
          banner: banner34,
          text: "Explore the pristine beauty of Tamil Nadu with its captivating Tawang Monastery, Ziro Valley's lush landscapes, and the rich culture of the indigenous tribes.",
        },
      ],
    },
    {
      type: "maharashtra",
      packages: [
        {
          img: package35,
          head: "Maharshtra Tours",
          duration: "Duration 07 Nights / 08 Days",
          name: "Maharashtra",
          banner: banner35,
          text: "Explore the enchanting state of Maharashtra with its captivating temples, majestic Sanjay Gandhi National Park, and the historic city of Thane",
        },
      ],
    },
    {
      type: "goldenTriangle",
      packages: [
        {
          img: package36,
          head: "Golden Triangle",
          duration: "Duration 04 Nights / 05 Days",
          name: "Golden Triangle",
          banner: banner36,
          text: "Explore the enchanting temples of golden Triangle with  majestic Temples and Parks & gates, and the historic gates",
        },
      ],
    },
  ];
  const { type } = useParams();
  let selectedObj = obj.filter((value) => {
    return value.type === type;
  });
  selectedObj = selectedObj[0]; 
  return (
    <div className="container flex flex-col">
      {selectedObj.packages.map((item, index) => {
        return (
          <div className="container flex items-center justify-center" key={index}>
            <h1
              className={`sm:text-8xl text-3xl text-white font-bold z-20 absolute sm:top-[280px] top-[145px]`}
            >
              {item.name}
            </h1>
            <div
              className="container relative flex flex-col z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
              style={{
                backgroundImage: `url(${item.banner})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
      <div className="container flex flex-row my-20 sm:mx-24 sm:flex-nowrap flex-wrap max-w-fit justify-center">
        {selectedObj.packages.map((item, index) => {
          return (
            <div
              style={{ boxShadow: "rgb(173, 216, 230) 0px 5px 15px" }}
              className="max-w-fit sm:pb-0 pb-[25px] sm:h-[570px] mx-2 bg-white rounded-xl dark:border-white shadow-md sm:my-0 my-10"
              key={index}
            >
              <Link to={item.path}>
                <img
                  style={{ transition: " transform 0.3s ease-in-out" }}
                  className="hover:scale-[1.03] rounded-t-lg sm:w-[418px] w-[300px] cursor-pointer"
                  src={item.img}
                  alt=""
                />
              </Link>
              <div className="container sm:mx-5 mx-5 space-y-4 my-7 max-w-fit">
                <h2 className="font-bold text-orange-500 mb-3">
                  Travel Packages
                </h2>
                <Link to={item.path}>
                  <h2 className="text-2xl font-bold max-w-fit sm:w-[300px] w-[200px] cursor-pointer list-animation-nav">
                    {item.head}
                  </h2>
                </Link>
                <h2 className="font-semibold text-xl">{item.duration}</h2>
                <p className=" text-base font-semibold sm:w-[380px] w-[260px] text-gray-500">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
        <div className="sm:ml-[480px]">
          <TopReasons />
        </div>
      </div>
    </div>
  );
};

export default AllPackages;
