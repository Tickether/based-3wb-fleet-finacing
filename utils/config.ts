
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import { base } from "wagmi/chains";

export const config = getDefaultConfig({
    appName: "3 Wheeler Bike Club",
    projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID,
    chains: [base],
    ssr: true,
    transports: {
        [base.id]: http(`https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
    },
});