import React from "react";
import "../assets/scss/blog.scss";
import { BlogList } from "../helpers/blogdata";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Blog = ({ setClickCallback }) => {
  return (
    <div className="blog mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-lg-between">
          {BlogList.map((item) => (
            <Card
              style={{ cursor: "pointer" }}
              onClick={setClickCallback}
              className="col-lg-4 col-md-6 mb-4 px-3 py-3"
            >
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/400x300"
              />
              <Card.Body className="pt-3 text-center mb-5">
                <Card.Text>{item.description}</Card.Text>
                <Button href={item.link} variant="default">
                  <span> Read More </span>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
