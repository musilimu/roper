
import { Nfts } from "./Nfts";
import { Flex, Link as NavLink } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export const Assets = () => {

    return (
        <Flex direction='column' gap='4' mt='8'>
            <NavLink asChild>
                <Link to="create">create new asset</Link>
            </NavLink>
            <Nfts />
        </Flex>
    );
}


