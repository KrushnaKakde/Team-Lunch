import React from "react";
import "../styles/Avatars.css";
import Header from './Header';
import EmployeeProfile from './EmployeeProfile';
import RequiredInfo from './RequiredInfo';
import RequiredInfoPage2 from './RequiredInfoPage2';
import RequiredInfoPage3 from './RequiredInfoPage3';


const Avatars = ({ showForm = true, pageType = "default" }) => {
	const employeeData = {
		initials: "MK",
		name: "Manoj Kandan M",
		genId: "255048878",
		email: "Manoj.kandan@partner.samsung.com",
		designation: "Outsourcing",
		division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
		manager: "Ravindra S R (06786669)",
		isOnline: true,
	};

	// Select the appropriate RequiredInfo component based on pageType
	const RequiredInfoComponent = pageType === "page2" ? RequiredInfoPage2 
		: pageType === "page3" ? RequiredInfoPage3 
		: RequiredInfo;

	return (
		<div className="avatars-container">
			<Header
				breadcrumb="My Workspace > Transport Request"
				title="Transport Request-Emplyoee Request"
			/>

			<EmployeeProfile
				employee={employeeData}
			/>

			{showForm && <RequiredInfoComponent />}

			
		</div>
	);
};

export default Avatars;
