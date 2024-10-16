import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import AdminList from "@/components/dashboard/admin/admin-dashboard";
import React from "react";

const Page = async () => {

	return (
		<>
			<Spacer />
			<AdminDashboard/>
			<Spacer />
		</>
	);
};
export default Page;
