import "./App.css";
import Emoji from "./components/EmojiGame";

const emojisList = [
  {
    id: 0,
    heroName: "Prabash",
    heroUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfqY6wYPLwT-eoabLfCPM1zqw9dHN6to5VsUg74Bdddw&s",
  },
  {
    id: 1,
    heroName: "NTR",
    heroUrl:
      "https://assets.thehansindia.com/h-upload/2020/05/19/970337-jr-ntr.jpg",
  },
  {
    id: 2,
    heroName: "Allu Arjun",
    heroUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ylVD6mbex5AN6DJch7z5BPtFsesY2eUbPdOBDjnE&s",
  },
  {
    id: 3,
    heroName: "Pavan Kalyan",
    heroUrl:
      "https://www.telugu360.com/wp-content/uploads/2016/09/Suspense-on-Pawan-Kalyan-speech.jpg",
  },
  {
    id: 4,
    heroName: "Vijay Devarakonda",
    heroUrl:
      "https://www.telugu360.com/wp-content/uploads/2019/03/Vijay-Devarakonda-Exhausted-and-Hospitalized.jpg",
  },
  {
    id: 5,
    heroName: "Ram Charan",
    heroUrl: "https://igimages.gumlet.io/telugu/news/charan280318_1m-dd0.jpg",
  },
  {
    id: 6,
    heroName: "Amir Khan",
    heroUrl:
      "https://d30ny7ijak9wq4.cloudfront.net/s3fs-public/images/story/2014/03/10/aamir-khan.jpg",
  },
  {
    id: 7,
    heroName: "Ravi Teja",
    heroUrl:
      "https://datatrained.com/dt-fun/wp-content/uploads/2023/02/ravi-teja-feature.jpg",
  },
  {
    id: 8,
    heroName: "Saif Ali Khan",
    heroUrl:
      "https://assets.telegraphindia.com/telegraph/2021/Nov/1637256878_saif-ali-khan.jpg",
  },
  {
    id: 9,
    heroName: "Ajay Devgan",
    heroUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201704/ajay-story_647_040217014607.jpg",
  },
  {
    id: 10,
    heroName: "Mahesh Babu",
    heroUrl:
      "https://www.telugu360.com/wp-content/uploads/2022/02/Mahesh-Babu.jpg",
  },
  {
    id: 11,
    heroName: "Ram Potineni",
    heroUrl: "https://cdn.sharechat.com/385ac020_1621013538108_sc.jpeg",
  },
];

const App = () => {
  return (
    <div className="App">
      <Emoji emojisList={emojisList} />
    </div>
  );
};

export default App;
