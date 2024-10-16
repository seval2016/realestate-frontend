"use client"
import React from 'react'
import { Container, Navbar, Offcanvas } from 'react-bootstrap'
import Logo from './logo'
import Image from 'next/image'
import MainMenu from './main-menu'
import ButtonAddProperty from './button-add-property'
import UserMenuGuest from './user-menu-guest'

const MainMenubar = () => {
  return (
    <div>
      <Navbar
			expand="lg"
			className="bg-body-tertiary position-fixed w-100 top-0"
			sticky="top"
			collapseOnSelect
			style={{ zIndex: 1000 }}  
		>
			<Container>
				<Logo />
				<Navbar.Toggle aria-controls="main-menu" />
				<Navbar.Offcanvas
					id="main-menu"
					aria-labelledby="main-menu-title"    
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="main-menu-title">
							<Image
								src="/img/logos/logo-dark.png"
								width="268"
								height="29"
								className="img-fluid"
								  //alt={config.project.name}
								alt="logo"
								
							/>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<MainMenu className="justify-content-center flex-grow-1" />

						<UserMenuGuest/> 
						<ButtonAddProperty />
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	
    </div>
  )
}

export default MainMenubar
