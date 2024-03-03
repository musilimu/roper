
import { useParams } from "react-router-dom";
import { W3Button } from "./W3Button";

export const PublishLesson = ({ isPublished }: { isPublished: boolean }) => {
    const { id } = useParams();

    return <W3Button
        contractAddress="0xF2F64A8932c42A2E57D100fAE1aFB60528c9b800"
        action={async (contract) => { contract.call("publishUnpublishLesson", [id]) }}
    >
        {isPublished ? 'un publish' : 'publish'}
    </W3Button>
}