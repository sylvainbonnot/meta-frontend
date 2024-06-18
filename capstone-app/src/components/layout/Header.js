import { useLocation, Link } from 'react-router-dom';
import logoImage from './assets/logo.png';
import { Flex, Box, useDisclosure } from '@chakra-ui/react';
import pages from '../../utils/pages';

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Header = () => {
    const { pathname } = useLocation();
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex as="header" align="center" justify="space-between" wrap="wrap" p={4} bg="white">
            <Link to={pages.get('home').path}>
                <Box as="img" src={logoImage} alt="Little Lemon logo" h="50px" />
            </Link>

            <Flex

                flexGrow={1}
                justify="space-around"
                align="center"
                onClick={onToggle}
            >
                {navLinks.map((navLink, index) => (
                    <Box key={index} p={2}>

                        <Link
                            to={navLink.path}
                            style={{
                                fontWeight: pathname === navLink.path ? 'bold' : 'normal',
                                backgroundColor: pathname === navLink.path ? '#F4CE14' : 'transparent',
                                padding: '8px 15px',
                                borderRadius: '5px'
                            }}
                        >
                            {navLink.name}
                        </Link>
                    </Box>
                ))}
            </Flex>
        </Flex>
    );
};

export default Header;
