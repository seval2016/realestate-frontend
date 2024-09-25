"use client"
import React from 'react'
import { Card } from 'react-bootstrap'
import Image from "next/image";
import "./team-member-card.scss"

const TeamMemberCard = ({ firstName, lastName, title, image }) => {
  return (
    <Card className="team-member-card">
      <Image
				src={`/img/team-members/${image}`}
				width={400}
				height={500}
				className="card-img-top card-img-bottom"
          />
          <Card.Title>
				<h4>
					{firstName} {lastName}
				</h4>
                <h6>{title}</h6>
			</Card.Title>
    </Card>
  )
}

export default TeamMemberCard
