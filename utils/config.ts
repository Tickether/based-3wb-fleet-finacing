import { injected } from "wagmi/connectors";
import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { base, optimism } from "wagmi/chains";

export const config = createConfig({
    connectors: [injected()],
    chains: [base, optimism],
    ssr: true,
    transports: {
      [base.id]: http("https://rpc.ankr.com/base/ee0a8164bea2f800a788de2550a2171e4f908f2e911ed21499ec792d110aa631"),
      [optimism.id]: http(),
    },
});
