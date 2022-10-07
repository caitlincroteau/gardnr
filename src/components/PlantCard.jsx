import { Card, Button, Image } from "react-bootstrap";
import { renderIcon } from "../helpers/cardHelpers";

export default function PlantCard(props) {
  const {
    plant,
    picture,
    altText,
    waterStatus,
    lastWatered,
    nextWatering,
    handleClick,
  } = {
    ...props,
  };

  return (
    <Card
      style={{
        width: "15rem",
      }}
      className="m-4 p-2 text-center"
    >
      <Card.Title className="text-center">{plant}</Card.Title>
      {/* If there is a waterStatus, render the corresponding icon in the small card size */}
      {waterStatus && renderIcon(waterStatus, "small card")}
      <Card.Img
        variant="top"
        src={picture}
        alt={altText}
        style={{ height: "150px", border: "1px solid gray" }}
        className="mb-2"
      />
      <Card.Body className="p-0">
        <Card.Text className="m-0">
          {lastWatered && `last watered: ${lastWatered}`}
        </Card.Text>
        <Card.Text className="m-0">
          {nextWatering && `next watering: ${nextWatering}`}
        </Card.Text>
        <Button style={{ border: "none" }} onClick={handleClick}>
          View Plant
        </Button>
      </Card.Body>
    </Card>
  );
}
