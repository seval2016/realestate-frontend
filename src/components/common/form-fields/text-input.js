import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";


const TextInput = ({ error, label, className,type = "text",controlId, ...rest }) => {
	return (
		<FormGroup className={className} controlId={controlId}>
			<FormLabel>{label}</FormLabel>
			<FormControl type={type} className="custom-input" isInvalid={!!error} size="lg" {...rest} />
			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};

export default TextInput;


//text input la error,label,className ler proplariyla karsilanacaklar,diger gonderilenler,geri kalanlari ...rest alacak

