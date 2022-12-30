import React from "react";
import { BsArrowRight, BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ShowsCart = ({ show }) => {
  const navigate = useNavigate();

  const handleNavigate = (name) => {
    navigate(`/show/${name}`);
  };

  return (
    <div className="w-full bg-white text-slate-900 rounded-lg shadow-lg transition-all hover:scale-105 hover:text-red-500">
      <div className="relative">
        <img
          className="object-cover w-full h-48"
          src={
            show?.show?.image?.medium || "https://i.ibb.co/qDvWRk0/download.jpg"
          }
          alt="avatar"
        />
        <div className="flex items-center px-1 absolute w-12 right-0 bottom-0 bg-black opacity-75">
          <BsStarFill className="text-yellow-400 mr-1" />
          <span className="text-white">{show?.show?.rating?.average || 6}</span>
        </div>
      </div>

      <div className="py-3 px-3">
        <h3 className="text-lg font-bold">{show?.show?.name}</h3>
        <div className="text-slate-800">
          <p className="font-semibold">
            Genres:{" "}
            <span className="font-normal">
              {show?.show?.genres.map((v, i) => (
                <span key={i}>{v},</span>
              ))}
            </span>
          </p>
          <div className="flex justify-between items-center font-semibold">
            <p>
              Language:{" "}
              <span className="font-normal">{show?.show?.language}</span>
            </p>
            <p>
              Duration:{" "}
              <span className="font-normal">
                {show?.show?.runtime ? show?.show?.runtime : 60}m
              </span>
            </p>
          </div>

          <div
            onClick={() => handleNavigate(show?.show?.id)}
            className="ml-auto h-11 w-11 flex justify-center items-center text-red-500 rounded-full transition duration-500 hover:text-white hover:bg-red-500"
          >
            <BsArrowRight className="inline-block text-3xl font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowsCart;
