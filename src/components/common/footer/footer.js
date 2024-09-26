import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Logo from '../header/logo'
import "./footer.scss";
import MainMenu from '../header/main-menu'
import ContactMenu from './contact-menu'
import { config } from "@/helpers/config";

const Footer = () => {
  return (
      <footer className=" text-primary">
          <Container>
              <Row className="g-4">
                  <Col xs={12} lg={4} className="me-5">
                      <Logo theme="light"/>
                      <p className="mt-3 mb-4">
                      {config.project.description}
                      </p>
                      <a href="#" className="btn btn-lg btn-outline-dark bg-light me-3">
							<i className="pi pi-apple"></i> App Store
						</a>
						<a href="#" className="btn btn-lg btn-outline-dark bg-light me-3">
							<i className="pi pi-android"></i> Play Store
						</a>
                  </Col>

                  <Col className="quickLinks ms-5">
                      <h3 className=" ms-4 mb-4">Quick Links</h3>
                      <MainMenu className="mMenu"/>
                  </Col>

                  <Col className="ms-5">
                      <h3 className="mb-4">Contact</h3>
                      <ContactMenu/>
                  </Col>
                      
              </Row>
          </Container>
    </footer>
  )
}

export default Footer
