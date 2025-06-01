import { injected } from "wagmi/connectors";
import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { base, optimism } from "wagmi/chains";

export const config = createConfig({
    connectors: [injected()],
    chains: [base, optimism],
    ssr: true,
    transports: {
      [base.id]: http(),
      [optimism.id]: http(),
    },
});
