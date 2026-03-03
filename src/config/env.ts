// src/config/env.ts

// Environment Variables Configuration
const ENV_VARS = {
    HELIUS_API_KEY: process.env.HELIUS_API_KEY || '',
    REDIS_URL: process.env.REDIS_URL || '',
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
    SOLANA_NETWORK: process.env.SOLANA_NETWORK || 'mainnet-beta',
};

// Validation Function
const validateEnv = () => {
    const missingVars = [];
    
    for (const [key, value] of Object.entries(ENV_VARS)) {
        if (!value) {
            missingVars.push(key);
        }
    }

    if (missingVars.length > 0) {
        throw new Error(`Missing environment variables: ${missingVars.join(', ')}`);
    }
};

// Validate Environment Variables
validateEnv();

export default ENV_VARS;