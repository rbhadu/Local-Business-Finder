import { GoogleGenAI, Type } from "@google/genai";
import type { Results } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const placeSchema = {
    type: Type.OBJECT,
    properties: {
        name: {
            type: Type.STRING,
            description: "The name of the establishment.",
        },
        address: {
            type: Type.STRING,
            description: "The full address of the establishment.",
        },
        website: {
            type: Type.STRING,
            description: "The official website URL, if available.",
        },
        email: {
            type: Type.STRING,
            description: "The contact email address, if available.",
        },
        facebook: {
            type: Type.STRING,
            description: "The official Facebook page URL, if available.",
        },
        instagram: {
            type: Type.STRING,
            description: "The official Instagram profile URL, if available.",
        },
    },
    required: ["name", "address"],
};


export const generatePlaceRecommendations = async (location: string, categories: string[]): Promise<Results> => {
    if (categories.length === 0) {
        throw new Error("Please select at least one category.");
    }

    const prompt = `Given the location "${location}", generate as many popular and well-regarded places as possible for the following categories: ${categories.join(', ')}. For each place, provide the name, full address, official website URL, contact email address, Facebook page URL, and Instagram profile URL, if available. Ensure the results are diverse and relevant.`;
    
    const properties = categories.reduce((acc, category) => {
        const key = category.toLowerCase().replace(/\s/g, '_');
        acc[key] = {
            type: Type.ARRAY,
            description: `An array of recommended ${category}.`,
            items: placeSchema,
        };
        return acc;
    }, {} as Record<string, any>);
    
    const dynamicResponseSchema = {
        type: Type.OBJECT,
        properties,
        required: categories.map(c => c.toLowerCase().replace(/\s/g, '_')),
    };

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: dynamicResponseSchema,
                temperature: 0.2,
            },
        });

        const jsonText = response.text.trim();
        const parsedResult = JSON.parse(jsonText);

        const finalResult: Results = {};
        for (const category of categories) {
            const lowerCaseCategory = category.toLowerCase().replace(/\s/g, '_');
            if (parsedResult[lowerCaseCategory]) {
                finalResult[category] = parsedResult[lowerCaseCategory];
            }
        }
        
        return finalResult;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to fetch recommendations from Gemini. The model may be temporarily unavailable or the location might be too broad.");
    }
};
