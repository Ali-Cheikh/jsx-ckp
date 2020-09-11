import React, { useState } from 'react';
import './App.css';
import img from './me.jpg';
import './App.css';
import Profile from './components/Profile';
import { Card } from 'react-bootstrap';


function App() {

  const [imageUrl, setImageUrl] = useState("https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.0-9/69720365_128044508514958_9032006324417724416_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_ohc=WOVszlCzeNcAX8kvd41&_nc_ht=scontent.fnbe1-1.fna&oh=30eb60ed1fe58b7d2221d4bedaaa2aa9&oe=5F796EC3")

  return (
    <div>
      <h1 style={{
        border: 'solid black',
        maxWidth: '100vw',
        color: 'red',
        textAlign: 'center',
      }} hi>
        Hi nice to see you in my portfile web page </h1>
      <div className="hello-ahmed">
        <br />
      </div>
      <Profile name="Name : Ali cheikh" city="Wher i live : Sfax" MorAboutMe="Hi you know the name and age and city (=> and if You wont to be my friend welcome iam :{anime/cp/games/vd lover/cd/pr/tech/pc -> lover}" age="My age : 16" displayMessage={(val) => alert(val)}>
        <h2>Ail Cheikh</h2>
        <img src="https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.0-9/66756311_108338390485570_3993008456318582784_o.jpg?_nc_cat=104&_nc_sid=a4a2d7&_nc_ohc=-tVLclDRh6gAX-k_J_N&_nc_ht=scontent.fnbe1-1.fna&oh=402083b6f7cb92b6d45b9d9413baf013&oe=5F75C1CD" width="50" alt="react image" />
      </Profile>

      <div className="hello-ahmed">
        <img src={imageUrl} width="300" alt="#" />
        <hr /><br />
        <button onClick={() => setImageUrl("https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.0-0/p206x206/95217452_231984978120910_1079475150073626624_o.jpg?_nc_cat=104&_nc_sid=da31f3&_nc_ohc=XI_k4nIGQywAX9UgJST&_nc_ht=scontent.fnbe1-1.fna&tp=6&oh=c1de87b7dd098e3b1b0713be734a7c1e&oe=5F76D858")}>photo 1</button>
        <i class="fas fa-address-book"><button onClick={() => setImageUrl('https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.0-0/p206x206/87038987_187016172617791_5521388429914406912_o.jpg?_nc_cat=103&_nc_sid=da31f3&_nc_ohc=NseP6gCFXtcAX9gy2tW&_nc_ht=scontent.fnbe1-1.fna&tp=6&oh=84393aa7695a0c8d1348c61434f132dd&oe=5F770AAA')}>photo 2</button>
        </i>
        <button onClick={() => setImageUrl('https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.0-0/p206x206/96667607_238030307516377_931901388043059200_o.jpg?_nc_cat=106&_nc_sid=da31f3&_nc_ohc=c-CVOh0-QQEAX9Dlnen&_nc_ht=scontent.fnbe1-1.fna&tp=6&oh=5016fac8d6abef8acbcab7e2dbd6192e&oe=5F75A756')}>photo 3</button>
      </div>
      <div className="hi">
        <img src={img} style={{ borderRadius: "50px" }} width="700px" BorderRaduse="50" alt="#" /><br />
       
      </div>

    </div>
  );
}

export default App;
