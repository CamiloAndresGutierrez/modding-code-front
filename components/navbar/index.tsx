import React, { useEffect, useState } from 'react';
import Name from '../Name';
import { Container } from './navbar.styled-components';
import { studentLinks, expertLinks, landingLinks } from './navbar.content';
import { UserType } from '../../lib/types';
import Link from 'next/link';

type NavbarProps = {
    height?: string;
}

const Navbar = (props: NavbarProps) => {
    const [links, setLinks] = useState([]);
    const [userType, setUser] = useState<UserType>(null);
    const { height } = props;

    useEffect(() => {
        switch (userType) {
            case "student":
                setLinks(studentLinks());
                break;
            case "expert":
                setLinks(expertLinks());
                break;
            default:
                setLinks(landingLinks());
                break;
        }
    }, [userType]);

    useEffect(() => {
        setUser(null);
    }, [])

    return (
        <Container height={height}>
            <nav>
                <div className="logo">
                    <Link href='/' passHref>
                        <div>
                            <Name fontSize='1.5rem' />
                        </div>
                    </Link>

                </div>
                <ul className="links">
                    {links.map(element => (
                        <li key={element.label}>
                            <Link href={element.path} passHref={true}>
                                {element.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Container>
    )
}

export default Navbar;