
import PivotBook from "../../images/workbookImages/WorkBookImage.png";
import WealthArchitectPlaybook from "../../images/StoreImages/WealthArchitectPlaybook.png";
import TheSeeker from "../../images/bookImages/Book1.webp";
import CapImage from "../../images/StoreImages/blueandwhite.webp";
import CapTee from "../../images/StoreImages/Tees.webp";
import CapMug from "../../images/StoreImages/blackbluecup.webp";
import MediocreShirt from "../../images/StoreImages/shirt5.jpg";



import CapBlackandYellow from '../../images/StoreImages/blackandyellow.webp';
import CapBlueandwhite from '../../images/StoreImages/blueandwhite.webp';
import CapGreyandWhite from '../../images/StoreImages/greyandwhite.webp';
import CapRedandWhite from '../../images/StoreImages/redandwhite.webp';
import CapRed from '../../images/StoreImages/red.webp';
import CapWHiteandBlack from '../../images/StoreImages/whiteandblack.webp';
import CapWhiteandYellow from '../../images/StoreImages/whiteandyellow.webp';



import Cupone from '../../images/StoreImages/anotherbluecup.webp';
import Cupfour from '../../images/StoreImages/blackcup.webp';
import Cupfive from '../../images/StoreImages/bluecup.webp';

import Shirt1 from '../../images/StoreImages/Tees.webp';
import Shirt2 from '../../images/StoreImages/shirt2.webp';
import Shirt3 from '../../images/StoreImages/shirt3.webp';

export const resources = [
  {
    slug: "pivot-workbook",
    category: "WORKBOOK",
    title: "How to Pivot and Reinvent Your Life After Devastating Life-Altering Crisis",
    description:
      "A practical resource for navigating major life disruption, rebuilding your confidence and creating a new direction.",
    price: "$7",
    button: "GET THE WORKBOOK",
    image: PivotBook,
    imageAlt: "How to Pivot and Reinvent Your Life workbook cover",
    href: "https://buy.stripe.com/5kAcNQ8q6bNqbNC9AN",
    number: "01",
    options: [],
  },
  {
    slug: "wealth-architect-playbook",
    category: "PLAYBOOK",
    title: "Wealth Architect Playbook",
    description:
      "A practical guide to help you think more intentionally about building wealth and becoming the architect of your financial future.",
    price: "$9.99",
    button: "GET THE PLAYBOOK",
    image: WealthArchitectPlaybook,
    imageAlt: "Wealth Architect Playbook cover",
    href: "https://buy.stripe.com/6oUdRb3rN2Ck6C28jqfw40Q",
    number: "02",
    options: [],
  },
  {
    slug: "the-seeker",
    category: "BOOK",
    title: "The Seeker",
    description:
      "A deeper exploration of purpose, personal growth and the journey toward becoming who you are meant to be.",
    price: "$32.99",
    button: "GET THE SEEKER",
    image: TheSeeker,
    imageAlt: "The Seeker book cover",
    href: "https://buy.stripe.com/3cs4hk9uadVy5pe9AL",
    number: "03",
    options: [],
  },
];

export const merchandise = [
 
{
  slug: "youre-enough-cap",
  category: "HEADWEAR",
  title: "#YouREnough# Cap",
  description:
    "Wear the message. A reminder to live with purpose and confidence.",
  price: "$34.99",
  button: "SHOP CAP",
  image: CapBlueandwhite,
  imageAlt: "#YouREnough# Cap",
  href: "https://buy.stripe.com/5kA1586hY3gU3h6fZf",
  options: [],
  variants: [
    { name: "Blue & White", image: CapBlueandwhite },
    { name: "Black & Yellow", image: CapBlackandYellow },
    { name: "Grey & White", image: CapGreyandWhite },
    { name: "Red & White", image: CapRedandWhite },
    { name: "Red", image: CapRed },
    { name: "White & Black", image: CapWHiteandBlack },
    { name: "White & Yellow", image: CapWhiteandYellow },
  ],
},
{
  slug: "youre-enough-mug",
  category: "DRINKWARE",
  title: "#YouREnough# Mug",
  description:
    "Bring the #YouREnough# message into your everyday routine.",
  price: "$10",
  button: "SHOP MUG",
  image: Cupfive,
  imageAlt: "#YouREnough# Mug",
  href: "https://buy.stripe.com/7sI3dg9uaaJmg3S00i",
  options: [],
  variants: [
    { name: "Another Blue", image: Cupone },
    { name: "Black", image: Cupfour },
    { name: "Blue", image: Cupfive },
  ],
},
{
  slug: "youre-enough-shirt",
  category: "APPAREL",
  title: "#YouREnough# Shirt",
  description:
    "Wear a message of purpose, personal growth and self-belief.",
  price: "$29.99",
  button: "SHOP SHIRT",
  image: Shirt1,
  imageAlt: "#YouREnough# Shirt",
  href: "https://buy.stripe.com/28obJMfSy04I2d29AT",
  options: [],
  variants: [
    { name: "Style 1", image: Shirt1 },
    { name: "Style 2", image: Shirt2 },
    { name: "Style 3", image: Shirt3 },
  ],
},

  
 
 
  {
    slug: "refuse-to-be-mediocre-shirt",
    category: "APPAREL",
    title: "Refuse to Be Mediocre Shirt",
    description:
      "A bold reminder to pursue growth and keep moving forward.",
    price: "$29.99",
    button: "SHOP SHIRT",
    image: MediocreShirt,
    imageAlt: "Refuse to Be Mediocre Shirt",
    href: "https://buy.stripe.com/4gw0149uagG3GaJy14o",
    options: [],
  },
];
