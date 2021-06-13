import insta from '../images/instagram.png'
import twitter from '../images/twitter.png'
import whatsapp from '../images/whatsapp.png'

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "products",
    url: "/products",
  },
  {
    id: 3,
    text: "about",
    url: "/about",
  },
];

export const media = [
  {
    id: 1,
    name: insta,
    link: "https://www.instagram.com/jersey_republicc",
    img: insta,
  },
  {
    id: 2,
    name: twitter,
    link: "https://twitter.com/JerseyRepublicc",
    img: twitter,
  },
  {
    id: 3,
    name: whatsapp,
    link: "https://twitter.com/JerseyRepublicc",
    img: whatsapp,
  },
];

export const products_url = "/api/jerseys";

export const single_product_url = `/api/single-jersey?id=`;
