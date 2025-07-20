// Google Analytics 4 utility functions for React application

// Get Google Analytics ID from environment variables
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-FZQ5JL3P5R';

// Check if gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Initialize Google Analytics (already done in HTML, but this ensures it's configured)
export const initGoogleAnalytics = () => {
  if (isGtagAvailable()) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  if (isGtagAvailable()) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath || window.location.pathname,
      page_title: pageTitle || document.title,
      page_location: window.location.href,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (isGtagAvailable()) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label,
      value: parameters.value,
      ...parameters,
    });
  }
};

// Track conversions
export const trackConversion = (conversionName, parameters = {}) => {
  if (isGtagAvailable()) {
    window.gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/${conversionName}`,
      ...parameters,
    });
  }
};

// Common event tracking functions for the pharmacy website

// Track contact interactions
export const trackContact = (method = 'unknown') => {
  trackEvent('contact', {
    category: 'engagement',
    label: method,
    method: method,
  });
};

// Track job application submissions
export const trackJobApplication = (jobTitle, applicantName = '') => {
  trackEvent('job_application', {
    category: 'careers',
    label: jobTitle,
    job_title: jobTitle,
    applicant_name: applicantName,
  });
};

// Track job listing views
export const trackJobView = (jobTitle) => {
  trackEvent('job_view', {
    category: 'careers',
    label: jobTitle,
    job_title: jobTitle,
  });
};

// Track product/service inquiries
export const trackServiceInquiry = (serviceName) => {
  trackEvent('service_inquiry', {
    category: 'services',
    label: serviceName,
    service_name: serviceName,
  });
};

// Track navigation events
export const trackNavigation = (destination) => {
  trackEvent('navigation', {
    category: 'navigation',
    label: destination,
    destination: destination,
  });
};

// Track form submissions
export const trackFormSubmission = (formName, formData = {}) => {
  trackEvent('form_submit', {
    category: 'forms',
    label: formName,
    form_name: formName,
    ...formData,
  });
};

// Track phone calls
export const trackPhoneCall = () => {
  trackEvent('phone_call', {
    category: 'contact',
    label: 'pharmacy_phone',
  });
};

// Track WhatsApp interactions
export const trackWhatsAppInteraction = (context = 'general') => {
  trackEvent('whatsapp_click', {
    category: 'contact',
    label: context,
    contact_method: 'whatsapp',
  });
};

// Track location/map interactions
export const trackLocationView = () => {
  trackEvent('location_view', {
    category: 'engagement',
    label: 'pharmacy_location',
  });
};

// Track theme changes
export const trackThemeChange = (newTheme) => {
  trackEvent('theme_change', {
    category: 'user_preferences',
    label: newTheme,
    theme: newTheme,
  });
};

// Enhanced ecommerce tracking (if pharmacy sells products online)
export const trackPurchase = (transactionId, items, value, currency = 'IDR') => {
  if (isGtagAvailable()) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items,
    });
  }
};

export const trackAddToCart = (item, value, currency = 'IDR') => {
  if (isGtagAvailable()) {
    window.gtag('event', 'add_to_cart', {
      currency: currency,
      value: value,
      items: [item],
    });
  }
};

// Track search functionality
export const trackSearch = (searchTerm, results = 0) => {
  trackEvent('search', {
    category: 'engagement',
    label: searchTerm,
    search_term: searchTerm,
    results_count: results,
  });
};

// Track scroll depth for engagement measurement
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll_depth', {
    category: 'engagement',
    label: `${percentage}%`,
    scroll_percentage: percentage,
  });
};

// Track outbound link clicks
export const trackOutboundLink = (url, linkText = '') => {
  trackEvent('outbound_link', {
    category: 'navigation',
    label: url,
    link_url: url,
    link_text: linkText,
  });
};

// Export all functions as default object
export default {
  initGoogleAnalytics,
  trackPageView,
  trackEvent,
  trackConversion,
  trackContact,
  trackJobApplication,
  trackJobView,
  trackServiceInquiry,
  trackNavigation,
  trackFormSubmission,
  trackPhoneCall,
  trackWhatsAppInteraction,
  trackLocationView,
  trackThemeChange,
  trackPurchase,
  trackAddToCart,
  trackSearch,
  trackScrollDepth,
  trackOutboundLink,
};