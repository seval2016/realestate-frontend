"use client"
import React, { useState } from "react";
import "./slider.scss";
import Carousel from 'react-bootstrap/Carousel';
import slides from "@/helpers/data/slider.json";
import Image from "next/image";
import SearchInput from "../slider/search-input";
import RentSaleButton from "../slider/rent-sale-button";
import RadioGroup from "../slider/radio-group";

const Slider = () => {
	const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // RadioGroup için seçenekler
    const radioOptions = [
        { value: "option1", label: "House" },
        { value: "option2", label: "Apartment" },
        { value: "option3", label: "Villa" },
        { value: "option4", label: "Office" },
	];
	
	return (
		<Carousel fade className="main-slider m-5" > 
			{slides.map((item) => (
				<Carousel.Item key={item.id}>
					<Image
						src={`/img/slider/${item.image}`}
						width={1800}
						height={800}
						alt={item.title}
					/>
					<Carousel.Caption className="carousel-caption">
						
						<h1>{item.title}</h1>
						<RentSaleButton className="rent-sale-button"/>
						<SearchInput className="search-input"/>
						<RadioGroup 
                            options={radioOptions} 
                            selectedOption={selectedOption} 
							onChange={handleOptionChange} 
							className="radio-group"
                        />
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Slider;