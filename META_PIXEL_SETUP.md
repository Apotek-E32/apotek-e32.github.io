# Meta Pixel Setup Guide for Apotek E32

## ✅ SETUP COMPLETE!
**Your Pixel ID**: 1010602900961745

This guide explains how Meta Pixel (Facebook Pixel) has been configured on your website.

## Setup Instructions

### 1. Get Your Meta Pixel ID

1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Navigate to **Events Manager**
3. Select your pixel or create a new one
4. Copy your Pixel ID (it's a 15-16 digit number)

### 2. Configure Your Pixel ID

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and replace `YOUR_ACTUAL_PIXEL_ID_HERE` with your actual Pixel ID:
   ```
   VITE_META_PIXEL_ID=123456789012345
   ```

3. Also update the Pixel ID in `index.html` (find `YOUR_PIXEL_ID_HERE` and replace it with your actual ID)

### 3. Verify Installation

1. Install the [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) Chrome extension
2. Visit your website
3. Click the extension icon - it should show your pixel is active and firing events

## Events Being Tracked

The following events are automatically tracked on your website:

### Standard Events

1. **PageView** - Tracked on every page load
2. **ViewContent** - When users view the order form
3. **Lead** - When users submit the order form
4. **Contact** - When users click WhatsApp buttons

### Event Locations

- **Order Form View**: Tracked when the order section comes into view
- **Order Submission**: Tracked when form is submitted via WhatsApp
- **WhatsApp Clicks**: Tracked on floating WhatsApp button and footer WhatsApp links

## Custom Event Tracking

You can track additional events by importing the tracking functions:

```javascript
import { trackEvent, trackPurchase, trackAddToCart } from '../utils/fbPixel';

// Track custom event
trackEvent('CustomEvent', { custom_parameter: 'value' });

// Track purchase (when implementing e-commerce)
trackPurchase(150000, 'IDR'); // 150,000 IDR

// Track add to cart
trackAddToCart('Paracetamol 500mg', 25000, 'IDR');
```

## Available Tracking Functions

- `trackPageView()` - Track page views
- `trackContact()` - Track contact interactions
- `trackLead()` - Track lead generation
- `trackViewContent(contentName)` - Track content views
- `trackPurchase(value, currency)` - Track purchases
- `trackAddToCart(contentName, value, currency)` - Track add to cart
- `trackEvent(eventName, parameters)` - Track custom events

## Testing Your Pixel

### Using Meta Pixel Helper
1. Install the Chrome extension
2. Visit your website
3. Check that events are firing correctly

### Using Facebook Events Manager
1. Go to Events Manager in Facebook Business
2. Select your pixel
3. View real-time events to see if they're being received

### Test Events Tool
1. Use Facebook's Test Events tool
2. Enter your website URL
3. Perform actions and verify events are tracked

## Common Issues

### Pixel Not Loading
- Check that your Pixel ID is correct in both `.env` and `index.html`
- Ensure your website is publicly accessible
- Check browser console for errors

### Events Not Firing
- Verify the Meta Pixel Helper shows your pixel is active
- Check that you're importing tracking functions correctly
- Ensure you're calling tracking functions in the right component lifecycle

### Privacy Considerations
- The pixel respects user privacy settings
- Debug mode is only enabled in development
- Consider implementing consent management if required by local laws

## File Structure

```
src/
├── utils/
│   └── fbPixel.js          # Main pixel utility functions
├── components/
│   ├── Order.jsx           # Order form with lead tracking
│   ├── WhatsAppFloat.jsx   # Floating WhatsApp with contact tracking
│   └── Footer.jsx          # Footer WhatsApp with contact tracking
└── App.jsx                 # Pixel initialization
```

## Next Steps

1. Set up Facebook Ads campaigns using your pixel data
2. Create custom audiences based on website visitors
3. Set up conversion campaigns for leads and purchases
4. Monitor pixel performance in Events Manager

For more information, visit the [Meta Business Help Center](https://www.facebook.com/business/help/742478679120153).
