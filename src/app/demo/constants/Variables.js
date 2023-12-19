import {
  UniswapIcon,
  PancakeSwapIcon,
  SushiSwapIcon
} from "@/assets/dexs/index";

// ----- CONSTANTS DECLARATIONS -----

const allDexs = [
  {
    name: "UniSwap V3",
    about:
      "Uniswap is a decentralized protocol for automated token exchange on Ethereum.",
    icon: UniswapIcon,
    factoryContract: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
    graphQlEndpoint:
      "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3"
  }
  // {
  //   name: "PancakeSwap V3",
  //   about:
  //     "PancakeSwap is a multi-chain decentralized exchange and automated market maker protocol.",
  //   icon: PancakeSwapIcon,
  //   factoryContract: "",
  //   graphQlEndpoint:
  //     "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-eth"
  // }
  // {
  //   name: "SushiSwap V3",
  //   about: "A leading multi-chain DEX deployed across 30+ blockchains.",
  //   icon: SushiSwapIcon,
  //   factoryContract: "",
  //   graphQlEndpoint:
  //     "https://api.thegraph.com/subgraphs/name/sushi-v3/v3-ethereum"
  // }
];

export { allDexs };
