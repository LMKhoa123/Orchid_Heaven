const orchids = [
  {
    id: 1,
    name: "Taichung Beauty",
    rating: 5,
    isSpecial: true,
    image: "https://barritaorchids.com/cdn/shop/products/Cf592_1024x1024.jpg",
    color: "Pink",
    origin: "Taiwan",
    category: "Cattleya",
    clip: "https://www.youtube.com/embed/bhOEYjiBb7o?si=E4VrDzUiJynj_qPh",
  },
  {
    id: 2,
    name: "Dendrobium Stardust",
    rating: 4.5,
    isSpecial: true,
    image:
      "https://cdn11.bigcommerce.com/s-pxrevx9n0f/images/stencil/1280x1280/products/3747/18654/IMG_0339S__66292.1680813778.JPG?c=2",
    color: "Yellow",
    origin: "Thailand",
    category: "Dendrobium",
    clip: "https://www.youtube.com/embed/jTaYzg61K6Y?si=LzgJM2iwsG2OFwWW",
  },
  {
    id: 3,
    name: "Phalaenopsis Moth Orchid",
    rating: 4,
    isSpecial: false,
    image:
      "https://cdn.brilliantorchids.com/wp-content/uploads/2019/10/01-pink-phalaenopsis-feature-805x483.jpg",
    color: "White",
    origin: "Malaysia",
    category: "Phalaenopsis",
    clip: "https://www.youtube.com/embed/lZbr7sqzxwg?si=1I-XjDCw2sszfgur",
  },
  {
    id: 4,
    name: "Oncidium Sharry Baby",
    rating: 5,
    isSpecial: true,
    image: "https://orchid.farm/cdn/shop/files/1705609059935.jpg?v=1705609111",
    color: "Red",
    origin: "Mexico",
    category: "Oncidium",
    clip: "https://www.youtube.com/embed/U-_j9rxUBEg?si=WnKbR-r7Nd9-qct_",
  },
  {
    id: 5,
    name: "Vanda Coerulea",
    rating: 4.8,
    isSpecial: false,
    image:
      "https://www.gardenia.net/wp-content/uploads/2023/05/vanda-coerulea-780x520.webp",
    color: "Blue",
    origin: "India",
    category: "Vanda",
    clip: "https://www.youtube.com/embed/dD6UOlyXO4U?si=OsioSEtkz8TNSQDX",
  },
  {
    id: 6,
    name: "Paphiopedilum Maudiae",
    rating: 4.2,
    isSpecial: false,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Paphiopedilum_sanderianum_%28flower%29.jpg",
    color: "Green",
    origin: "China",
    category: "Paphiopedilum",
    clip: "https://www.youtube.com/embed/l6yWRZG5_us?si=U-u0b6uV9Jybjs0p",
  },
  {
    id: 7,
    name: "Miltonia Sunset",
    rating: 4.9,
    isSpecial: true,
    image:
      "https://static.wixstatic.com/media/bc4db9_f2809d4e83eb4b9399be43876a50f1cc~mv2.jpg/v1/fill/w_480,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bc4db9_f2809d4e83eb4b9399be43876a50f1cc~mv2.jpg",
    color: "Orange",
    origin: "Brazil",
    category: "Miltonia",
    clip: "https://www.youtube.com/embed/nHuB0u5-A4U?si=cUjX_YNcwKH5Mmz1",
  },
  {
    id: 8,
    name: "Cymbidium Golden Elf",
    rating: 4.6,
    isSpecial: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhjpN2U5V1ME_HbfMMdScPPcg4hK3fLN3Jg&s",
    color: "Yellow",
    origin: "Australia",
    category: "Cymbidium",
    clip: "https://www.youtube.com/embed/RdmgdjULNdQ?si=DP3rrvkvrxqEgtwt",
  },
  {
    id: 9,
    name: "Zygopetalum Mackay",
    rating: 4.4,
    isSpecial: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmiwXruxelVTrVKcyjHkjhALK9RBSZexEtyg&s",
    color: "Purple",
    origin: "Brazil",
    category: "Zygopetalum",
    clip: "https://www.youtube.com/embed/hHg-NMFZyjM?si=RwhQ8Qf7_MeMsQnB",
  },
  {
    id: 10,
    name: "Brassia Rex",
    rating: 5,
    isSpecial: true,
    image:
      "https://cdn11.bigcommerce.com/s-ookf1bkiza/images/stencil/1280x1280/products/28084/43893/7c7ddff1-5ca5-4713-8c96-ef84dbf6149b__64789.1719851254.jpg?c=2",
    color: "Green",
    origin: "Central America",
    category: "Brassia",
    clip: "https://www.youtube.com/embed/ckAce2nBKdo?si=rw_BdQsRAOLP6yG0",
  },
  {
    id: 11,
    name: "Cattleya Walkeriana",
    rating: 4.7,
    isSpecial: true,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Cattleya_walkeriana_tipo%2C_%27Dona_nega%27_x_%27Cambar%C3%A1%27_%2827501615169%29.jpg",
    color: "Lavender",
    origin: "Brazil",
    category: "Cattleya",
    clip: "https://www.youtube.com/embed/7Lz7WNvqQmI?si=88Rp5WzhynT8treQ",
  },
  {
    id: 12,
    name: "Encyclia Cordigera",
    rating: 4.3,
    isSpecial: false,
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrz0UP1Cx16KF0Nv_HtNjtTspzktK-aDzo-tMmmyGubH3tcJYl",
    color: "Brown",
    origin: "Colombia",
    category: "Encyclia",
    clip: "https://www.youtube.com/embed/M3RLfJ7hAss?si=NoGcxE09l1kidYmV",
  },
  {
    id: 13,
    name: "Lycaste Aromatica",
    rating: 4.6,
    isSpecial: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-CPtz1T7OA3fbQoM04upao9I6Zqrt53ikPvXG8mRgNca9CC9WDU2SgH_4CO3-C5mygh_DvXKdPJaui2MWrOGH0wem1TCoiDu3IG73TQ",
    color: "Yellow",
    origin: "Mexico",
    category: "Lycaste",
    clip: "https://www.youtube.com/embed/RO-kfSMdjWs?si=6HZa6GfhdfBG7jgI",
  },
  {
    id: 14,
    name: "Maxillaria Tenuifolia",
    rating: 4.5,
    isSpecial: false,
    image:
      "https://www.gardenia.net/wp-content/uploads/2023/05/maxillaria-tenuifolia.webp",
    color: "Red",
    origin: "Honduras",
    category: "Maxillaria",
    clip: "https://www.youtube.com/embed/moUn__CzLbY?si=BxCHunFsFvHyrg8c",
  },
  {
    id: 15,
    name: "Laelia Purpurata",
    rating: 5,
    isSpecial: true,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJcpJT7st80aDWDBUAc1Uj8L1Dp96ADhniq3pyfR5ZslXLWfie",
    color: "Purple",
    origin: "Brazil",
    category: "Laelia",
    clip: "https://www.youtube.com/embed/WZV8gbRBy6g?si=TlfREeTRdnORmyNX",
  },
  {
    id: 16,
    name: "Masdevallia Angel Tang",
    rating: 4.7,
    isSpecial: true,
    image:
      "https://cdn11.bigcommerce.com/s-ookf1bkiza/products/23068/images/27021/maquarm__52658.1714152612.386.513.jpg?c=2",
    color: "Pink",
    origin: "Peru",
    category: "Masdevallia",
    clip: "https://www.youtube.com/embed/CZtpobY-Ifg?si=dy-N4V8blUVFnQjc",
  },
];

export default orchids;
