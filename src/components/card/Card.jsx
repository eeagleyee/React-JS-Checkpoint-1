// Import necessary components and styles from react-bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import { cardItems } from "../../data";
import "../../../src/app.css";
import "./card.css";

// Define a functional component named BasicExample
function BasicExample() {
  return (
    // Card component with a specified width using inline styles
    <div className="cards ">
      {cardItems.map((item) => (
        <div>
          <Card.Img variant="top" src={item.imgSrc} />
          <Card style={{ width: "30rem", height: "320px" }}>
            <Card.Body>
              {/* In the Card.Body, we have the title, text, and a button */}
              <Card.Title>{item.cardTitle}</Card.Title>
              <Card.Text>{item.cardText}</Card.Text>
              <Button variant="primary">See more</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default BasicExample;
