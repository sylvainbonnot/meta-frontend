import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faLocationDot,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Box, Flex, Image, Heading, Text, VStack, HStack, Spacer } from '@chakra-ui/react';
import logoWhiteImage from './assets/logo-white.png';
import pages from '../../utils/pages';
import './Footer.css';


const contacts = [
    { icon: faLocationDot, info: '678 Pisa Ave, Chicago, IL 60611', },
    { icon: faPhone, info: '(312) 593-2744', },
    { icon: faEnvelope, info: 'customer@littlelemon.com', },
];

const socials = [
    { icon: faFacebook, name: 'facebook', },
    { icon: faTwitter, name: 'twitter', },
    { icon: faInstagram, name: 'instagram', },
    { icon: faYoutube, name: 'youtube', },
];

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Footer = () => {
    return (
        <Box as="footer" className="site-footer" bg="gray.800" color="white" py={10}>
            <Flex className="container" wrap="wrap" justify="space-between">
                <Spacer />
                <Box className="site-footer-logo" >
                    <Image src={logoWhiteImage} alt="Little Lemon" width='120px' />
                </Box>
                <Spacer />
                <VStack className="site-footer-nav" align="start" spacing={4}>
                    <Heading as="h4" size="md">Sitemap</Heading>
                    <VStack as="ul" align="start" spacing={2}>
                        {navLinks.map((navLink, index) =>
                            <Box as="li" key={index}>
                                <Link to={navLink.path}>{navLink.name}</Link>
                            </Box>
                        )}
                    </VStack>
                </VStack>
                <Spacer />
                <VStack className="site-footer-contact" align="start" spacing={4}>
                    <Heading as="h4" size="md">Contact us</Heading>
                    <Box as="address">
                        {contacts.map((contact, index) =>
                            <Text key={index}>
                                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                            </Text>
                        )}
                    </Box>
                </VStack>
                <Spacer />
                <VStack className="site-footer-social" align="start" spacing={4}>
                    <Heading as="h4" size="md">Connect with us</Heading>
                    <HStack spacing={4}>
                        {socials.map((social, index) =>
                            <Box
                                as="a"
                                key={index}
                                href={`https://www.${social.name}.com`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={social.icon} size="lg" />
                            </Box>
                        )}

                    </HStack>
                </VStack>
                <Spacer />

            </Flex>
        </Box>
    );
};

export default Footer;
