import { Web3Button, useAddress, useDisconnect } from "@thirdweb-dev/react";
import { Link, Tooltip } from "@radix-ui/themes";
const UserAvatar = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  return address ? (
    <>
      <Tooltip content="logout">
        <Link onClick={disconnect}>
          {address.slice(0, 5)}...{address.slice(-5)}
        </Link>
      </Tooltip>
    </>
  ) : (
    <Web3Button
      contractAddress={import.meta.env.VITE_CONTRACTADDRESS}
      action={() => {}}
    >
      Connect wallet
    </Web3Button>
  );
};

export default UserAvatar;
