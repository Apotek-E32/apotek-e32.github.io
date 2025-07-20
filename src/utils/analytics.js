// Combined analytics utility - handles both Facebook Pixel and Google Analytics
import * as fbPixel from './fbPixel';
import * as ga from './googleAnalytics';

// Initialize all analytics services
export const initAnalytics = () => {
  fbPixel.initFacebookPixel();
  ga.initGoogleAnalytics();
};

// Track page views on both platforms
export const trackPageView = (pagePath, pageTitle) => {
  fbPixel.trackPageView();
  ga.trackPageView(pagePath, pageTitle);
};

// Track contact interactions
export const trackContact = (method = 'unknown') => {
  fbPixel.trackContact();
  ga.trackContact(method);
};

// Track job applications
export const trackJobApplication = (jobTitle, applicantName = '') => {
  fbPixel.trackJobApplication(jobTitle);
  ga.trackJobApplication(jobTitle, applicantName);
};

// Track job views
export const trackJobView = (jobTitle) => {
  fbPixel.trackJobView(jobTitle);
  ga.trackJobView(jobTitle);
};

// Track purchases (for both platforms)
export const trackPurchase = (value, currency = 'IDR', transactionId = '', items = []) => {
  fbPixel.trackPurchase(value, currency);
  ga.trackPurchase(transactionId, items, value, currency);
};

// Track add to cart events
export const trackAddToCart = (contentName, value, currency = 'IDR') => {
  fbPixel.trackAddToCart(contentName, value, currency);
  ga.trackAddToCart({
    item_id: contentName,
    item_name: contentName,
    category: 'pharmacy_product',
    quantity: 1,
    price: value,
  }, value, currency);
};

// Track WhatsApp interactions
export const trackWhatsAppInteraction = (context = 'general') => {
  // Facebook Pixel uses contact event
  fbPixel.trackContact();
  ga.trackWhatsAppInteraction(context);
};

// Track phone calls
export const trackPhoneCall = () => {
  fbPixel.trackContact();
  ga.trackPhoneCall();
};

// Track location/map views
export const trackLocationView = () => {
  fbPixel.trackViewContent('pharmacy_location');
  ga.trackLocationView();
};

// Track service inquiries
export const trackServiceInquiry = (serviceName) => {
  fbPixel.trackViewContent(serviceName);
  ga.trackServiceInquiry(serviceName);
};

// Track form submissions
export const trackFormSubmission = (formName, formData = {}) => {
  fbPixel.trackLead();
  ga.trackFormSubmission(formName, formData);
};

// Track custom events on both platforms
export const trackCustomEvent = (eventName, fbParams = {}, gaParams = {}) => {
  fbPixel.trackEvent(eventName, fbParams);
  ga.trackEvent(eventName, gaParams);
};

// Track theme changes (GA only - FB doesn't need this)
export const trackThemeChange = (newTheme) => {
  ga.trackThemeChange(newTheme);
};

// Track navigation events (GA only)
export const trackNavigation = (destination) => {
  ga.trackNavigation(destination);
};

// Track search functionality (GA only)
export const trackSearch = (searchTerm, results = 0) => {
  ga.trackSearch(searchTerm, results);
};

// Track scroll depth (GA only)
export const trackScrollDepth = (percentage) => {
  ga.trackScrollDepth(percentage);
};

// Track outbound links (GA only)
export const trackOutboundLink = (url, linkText = '') => {
  ga.trackOutboundLink(url, linkText);
};

// Track conversions (GA only)
export const trackConversion = (conversionName, parameters = {}) => {
  ga.trackConversion(conversionName, parameters);
};

// Export individual modules for direct access if needed
export { fbPixel, ga };

// Default export with all combined functions
export default {
  initAnalytics,
  trackPageView,
  trackContact,
  trackJobApplication,
  trackJobView,
  trackPurchase,
  trackAddToCart,
  trackWhatsAppInteraction,
  trackPhoneCall,
  trackLocationView,
  trackServiceInquiry,
  trackFormSubmission,
  trackCustomEvent,
  trackThemeChange,
  trackNavigation,
  trackSearch,
  trackScrollDepth,
  trackOutboundLink,
  trackConversion,
  fbPixel,
  ga,
};