import { useAddress, useContract, useMintNFT } from "@thirdweb-dev/react";
import { W3Button } from "./W3Button";
import Login from "./Login";
import { useCallback, useRef, useState } from "react";
import Loading from "./Loading";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import ErrorEl from "./ErrorEl";
import SimpleMdeReact from "react-simplemde-editor";
import { useNavigate } from "react-router-dom";

export const UploadNft = () => {
    const file = useRef<HTMLInputElement>(null)
    const name = useRef<HTMLInputElement>(null)
    const [description, setDescription] = useState('')
    const { contract } = useContract(import.meta.env.VITE_CONTRACTADDRESS);
    const { mutateAsync: mintNft, isLoading, error } = useMintNFT(contract);
    const [isFileSet, SetIsFileSet] = useState(false)
    const address = useAddress()
    const nav = useNavigate()

    const onChange = useCallback((value: string) => {
        setDescription(value)
    }, []);

    if (!address) return <Login />
    if (isLoading) return <Loading />
    if (error) return <ErrorEl error={error} />

    return <>
        <Flex gap='4' direction='column' mt='8'>
            <h2>Upload new Asset</h2>
            <div>
                <Text>Name</Text>
                <TextField.Input
                    variant="surface"
                    size="3"
                    ref={name}
                    placeholder="name"
                />
            </div>
            <div>
                <Text>Description</Text>
                <SimpleMdeReact
                    value={description} onChange={onChange} />
            </div>
            <label htmlFor="file"><Button onClick={() => file.current?.click()}>Upload a file</Button>
                <input type="file" style={{ visibility: 'hidden' }} ref={file} id="file" onChange={() => SetIsFileSet(!!file.current?.files)} />
            </label>
            {isFileSet && <W3Button
                action={() =>
                    mintNft({
                        metadata: {
                            name: name.current?.value,
                            description,
                            image: file.current?.files![0],
                        },
                        to: address
                    }).then(() => {
                        SetIsFileSet(false)
                        setDescription('')
                        nav('/assets')
                    })
                }
            >
                Mint NFT
            </W3Button>}
        </Flex>
    </>
}
