import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import teamMembers from "@/helpers/data/team-members.json";
import TeamMemberCard from './team-member-card';
import "./team-members.scss"

const TeamMembers = () => {
  return (
    <Container className="team-members">
          <Row className="g-5">
              <Col lg={12}>
              <h2 className="text-center border-2">Meet Our Expert Team</h2>
              </Col>  

              {teamMembers.map((item) => (
                  <Col key={item.id} sm={6} md={4} lg={3}>
                      <TeamMemberCard {...item}/>
                  </Col>
              ))}
              <Col lg={6}>
              <h2 className="text-center mb-5 small align-content-center fs-6 p-2">Each member is committed to delivering excellence, turning challenges into opportunities, and ensuring client satisfaction. Together, we are not just a team.We are partners in your success, here to support and guide you every step of the way.</h2>
              </Col> 

          </Row>

    </Container>
  )
}

export default TeamMembers
