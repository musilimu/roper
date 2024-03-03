import { ActionFn, Web3ButtonProps, Web3Button, lightTheme } from "@thirdweb-dev/react"
import { PropsWithChildren } from "react"


export const W3Button = <TAction extends ActionFn>(props: PropsWithChildren<Omit<Web3ButtonProps<TAction>, 'contractAddress'>>) => {
    return <Web3Button
        contractAddress={import.meta.env.VITE_CONTRACTADDRESS}
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