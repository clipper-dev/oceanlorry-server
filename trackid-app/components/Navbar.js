import React, { useState } from 'react';
import { Button } from './Button'
import styles from './Navbar.module.css'
import { NavBarData } from './NavBarData'
import { SideBarData } from './SideBarData'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FaBars, FaStar, FaPaintRoller } from 'react-icons/fa'
import { FiLogOut, FiSettings } from 'react-icons/fi'

import { useWindowSize } from '../utils/CustomHooks'
import Image from 'next/image';

function PureNavbar() {
	return (
		<div className={styles['navbar']}>
			{/*Left section of the navbar, responsible for the logo or company name*/}
			<div className={styles['title-container']}>
				<div className={styles['navbar-main-logo']}>
					<Image
						src="/logo.png"
						alt="Majordomu app logo"
						layout='fill'
					/>
				</div>
				<span className={styles['app-title']}>Majordomu</span>
			</div>
		</div>
	)
}

function Navbar() {

	const [sideBar, setSideBar] = useState(false);
	const showSideBar = () => setSideBar(!sideBar);
	const [button] = useState(true);
	{/*Custom hook responsible for detecting small screen like mobiles*/ }
	const size = useWindowSize();

	return (
		<>
			<div className={styles['navbar']}>
				{/*Left section of the navbar, responsible for the logo or company name*/}
				<Link href={'/'} onClick={() => { setSideBar(false) }} passHref >
					<div className={styles['title-container']}>
						<div className={styles['navbar-main-logo']}>
							<Image
								src="/logo.png"
								alt="Majordomu app logo"
								layout='fill'
							/>
						</div>
						<span className={styles['app-title']}>Majordomu</span>
					</div>
				</Link>
				{/*Middle section of the navbar, responsible for the logo or company name*/}
				<div className={styles['middle-container']}>
					{size.width > 600 ?
						//wide screen, desktop
						<div className={styles['navBar-menu']}>
							<ul className={styles['navBar-menu-items']}>
								{NavBarData.map((item, index) => {
									return (
										<li key={index} className={styles['nav-text-top']}>
											{item.behaviour === "scroll" ?
												<>
													<a href={`#${item.path}`} onClick={(e) => {
														e.preventDefault();
														document.querySelector(`#${item.path}`).scrollIntoView({
															behavior: "smooth"
														});
													}} >
														<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
													</a>
												</>
												:
												<>
													<Link href={item.path} onClick={() => { setSideBar(false) }} passHref >
														<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
													</Link>
												</>}
										</li>
									)
								})}
							</ul>

						</div>
						:
						<></>
					}
				</div>
				{/*Right section of the navbar, responsible for the logo or company name*/}
				<div className={styles['signup-border']}>
					<Link href='https://app.majordomu.com/signup'>
						<div className={styles['signup-button']}>Sign up -&gt;</div>
					</Link>
				</div>
				{size.width > 600 ?
					//wide screen, desktop
					<></>
					:
					//mobile, only icon
					<div className={styles['menu-icon-container']}>
						<FaBars className={styles['menu-icon']} onClick={() => { setSideBar(!sideBar) }} />
					</div>
				}
			</div>

			{/*Display side bar only if opened and only if on mobile*/}
			{<div className={sideBar ? [styles['sideBar-menu'], styles['sideBar-active']].join(" ") : [styles['sideBar-menu'], styles['sideBar-hidden']].join(" ")}>
				<ul className={styles['sideBar-menu-items']}>
					{SideBarData.map((item, index) => {
						return (
							<li key={index} className={styles['sideBar-menu-item']}>
								<Link href={item.path} onClick={() => { setSideBar(false) }} passHref >
									<span className={[styles['sideBar-menu-item-text'], ['p--display']].join(" ")}>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>}
		</>
	)
}

function NavbarSinglePage() {

	const [sideBar, setSideBar] = useState(false);
	const showSideBar = () => setSideBar(!sideBar);
	const [button] = useState(true);
	{/*Custom hook responsible for detecting small screen like mobiles*/ }
	const size = useWindowSize();

	return (
		<>
			<div className={styles['navbar']}>
				{/*Left section of the navbar, responsible for the logo or company name*/}
				<Link href={'/'} onClick={() => { setSideBar(false) }} passHref >
					<div className={styles['title-container']}>
						<div className={styles['navbar-main-logo']}>
							<Image
								src="/logo.png"
								alt="Majordomu app logo"
								layout='fill'
							/>
						</div>
						<span className={styles['app-title']}>Majordomu</span>
					</div>
				</Link>
				{size.width > 600 ?

					<div className={styles['navBar-menu']}>
						<ul className={styles['navBar-menu-items']}>
							{NavBarData.map((item, index) => {
								return (
									<li key={index} className={styles['nav-text-top']}>
										{item.behaviour === "scroll" ?
											<>
												<a href={`#${item.path}`} onClick={(e) => {
													e.preventDefault();
													document.querySelector(`#${item.path}`).scrollIntoView({
														behavior: "smooth"
													});
												}} >
													<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
												</a>
											</>
											:
											<>
												<Link href={item.path} onClick={() => { setSideBar(false) }} passHref >
													<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
												</Link>
											</>}
									</li>
								)
							})}
						</ul>

					</div>
					:
					<div className={styles['menu-icon']}>
						<FaBars onClick={() => { setSideBar(!sideBar) }} />
					</div>
				}
			</div>
			{/*Display side bar only if opened and only if on mobile*/}
			{<div className={sideBar ? [styles['sideBar-menu'], styles['sideBar-active']].join(" ") : [styles['sideBar-menu'], styles['sideBar-hidden']].join(" ")}>
				<ul className={styles['sideBar-menu-items']}>
					{SideBarData.map((item, index) => {
						return (
							<li key={index} className={styles['sideBar-menu-item']}>
								<Link href={'#' + item.path} onClick={() => { setSideBar(!sideBar) }} passHref >
									<span onClick={() => { setSideBar(!sideBar) }} className={[styles['sideBar-menu-item-text'], ['p--display']].join(" ")} >{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>}
		</>
	)
}

function NavbarMajordomu() {
	//hook for checking window size
	const size = useWindowSize();

	const [sidebar, setSideBar] = useState(false); //sidebar

	const router = useRouter()

	const { user, logout } = useAuth()
	return (
		<div className={styles['navbar-2']}>
			{/*Left section of the navbar, responsible for the logo or company name*/}
			<div className={styles['title-container']}>
				<div className={styles['navbar-main-logo']}>
					<Image
						src="/logo.png"
						alt="Majordomu app logo"
						layout='fill'
					/>
				</div>
			</div>
			{/*Middle section of the navbar, responsible for ???*/}
			<div className={styles['middle-container']}>

			</div>
			{/*Right section of the navbar, responsible for the account and settings icon*/}
			{/*initial icon button*/}
			<div className={styles['right-container']}>
				<div className={styles['initial-button-container']} onClick={() => setSideBar(!sidebar)}>
					<div className={styles['initial-button']}>{user.email.charAt(0).toUpperCase()}</div>
				</div>
			</div>
			{/*sidebar visible only if sidebar is true, else hidden*/}
			<div className={sidebar ?
				[styles['sidebar-menu'], styles['sidebar-active']].join(" ")
				:
				[styles['sidebar-menu'], styles['sidebar-hidden']].join(" ")}>

				<div className={[styles['profile-container']].join(" ")}>
					<div className={styles['initial-outilne-container']} >
						<div className={styles['initial-outline']}>{user.email.charAt(0).toUpperCase()}</div>
					</div>
					<div className={[styles['profile-container-details']].join(" ")}>
						<div className={[styles['profile-container-details-name']].join(" ")} onClick={() => { }}>
							Adam
						</div>
						<div className={[styles['profile-container-details-email']].join(" ")}>
							{user.email}
						</div>
						<div className={[styles['profile-container-details-tier']].join(" ")}>
							FREE TIER
						</div>
					</div>
				</div>

				<div className={[styles['sidebar-divider']].join(" ")}></div>

				<a className={[styles['sidebar-menu-item']].join(" ")} >
					<FiSettings />
					<span className={[styles['sidebar-menu-item-text']].join(" ")}>Settings</span>
				</a>

				<a className={[styles['sidebar-menu-item']].join(" ")} >
					<FaPaintRoller />
					<span className={[styles['sidebar-menu-item-text']].join(" ")}>Theme</span>
				</a>

				<a className={[styles['sidebar-menu-item']].join(" ")} >
					<FaStar />
					<span className={[styles['sidebar-menu-item-text']].join(" ")}>Change plan</span>
				</a>

				<div className={[styles['sidebar-divider']].join(" ")}></div>

				<a className={[styles['sidebar-menu-item']].join(" ")} onClick={(e) => {
					logout()
					router.push('/')
				}} >
					<FiLogOut />
					<span className={[styles['sidebar-menu-item-text']].join(" ")}>Logout</span>
				</a>

			</div>
		</div>
	)
}
function NavbarSimple() {
	const size = useWindowSize();
	const router = useRouter()

	return (
		<div className={styles['navbar']}>
			{/*Left section of the navbar, responsible for the logo or company name*/}
			<div className={styles['title-container']}>
				<div className={styles['navbar-main-logo']}>
					<Image
						src="/logo.png"
						alt="Majordomu app logo"
						layout='fill'
					/>
				</div>
				<span className={styles['app-title']}>TrackID</span>
			</div>
			{/*Middle section of the navbar, responsible for the logo or company name*/}
			<div className={styles['middle-container']}>

				<div className={styles['navBar-menu']}>
					<ul className={styles['navBar-menu-items']}>

						{NavBarData.map((item, index) => {
							return (
								<li key={index} className={styles['nav-text-top']}>
									{item.behaviour === "scroll" ?
										<>
											<a href={`#${item.path}`} onClick={(e) => {
												e.preventDefault();
												document.querySelector(`#${item.path}`).scrollIntoView({
													behavior: "smooth"
												});
											}} >
												<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
											</a>
										</>
										:
										<>
											<Link href={item.path} onClick={() => { setSideBar(false) }} passHref >
												<span className={[styles['navBar-menu-item-title'], ['p--display']].join(" ")}>{item.title}</span>
											</Link>
										</>}
								</li>
							)
						})}

					</ul>

				</div>

			</div>
		</div>
	)
}

export { Navbar, NavbarSinglePage, PureNavbar, NavbarMajordomu, NavbarSimple }