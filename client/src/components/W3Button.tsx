import { ActionFn, Web3ButtonProps, Web3Button, lightTheme } from "@thirdweb-dev/react"
import { PropsWithChildren } from "react"


export const W3Button = <TAction extends ActionFn>(props: PropsWithChildren<Web3ButtonProps<TAction>>) => {
    return <Web3Button
        contractAddress={props.contractAddress}
        action={props.action}
        theme={lightTheme({
            colors: {
                accentText: "white",
                primaryButtonBg: '#e93d82',
            },
        })}
    >
        {props.children}
    </Web3Button>
}