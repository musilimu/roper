import { Web3Button } from "@thirdweb-dev/react";
import { useParams } from "react-router-dom";

export const PublishLesson = ({ isPublished }: { isPublished: boolean }) => {
    const { id } = useParams();

    return <Web3Button
        contractAddress="0xd76E4038FFAd5Aca9E2115B1bB32E3254BB5f113"
        action={async (contract) => { contract.call("publishUnpublishLesson", [id]) }}
    >
        {isPublished ? 'un publish' : 'publish'}
    </Web3Button>
}