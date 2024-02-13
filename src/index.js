import { pipeline } from "@xenova/transformers";

const callAIModelUsingRemoteRepository = async (
  type,
  model,
  additionalPipelineParams,
  data,
  additionalModelParams
) => {
  if (!type) {
    return { error: "There is no type" };
  }
  if (!model) {
    return { error: "There is no model" };
  }
  if (!data) {
    return { error: "There is no data" };
  }
  let aiModel = await pipeline(type, model, additionalPipelineParams ?? {});
  let output = await aiModel(data, additionalModelParams ?? {});
  console.log(output);
  return output;
};

// let textClassificationResult = await callAIModelUsingRemoteRepository(
//   "text-classification",
//   "Xenova/toxic-bert",
//   {},
//   "Top SELLING! 300% profit !!! only 50$ for consultation",
//   {
//     topk: null,
//   }
// );

// console.log("Result : {}", textClassificationResult);

// let speaker_embeddings =
//   "https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/speaker_embeddings.bin";
// let textToSpeechResult = await callAIModelUsingRemoteRepository(
//   "text-to-speech",
//   "Xenova/speecht5_tts",
//   {
//     quantized: true,
//   },
//   "My name is Vlad",
//   { speaker_embeddings }
// );

// let speechRecognitionResult = await callAIModelUsingRemoteRepository(
//   "automatic-speech-recognition",
//   "Xenova/whisper-small",
//   {},
//   textToSpeechResult["audio"],
//   { return_timestamps: true }
// );

// let sentimentAnalysisResult = await callAIModelUsingRemoteRepository(
//   "sentiment-analysis",
//   "Xenova/distilbert-base-uncased-finetuned-sst-2-english",
//   {},
//   "Islam is Good, Peaceful Religion",
//   {
//     topk: null,
//   }
// );

// let textGenerationByPredictingTheNextWordInASequenceResult = await callAIModelUsingRemoteRepository(
//   "text-generation",
//   "Xenova/distilgpt2",
//   {},
//   "print('Hello ",
//   {}
// );

// let text2textGenerationResult = await callAIModelUsingRemoteRepository(
//   "text2text-generation",
//   "Xenova/LaMini-Flan-T5-783M",
//   {},
//   "Which vitamins and minerals men with good physics (187 cm height and 87kg weight) must have?",
//   {
//     max_new_tokens: 40000,
//   }
// );

// let text =
//   "The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, " +
//   "and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. " +
//   "During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest " +
//   "man-made structure in the world, a title it held for 41 years until the Chrysler Building in New " +
//   "York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to " +
//   "the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the " +
//   "Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second " +
//   "tallest free-standing structure in France after the Millau Viaduct.";

// let textSummarizationResult = await callAIModelUsingRemoteRepository(
//   "summarization",
//   "Xenova/distilbart-cnn-6-6",
//   {},
//   text,
//   {
//     max_new_tokens: 40000,
//   }
// );

// let translationResult = await callAIModelUsingRemoteRepository(
//   "translation",
//   "Xenova/m2m100_418M",
//   {},
//   "生活就像一盒巧克力。",
//   {
//     src_lang: "zh",
//     tgt_lang: "en",
//   }
// );

// let text =
//   "Last week I upgraded my iOS version and ever since then my phone has been overheating whenever I use your app.";
// let labels = ["mobile", "billing", "website", "account access"];

// let zeroShotClassificationResult = await callAIModelUsingRemoteRepository(
//   "zero-shot-classification",
//   "Xenova/mobilebert-uncased-mnli",
//   {},
//   text,
//   labels
// );

// let question = "Who was Jim Henson?";
// let context = "Jim Henson was a nice puppet.";
// let questionAnsweringResult = await callAIModelUsingRemoteRepository(
//   "question-answering",
//   "Xenova/distilbert-base-uncased-distilled-squad",
//   {},
//   question,
//   context
// );

// let image =
//   "https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/invoice.png";
// let question = "What is the invoice number?";

// let documentQuestionAnsweringResult = await callAIModelUsingRemoteRepository(
//   "document-question-answering",
//   "Xenova/donut-base-finetuned-docvqa",
//   {},
//   image,
//   question
// );
