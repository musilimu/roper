import { ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Loading from "./Loading";
import { Box, Card, Grid, Inset, Text } from "@radix-ui/themes";

export const Nfts = () => {
    const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS);
    const { data: nfts, isLoading } = useNFTs(contract);

    if (isLoading) return <Loading />
    return <Grid gap='4' columns='3' width='auto'>
        {
            nfts?.map(nft => <Box ><Card key={Math.random()} size="2" >
                <Inset clip="padding-box" side="top" pb="current">
                    <ThirdwebNftMedia metadata={nft.metadata} />
                </Inset>
                <Text as="p" size="3">Owner {nft.owner}</Text>
                <Text as="p" size="3">Name: {nft.metadata.name}</Text>
                <Text as="p" size="3">Description:</Text>
                <Markdown remarkPlugins={[remarkGfm]}>{nft.metadata.description}</Markdown>
            </Card></Box>
            )
        }
    </Grid>
}