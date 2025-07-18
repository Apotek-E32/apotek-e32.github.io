import ReactPixel from 'react-facebook-pixel';

// Get Meta Pixel ID from environment variables
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '1010602900961745';

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: process.env.NODE_ENV === 'development', // enable debug mode in development
};

export const initFacebookPixel = () => {
  if (typeof window !== 'undefined') {
    ReactPixel.init(PIXEL_ID, undefined, options);
    ReactPixel.pageView(); // Track initial page view
  }
};

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined') {
    ReactPixel.track(eventName, parameters);
  }
};

// Common event tracking functions
export const trackPageView = () => {
  if (typeof window !== 'undefined') {
    ReactPixel.pageView();
  }
};

export const trackPurchase = (value, currency = 'IDR') => {
  trackEvent('Purchase', {
    value: value,
    currency: currency,
  });
};

export const trackAddToCart = (contentName, value, currency = 'IDR') => {
  trackEvent('AddToCart', {
    content_name: contentName,
    value: value,
    currency: currency,
  });
};

export const trackContact = () => {
  trackEvent('Contact');
};

export const trackViewContent = (contentName) => {
  trackEvent('ViewContent', {
    content_name: contentName,
  });
};

export const trackLead = () => {
  trackEvent('Lead');
};

export const trackJobApplication = (jobTitle) => {
  trackEvent('SubmitApplication', {
    content_name: jobTitle,
    content_category: 'Job Application',
  });
};

export const trackJobView = (jobTitle) => {
  trackEvent('ViewContent', {
    content_name: jobTitle,
    content_category: 'Job Listing',
  });
};

export default {
  initFacebookPixel,
  trackEvent,
  trackPageView,
  trackPurchase,
  trackAddToCart,
  trackContact,
  trackViewContent,
  trackLead,
  trackJobApplication,
  trackJobView,
};
