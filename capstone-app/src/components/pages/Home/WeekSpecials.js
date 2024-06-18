//import { Link } from 'react-router-dom';
import { Flex, Heading, HStack, Spacer } from '@chakra-ui/react';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
//import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
    {
        name: 'Greek Salad',
        image: greekSaladImage,
        price: '$12.99',
        description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
    },
    {
        name: 'Bruschetta',
        image: bruschettaImage,
        price: '$5.99',
        description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
    },
];

const WeekSpecials = () => {
    return (
        <>
            <Heading as="h2" size="lg">
                This week specials!
            </Heading>
            <HStack
                className="container"
                spacing='50px'
                //align="stretch"
                py={8}
            >
                <Spacer />
                <Flex
                    justify="space-between"
                    align="center"
                    className="week-specials-header"
                    w="full"
                >

                    {/* <Button as={Link} to={pages.get('orderOnline').path} colorScheme="teal" variant="solid">
                    Online Menu
                </Button> */}
                </Flex>
                {meals.map((meal, index) =>
                    <>
                        <Spacer />
                        <MealCard key={index} meal={meal} />
                        <Spacer />
                    </>
                )}
            </HStack >
        </>
    );
};

export default WeekSpecials;
