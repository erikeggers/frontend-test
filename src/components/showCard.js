import styled from "styled-components";

const ShowCard = ({ show: { name, summary, image = {} } }) => {
  // console.log(show.show);
  console.log(name);
  return (
    <CardContainer>
      {image ? (
        <Image src={image.medium} />
      ) : (
        <ImagePlaceholder>
          <div>No Image Found</div>
        </ImagePlaceholder>
      )}
      <Text>
        <div>{name}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </Text>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: rgba(214, 216, 231, 0.3);
  display: flex;
  padding: 20px;
  margin: 20px 0;
`;

const Image = styled.img`
  height: 188.5px;
  width: 123.14px;
  border-radius: 5px;
`;

const ImagePlaceholder = styled.div`
  height: 188.5px;
  min-width: 123.14px;
  border-radius: 5px;
  background-color: #999;
  color: #eee;
  text-align: center;
  font-size: 20px;
  padding: 20px;
`;

const Text = styled.div`
  padding: 0 20px;
  div:first-of-type {
    font-size: 20px;
  }
`;

export default ShowCard;
