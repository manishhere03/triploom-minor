import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box, Flex, HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaHotel } from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import { IoIosAdd, IoMdHome } from 'react-icons/io'
import { ImSpoonKnife } from "react-icons/im"
import { BsFillChatRightTextFill } from "react-icons/bs"
import { NavLink } from 'react-router-dom'
import { Button } from '@chakra-ui/react';

const Search = () => {
  return (
    <Box m="auto" width="100%" mt={6}> {/* Moved down with margin-top */}
      <Flex alignItems="center" justifyContent="center" px={[null, null, 40]}>
        <HStack spacing={3}>
          <NavLink to="/hotels">
            <Button size="sm" rightIcon={<FaHotel />} colorScheme="white" color="black" variant="outline">
              Hotels
            </Button>
          </NavLink>
          <NavLink>
            <Button size="sm" rightIcon={<GiThink />} colorScheme="white" color="black" variant="outline">
              Things to do
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button size="sm" rightIcon={<IoMdHome />} colorScheme="white" color="black" variant="outline">
              Holidays Home
            </Button>
          </NavLink>
          <NavLink to="/restaurants">
            <Button size="sm" rightIcon={<ImSpoonKnife />} colorScheme="white" color="black" variant="outline">
              Restaurants
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button size="sm" rightIcon={<BsFillChatRightTextFill />} colorScheme="white" color="black" variant="outline">
              Travels Fromus
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button size="sm" rightIcon={<IoIosAdd />} colorScheme="white" color="black" variant="outline">
              More
            </Button>
          </NavLink>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Search;
