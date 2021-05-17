import { useEffect, useState } from "react";
import styled from "styled-components";
import ShowCard from "../components/showCard";
import ShowsContainer from "../components/showsContainer";
import Input from "../components/input";

const Shows = () => {
  const [term, setTerm] = useState("batman");
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch shows
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
      {/* Show Search */}
      <form onSubmit={() => handleSubmit()}>
        <Input
          type="text"
          name="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          width="400px"
        />
      </form>
      {/* Check if loading, if still loading show loading indicator */}
      {isLoading ? (
        <Loading>Loading shows...</Loading>
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

const Loading = styled.div`
  margin: 60px 0;
  font-size: 20px;
`;
