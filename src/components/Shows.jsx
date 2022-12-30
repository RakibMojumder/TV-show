import React, { useEffect, useState } from "react";
import ShowsCart from "./ShowsCart";
import Spinner from "./Spinner";

const Shows = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e.message));
  }, []);

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  return (
    <div className="my-20">
      <h1 className="text-4xl uppercase font-bold text-center my-6">
        All <span className="text-red-500">shows</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {shows?.map((show) => (
          <ShowsCart key={show?.show?.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default Shows;
