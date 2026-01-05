import { buildApiUrl, API_ENDPOINTS } from '../config/api';

// Career interface matching API response
export interface Career {
    id: string;
    title: string;
    description: string;
    requirements: string;
    location: string;
    number_of_openings: number;
    job_type: string;
    job_type_display: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

// Testimonial interface matching API response
export interface Testimonial {
    id: string;
    testimonial_type: 'video' | 'text';
    testimonial_type_display: string;
    name: string;
    role: string | null;
    company: string | null;
    image: string | null;
    image_url: string | null;
    testimonial: string;
    rating: number;
    youtube_video_url: string | null;
    video_title: string | null;
    is_active: boolean;
    order: number;
    created_at: string;
    updated_at: string;
}

// Fetch careers from API
export const fetchCareers = async (): Promise<Career[]> => {
    try {
        const url = buildApiUrl(API_ENDPOINTS.CAREERS);
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch careers: ${response.statusText}`);
        }
        
        const data: Career[] = await response.json();
        // Filter only active careers
        return data.filter(career => career.is_active);
    } catch (error) {
        console.error('Error fetching careers:', error);
        // Return empty array on error to prevent breaking the UI
        return [];
    }
};

// Fetch testimonials from API
export const fetchTestimonials = async (): Promise<Testimonial[]> => {
    try {
        const url = buildApiUrl(API_ENDPOINTS.TESTIMONIALS);
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch testimonials: ${response.statusText}`);
        }
        
        const data: Testimonial[] = await response.json();
        // Filter only active testimonials and sort by order
        return data
            .filter(testimonial => testimonial.is_active)
            .sort((a, b) => a.order - b.order);
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        // Return empty array on error to prevent breaking the UI
        return [];
    }
};

// FAQ interface matching API response
export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
    is_active: boolean;
    order: number;
    created_at: string;
    updated_at: string;
}

// Fetch FAQs from API
export const fetchFAQs = async (): Promise<FAQ[]> => {
    try {
        const url = buildApiUrl(API_ENDPOINTS.FAQS);
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch FAQs: ${response.statusText}`);
        }
        
        const data: FAQ[] = await response.json();
        // Filter only active FAQs and sort by order
        return data
            .filter(faq => faq.is_active)
            .sort((a, b) => a.order - b.order);
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        // Return empty array on error to prevent breaking the UI
        return [];
    }
};

// Helper function to convert YouTube URL to embed URL
export const convertYouTubeUrlToEmbed = (url: string | null): string | null => {
    if (!url) return null;
    
    // Handle different YouTube URL formats
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtu\.be\/([^&\n?#]+)/,
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}`;
        }
    }
    
    return null;
};

