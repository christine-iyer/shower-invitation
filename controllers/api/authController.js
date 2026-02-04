const quickbooksClient = require('../../utils/quickbooksClient');
const config = require('../../config/environment');
const ResponseHandler = require('../../utils/responseHandler');
const QuickBooksToken = require('../../models/quickbooksToken');

class AuthController {
  async checkAuth(req, res) {
    const isAuthenticated = quickbooksClient.isAuthenticated();
    const companyId = quickbooksClient.getCompanyId();
    
    res.json({ 
      authenticated: isAuthenticated,
      companyId: companyId
    });
  }
  
  async handleCallback(req, res) {
    const { code, state, realmId } = req.query;
    
    console.log('=== QuickBooks Callback Received ===');
    console.log('Code:', code ? 'Present' : 'Missing');
    console.log('State:', state);
    console.log('Expected State:', config.state);
    console.log('RealmId:', realmId);
    console.log('Redirect URI in config:', config.redirectUri);
    console.log('Client ID:', config.clientId ? 'Present' : 'MISSING');
    console.log('Client Secret:', config.clientSecret ? 'Present' : 'MISSING');
    
    // Verify state parameter
    if (state !== config.state) {
      console.error('❌ State mismatch - Expected:', config.state, 'Received:', state);
      return res.redirect(`${config.clientUrl}/?auth=failed&error=invalid_state`);
    }
    
    if (!code) {
      console.error('❌ No authorization code received');
      return res.redirect(`${config.clientUrl}/?auth=failed&error=no_code`);
    }
    
    try {
      console.log('🔄 Attempting token exchange...');
      const tokenData = await quickbooksClient.exchangeCodeForToken(code);
      
      console.log('✅ Token exchange successful');
      console.log('Access token received:', tokenData.access_token ? 'Yes' : 'No');
      console.log('Refresh token received:', tokenData.refresh_token ? 'Yes' : 'No');
      console.log('Token type:', tokenData.token_type);
      console.log('Expires in:', tokenData.expires_in);
      
      // Calculate expiration date
      const expiresAt = new Date(Date.now() + tokenData.expires_in * 1000);
      
      // Save tokens to MongoDB
      await QuickBooksToken.findOneAndUpdate(
        { realmId: realmId },
        {
          accessToken: tokenData.access_token,
          refreshToken: tokenData.refresh_token,
          realmId: realmId,
          tokenType: tokenData.token_type,
          expiresAt: expiresAt,
          updatedAt: new Date()
        },
        { upsert: true, new: true }
      );
      
      console.log('✅ Tokens saved to database');
      console.log('Token expires at:', expiresAt.toISOString());
      
      // Set tokens in memory for immediate use
      quickbooksClient.setAccessToken(tokenData.access_token);
      quickbooksClient.setCompanyId(realmId);
      
      // Also update environment for backwards compatibility
      process.env.COMPANY_ID = realmId;
      
      console.log('✅ Authentication complete');
      console.log('Company ID set to:', realmId);
      
      // Redirect with success parameter
      res.redirect(`${config.clientUrl}/create-invoice?auth=success`);
    } catch (error) {
      console.error('❌ Error during token exchange');
      console.error('Status:', error.response?.status);
      console.error('Status text:', error.response?.statusText);
      console.error('Error data:', JSON.stringify(error.response?.data, null, 2));
      console.error('Error message:', error.message);
      
      res.redirect(`${config.clientUrl}/?auth=failed&error=${encodeURIComponent(error.message)}`);
    }
  }
}

module.exports = new AuthController();