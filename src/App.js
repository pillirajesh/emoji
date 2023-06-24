import "./App.css";
import Emoji from "./components/EmojiGame";

const emojisList = [
  {
    id: 0,
    heroName: "Siddharth",
    heroUrl: "https://wi.wallpapertip.com/wsimgs/47-475297_hero-siddharth.jpg",
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
      "https://image3.mouthshut.com/images/ImagesR/2017/11/925872177-7967769-1.jpg?rnd=10356",
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
    heroName: "Shahid kapoor",
    heroUrl:
      "https://i.pinimg.com/736x/1d/bb/d8/1dbbd8e99a3f222021beccb88a651307.jpg",
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
