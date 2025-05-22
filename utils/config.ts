import { injected } from "wagmi/connectors";
import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains";

export const config = createConfig({
    connectors: [injected()],
    chains: [base],
    ssr: true,
    transports: {
      [base.id]: http()
    },
});