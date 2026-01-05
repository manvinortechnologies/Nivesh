// API Base URLs Configuration
export const API_BASE_URL = 'https://nivesh1.pythonanywhere.com/';
export const API_BASE_URL1 = 'https://nivesh1.pythonanywhere.com/'; // Primary API base URL
export const API_BASE_URL2 = ''; // Secondary API base URL (if needed in future)

// API Endpoints
export const API_ENDPOINTS = {
    CAREERS: 'dashboard/api/careers/',
    TESTIMONIALS: 'dashboard/api/testimonials/',
    FAQS: 'dashboard/api/faqs/',
};

// Helper function to build full API URL
export const buildApiUrl = (endpoint: string, baseUrl: string = API_BASE_URL1): string => {
    const normalizedEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${normalizedBaseUrl}${normalizedEndpoint}`;
};

