const countries = [
  { NAME: "W. Sahara", debt2gdpratio: 0 },
  { NAME: "N. Cyprus", debt2gdpratio: 0 },
  { NAME: "Antarctica", debt2gdpratio: 0 },
  { NAME: "Timor-Leste", debt2gdpratio: 0 },
  { NAME: "Greenland", debt2gdpratio: 0 },
  { NAME: "Puerto Rico", debt2gdpratio: 0 },
  { NAME: "Falkland Islands", debt2gdpratio: 0 },
  { NAME: "Solomon Is.", debt2gdpratio: 0 },
  { NAME: "Vanuatu", debt2gdpratio: 0 },
  { NAME: "New Caledonia", debt2gdpratio: 0 },
  { NAME: "French Southern and Antarctic Lands", debt2gdpratio: 0 },
  { NAME: "Kosovo", debt2gdpratio: 0 },
  {
    NAME: "Japan",
    debt2gdpratio: 237,
  },
  {
    NAME: "Greece",
    debt2gdpratio: 177,
  },
  {
    NAME: "Lebanon",
    debt2gdpratio: 151,
  },
  {
    NAME: "Italy",
    debt2gdpratio: 135,
  },
  {
    NAME: "Singapore",
    debt2gdpratio: 126,
  },
  {
    NAME: "Cape Verde",
    debt2gdpratio: 125,
  },
  {
    NAME: "Portugal",
    debt2gdpratio: 117,
  },
  {
    NAME: "Angola",
    debt2gdpratio: 111,
  },
  {
    NAME: "Mozambique",
    debt2gdpratio: 109,
  },
  {
    NAME: "United States of America",
    debt2gdpratio: 107,
  },
  {
    NAME: "Djibouti",
    debt2gdpratio: 104,
  },
  {
    NAME: "Jamaica",
    debt2gdpratio: 103,
  },
  {
    NAME: "Belgium",
    debt2gdpratio: 98.6,
  },
  {
    NAME: "Dem. Rep. Congo",
    debt2gdpratio: 98.5,
  },
  {
    NAME: "France",
    debt2gdpratio: 98.1,
  },
  {
    NAME: "Cyprus",
    debt2gdpratio: 95.5,
  },
  {
    NAME: "Spain",
    debt2gdpratio: "95.5000",
  },
  {
    NAME: "Bahrain",
    debt2gdpratio: "93.4000",
  },
  {
    NAME: "Jordan",
    debt2gdpratio: "92.4000",
  },
  {
    NAME: "Canada",
    debt2gdpratio: "89.7000",
  },
  {
    NAME: "Argentina",
    debt2gdpratio: "89.4000",
  },
  {
    NAME: "Sri Lanka",
    debt2gdpratio: "86.8000",
  },
  {
    NAME: "Pakistan",
    debt2gdpratio: "84.8000",
  },
  {
    NAME: "Gambia",
    debt2gdpratio: "81.8000",
  },
  {
    NAME: "Suriname",
    debt2gdpratio: "81.4000",
  },
  {
    NAME: "United Kingdom",
    debt2gdpratio: "80.7000",
  },
  {
    NAME: "Mauritania",
    debt2gdpratio: 79,
  },
  {
    NAME: "Costa Rica",
    debt2gdpratio: "77.4700",
  },
  {
    NAME: "Tunisia",
    debt2gdpratio: "76.7000",
  },
  {
    NAME: "Brazil",
    debt2gdpratio: "75.7900",
  },
  {
    NAME: "El Salvador",
    debt2gdpratio: "73.3000",
  },
  {
    NAME: "Croatia",
    debt2gdpratio: "73.2000",
  },
  {
    NAME: "Sao Tome and Principe",
    debt2gdpratio: "73.1000",
  },
  {
    NAME: "Austria",
    debt2gdpratio: "70.4000",
  },
  {
    NAME: "Belize",
    debt2gdpratio: 69.9,
  },
  {
    NAME: "India",
    debt2gdpratio: 69.62,
  },
  {
    NAME: "Bahamas",
    debt2gdpratio: 66.8,
  },
  {
    NAME: "Hungary",
    debt2gdpratio: 66.3,
  },
  {
    NAME: "Slovenia",
    debt2gdpratio: 66.1,
  },
  {
    NAME: "Morocco",
    debt2gdpratio: 66.1,
  },
  {
    NAME: "Albania",
    debt2gdpratio: 65.9,
  },
  {
    NAME: "Qatar",
    debt2gdpratio: 65.8,
  },
  {
    NAME: "Mauritius",
    debt2gdpratio: 64.6,
  },
  {
    NAME: "Trinidad and Tobago",
    debt2gdpratio: 63.2,
  },
  {
    NAME: "Yemen",
    debt2gdpratio: 63.2,
  },
  {
    NAME: "Sierra Leone",
    debt2gdpratio: 63,
  },
  {
    NAME: "Montenegro",
    debt2gdpratio: 62.27,
  },
  {
    NAME: "South Africa",
    debt2gdpratio: 62.2,
  },
  {
    NAME: "Syria",
    debt2gdpratio: 83,
  },
  {
    NAME: "S. Sudan",
    debt2gdpratio: 31,
  },
  {
    NAME: "Somalia",
    debt2gdpratio: 100,
  },
  {
    NAME: "Somaliland",
    debt2gdpratio: 100,
  },
  {
    NAME: "Mali",
    debt2gdpratio: 40,
  },
  {
    NAME: "Malawi",
    debt2gdpratio: 62,
  },
  {
    NAME: "Sudan",
    debt2gdpratio: 62,
  },
  {
    NAME: "Uruguay",
    debt2gdpratio: 61.3,
  },
  {
    NAME: "Israel",
    debt2gdpratio: 59.9,
  },
  {
    NAME: "Germany",
    debt2gdpratio: 59.8,
  },
  {
    NAME: "Finland",
    debt2gdpratio: 59.4,
  },
  {
    NAME: "Ghana",
    debt2gdpratio: 59.3,
  },
  {
    NAME: "Zambia",
    debt2gdpratio: 59,
  },
  {
    NAME: "Ireland",
    debt2gdpratio: 58.8,
  },
  {
    NAME: "Bolivia",
    debt2gdpratio: 57.7,
  },
  {
    NAME: "Vietnam",
    debt2gdpratio: 57.5,
  },
  {
    NAME: "Kenya",
    debt2gdpratio: 57,
  },
  {
    NAME: "Ethiopia",
    debt2gdpratio: 57,
  },
  {
    NAME: "Gabon",
    debt2gdpratio: 56.4,
  },
  {
    NAME: "Seychelles",
    debt2gdpratio: 55,
  },
  {
    NAME: "Mongolia",
    debt2gdpratio: 55,
  },
  {
    NAME: "Kyrgyzstan",
    debt2gdpratio: 54.1,
  },
  {
    NAME: "Zimbabwe",
    debt2gdpratio: 53.4,
  },
  {
    NAME: "Laos",
    debt2gdpratio: 53.34,
  },
  {
    NAME: "Namibia",
    debt2gdpratio: 53.3,
  },
  {
    NAME: "Guyana",
    debt2gdpratio: 52.9,
  },
  {
    NAME: "Nicaragua",
    debt2gdpratio: 52.5,
  },
  {
    NAME: "Malaysia",
    debt2gdpratio: 52.5,
  },
  {
    NAME: "Serbia",
    debt2gdpratio: 52,
  },
  {
    NAME: "Dominican Rep.",
    debt2gdpratio: "50.5300",
  },
  {
    NAME: "China",
    debt2gdpratio: "50.5000",
  },
  {
    NAME: "Ukraine",
    debt2gdpratio: "50.3000",
  },
  {
    NAME: "Myanmar",
    debt2gdpratio: "49.4100",
  },
  {
    NAME: "Ecuador",
    debt2gdpratio: "49.4000",
  },
  {
    NAME: "Iraq",
    debt2gdpratio: "49.4000",
  },
  {
    NAME: "Netherlands",
    debt2gdpratio: "48.6000",
  },
  {
    NAME: "Central African Rep.",
    debt2gdpratio: "48.5000",
  },
  {
    NAME: "Azerbaijan",
    debt2gdpratio: "48.4000",
  },
  {
    NAME: "Colombia",
    debt2gdpratio: "48.4000",
  },
  {
    NAME: "Fiji",
    debt2gdpratio: 48,
  },
  {
    NAME: "Slovakia",
    debt2gdpratio: 48,
  },
  {
    NAME: "Tajikistan",
    debt2gdpratio: "47.9000",
  },
  {
    NAME: "Senegal",
    debt2gdpratio: "47.7000",
  },
  {
    NAME: "Oman",
    debt2gdpratio: "47.5000",
  },
  {
    NAME: "Chad",
    debt2gdpratio: "46.6000",
  },
  {
    NAME: "Algeria",
    debt2gdpratio: "46.1000",
  },
  {
    NAME: "Poland",
    debt2gdpratio: 46,
  },
  {
    NAME: "Armenia",
    debt2gdpratio: "45.6000",
  },
  {
    NAME: "Mexico",
    debt2gdpratio: "45.5000",
  },
  {
    NAME: "Australia",
    debt2gdpratio: "45.1000",
  },
  {
    NAME: "Honduras",
    debt2gdpratio: "44.0500",
  },
  {
    NAME: "Eq. Guinea",
    debt2gdpratio: "43.3000",
  },
  {
    NAME: "Malta",
    debt2gdpratio: "43.1000",
  },
  {
    NAME: "Georgia",
    debt2gdpratio: 43,
  },
  {
    NAME: "Thailand",
    debt2gdpratio: "41.8000",
  },
  {
    NAME: "Philippines",
    debt2gdpratio: "41.5000",
  },
  {
    NAME: "Rwanda",
    debt2gdpratio: "41.1000",
  },
  {
    NAME: "Switzerland",
    debt2gdpratio: 41,
  },
  {
    NAME: "Lesotho",
    debt2gdpratio: "40.9000",
  },
  {
    NAME: "Macedonia",
    debt2gdpratio: "40.7000",
  },
  {
    NAME: "Norway",
    debt2gdpratio: "40.6000",
  },
  {
    NAME: "Papua New Guinea",
    debt2gdpratio: "39.8000",
  },
  {
    NAME: "Panama",
    debt2gdpratio: "39.4800",
  },
  {
    NAME: "Hong Kong",
    debt2gdpratio: "38.4000",
  },
  {
    NAME: "Iran",
    debt2gdpratio: "37.9000",
  },
  {
    NAME: "Tanzania",
    debt2gdpratio: "37.8000",
  },
  {
    NAME: "South Korea",
    debt2gdpratio: "37.7000",
  },
  {
    NAME: "North Korea",
    debt2gdpratio: "0.4",
  },
  {
    NAME: "Iceland",
    debt2gdpratio: 37,
  },
  {
    NAME: "Latvia",
    debt2gdpratio: "36.9000",
  },
  {
    NAME: "Guinea-Bissau",
    debt2gdpratio: "36.5000",
  },
  {
    NAME: "Lithuania",
    debt2gdpratio: "36.3000",
  },
  {
    NAME: "Romania",
    debt2gdpratio: "35.2000",
  },
  {
    NAME: "Sweden",
    debt2gdpratio: "35.1000",
  },
  {
    NAME: "Niger",
    debt2gdpratio: "34.7000",
  },
  {
    NAME: "Cameroon",
    debt2gdpratio: 34,
  },
  {
    NAME: "Denmark",
    debt2gdpratio: "33.2000",
  },
  {
    NAME: "Turkey",
    debt2gdpratio: "33.1000",
  },
  {
    NAME: "Haiti",
    debt2gdpratio: 33,
  },
  {
    NAME: "Liberia",
    debt2gdpratio: 32,
  },
  {
    NAME: "Côte d'Ivoire",
    debt2gdpratio: "31.9000",
  },
  {
    NAME: "Czechia",
    debt2gdpratio: "30.8000",
  },
  {
    NAME: "Nepal",
    debt2gdpratio: "30.2000",
  },
  {
    NAME: "Madagascar",
    debt2gdpratio: "30.1000",
  },
  {
    NAME: "Indonesia",
    debt2gdpratio: "29.8000",
  },
  {
    NAME: "Togo",
    debt2gdpratio: "29.5000",
  },
  {
    NAME: "Cambodia",
    debt2gdpratio: "29.4000",
  },
  {
    NAME: "Turkmenistan",
    debt2gdpratio: "29.3000",
  },
  {
    NAME: "Bangladesh",
    debt2gdpratio: "29.3000",
  },
  {
    NAME: "Taiwan",
    debt2gdpratio: "28.2000",
  },
  {
    NAME: "Chile",
    debt2gdpratio: "27.9000",
  },
  {
    NAME: "Guatemala",
    debt2gdpratio: "27.8800",
  },
  {
    NAME: "Peru",
    debt2gdpratio: "27.5000",
  },
  {
    NAME: "Moldova",
    debt2gdpratio: "27.4000",
  },
  {
    NAME: "Belarus",
    debt2gdpratio: "26.5000",
  },
  {
    NAME: "Maldives",
    debt2gdpratio: "24.8000",
  },
  {
    NAME: "Bosnia and Herz.",
    debt2gdpratio: "24.8000",
  },
  {
    NAME: "Bulgaria",
    debt2gdpratio: "24.5000",
  },
  {
    NAME: "Comoros",
    debt2gdpratio: "23.6000",
  },
  {
    NAME: "Uzbekistan",
    debt2gdpratio: "23.6000",
  },
  {
    NAME: "Botswana",
    debt2gdpratio: 23,
  },
  {
    NAME: "Venezuela",
    debt2gdpratio: 23,
  },
  {
    NAME: "Paraguay",
    debt2gdpratio: "22.9000",
  },
  {
    NAME: "Saudi Arabia",
    debt2gdpratio: "22.8000",
  },
  {
    NAME: "Burkina Faso",
    debt2gdpratio: "22.6000",
  },
  {
    NAME: "Luxembourg",
    debt2gdpratio: "22.1000",
  },
  {
    NAME: "Kazakhstan",
    debt2gdpratio: "21.9000",
  },
  {
    NAME: "Benin",
    debt2gdpratio: "21.6000",
  },
  {
    NAME: "Eritrea",
    debt2gdpratio: "20.1000",
  },
  {
    NAME: "New Zealand",
    debt2gdpratio: 19,
  },
  {
    NAME: "United Arab Emirates",
    debt2gdpratio: "18.6000",
  },
  {
    NAME: "Cuba",
    debt2gdpratio: "18.2000",
  },
  {
    NAME: "Guinea",
    debt2gdpratio: 18,
  },
  {
    NAME: "Nigeria",
    debt2gdpratio: "17.5000",
  },
  {
    NAME: "Libya",
    debt2gdpratio: "16.5000",
  },
  {
    NAME: "Palestine",
    debt2gdpratio: "16.4000",
  },
  {
    NAME: "Congo",
    debt2gdpratio: "15.7000",
  },
  {
    NAME: "Burundi",
    debt2gdpratio: "15.2000",
  },
  {
    NAME: "Kuwait",
    debt2gdpratio: "14.8000",
  },
  {
    NAME: "Russia",
    debt2gdpratio: "12.2000",
  },
  {
    NAME: "Bhutan",
    debt2gdpratio: 11,
  },
  {
    NAME: "Swaziland",
    debt2gdpratio: "10.7500",
  },
  {
    NAME: "Egypt",
    debt2gdpratio: 9,
  },
  {
    NAME: "Estonia",
    debt2gdpratio: "8.4000",
  },
  {
    NAME: "Afghanistan",
    debt2gdpratio: "7.1000",
  },
  {
    NAME: "Cayman Islands",
    debt2gdpratio: "5.7000",
  },
  {
    NAME: "Uganda",
    debt2gdpratio: 4,
  },
  {
    NAME: "Brunei",
    debt2gdpratio: "2.4000",
  },
];

export default countries;
