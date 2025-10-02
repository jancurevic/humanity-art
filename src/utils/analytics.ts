declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Humanity Exhibition',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
  }
};

export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
};

export const trackUniqueVisitor = () => {
  const hasVisited = localStorage.getItem('exhibition_visited');
  
  if (!hasVisited) {
    trackEvent('first_visit', {
      event_category: 'User Engagement',
      event_label: 'New Visitor',
      timestamp: new Date().toISOString()
    });
    
    localStorage.setItem('exhibition_visited', 'true');
  }
  
  // Always track the session
  trackEvent('session_start', {
    event_category: 'User Engagement',
    event_label: 'Session',
    timestamp: new Date().toISOString()
  });
};