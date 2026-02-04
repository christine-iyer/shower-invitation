const axios = require('axios');
const config = require('../config/environment');

class QuickBooksClient {
  constructor() {
    this.accessToken = '';
    this.companyId = config.companyId;
    this.isLoading = false;
    
    // Load tokens from DB on startup
    this.loadTokensFromDB();
  }

  async loadTokensFromDB() {
    if (this.isLoading) return;
    this.isLoading = true;
    
    try {
      const QuickBooksToken = require('../models/quickbooksToken');
      const tokenRecord = await QuickBooksToken.findOne().sort({ updatedAt: -1 });
      
      if (tokenRecord) {
        // Check if token is expired
        if (tokenRecord.expiresAt > new Date()) {
          this.accessToken = tokenRecord.accessToken;
          this.companyId = tokenRecord.realmId;
          console.log('✅ Loaded valid QuickBooks token from database');
          console.log('Token expires at:', tokenRecord.expiresAt.toISOString());
        } else {
          console.log('⚠️ Token in database is expired');
          // TODO: Implement refresh token logic here
        }
      } else {
        console.log('ℹ️ No QuickBooks tokens found in database');
      }
    } catch (error) {
      console.error('❌ Error loading tokens from database:', error.message);
    } finally {
      this.isLoading = false;
    }
  }

  setAccessToken(token) {
    this.accessToken = token;
  }

  setCompanyId(id) {
    this.companyId = id;
  }

  getAccessToken() {
    return this.accessToken;
  }

  getCompanyId() {
    return this.companyId;
  }

  async isAuthenticated() {
    // If token in memory, return true
    if (this.accessToken) {
      return true;
    }
    
    // Otherwise, try to load from DB
    await this.loadTokensFromDB();
    return !!this.accessToken;
  }

  async get(endpoint) {
    // Ensure we have a token
    await this.isAuthenticated();
    
    if (!this.accessToken) {
      throw new Error('Not authenticated');
    }

    const url = `${config.quickbooksApiUrl}/company/${this.companyId}/${endpoint}`;
    
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          Accept: 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error in GET ${endpoint}:`, error.response?.data || error.message);
      throw error;
    }
  }

  async post(endpoint, data) {
    // Ensure we have a token
    await this.isAuthenticated();
    
    if (!this.accessToken) {
      throw new Error('Not authenticated');
    }

    const url = `${config.quickbooksApiUrl}/company/${this.companyId}/${endpoint}`;
    
    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error in POST ${endpoint}:`, error.response?.data || error.message);
      throw error;
    }
  }

  async query(queryString) {
    return this.get(`query?query=${encodeURIComponent(queryString)}`);
  }

  async exchangeCodeForToken(code) {
    const tokenData = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: config.redirectUri
    });

    const response = await axios.post(config.oauthTokenUrl, tokenData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${config.clientId}:${config.clientSecret}`).toString('base64')}`
      }
    });

    return response.data;
  }
}

// Singleton instance
const quickbooksClient = new QuickBooksClient();

module.exports = quickbooksClient;