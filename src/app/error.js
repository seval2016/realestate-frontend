"use client";
import Spacer from "@/components/common/spacer";
import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Page = ({ error, reset }) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

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
						<button
							className="btn btn-outline-secondary"
							onClick={
								// Attempt to recover by trying to re-render the segment
								() => reset()
							}
						>
							Go to Home Page
						</button>
					</Col>
				</Row>
			</Container>
			<Spacer />
		</>
	);
};

export default Page;
