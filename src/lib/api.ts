
import { TokenData } from "@/hooks/useMarketData";

// Mock data for development
const mockTokens: TokenData[] = [
  {
    id: "injective-protocol",
    name: "Injective",
    symbol: "INJ",
    price: 24.82,
    price_change_24h: 3.5,
    market_cap: 2482000000,
    volume_24h: 153000000,
    circulating_supply: 100000000,
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 68421.12,
    price_change_24h: 1.2,
    market_cap: 1342000000000,
    volume_24h: 28000000000,
    circulating_supply: 19600000,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 3542.18,
    price_change_24h: -0.8,
    market_cap: 425000000000,
    volume_24h: 12000000000,
    circulating_supply: 120000000,
  },
  {
    id: "cosmos",
    name: "Cosmos",
    symbol: "ATOM",
    price: 7.84,
    price_change_24h: 5.2,
    market_cap: 2920000000,
    volume_24h: 183000000,
    circulating_supply: 372000000,
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 132.56,
    price_change_24h: 2.7,
    market_cap: 58000000000,
    volume_24h: 2100000000,
    circulating_supply: 438000000,
  },
  {
    id: "chainlink",
    name: "Chainlink",
    symbol: "LINK",
    price: 15.72,
    price_change_24h: -1.3,
    market_cap: 9300000000,
    volume_24h: 750000000,
    circulating_supply: 589000000,
  }
];

// In a production environment, this would call the CoinMarketCap API
export const fetchMarketData = async (limit: number = 10): Promise<TokenData[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // TODO: Replace with actual API call to CoinMarketCap
  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}`,
  //   {
  //     headers: {
  //       "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
  //     },
  //   }
  // );
  // const data = await response.json();
  // return data.data;
  
  return mockTokens.slice(0, limit);
};

// Mock function for AI chat responses
export const fetchAIResponse = async (prompt: string): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // TODO: Replace with actual API call to Together AI
  // const response = await fetch("https://api.together.xyz/inference", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${process.env.TOGETHER_AI_API_KEY}`
  //   },
  //   body: JSON.stringify({
  //     model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
  //     prompt: prompt,
  //     max_tokens: 800,
  //     temperature: 0.7,
  //   }),
  // });
  // const data = await response.json();
  // return data.output.text;
  
  // Mock responses for common crypto questions
  const responses: { [key: string]: string } = {
    default: "I'm your AI assistant for crypto insights. How can I help you with Injective or other blockchain questions?",
    price: "Based on recent market trends, INJ has shown strong performance with an increase of 3.5% in the last 24 hours. The current price is $24.82, with technical indicators suggesting continued bullish momentum in the short term.",
    market: "The overall crypto market is showing positive signs with Bitcoin stabilizing above $68,000 and Ethereum maintaining support levels. Injective specifically has outperformed many layer-1 alternatives in recent months due to its DeFi capabilities and institutional adoption.",
    forecast: "While I can't provide financial advice, Injective's strong fundamentals and growing ecosystem suggest potential for continued growth. Key metrics to watch include DEX trading volume, new protocol deployments, and overall Cosmos ecosystem health.",
    dao: "The latest DAO proposal (INJ-42) focuses on parameter adjustments for the protocol's staking rewards. The proposal aims to increase APR for delegators while ensuring long-term sustainability. Most community sentiment appears positive with 78% votes in favor so far.",
    staking: "Currently, staking INJ offers approximately 7-9% APR, with rewards distributed every block. You can stake through Keplr wallet by selecting a validator. Remember that there's a 21-day unbonding period during which your tokens cannot be transferred.",
  };
  
  const promptLower = prompt.toLowerCase();
  
  if (promptLower.includes("price") || promptLower.includes("worth") || promptLower.includes("value")) {
    return responses.price;
  } else if (promptLower.includes("market") || promptLower.includes("trend")) {
    return responses.market;
  } else if (promptLower.includes("forecast") || promptLower.includes("predict") || promptLower.includes("future")) {
    return responses.forecast;
  } else if (promptLower.includes("dao") || promptLower.includes("governance") || promptLower.includes("proposal")) {
    return responses.dao;
  } else if (promptLower.includes("stake") || promptLower.includes("staking") || promptLower.includes("validator")) {
    return responses.staking;
  }
  
  return responses.default;
};

// Mock function for token report data
export interface TokenReport {
  token: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  analysis: string;
  sentiment: "bullish" | "neutral" | "bearish";
  signals: {
    shortTerm: "buy" | "hold" | "sell";
    mediumTerm: "buy" | "hold" | "sell";
    longTerm: "buy" | "hold" | "sell";
  };
  recentNews: {
    title: string;
    source: string;
    url: string;
    date: string;
  }[];
}

export const fetchTokenReport = async (tokenId: string): Promise<TokenReport> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Mock token report for INJ
  const injReport: TokenReport = {
    token: "Injective",
    symbol: "INJ",
    price: 24.82,
    change24h: 3.5,
    marketCap: 2482000000,
    volume24h: 153000000,
    analysis: "Injective (INJ) has shown strong performance in the past month, outperforming the broader market. The token benefits from increased adoption of the Injective protocol for decentralized derivatives trading. Recent network upgrades have improved scalability and reduced gas fees, making the protocol more attractive for institutional traders. Technical indicators suggest the token may continue its upward trend if the current market conditions persist, though resistance might be encountered around the $26 level.",
    sentiment: "bullish",
    signals: {
      shortTerm: "buy",
      mediumTerm: "buy",
      longTerm: "hold"
    },
    recentNews: [
      {
        title: "Injective Labs Secures $40M in Series B Funding",
        source: "CoinDesk",
        url: "#",
        date: "2023-12-15"
      },
      {
        title: "New Institutional Trading Platform Launches on Injective",
        source: "Cointelegraph",
        url: "#",
        date: "2023-12-08"
      },
      {
        title: "Injective Announces Integration with Chainlink for Price Oracles",
        source: "Decrypt",
        url: "#",
        date: "2023-11-29"
      }
    ]
  };
  
  // Mock token report for BTC
  const btcReport: TokenReport = {
    token: "Bitcoin",
    symbol: "BTC",
    price: 68421.12,
    change24h: 1.2,
    marketCap: 1342000000000,
    volume24h: 28000000000,
    analysis: "Bitcoin continues to consolidate above the $65,000 support level, showing resilience despite broader market volatility. Institutional adoption remains strong, with spot ETF inflows stabilizing after the initial surge. On-chain metrics indicate accumulation by long-term holders, which historically precedes sustained bull markets. However, macroeconomic uncertainties related to central bank policies could introduce short-term volatility.",
    sentiment: "bullish",
    signals: {
      shortTerm: "hold",
      mediumTerm: "buy",
      longTerm: "buy"
    },
    recentNews: [
      {
        title: "Bitcoin ETFs See $500M Net Inflows Last Week",
        source: "Bloomberg",
        url: "#",
        date: "2023-12-18"
      },
      {
        title: "MicroStrategy Adds 2,500 BTC to Treasury Reserves",
        source: "CNBC",
        url: "#",
        date: "2023-12-12"
      },
      {
        title: "Central American Nation Considers Bitcoin as Legal Tender",
        source: "Reuters",
        url: "#",
        date: "2023-12-05"
      }
    ]
  };
  
  // Return the appropriate report based on tokenId
  if (tokenId === "injective-protocol" || tokenId === "inj") {
    return injReport;
  } else if (tokenId === "bitcoin" || tokenId === "btc") {
    return btcReport;
  }
  
  // Default to INJ report if token not found
  return injReport;
};
