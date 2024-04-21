import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Ratings from "./components/Ratings";
import DriverCard from "./components/DriverCard";

const people = [
  {
    lastName: "Doe",
    firstName: "John",
    gender: "male",
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    lastName: "Delores",
    firstName: "Obrien",
    gender: "female",
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const creditCards = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white",
  },
  {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222",
  },
  {
    type: "Visa",
    number: "0123456789016984",
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Name of the Bank",
    owner: "Firstname Lastname",
    bgColor: "#ddbb55",
    color: "white",
  },
];

const drivers = [
  {
    name: "Travis Kalanick",
    rating: 4.2,
    img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
    car: {
      model: "Toyota Corolla Altis",
      licensePlate: "CO42DE",
    },
  },
  {
    name: "Dara Khosrowshahi",
    rating: 4.9,
    img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car: {
      model: "Audi A3",
      licensePlate: "BE33ER",
    },
  },
];

console.log(creditCards);

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      {people.map((person, index) => (
        <IdCard key={index} {...person} />
      ))}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      {creditCards.map((creditCard, indexCard) => (
        <CreditCard key={indexCard} {...creditCard} />
      ))}
      <Ratings children={3.6} />
      {drivers.map((driver, driverIndex) => (
        <DriverCard key={driverIndex} {...driver} />
      ))}
    </div>
  );
}

export default App;
