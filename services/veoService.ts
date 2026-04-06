/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from '@google/genai';

// Types for Veo API
export interface VeoGenerateRequest {
  prompt: string;
  model: 'veo-3.1-lite-generate-preview' | 'veo-3.1-generate-preview';
  aspectRatio?: '16:9' | '9:16';
  resolution?: '720p' | '1080p';
  imageBytes?: string;
  mimeType?: string;
}

export interface VeoExtendRequest {
  videoUri: string;
  prompt: string;
  aspectRatio: '16:9' | '9:16';
}

/**
 * Generates a video using Veo 3.1
 */
export const generateVeoVideo = async (params: VeoGenerateRequest) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const config: any = {
    numberOfVideos: 1,
    resolution: params.resolution || '720p',
    aspectRatio: params.aspectRatio || '16:9'
  };

  const operation = await ai.models.generateVideos({
    model: params.model,
    prompt: params.prompt,
    image: params.imageBytes ? {
      imageBytes: params.imageBytes,
      mimeType: params.mimeType || 'image/png'
    } : undefined,
    config
  });

  return operation;
};

/**
 * Extends an existing Veo 3.1 video
 */
export const extendVeoVideo = async (params: VeoExtendRequest) => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const operation = await ai.models.generateVideos({
      model: 'veo-3.1-generate-preview',
      prompt: params.prompt,
      video: { uri: params.videoUri },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: params.aspectRatio,
      }
    });
  
    return operation;
};

/**
 * Checks the status of a Veo generation task
 */
export const getVeoTaskDetails = async (operation: any) => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const updatedOperation = await ai.operations.getVideosOperation({ operation });
    return updatedOperation;
};
