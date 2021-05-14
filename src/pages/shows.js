import { useEffect, useState } from "react";
import ShowCard from "../components/showCard";
import ShowsContainer from "../components/showsContainer";
import Input from "../components/input";

const Shows = () => {
  const [term, setTerm] = useState("batman");
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${term}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setShows(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [term]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <ShowsContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
      {isLoading ? (
        <div>Loading shows...</div>
      ) : (
        shows &&
        shows.map((show, i) => {
          return <ShowCard key={i} show={show.show} />;
        })
      )}
    </ShowsContainer>
  );
};

export default Shows;
