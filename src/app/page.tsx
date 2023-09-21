"use client";
import "./page.css";
import * as React from "react";
import ReactHowler from "react-howler";
import { FaTimes } from "react-icons/fa";
import HeartLoader from "./components/animation/HeartLoader";
import Typewriter from "typewriter-effect";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [view, setView] = React.useState<boolean>(false);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function random(number: number) {
    return Math.floor(Math.random() * number) + 1;
  }

  const arrayAux = [...Array(40)].map(() => ({
    transform: `translate3d(${random(100)}vw, ${random(100)}vh, ${random(
      10
    )}px)`,
    transformAnimation: `translate3d(${random(100)}vw, ${random(
      100
    )}vh, ${random(100)}px)`,
    figure: random(3),
    width: random(4),
  }));

  return (
    <div className="">
      {loading ? (
        <HeartLoader />
      ) : (
        <div className="w-screen h-screen bg-cover bg-center bg-[url('../assets/fondo.png')]">
          {/* bg-[#ff0707be] */}
          <div className="bg-gradient-to-t from-[#250000bb] to-[#d30000e1] w-screen h-screen">
            <div className="h-full max-w-lg mx-auto flex justify-center items-center flex-col">
              {!view ? (
                <>
                  {/* <ReactHowler
                    src="https://res.cloudinary.com/dwzfuc2vy/video/upload/v1685235466/music_ibtke9.ogg"
                    playing={true}
                    loop={true}
                    volume={0.05}
                  /> */}
                  <h1 className="text-white font-satisfy italic font-bold text-4xl mb-6">
                    Joel y Paulett
                  </h1>
                  <p className="text-center text-lg text-white px-3">
                    Gracias por ser el amor de mi vida y por hacerme sentir
                    completo.
                  </p>
                  <p className="text-center text-lg text-white flex gap-1">
                    <span>Te amo</span>
                    <Typewriter
                      options={{
                        strings: ["mi amor", "mi vida", "corazón", "bebe"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </p>
                  <div className="h-14"></div>
                  <div className="flower">
                    <div className="mid"></div>
                    <div className="Petal1 p1"></div>
                    <div className="Petal1 p2"></div>
                    <div className="Petal1 p3"></div>
                    <div className="Petal1 p4"></div>
                    <div className="Petal2 p1"></div>
                    <div className="Petal2 p2"></div>
                    <div className="Petal2 p3"></div>
                    <div className="Petal2 p4"></div>
                    <div className="Petal3 p1"></div>
                    <div className="Petal3 p2"></div>
                    <div className="Petal3 p3"></div>
                    <div className="Petal3 p4"></div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {/* <button
                      onClick={() => router.push('/memories')}
                      className="bg-transparent border-2 border-white text-white text-lg py-1 px-3 rounded-full"
                    >
                      Recuerdos
                    </button> */}
                    {/* <button
                      onClick={() => setView(!view)}
                      className="bg-white py-1 px-3 text-lg rounded-full"
                    >
                      Presioname ❤️
                    </button> */}
                  </div>
                </>
              ) : (
                <div className="h-full w-full flex justify-center items-start">
                  <div
                    className="text-white m-2 border-2 border-white p-3 rounded-full text-xl"
                    onClick={() => setView(!view)}
                  >
                    <FaTimes />
                  </div>
                  <ReactHowler
                    src="https://res.cloudinary.com/dwzfuc2vy/video/upload/v1685229813/audio_tpro1n.ogg"
                    playing={true}
                    loop={true}
                  />
                  {arrayAux.map((item, index) => (
                    <ContentBackground item={item} index={index} key={index} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ContentBackground = (props) => {
  return (
    <BackgroundStyle {...props} className="ContentBackground">
      <div className="ContentBackground__heart">
        <div></div>
      </div>
    </BackgroundStyle>
  );
};
type Background = {
  item?: {
    transform: string;
    width: number;
    transformAnimation: number;
  };
};

const BackgroundStyle = styled.div`
  transform: ${(props: Background) => props.item.transform} scale(0.5);
  opacity: 0.2;
  width: ${(props: Background) => `${props.item.width * 15}px`};
  animation: ${(props: Background) =>
      rotationBuilder(props.item.transformAnimation)}
    50s infinite alternate;
`;
function rotationBuilder(transformAnimation: number) {
  const rotation = keyframes`
    100% {
    transform: ${transformAnimation};
  }
  `;
  return rotation;
}

export default Home;
