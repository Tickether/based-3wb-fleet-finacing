
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base } from "wagmi/chains";

export const config = getDefaultConfig({
    appName: "3WB P2P Fleet Finance",
    projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID,
    chains: [base],
    ssr: true,
    
});