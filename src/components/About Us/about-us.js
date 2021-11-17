import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Team Box
import TeamBox from "./team-box";

const AboutUs  = () => {
  let state = {
    members: [
      {
        id: 1,
        name: "William Vasquez",
        image: "assets/images/team/2.svg",
        post: "Accountant",
      },
      {
        id: 2,
        name: "Jane Dow",
        image: "assets/images/team/1.svg",
        post: "Position",
      },
      {
        id: 3,
        name: "John Dow",
        image: "assets/images/team/2.svg",
        post: "Position",
      },
      {
        id: 4,
        name: "John Dow",
        image: "assets/images/team/1.svg",
        post: "Position",
      },
    ],
  };


  return (
    <>
      <section className="section" id="about">
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }}>
              <div className="about-title mx-auto text-center">
                <h2 className="font-weight-light">
                  An acounting firm with a lot of experience{" "}
                </h2>
                <p className="text-muted pt-4">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus donec various versions have evolved quam
                  felis.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            {/* Render Team members */}
            {state.members.map((member, key) => (
              <TeamBox
                key={key}
                name={member.name}
                image={member.image}
                post={member.post}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
    );
}

export default AboutUs;
