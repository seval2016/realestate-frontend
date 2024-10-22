export const config = {
	project: {
		name: "Best Properta",
		slogan: "",
		description: " Our slogan, 'Unlocking Your Home's Potential,Together' reflects our dedication to helping clients realize the full potential of their real estate investments through collaborative and personalized services.",
	},
	contact: {
		info: {
			phone1: {
				value: "+1(312)818 35 74",
				icon: "pi pi-phone",
				link: "tel:+13128183574",
			},
			phone2: {
				value: "+1(312)818 35 75",
				icon: "pi pi-headphones",
				link: "tel:+13128183575",
			},
			email: {
				value: "info@bestproperta.com",
				icon: "pi pi-envelope",
				link: "mailto:info@bestproperta.com",
			},
			address: {
				value: "1901 N Howe St, Chicago, IL 60614, USA",
				icon: "pi pi-address-book",
				link: "https://maps.app.goo.gl/Y1FcqpSmEm121asG9",
			},
		},
		website: "https://bestproperta.com",
		map: {
			embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3210727357!2d28.68253046522564!3d41.00537021410618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1725883350280!5m2!1str!2str",
		},
		socialMedia: {
			twitter: {
				url: "https://x.com",
				icon: "pi pi-twitter",
			},
			facebook: {
				url: "https://facebook.com",
				icon: "pi pi-facebook",
			},
			instagram: {
				url: "https://instagram.com",
				icon: "pi pi-instagram",
			},
			linkedin: {
				url: "https://linkedin.com",
				icon: "pi pi-linkedin",
			},
			youtube: {
				url: "https://youtube.com",
				icon: "pi pi-youtube",
			},
		},
	},
	apiURL: "http://localhost:8084/swagger-ui.html",
	
	genders: [
		{ label: "Female", value: "FEMALE" },
		{ label: "Male", value: "MALE" },
	],
	days: [
		{ value: "MONDAY", label: "Monday" },
		{ value: "TUESDAY", label: "Tuesday" },
		{ value: "WEDNESDAY", label: "Wednesday" },
		{ value: "THURSDAY", label: "Thursday" },
		{ value: "FRIDAY", label: "Friday" },
		{ value: "SATURDAY", label: "Saturday" },
		{ value: "SUNDAY", label: "Sunday" },
	],
	userRightsOnRoutes: [     //projemizde bulunan hangi yolun hangi kullanici trf dan girilebilecegini gosteren bir data burasi
		{
			urlRegex: /\/dashboard$/,      //dashboard a erisilebilen kullanicilar
			roles: [
				"ADMIN",
				"MANAGER",
				"CUSTOMER",
			],
		},
		{ urlRegex: /\/dashboard\/admin$/, roles: ["ADMIN"] },  //buraya sadece admin ulasabiliyor
		{ urlRegex: /\/dashboard\/admin\/new$/, roles: ["ADMIN"] },
		{ urlRegex: /\/dashboard\/manager$/, roles: ["ADMIN"] },
		{ urlRegex: /\/dashboard\/manager\/new$/, roles: ["ADMIN"] },
		{ urlRegex: /\/dashboard\/manager\/\d+$/, roles: ["ADMIN"] },
		{
			urlRegex: /\/dashboard\/manager$/,
			roles: ["ADMIN", "MANAGER"],
		},
		{
			urlRegex: /\/dashboard\/manager\/new$/,
			roles: ["ADMIN", "MANAGER"],
		},
		{
			urlRegex: /\/dashboard\/manager\/\d+$/,
			roles: ["ADMIN", "MANAGER"],
		},
		{
			urlRegex: /\/dashboard\/customer$/,
			roles: ["ADMIN", "MANAGER"],
		},
		{
			urlRegex: /\/dashboard\/customer\/new$/,
			roles: ["ADMIN", "MANAGER"],
		},
		{
			urlRegex: /\/dashboard\/customer\/\d+$/,
			roles: ["ADMIN", "MANAGER"],
		},
	],
};
