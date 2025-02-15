import axios from "axios";
import React, { Fragment } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
//images import
import man from "../../../assets/images/dashboard/man.png";

const UserMenu = () => {
	const [isLoggedOut, setIsLoggedOut] = useState(false);
	const history = useLocation()

	const handleLogout = async () => {
		try {
			await axios.post('http://localhost:4000/users/logout');
			setIsLoggedOut(true);
			history('http://localhost:4000/users/login')
			toast.success("Successfully logout")
		} catch (error) {
			console.error('An error occurred while logging out', error);
			toast.error("FAiled to logout")
		}
	};
	return (
		<Fragment>
			<li className="onhover-dropdown">
				<div className="media align-items-center">
					<img
						className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded"
						src={man}
						alt="header-user"
					/>
					<div className="dotted-animation">
						<span className="animate-circle"></span>
						<span className="main-circle"></span>
					</div>
				</div>
				<ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
					<li>
						<Link to={`${process.env.PUBLIC_URL}/settings/profile`}>
							<i data-feather="user"></i>Edit Profile
						</Link>
					</li>
					{/* <li>
						<a href="#javaScript">
							<i data-feather="mail"></i>Inbox
						</a>
					</li> */}
					{/* <li>
						<a href="#javaScript">
							<i data-feather="lock"></i>Lock Screen
						</a>
					</li> */}
					<li>
						<a href="#javaScript">
							<i data-feather="settings"></i>Settings
						</a>
					</li>
					<li
						onClick={handleLogout}
					>
						<Link to={`${process.env.PUBLIC_URL}/`}>
							<i data-feather="log-out"></i>Logout
						</Link>
					</li>
				</ul>
			</li>
		</Fragment>
	);
};

export default UserMenu;
