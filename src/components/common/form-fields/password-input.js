import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap";

const PasswordInput = ({ error, label, className, ...rest }) => {
	const [type, setType] = useState("password");

	const handleClick = () => {
		setType((prev) => (prev === "password" ? "text" : "password"));
	};  //settter ile getter i beraber kullaniyorsak prev ile kullaniyoruz,
    //baslangic degeri password(useState ile aldik yukarida) o yuzden kapali geliyor,
//InputGroup.Text e yani göz e bastiginda handleClick calisacak,state in degeri password ise text e cevirecek degilse de password e cevirecek
return (
	<FormGroup className={className} controlId={rest.name}>
		<FormLabel>{label}</FormLabel>

		<InputGroup className="mb-3">
			<FormControl
				type={type}    //type i dinamik olarak ayarladik,yukarida useState ile
				isInvalid={!!error}
				size="lg"
				{...rest}
			/>
			<InputGroup.Text
				id="password"
				onClick={handleClick}
				style={{ cursor: "pointer" }}
			>
				{type === "password" ? (
					<i className="pi pi-eye"></i>
				) : (
					<i className="pi pi-eye-slash"></i>
				)}
			</InputGroup.Text>

			
		</InputGroup>
	</FormGroup>
);
};

export default PasswordInput;

//yaninda goz isareti olan bir yapi olusturacagiz bunun icin react bootstrap den input group aldik

//FormControl.Feedback in Form.Control ile ayni yerde olmasi gerekiyor

//type="password" oldugu icin gizli sifre,text olursa gizli olmaz.type i dinamik yapacagiz o yuzden.Bunun icin useState kullancagiz