
import { GoogleGenAI, Type } from "@google/genai";
import type { Niche, LogEntry, TrendAnalysis, WorkflowStep } from "../types";
import { WorkflowStepStatus } from "../types";

// Ensure process.env.API_KEY is handled by the execution environment.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    // In a real app, you might have a more robust fallback or error handling.
    // For this simulation, we'll log a warning and the functions will return mock data.
    console.warn("API_KEY environment variable not set. Using mock data.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const MOCK_LOGS: LogEntry[] = [
    { timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), message: "Scraped Google Trends for 'Cambodia tours'. Identified 'eco-tourism' as a rising interest.", status: "SUCCESS" },
    { timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), message: "Generated draft for blog post: 'Top 5 Eco-Lodges in Mondulkiri'.", status: "SUCCESS" },
    { timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString(), message: "Attempted to create BookMeBus affiliate link for a new tour package.", status: "FAILED" },
    { timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), message: "Publishing post 'Top 5 Eco-Lodges' to WordPress blog.", status: "IN_PROGRESS" },
    { timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(), message: "Analyzed performance of 'Siem Reap nightlife' post. CTR is low, scheduling optimization task.", status: "SUCCESS" },
];

const MOCK_TREND: TrendAnalysis = {
    summary: "Interest in 'Cambodia travel budget' is consistently high, especially from Western countries. There is a strong opportunity for content around budget itineraries, cheap eats, and affordable accommodation.",
    trendScore: 85,
    relatedKeywords: ["Phnom Penh budget", "Angkor Wat ticket price", "cheap food Cambodia", "Cambodia hostels", "travel Cambodia on 20 dollars a day"],
};

const MOCK_WORKFLOW: WorkflowStep[] = [
    { id: 1, title: "Market Research", description: "Analyze Google Trends and local forums for 'Cambodia eco-tourism'.", status: WorkflowStepStatus.Pending },
    { id: 2, title: "Setup WordPress Blog", description: "Use browser automation to install WordPress on a new domain.", status: WorkflowStepStatus.Pending },
    { id: 3, title: "Generate Initial Content", description: "Use LLM to write 5 blog posts about sustainable travel in Cambodia.", status: WorkflowStepStatus.Pending },
    { id: 4, title: "Affiliate Integration", description: "Apply for BookMeBus and local hotel affiliate programs.", status: WorkflowStepStatus.Pending },
    { id: 5, title: "Deploy & Monitor", description: "Publish content and set up Google Analytics to track traffic.", status: WorkflowStepStatus.Pending },
];

export const generateWorkflowSteps = async (niche: Niche): Promise<WorkflowStep[]> => {
    if (!API_KEY) {
        return Promise.resolve(MOCK_WORKFLOW);
    }

    try {
        const prompt = `You are an AI agent designed to generate passive income in Cambodia. Create a 5-step execution plan for the niche: "${niche}". Each step should be a clear, actionable task for an autonomous agent. Return a JSON array of objects, where each object has an "id", "title", and a short "description".`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            id: { type: Type.INTEGER, description: "A unique step ID." },
                            title: { type: Type.STRING, description: "A short, descriptive title for the task." },
                            description: { type: Type.STRING, description: "A one-sentence description of the task." },
                        },
                        required: ["id", "title", "description"],
                    },
                },
            },
        });

        const jsonResponse = JSON.parse(response.text);
        if (Array.isArray(jsonResponse) && jsonResponse.length > 0) {
            return jsonResponse.map(step => ({ ...step, status: WorkflowStepStatus.Pending }));
        }
        return MOCK_WORKFLOW;

    } catch (error) {
        console.error("Error fetching workflow steps from Gemini:", error);
        return MOCK_WORKFLOW;
    }
};


export const generateInitialLogs = async (niche: Niche): Promise<LogEntry[]> => {
    if (!API_KEY) {
        return Promise.resolve(MOCK_LOGS);
    }
    
    try {
        const prompt = `You are an AI agent generating passive income in Cambodia. Based on the niche of "${niche}", generate 5 realistic, recent activity log entries. The log entries should reflect tasks an autonomous agent would perform. Return a JSON array.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            timestamp: { type: Type.STRING, description: "An ISO 8601 timestamp from the last 24 hours." },
                            message: { type: Type.STRING, description: "A descriptive log message." },
                            status: { type: Type.STRING, description: "Can be 'SUCCESS', 'IN_PROGRESS', or 'FAILED'." },
                        },
                         required: ["timestamp", "message", "status"],
                    },
                },
            },
        });
        
        const jsonResponse = JSON.parse(response.text);
        if (Array.isArray(jsonResponse)) {
            return jsonResponse as LogEntry[];
        }
        return MOCK_LOGS;

    } catch (error) {
        console.error("Error fetching logs from Gemini:", error);
        return MOCK_LOGS; // Fallback to mock data on error
    }
};


export const generateTrendAnalysis = async (keyword: string): Promise<TrendAnalysis> => {
     if (!API_KEY) {
        return Promise.resolve(MOCK_TREND);
    }

    try {
        const prompt = `Analyze the potential of the keyword "${keyword}" for a passive income business in Cambodia. Provide a brief analysis summary (2-3 sentences), a trend score (an integer between 0-100), and a list of 5 related keywords. Return a single JSON object.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        summary: { type: Type.STRING, description: "A brief analysis summary." },
                        trendScore: { type: Type.INTEGER, description: "A trend score from 0 to 100." },
                        relatedKeywords: { 
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                            description: "An array of 5 related keywords."
                        },
                    },
                    required: ["summary", "trendScore", "relatedKeywords"],
                },
            },
        });

        const jsonResponse = JSON.parse(response.text);
        if (jsonResponse.summary && typeof jsonResponse.trendScore === 'number') {
            return jsonResponse as TrendAnalysis;
        }
        return MOCK_TREND;
        
    } catch (error) {
        console.error("Error fetching trend analysis from Gemini:", error);
        return MOCK_TREND; // Fallback to mock data on error
    }
};