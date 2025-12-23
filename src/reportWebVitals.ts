import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      params?: {
        value?: number;
        metric_id?: string;
        metric_value?: number;
        metric_delta?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export const sendToAnalytics = (metric: Metric) => {
  // Log to console for development
  if (import.meta.env.DEV) {
    console.log('[Web Vitals]', metric);
  }

  // Integration with Google Analytics 4 via gtag.js if available
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: metric.value,
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
    });
  }
};

export default reportWebVitals;
