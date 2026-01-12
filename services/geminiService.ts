
import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

// @ts-ignore
const apiKey = process.env.API_KEY;

export const getHotelRecommendation = async (
  query: string,
  products: Product[],
  taskInstruction: string,
  objectCount: number
) => {
  try {
    if (!apiKey || apiKey === "") {
      return { error: "API_KEY_MISSING" };
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `当前任务背景: "${taskInstruction}"\n待比较商品总数: ${objectCount}\n用户最新需求: "${query}"\n\n可选商品列表:\n${JSON.stringify(products, null, 2)}`,
      config: {
        systemInstruction: `你是一个专业的决策辅助助手。你的任务是根据用户的需求和当前任务背景，在提供的备选商品列表中进行深度权衡分析（Trade-off Analysis）。

        分析与回复规则：
        1. 开场白限制：回复的 analysis 字段必须以“我在平台上比较了 ${objectCount} 款[商品类别]”作为第一句话。
        2. 严禁引用 ID：在 analysis 自然语言中，禁止出现任何内部 ID（如 e1_1）。请统一使用商品的完整名称。
        3. 候选 ID 返回：candidates 数组中必须只包含 input products 中的 id 字符串 (例如 'e1_1')，不要编造 ID。
        4. 推荐结论：在 recommendationId 中锁定最符合权衡结果的一个 ID。
        5. 输出格式：仅输出 JSON，不要 Markdown。`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING },
            candidates: { type: Type.ARRAY, items: { type: Type.STRING } },
            recommendationId: { type: Type.STRING },
            recommendationSlogan: { type: Type.STRING }
          },
          required: ["analysis", "candidates", "recommendationId", "recommendationSlogan"]
        }
      }
    });

    let text = response.text || "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) text = jsonMatch[0];
    return JSON.parse(text);

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    // 捕获频率限制错误 (429)
    if (error.message?.includes("429") || error.status === 429) {
      return { error: "RATE_LIMIT_EXCEEDED" };
    }
    return { error: "GENERAL_ERROR" };
  }
};
