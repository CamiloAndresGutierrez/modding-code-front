import React, { useEffect, useState } from 'react';
import Name from '../Name';
import { Container, NavButton } from './navbar.styled-components';
import { studentLinks, expertLinks } from './navbar.content';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import router from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';

type NavbarProps = {
    height?: string;
    userType?: string;
}

const Navbar = (props: NavbarProps) => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const [links, setLinks] = useState([]);
    const [shouldDisplayMobileNav, setShouldDisplayMobileNav] = useState(false);
    const { height, userType } = props;

    useEffect(() => {
        switch (userType) {
            case "student":
                setLinks(studentLinks());
                break;
            case "expert":
                setLinks(expertLinks());
                break;
            default:
                setLinks([]);
                break;
        }
    }, [userType]);

    const renderLinks = () => {
        return (
            <>
                {
                    (links.length > 0) &&
                    links.map(element => (
                        <li key={element.label}>
                            <Link href={element.path} passHref={true}>
                                {element.label}
                            </Link>
                        </li>
                    ))
                }
                {
                    isAuthenticated ?
                        <li >
                            <NavButton onClick={() => logout()}>Log out</NavButton>
                        </li> :
                        <>
                            <li >
                                <NavButton onClick={() => loginWithRedirect()}>Log in</NavButton>
                            </li>
                            <li >
                                <NavButton onClick={() => router.push("/signup")}>Signup</NavButton>
                            </li>
                        </>
                }
            </>
        )
    }
    const handleMobileNav = () => {
        setShouldDisplayMobileNav(!shouldDisplayMobileNav)
    }

    return (
        <Container
            height={height}
            displayMobileNav={shouldDisplayMobileNav}
        >
            <nav>
                <div className="logo">
                    <Link href='/' passHref>
                        <div>
                            <Name fontSize='1.5rem' />
                        </div>
                    </Link>
                </div>
                <ul className="links">
                    {renderLinks()}
                </ul>

                <div className="burger-icon" onClick={() => handleMobileNav()}>
                    <MenuIcon />
                </div>
            </nav>
            <div className="links-mobile-bar">
                {renderLinks()}
            </div>
        </Container >
    )
}

export default Navbar;
