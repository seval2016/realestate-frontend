import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";


const TextInput = ({ label, className, ...rest }) => {
	return (
		<FormGroup className={className} controlId="formBasicEmail">
			<FormLabel>{label}</FormLabel>
			<FormControl className="custom-input" size="lg" {...rest} />
		</FormGroup>
	);
};

export default TextInput;


//text input la error,label,className ler proplariyla karsilanacaklar,diger gonderilenler,geri kalanlari ...rest alacak

