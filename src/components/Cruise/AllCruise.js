import React from "react";
import { useParams } from "react-router-dom";
import TopReasons from "../Reuse/TopReasons";
import Costa1 from "../Images/Cruise/AllCruise/Costa1.jpg";
import Costa2 from "../Images/Cruise/AllCruise/Costa2.jpg";
import Celestyal1 from "../Images/Cruise/AllCruise/Celsetyal1.jpg";
import Celestyal2 from "../Images/Cruise/AllCruise/Celesetyal2.jpg";
import Carnival1 from "../Images/Cruise/AllCruise/Carnival1.jpg";
import Carnival2 from "../Images/Cruise/AllCruise/Carnival 2.jpg";
import Variety1 from "../Images/Cruise/AllCruise/Variety1.jpg";
import Star1 from "../Images/Cruise/AllCruise/Star1.jpg";
import Royal1 from "../Images/Cruise/AllCruise/Royal1.jpg";
import MscLine1 from "../Images/Cruise/AllCruise/MSCLine1.jpg";
import MscLine2 from "../Images/Cruise/AllCruise/MSCLine2.jpg";
import Princess1 from "../Images/Cruise/AllCruise/Princess1.jpg";
import Princess2 from "../Images/Cruise/AllCruise/Princess2.jpg";

// Banner Images
import banner1 from "../Images/Cruise/Banner/Costa.jpg";
import banner2 from "../Images/Cruise/Banner/Celestyal.jpg";
import banner3 from "../Images/Cruise/Banner/Carnival.jpg";
import banner4 from "../Images/Cruise/Banner/Variety.jpg";
import banner5 from "../Images/Cruise/Banner/Star.jpg";
import banner6 from "../Images/Cruise/Banner/Royal.jpg";
import banner7 from "../Images/Cruise/Banner/MSCLine.jpg";
import banner8 from "../Images/Cruise/Banner/Princess.jpg";

const AllCruise = () => {
  const obj = [
    {
      type: "costa",
      cruise: [
        {
          banner: banner1,
          name: "Costa",
          mainHead: "Costa Cruise",
          text1:
            "Are you ready to leave on your first Costa cruise? So you have already chosen your preferred itinerary and the right time of year?",
          text2:
            "Before you run off to prepare your bags, be sure to read the following brief summary of what’s included in the price, and things that will help you better plan and make the most of your holiday.",
          img: Costa1,
          img2: Costa2,
          head1: "Costa Cruise Inclusions & Exclusions",
          text3:
            "On Costa ships, we don't have clients, we have guests!!!You're on vacation, right? That means that we take care of everything",
          head2: "Costa neoClassica Deck Plan",
          text4:
            "The ship is modest and elegant, as you can see from the new-look furnishings that welcome you when you board. Like Ginger and Fred, Luciano Vistosi's glass sculptures located in the centre of the hall, who invite you to go for a twirl on the marble flooring as if you were on a glittering dancefloor. With live shows and a piano bar the music rises up to the skies, where the Galileo Club Observatory awaits you - the beautiful circular disco on the ship's top deck. And like a show within a show, the delicate mosaics by Emilio Tadini decorate the theatre.",
          text5:
            'A romantic "fin de siècle" Paris awaits you at Piazza Navona, with small intriguing sculptures by Isaac Maimon, where ladies sitting in an old-style café are waiting for their loved ones. Dont keep them waiting!',
        },
      ],
    },
    {
      type: "celestyal",
      cruise: [
        {
          banner: banner2,
          name: "Celestyal",
          mainHead: "Celestyal Cruise",
          text1:
            "Our cruises feature authentic, local experiences from each region. You’ll enjoy themed cruises, all-inclusive meals and drinks as well as comfort and extra special touches with our additional services. Our legendary itineraries will show you the best of Greece",
          text2:
            "Our Iconic Aegean Greek island cruise is the classic experience of discovery for those encountering Greece’s beauty for the first time. Embark on a journey of a life time as you cruise along the emerald waters through a series of enchanting destinations and watch as iconic post card images come too life. Swaying windmills, striking cliffs and legendary ancient cities greet you at every destination inviting you to explore the breadth-taking islands and all that is hidden within them.",
          img: Celestyal1,
          head1: "Piraeus (Greece)",
          text3:
            "The largest port in the Mediterranean and primary departure point for Greek island cruises from Athens. Piraeus is a hub of activities that will bring your senses to life, With sun-soaked promenade, al-fresco cafes and bars and countless shops, its a place where you can easily relax with a glass of wine and watch the world go by.",
          head2: "Mykonos (Greece)",
          text4:
            "The Greek island, Mykonos flaunts its double personality the moment you set eyes on its coastline. Basking in year-round sunshine, its rugged rocky landscape blends seamlessly with smooth sandy beaches. In the distance, undulating hills host the island's iconic windmills turning in symphony with the seasonal winds that have branded Mykonos 'island's of the winds'.",
          img3: Celestyal2,
          head3: "Athens Monuments and the Acropolis",
          text5:
            "We start our walking tour in Little Venice (Alefkandra), a district located at the sea, famous for its picturesque medieval buildings, adorned with colourful wooden balconies. This western part of Mykonos Town is one of the most beautiful and romantic places on the island, especially as you enjoy a cocktail in one of its many bars and cafes. Then we focus our attention on one of the most recognized landmarks of Mykonos, the famous Windmills. From as early as the 16th century, the windmills were intensely used in the island’s production of wheat and bread. The area of the windmills has a stunning view of Little Venice and is the most popular place in Mykonos from which to watch the glowing sunsets. The next and final stop is Panagia Paraportianí, a true Byzantine architectural jewel. This whitewashed church, which dates back to 1425, is the most photographed of the 400 churches on the island of Mykonos. You will then have free time to savour a coffee or wander around Chora, the central part of Mykonos Town, with its maze of tiny streets and whitewashed lanes, houses and churches, and numerous little shops, boutiques, art galleries, stylish bars and restaurants.",
        },
      ],
    },
    {
      type: "carnival",
      cruise: [
        {
          banner: banner3,
          name: "Carnival",
          mainHead: "Carnival Cruise",
          text1:
            "The Carnival Destiny boasts nearly 500 balcony staterooms and suites, Carnival's Seaside Theatre and Circle 'C' space just for 12-14 year olds - The perfect choice for your next cruise vacation. Ready for some grown up fun? The Carnival Destiny can satisfy any appetite with her variety of eateries as well as keep you entertained late into the night with a fantastic selection of lounges and nightclubs. The friendly casino, duty-free shopping and relaxing Spa Carnival round out what is sure to be an unforgettable cruise experience for you and your whole family.",
          text2:
            "Now more than ever, a cruise to the Caribbean aboard the Carnival Liberty is a vacation on one of the most spectacular ships at sea. Two new 650-square-foot 'deluxe penthouse suites' - will be added to this already spectacular floating resort. With all of our newest amenities, including Carnival's Seaside Theatre -- Carnival Liberty's duty-free shops, delicious dining options, lounges and clubs, Carnival Liberty is as much an attraction as the destinations themselves.",
          img: Carnival1,
          head1: "Carnival Conquest",
          text3:
            "Carnival Conquest has everything you want in a cruise vacation; beautiful destination spots, award-winning stage shows, clubs and lounges, Spa Carnival, a friendly casino, delicious dining options -- including the Carnival Conquest supper club, and now, our new Carnival Seaside Theatre. And, with 60% of her Carnival Conquest staterooms featuring ocean views, and 60% of those having private balconies, there's no better way to conquer the Western Caribbean.",
          head2: "Carnival Freedom",
          text4:
            "Everyone has their own idea of what a perfect cruise vacation is. That's why Carnival believes in giving our guests a variety of entertaining options -- one more fun than the next. You can choose to spend your time browsing the Carnival Freedom duty-free Fun Shops, dining in the variety of eateries, relaxing in the lounges, dancing in the clubs or checking out Carnival Freedom's Seaside Theatre -- a 12-foot-high by 22-foot-wide LED screen located on her Lido deck. It's your choice to do whatever you want, whenever you want -- even if that's nothing at all! Exercise your right to choose.",
          img3: Carnival2,
          head3: "Carnival Ecstasy",
          text5:
            "Life aboard a 2009 or 2010 Carnival Ecstasy cruise is more heavenly than ever before since we've added so many wonderful amenities aboard Carnival Ecstasy. The atrium lobby bar, wireless internet café, and expanded Youth Program space are just a few of the fabulous new features. Add that to the variety of formal and casual eateries, lounges & nightclubs, friendly casino and duty-free Fun Shops, and you'll agree that Carnival Ecstasy may have been an understatement when we named this ship.",
        },
      ],
    },
    {
      type: "variety",
      cruise: [
        {
          banner: banner4,
          name: "Variety",
          mainHead: "Variety Cruise",
          text1:
            "The Variety Cruises passion remains unchanged since 1968: an alchemy that blends enriching oneself educationally and exploring the true identity of a destination, while enjoying the comforts and unique benefits of a small ship sailing the seas.",
          text2:
            "Today, Variety Cruises has grown to operate 11 Mega Yachts and Motor Sailers. Our small ships currently serve handpicked cruise destinations worldwide including Greece, Italy, Turkey, the Canary Islands, the Adriatic Sea, Cape Verde, the Seychelles, Costa Rica & Panama, Cuba, and soon Madagascar & Iceland.",
          img: Variety1,
          head1: "A Variety of cruise experiences for all tastes",
          text3:
            "Variety Cruises offers life enriching journeys for the inquisitive mind. We promise to offer you a truly unique opportunity to savor the great cultural, architectural, historical and natural diversity of the Mediterranean Sea and other cruise destinations. Our fleet of small ships can take you off the beaten track, to enjoy the intimacy of unfrequented destinations or the cosmopolitan ports of the World.",
          head2: "A Variety of cruise Programs",
          text4:
            "Our ships operate charter cruises and over 13 scheduled itineraries to top cruise destinations, including Greece, the Adriatic, Turkey, the Seychelles, and our fantastic new cruise programs to Costa Rica & Panama, the Canary Islands, and last but not least Cuba, with prices for all budgets.",
          head3: "A Variety of ships",
          text5:
            "If you are looking for a cruise on board a small ship with discreetly attentive service and relaxing contemporary sophistication, then the only thing you have to do is to select the ship that suits you best. If you want to cruise on a modern vessel with sleek high-tech look, classy dining rooms and space sun decks, very similar to the private yachts found in the most famous world ports, then the M/Y Variety Voyager, M/Y Harmony V, M/Y Harmony G, M/S Panorama and sister ship M/S Panorama II are the best choices for you. If a relaxed and congenial atmosphere is your first priority, then M/Y Pegasus and M/S Galileo will let you more than satisfied. We are really proud to introduce our 2012-built Variety Voyager, an incomparably comfortable and elegant vessel that seduces you with its sleek lines and ample deck space. If you are looking for that special touch of a private millionaire's yacht, then Variety Yachting has a classy motor yacht or a sailing yacht just for you.",
        },
      ],
    },
    {
      type: "star",
      cruise: [
        {
          banner: banner5,
          name: "Star",
          mainHead: "Star Cruise",
          text1:
            "This prosperous, ultra-modern city-state still holds many surprises. Explore cultural enclaves like Chinatown, Little India and Arab Street. Visit such attractions as the Jurong Bird Park and Sentosa Island. Or simply head to Orchard Road for world-class shopping. Finally, treat yourself to tea and nostalgia at the Raffles Hotel.",
          text2:
            "Asia's truly international, vibrant city - a melting pot of the East and West. From the futuristic Chek Lap Kok airport, modern skyscrapers, to colourful local markets and roadside foodstalls, Hong Kong offers her visitors a smorgasbord of sights, sounds and smells found nowhere else. Besides great shopping, Hong Kong is also a gourmet's shangri-la.",
          img: Star1,
          head1: "Taiwan Cruise Hub",
          text3:
            "Located in the southern part of Taiwan, Kaohsiung is the island's largest industrial center and Taiwan’s second largest city. This beautiful and modern port is well known for its scenery and charming seascapes. Visitors will enjoy a warm climate and a wide choice of attractions such as museums, temples and even shopping.",
          head2: "Australia Cruises",
          text4:
            "Discover Australia's destinations, starting with icons such as the Red Centre, Kakadu National Park and the Great Barrier Reef. These 16 natural treasures cover a breathtaking diversity of landscapes, from the mountainous Australian Alps to Fraser Island's sand dunes, rainforest and lakes. Just as distinct are Australia’s cities, where our laidback lifestyle and cosmopolitan culture meet.",
        },
      ],
    },
    {
      type: "royal",
      cruise: [
        {
          banner: banner6,
          name: "Royal Carribbean",
          mainHead: "Royal Carribbean Cruise",
          text1:
            "Our new Oasis of the Seas and Allure of the Seas aren't just ships, they are collections of amazing experiences that challenge all limitations. More options than ever before include two Flowriders, a Zip Line, AquaTheater, Carousel, Loft Suites and more. This is where the impossible becomes possible and the unimaginable becomes real.",
          text2:
            "These ships offer activities for everyone in the family. From sophisticated casinos and lounges for adults, to our award-winning Adventure Ocean youth programs for kids.",
          img: Royal1,
          head1: "Freedom Class",
          text3:
            "Our Freedom class of cruise ships is packed with spectacular features: the FlowRider® surf park, canitilevered whirlpools, ice-skating rink, full-size boxing ring, H2O Zone waterpark and more!",
          head2: "Voyager Class",
          text4:
            "The Voyager class of cruise ships has everything from rock-climbing walls, miniature golf courses and ice-skating rinks to specialty restaurants and bustling boulevards lined with shops and cafés.Voyager Class- Adventure Of The Seas | Explorer Of The Seas | Mariner Of The Seas | Navigator Of The Seas | Voyager Of The Seas",
          head3: "Vision Class",
          text5:
            "With themed dining rooms and lounges, casinos, swimming pools, solariums, centrums, even a miniature golf course on some ships, this class of cruise ships has something to excite everyone.Vision Cruises- Enchantment Of The Seas | Grandeur Of The Seas | Legend Of The Seas Rhapsody Of The Seas | Splendour Of The Seas | Vision Of The Seas",
        },
      ],
    },
    {
      type: "mscline",
      cruise: [
        {
          banner: banner7,
          name: "MSC Cruise Line",
          mainHead: "MSC Cruise Line",
          text1:
            "he most modern cruise fleet in the world continues to grow with the launch of majestic MSC Magnifica. After a spectacular christening ceremony in Hamburg, the new 'Musica' class vessel comes into service in March 2010. MSC Magnifica will carry 2,518 passengers, most of them enjoying the luxury of a sea-facing cabin with private balcony. Lucky guests on MSC Magnifica will be expertly looked after by a crew of over 1,000.",
          text2:
            "Our Freedom class of cruise ships is packed with spectacular features: the FlowRider® surf park, canitilevered whirlpools, ice-skating rink, full-size boxing ring, H2O Zone waterpark and more!",
          img: MscLine1,
          head1: "Freedom Class",
          text3:
            "Our Freedom class of cruise ships is packed with spectacular features: the FlowRider® surf park, canitilevered whirlpools, ice-skating rink, full-size boxing ring, H2O Zone waterpark and more!",
          head2: "Voyager Class",
          text4:
            "The Voyager class of cruise ships has everything from rock-climbing walls, miniature golf courses and ice-skating rinks to specialty restaurants and bustling boulevards lined with shops and cafés.Voyager Class- Adventure Of The Seas | Explorer Of The Seas | Mariner Of The Seas | Navigator Of The Seas | Voyager Of The Seas",
          img3: MscLine2,
          head3: "MSC Poesia",
          text5:
            "With more open space, balconies and glass on the Radiance-class of cruise ships than on any other cruise ships, you just might forget you're on a ship at all. Glass walls and elevators get you up close to your travel destination.",
        },
      ],
    },
    {
      type: "princess",
      cruise: [
        {
          banner: banner8,
          name: "Princess",
          mainHead: "Princess Cruise",
          text1:
            "Caribbean Princess is the Grand Daddy of our Princess fleet, with the largest carrying capacity. This ship's 900 balcony staterooms and an entire deck of Mini-Suites offer impressive private vistas. Hallmark features include Movies Under the Stars®, the premier Lotus Spa and numerous formal and casual eating options, including the open-kitchen-style Cafe Caribe.",
          text2:
            "The Royal Princess® is a gem of a ship, providing a wonderful and intimate ambience for visiting the world's fascinating destinations.",
          img: Princess1,
          head1: "Coral Princess",
          text3:
            "We've made affordable balconies a hallmark of the Princess Fleet with more than 700 balcony staterooms alone on this Coral Class ship.",
          head2: "Crown Princess",
          text4:
            "This crown jewel of the fleet dazzles from the moment you come onboard, boasting all the amenities you expect of Princess..",
          img3: Princess2,
          head3: "Grand Princess",
          text5:
            "Your cruise will prove unforgettable with Grand Princess as your host. This spectacular ship rivals the most luxurious land resorts.",
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
    <div className=" flex flex-col">
      {selectedObj.cruise.map((item, index) => {
        return (
          <div className="flex items-center justify-center" key={index}>
            <h1
              className={`sm:text-8xl text-3xl text-white font-bold z-20 absolute sm:top-[280px] top-[145px]`}
            >
              {item.name}
            </h1>
            <div
              className=" relative flex flex-col w-[100%] z-0 place-items-center justify-center items-center sm:h-[450px] h-[200px] filter brightness-[.65]"
              style={{
                backgroundImage: `url(${item.banner})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
      <div className=" flex flex-row my-20 sm:mx-24 sm:flex-nowrap flex-wrap sm:justify-start justify-center max-w-fit">
        <div className=" flex flex-col mb-10 sm:mb-0">
          {selectedObj.cruise.map((item, index) => {
            return (
              <div
                className=" flex flex-col space-y-5 sm:pr-10 mx-6"
                key={index}
              >
                <h1 className="sm:text-6xl text-4xl font-bold opacity-80 sm:mb-5 max-w-fit">
                  {item.mainHead}
                </h1>
                <p className="text-gray-500 text-[16.5px]">{item.text1}</p>
                <p className="text-gray-500 text-[16.5px]">{item.text2}</p>

                <div className=" flex flex-row space-x-1 items-center">
                  <img src={item.img} className="my-4" alt="" />
                  <img src={item.img2} className="my-4" alt="" />
                </div>
                <h2 className="font-bold text-2xl opacity-85">{item.head1}</h2>
                <p className="text-gray-500 text-[16.5px]">{item.text3}</p>
                <h2 className="font-bold text-2xl opacity-85">{item.head2}</h2>
                <p className="text-gray-500 text-[16.5px]">{item.text4}</p>
                <img src={item.img3} className="my-4" alt="" />
                <h2 className="font-bold text-2xl opacity-85">{item.head3}</h2>
                <p className="text-gray-500 text-[16.5px]">{item.text5}</p>
              </div>
            );
          })}
        </div>
        <div>
          <TopReasons />
        </div>
      </div>
    </div>
  );
};

export default AllCruise;
