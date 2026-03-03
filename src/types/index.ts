// TypeScript interfaces for various entities

export interface Signal {
    id: string;
    type: string;
    value: number;
}

export interface RiskAssessment {
    id: string;
    level: string;
    description: string;
}

export interface RiskConfig {
    id: string;
    config: Record<string, any>;
}

export interface User {
    id: string;
    username: string;
    email: string;
}

export interface Position {
    userId: string;
    asset: string;
    amount: number;
}

export interface PartialExitState {
    positionId: string;
    exitAmount: number;
}

export interface PrebuiltTransaction {
    id: string;
    details: Record<string, any>;
}

export interface TransactionSimulation {
    id: string;
    expectedOutcome: string;
    risks: RiskAssessment[];
}

export interface ScoreData {
    userId: string;
    score: number;
    timestamp: string;
}

export interface TelegramApprovalMessage {
    chatId: string;
    messageId: string;
    approved: boolean;
}

export interface PnLSummary {
    totalProfit: number;
    totalLoss: number;
    netProfit: number;
}

export interface HeliusEvent {
    eventId: string;
    eventType: string;
    timestamp: string;
}

export interface ExecutionLog {
    logId: string;
    userId: string;
    action: string;
    timestamp: string;
}