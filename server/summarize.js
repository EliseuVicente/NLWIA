import { pipeline } from "@xenova/transformers"


export async function summarize(text){
  try {
    const generator = await pipeline(
      "summarization",
      "Xenova/distilbart-cnn-12-6"
    )

    const output = await generator(text)

    return output[0].summary_text
  } catch (error) {
    throw new Error(error)
  }
}