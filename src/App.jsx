import { useState } from "react";
import MarkWebber from "./assets/images/avatar-mark-webber.webp";
import AngelaGray from "./assets/images/avatar-angela-gray.webp";
import JacobThompson from "./assets/images/avatar-jacob-thompson.webp";
import RizkyHasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp";
import KimberlySmith from "./assets/images/avatar-kimberly-smith.webp";
import NathanPeterson from "./assets/images/avatar-nathan-peterson.webp";
import AnnaKim from "./assets/images/avatar-anna-kim.webp";
import chessClub from "./assets/images/image-chess.webp";

function App() {
  const [notificationCount, setNotificationCount] = useState(3);
  const [isReadAll, setIsReadAll] = useState(false);
  console.log(isReadAll);

  const handleReadAll = () => {
    setIsReadAll(true);
    setNotificationCount(0);
  };

  return (
    <main className="  flex justify-center items-center bg-nGrayishBlue300 md:min-h-screen  ">
      {/* header */}
      <div className="w-full  p-4  md:w-[732px] bg-nWhite h-screen md:h-full  rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <h1 className="text-nVeryDarkBlue font-extrabold text-xl capitalize">
              notifications
            </h1>
            <div className="bg-primaryBlue w-7 rounded-md text-nWhite text-center cursor-pointer">
              {notificationCount}
            </div>
          </div>
          <p
            className="text-nGrayishBlue500 text-base cursor-pointer hover:text-primaryBlue "
            onClick={handleReadAll}
          >
            Mark all as read
          </p>
        </div>
        {/* notification list */}
        <ul className="mt-4">
          {/* markWebber */}
          <li
            className={
              !isReadAll
                ? "grid grid-cols-6  items-center  bg-nGrayishBlue100 p-4 rounded-md mb-2 md:grid-cols-9"
                : "grid grid-cols-6  items-center  bg-nWhite p-4 rounded-md mb-2 md:grid-cols-9"
            }
          >
            <div className="w-10 h-10 rounded-full  ">
              <img
                src={MarkWebber}
                alt="mark webber img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-start-2 col-span-6 md:col-start-2 md:col-span-9">
              <p className="font-medium text-nGrayishBlue500">
                <span className="text-nVeryDarkBlue font-extrabold cursor-pointer hover:text-primaryBlue">
                  Mark Webber &nbsp;
                </span>
                reacted to your recent post
                <span className="text-primaryBlue hover:font-extrabold cursor-pointer">
                  &nbsp; My first tournement today! &nbsp;
                  <div className="inline-block w-2 h-2 rounded-full bg-primaryRed my-[2px] "></div>
                </span>
              </p>
              <p className="text-nGrayishBlue400">1m ago</p>
            </div>
          </li>
          {/* AngelaGray */}
          <li
            className={
              !isReadAll
                ? "grid grid-cols-6  items-center  bg-nGrayishBlue100 p-4 rounded-md mb-2 md:grid-cols-9"
                : "grid grid-cols-6  items-center  bg-nWhite p-4 rounded-md mb-2 md:grid-cols-9"
            }
          >
            <div className="w-10 h-10 rounded-full  ">
              <img
                src={AngelaGray}
                alt="mark webber img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-start-2 col-span-6 md:col-start-2 md:col-span-9">
              <p className="font-medium text-nGrayishBlue500">
                <span className="text-nVeryDarkBlue font-extrabold cursor-pointer hover:text-primaryBlue capitalize">
                  Angela Gray &nbsp;
                </span>
                followed you &nbsp;
                <div className="inline-block w-2 h-2 rounded-full bg-primaryRed my-[2px] "></div>
              </p>
              <p className="text-nGrayishBlue400">1m ago</p>
            </div>
          </li>
          {/* Jacod Thompson */}
          <li
            className={
              !isReadAll
                ? "grid grid-cols-6  items-center  bg-nGrayishBlue100 p-4 rounded-md mb-2 md:grid-cols-9"
                : "grid grid-cols-6  items-center  bg-nWhite p-4 rounded-md mb-2 md:grid-cols-9"
            }
          >
            <div className="w-10 h-10 rounded-full  ">
              <img
                src={JacobThompson}
                alt="mark webber img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-start-2 col-span-6 md:col-start-2 md:col-span-9">
              <p className="font-medium text-nGrayishBlue500">
                <span className="text-nVeryDarkBlue font-extrabold cursor-pointer hover:text-primaryBlue capitalize">
                  Jacob Thompson &nbsp;
                </span>
                has joined your group &nbsp;
                <span className="text-primaryBlue hover:font-extrabold cursor-pointer">
                  &nbsp; Chess Club &nbsp;
                  <div className="inline-block w-2 h-2 rounded-full bg-primaryRed my-[2px] "></div>
                </span>
              </p>
              <p className="text-nGrayishBlue400">1m ago</p>
            </div>
          </li>
          {/* Rizkyhassanudin */}
          <li
            className={
              "relative grid grid-cols-6  items-center  bg-nWhite p-4 rounded-md mb-2 md:grid-cols-9"
            }
          >
            <div className="w-10 h-10 rounded-full absolute top-4 left-4">
              <img
                src={RizkyHasanuddin}
                alt="mark webber img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-start-2 col-span-6 md:col-start-2 md:col-span-9">
              <p className="font-medium text-nGrayishBlue500">
                <span className="text-nVeryDarkBlue font-extrabold cursor-pointer hover:text-primaryBlue capitalize">
                  Jacob Thompson &nbsp;
                </span>
                Sent you a private message &nbsp;
              </p>
              <p className="text-nGrayishBlue400">5 days ago</p>
              <div className="border-2 p-4 mt-4 border-nGrayishBlue300 rounded-md  hover:bg-nGrayishBlue300 hover:cursor-pointer ">
                <p className="text-nGrayishBlue500">
                  Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.
                </p>
              </div>
            </div>
          </li>
          {/* Kimberly */}
          <li className="grid grid-cols-6  items-center  bg-nWhite p-4 rounded-md mb-2 md:grid-cols-9 ">
            <div className="w-10 h-10 rounded-full  ">
              <img
                src={KimberlySmith}
                alt="mark webber img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-start-2 col-span-6 md:col-start-2 md:col-span-6 ">
              <p className="font-medium text-nGrayishBlue500">
                <span className="text-nVeryDarkBlue font-extrabold cursor-pointer hover:text-primaryBlue capitalize">
                  Kimberly Smith &nbsp;
                </span>
                Commented on your picture &nbsp;
              </p>
              <p className="text-nGrayishBlue400">1 week ago</p>
            </div>
            <div className=" w-11 h-11   col-start-9 col-span-9">
              <img src={chessClub} alt="" className="w-full" />
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
