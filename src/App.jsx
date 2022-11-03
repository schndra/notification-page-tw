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
    <main className="grid grid-flow-col justify-center bg-nGrayishBlue300   ">
      {/* header */}
      <div className="w-full h-screen p-4  md:w-[732px] bg-nWhite  md:my-8 rounded-md">
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
        </ul>
      </div>
    </main>
  );
}

export default App;
