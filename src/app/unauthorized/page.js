import LogoutButton from "@/components/common/header/logout-button";
import Spacer from "@/components/common/spacer";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Page = () => {
	return (
		<>
			<Spacer />
			<Container>
				<Row className="g-5 align-items-center">
					<Col md="6">
						<Image
							src="/img/errors/403-error.jpg"
							className="img-fluid"
							width={500}
							height={500}
							alt="Not found"
						/>
					</Col>
					<Col md={6} className="text-center text-md-start">
						<h2>Sorry you`re unauthorized to access.</h2>

						<p>
							Please check your login credentials or contact the administrator
						</p>

						<LogoutButton
							variant="outline"
							className="btn btn-outline-secondary btn-lg"
						/>
					</Col>
				</Row>
			</Container>
			<Spacer />
		</>
	);
};

export default Page;