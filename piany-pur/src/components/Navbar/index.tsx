/*Functionality*/
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
/*Components*/
/*Styling*/
import styles from "./Navbar.module.css";
/*Icons*/
import { FaArrowDown, FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";
import { Navitem } from "../../types/types";

interface Props {
  navbarData: Navitem[],
  sideBardata: Navitem[],
  favicon: string,
  title: string,
}

function Navbar({navbarData, sideBardata, favicon, title}:Props) {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const [button] = useState(true);
  const router = useRouter();
  if (router.pathname === "/tools/idle-screen") {
    return null;
  }
  return (
    <nav className={styles.main}>
      <>
        {" "}
        {/*Left section of the navbar, responsible for the logo or company name*/}
        <Link
          href={"/"}
          onClick={() => {
            setSideBar(false);
          }}
          passHref
          legacyBehavior
        >
          <a className={styles.logoContainer}>
            <div className={styles["logo"]}>
              <Image
                src={favicon}
                alt={`${title} logo`}
                layout="fill"
              />
            </div>
            <span>{title}</span>
          </a>
        </Link>
        {/*Middle section of the navbar, responsible for the logo or company name*/}
        <div className={styles.menu}>
          <div className={styles.tabs}>
            {navbarData.map((item, index) => {
              return (
                <div key={index} className={styles.tabItem}>
                  {item.type === "scroll" && (
                    <a
                      href={`#${item.path}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${item.path}`)?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}                      
                    >
                      {item.title}
                    </a>
                  )}
                  {item.type === "link" && (
                    <Link
                      href={item.path}
                      onClick={() => {
                        setSideBar(false);
                      }}
                      passHref
                      legacyBehavior
                    >
                      <a
                      >{item.title}</a>
                    </Link>
                  )}
                  {item.type === "dropdown" && (
                    <div className={styles.dropdown}>
                      <div className={styles.dropdownTitle}>{item.title} <IoIosArrowDown/></div>
                      <div className={styles.dropdownMenu}>
                        {item.items?.map((ii, index) => (
                          <Link
                          key={index}
                            href={ii.path}
                            onClick={() => {
                              setSideBar(false);
                            }}
                            passHref
                            legacyBehavior
                          >
                            <a
                          className={styles.dropdownItem}
                            >{ii.title}</a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.type === "info" && (
                    item.title
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/*Right section of the navbar, responsible for the logo or company name*/}
        <div className={styles.mobileMenu}>
          <div
            className={sideBar ? styles.menuIconActive : styles.menuIcon}
            onClick={() => {
              setSideBar(!sideBar);
            }}
          />
        </div>
      </>

      {/*Display side bar only if opened and only if on mobile*/}
      {
        <div
          className={
            sideBar
              ? [styles["sideBar"], styles["sideBar-active"]].join(" ")
              : [styles["sideBar"], styles["sideBar-hidden"]].join(" ")
          }
        >
          <div className={styles.sideBarMenu}>
            {sideBardata.map((item, index) => {
              return (
                (item.type === "link" || item.type === "scroll") && (
                  <Link href={item.path} key={index} passHref>
                    <span
                      className={[
                        styles["sideBar-menu-item-text"],
                        ["p--display"],
                      ].join(" ")}
                      onClick={() => {
                        setSideBar(!sideBar);
                      }}
                    >
                      {item?.icon} {item.title}
                    </span>
                  </Link>
                )
              )
            })}
          </div>
        </div>
      }
    </nav>
  );
}

export { Navbar };
