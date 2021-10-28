import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Nav.module.css";

const nearestSectionIndex = (currPos, sectionPosArr, startIndex, endIndex) => {
	if (startIndex === endIndex) return startIndex;
	if (startIndex === endIndex - 1) {
		if (
			Math.abs(
				sectionPosArr[startIndex]?.sectionRef?.current?.offsetTop - currPos
			) <
      Math.abs(sectionPosArr[endIndex]?.sectionRef?.current?.offsetTop - currPos)
		) {
			return startIndex;
		} else {
			return endIndex;
		}
	} else {
		const nextNearest = Math.floor((startIndex + endIndex) / 2);
		const a = Math.abs(
			sectionPosArr[nextNearest]?.sectionRef?.current?.offsetTop - currPos
		);
		const b = Math.abs(
			sectionPosArr[nextNearest + 1]?.sectionRef?.current?.offsetTop - currPos
		);
		if (a < b) {
			return nearestSectionIndex(
				currPos,
				sectionPosArr,
				startIndex,
				nextNearest
			);
		} else {
			return nearestSectionIndex(currPos, sectionPosArr, nextNearest, endIndex);
		}
	}
};

// Nav component will accept array from Home page for sections of the menu with forwardRefs
const Nav = ({ menuRefs }) => {
	const [activeLink, setActiveLink] = useState(0);
	// Use hook so that component will update on scroll events to set new active section state
	useEffect(() => {
		const handleScroll = () => {
			const index = nearestSectionIndex(
				window.scrollY,
				menuRefs,
				0,
				menuRefs.length - 1
			);
			setActiveLink(index);
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [menuRefs]);

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					{menuRefs.map((section, index) => {
						return (
							<a
								key={index + section.sectionID}
								style={
									activeLink === index
										? { color: "#fff12a" }
										: { color: "#fff" }
								}
								href={`#${section.sectionID}`}
							>
								{section.sectionTitle}
							</a>
						);
					})}
				</nav>
			</div>
		</header>
	);
};

Nav.propTypes = {
	menuRefs: PropTypes.array.isRequired,
};

export default Nav;
