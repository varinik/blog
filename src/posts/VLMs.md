---
title: The Development of Vision-Language Models
date: 2026-07-21
excerpt: Through vision-language models, AI doesn’t just stop at answering text-based prompts – it can process in images and videos too. How? Keep reading to figure out.
tags:
  [
    post,
    computer vision,
    robotics,
    vision-language models,
    natural language processing,
    LLMs,
  ]
---

We have all experienced the various capabilities of our beloved artificial intelligence (AI) models – from solving math problems to iterating ideas for English essays. But now, what if I told you that is not all it can do? Through vision-language models, AI doesn’t just stop at answering text-based prompts – it can take in images and videos too. How? Keep reading to figure out.

### Intro to Vision-Language Models and their Importance:

Their name is kinda a giveaway, but VLMs – vision-language models – are artificial intelligence (AI) models capable of processing vision-based items like images and videos, and text. Though it might not seem like much, they are a huge advancement for computer vision, natural language processing, and robotics.
Previously, AI models developed for image processing – mainly convolutional neural networks (CNNs) – worked like a tool in a toolbox – made to perform one specific task. Like a screwdriver made to screw screws, these models were built for one purpose – nothing else. This specific-use-case characteristic was incredibly limiting; imagine only having a screwdriver in your tool kit – how much can you realistically accomplish?

With models like STEP3-VL-10B, LLaVA, and Qwen-VL, VLMs have completely changed the game. With their novel architecture, VLMs became like Swiss Army knives – able to accomplish several classic vision tasks and more, all just through one model.

### Basic Model Architecture:

When VLMs were initially developed, they followed a rudimentary 3-part architecture: a vision model, a projector, and a large language model.

#### Vision Model:

One of the most important parts of a vision-language model would be its ability to process images. This is exactly what the vision model in the 3-part architecture is important for. These models – such as CLIP (a commonly used vision model in VLMs) – are usually pretrained to interpret images.

#### Large Language Model:

The large language model – or LLM – uses both the image information (extracted by the vision model) as well as text input (directly from the user’s prompt) to complete tasks. These models are also pretrained to understand and interpret text input.

#### Projector:

The projector is another model that acts like a bridge between the two stages of processing – the vision model and the LLM. Given that the LLM and the vision model are separate entities – not designed to function together- the output of the vision model does not align with the input requirements of the LLM. The projector modifies the data from the vision model so it works with the LLM’s input requirements.

The training process of VLMs is pretty straightforward. First is pretraining. In pretraining, the projector learns to connect the vision and LLM model – allowing them to work seamlessly together. Following this pretraining, the model undergoes supervised fine-tuning. In supervised fine-tuning, the VLM model learns to accurately respond to the user. Finally, the last stage of training is reinforcement learning. In this stage, the model is tuned on preference data to improve response quality, reduce hallucination, and sharpen reasoning.

### Current Issues:

This intuitive approach to building a VLM, however, fails to scale well due to reduced flexibility and massive computational requirements. The reduced flexibility stems from having three independent models – two of which are pretrained. If someone wanted to change the input form, they would have to change and retrain everything. Additionally, one of the main uses of VLMs is in developing robots capable of understanding continuous video camera footage. However, with the current setup, as video footage increases, the computational requirements increase quadratically – resulting in unrealistic costs.

### Ongoing Research:

Currently ongoing research focuses on architectural changes to address the previously listed issues with the old VLM structure.

One field of research is the development of a single transformer VLM. A transformer is a type of machine learning model that forms the backbone of chatbots like ChatGPT and Claude. They are incredibly important due to their attention mechanisms. Through a series of complex matrix multiplication, these attention mechanisms allowed models to store important relationships that existed between the words in the sentence. Think of it like this: say you have the sentence “Sally and Shelly went to the store to buy butter and sugar. They bought the two things”. To understand who “they” referred to, the model only needed to store Sally and Shelly.

The single transformer approach to VLMs provides a solution to the flexibility issues, having one coherent model that can be easily adjusted. This one-model approach built upon the basic transformer, adding new attention features to account for the different forms of input. For images, a bidirectional attention layer was integrated. This meant that information from all directions could be used to interpret the overall image. With the basic text, a masked attention mechanism was used – meaning only previous words could help understand future words.

Moreover, a multimodal rotary position embedding was included. What a mouthful of words to say, but it is not as complicated as it seems. See, when running VLM models, the input is usually flattened into a big array that is 1 by some number. Condensing the input into one long chain results in a loss of positional understanding. Imagine trying to piece together an image, but all the pixels were just in 1 row; it seems impossible, right? That is what the model is facing. This is where the multimodal rotary position embedding comes into play. The M-RoPE is a way to tell the model where each pixel falls relative to others in a picture and in what relative order each word in the text prompt is.

Another booming field of research is to develop a linear scaling between computation and video length. Once again, this sort of approach to a VLM deals with attention, but it is spatiotemporal attention. Spatiotemporal seems like a big word, but it really just means attention that spans both space (like 2D positioning) and time. Time is an important feature in videos, as it describes an order; otherwise, videos would just be a collection of images. This method works to analyze the video chunk by chunk – using a method called the sliding window. This reduces how much the model has to analyze at a time – therefore already helping reduce computation.

With each frame in this chunk, the model focuses on extracting meaningful information that will aid in overall video understanding. Meaningful information might be the change in location of a ball or how a robotic arm moves over time. This important information stored within each frame is placed in a cache – or like a small library. Every subsequent frame is then compared to the information in the cache instead of all the previous frames. However, it is important to note that all the information from the frames is stored for processing when the video is complete. This drastically reduces computation and increases model processing speed without sacrificing any input information.

Beyond what is listed here, there is extensive research in the realm of VLMs – especially when it comes to robotics and cross-embodiment training. As AI continues to grow, its capabilities will too – especially regarding vision and beyond.

### How to Implement (github project):

https://github.com/varinik/blog/tree/code/tutorials

#### I hope you enjoyed this blog post, and I will see you in the next one.

#### Stay curious.

#### Varini
