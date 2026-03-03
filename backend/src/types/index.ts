// types/index.ts

// Interface representing the signal data for trading
export interface Signal {
  id: string;
  user_id: string;
  asset: string;
  action: 'buy' | 'sell';
  price: number;
  timestamp: Date;
}

// Interface representing a user in the system
export interface User {
  id: string;
  username: string;
  email: string;
  balance: number;
  positions: Position[];
}

// Interface representing a trading position
export interface Position {
  id: string;
  user_id: string;
  asset: string;
  quantity: number;
  entryPrice: number;
  currentPrice: number;
  timestamp: Date;
}

// Interface representing a transaction in the system
export interface Transaction {
  id: string;
  user_id: string;
  signal_id: string;
  price: number;
  quantity: number;
  timestamp: Date;
}

// Interface for score data
export interface ScoreData {
  user_id: string;
  score: number;
  timestamp: Date;
}

// Interface for risk configuration
export interface RiskConfig {
  user_id: string;
  maxRiskPercentage: number;
  stopLoss: number;
  takeProfit: number;
}

// Additional critical types can be added here as needed
