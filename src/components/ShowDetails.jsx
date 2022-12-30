import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "./BookingModal";
import StarComponent from "./RatingsComponent";
import Spinner from "./Spinner";

const ShowDetails = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setShowData(data);
        setIsLoading(false);
      });
  }, [id]);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="col-span-1 md:col-span-12 lg:col-span-3">
          <img
            className="w-full h-[350px]"
            src={
              showData?.image?.original ||
              "https://i.ibb.co/qDvWRk0/download.jpg"
            }
            alt=""
          />
        </div>
        <div className="col-span-1 md:col-span-7 lg:col-span-5">
          <h3 className="text-2xl font-bold uppercase my-2">Summary:</h3>
          <p className="text-base">
            {showData?.summary?.replace(/(<([^>]+)>)/gi, "")}
          </p>
        </div>
        <div className="col-span-1 md:col-span-5 lg:col-span-4 border p-3 rounded-lg">
          <h1 className="text-4xl mb-4">Show Info</h1>
          <div className="space-y-1.5">
            <h1>
              <span className="font-semibold">Name:</span>
              {showData?.name}
            </h1>
            <p className="font-semibold">
              Genres:{" "}
              <span className="font-normal">
                {showData?.genres?.map((v, i) => (
                  <span key={i}>{v},</span>
                ))}
              </span>
            </p>
            <p>
              <span className="font-semibold">Language:</span>{" "}
              <span className="font-normal">{showData?.language}</span>
            </p>
            <p>
              <span className="font-semibold">Runtime:</span>{" "}
              {showData?.runtime || 60}
            </p>
            <div className="flex items-center">
              <p className="mr-3 font-semibold">Rating:</p>
              <StarComponent star={showData?.rating?.average || 4} />
            </div>
            <p>
              <span className="font-semibold">Premiered:</span>{" "}
              {showData?.premiered}
            </p>
          </div>
          <button
            onClick={openModal}
            className="px-10 py-1.5 mt-4 bg-red-500 text-white rounded-md"
          >
            Book Now
          </button>
        </div>
      </div>
      <BookingModal
        isOpen={isOpen}
        closeModal={closeModal}
        showData={showData}
      />
    </div>
  );
};

export default ShowDetails;
