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
							src="/img/errors/404-error.jpg"
							className="img-fluid"
							width={500}
							height={500}
							alt="Not found"
						/>
					</Col>
					<Col md={6} className="text-center text-md-start">
						<h2>Oops!It looks like you're lost.</h2>

						<p>
							The page you're looking for isn't available.Try to search again or use the go to:
						</p>
						
					</Col>
				</Row>
			</Container>
			<Spacer />
		</>
	);
};

export default Page;
