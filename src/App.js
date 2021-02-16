import "./App.css";
import Header from "./component/Header";
import Image from "./component/Image";
import "./index.css";

import image1 from "./Images/1.jpg";
import image2 from "./Images/2.jpg";
import image3 from "./Images/3.jpg";
import image4 from "./Images/4.jpg";
import image5 from "./Images/5.jpg";
import image6 from "./Images/6.jpg";
import image7 from "./Images/7.jpg";
import image8 from "./Images/8.jpg";

function App() {
  return (
    <div className="items__">
      <Header />
      <Image
        img={image1}
        dropIcon={true}
        comment="The explorer : Exploring the earth"
      />
      <Image
        img={image2}
        dropIcon={true}
        comment="Gifted by an Alien from another universe"
      />
      <Image
        img={image3}
        dropIcon={true}
        comment="Passing through No Man's Land"
      />
      <Image
        img={image4}
        dropIcon={true}
        comment="Ever played PUBG? Then you know this right?"
      />
      <Image
        img={image5}
        dropIcon={true}
        comment="If the tank succeed then victory follows"
      />
      <Image
        img={image6}
        dropIcon={true}
        comment="Because when i look at you, i can feel it"
      />
      <Image img={image7} dropIcon={true} comment="I can fly in space" />
      <Image
        img={image8}
        dropIcon={false}
        comment="Can i give you one last shot ?"
      />
    </div>
  );
}

export default App;
