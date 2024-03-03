import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import { Link, Tooltip } from "@radix-ui/themes";
import { W3Button } from "./W3Button";
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
    <W3Button
      contractAddress={import.meta.env.VITE_CONTRACTADDRESS}
      action={() => { }}
    >
      Connect wallet
    </W3Button>
  );
};

export default UserAvatar;
