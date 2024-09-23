import Link from "next/link";
import React from "react";

const UserMenuGuest = () => {
	return (
		<>
		    <Link href="/login" className="btn bg-light border-0 mt-1 pe-0">
			<i className="pi pi-user"></i> Login
			</Link>
			
		    <Link href="/register" className="btn bg-light border-0 ps-0 me-2 mt-1">
		    /Register</Link>
		</>
	);
};

export default UserMenuGuest;

//misafir kullanici,giris yapmamis