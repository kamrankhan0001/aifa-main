"use client";
import { useState } from "react";

export default function PromptLibrary() {
  const [category, setCategory] = useState("All");

  const prompts = [
    {
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
      img: "/propmt/pr1.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },
   {
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
      img: "/propmt/pr2.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },
    {
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
  img: "/propmt/pr3.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },
    {
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
   img: "/propmt/pr4.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },
    {
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
   img: "/propmt/pr5.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },
    
     {
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
  img: "/propmt/pr6.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },
    
     {
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
   img: "/propmt/pr7.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },
    
     {
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
      img: "/propmt/pr8.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },
    {
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
 img: "/propmt/pr9.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },
    {
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
      img: "/propmt/pr10.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },
    {
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
     img: "/propmt/pr11.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },{
      title: "[Cinematic Poster / Sora/Chat GPT / Midjourney]",
img: "/propmt/pr12.png",
      text: "Keep the same boy’s face, identity, and natural smile exactly as provided. Maintain realistic skin tone and facial features. A hyper-realistic cinematic portrait of a young man standing in a dark blue futuristic studio environment. He is smiling confidently while holding a glowing holographic projection between his hands.  Scene: A floating cinematic frame appears between his hands, displaying an action movie scene with explosions, running characters, and a futuristic city background. Electric blue energy waves and lightning effects surround the hologram, creating a powerful AI-generated visual effect.  Hands: Positioned forward, slightly open, as if controlling or presenting the hologram. Blue energy flows around fingers and palms.  Lighting: Dramatic neon blue lighting with soft highlights on the face and hands. Glow from the hologram illuminates the subject naturally. Subtle particles and sparks in the background.  Background: Deep blue gradient with stars, light particles, and electric energy patterns, giving a sci-fi AI filmmaking atmosphere.  Mood: Creative, futuristic, powerful — representing AI filmmaking and imagination coming to life.  Style: Ultra-realistic, cinematic VFX, 8K resolution, sharp focus, high detail, volumetric lighting, depth of field, professional studio composition.",
    },
    
    
    

    

  ];

  return (
    <section className="bg-[#0B0F10] text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔥 HEADER */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <h1 className="text-3xl font-semibold">PROMPT LIBRARY</h1>

          {/* FILTERS */}
          <div className="flex gap-4">
            <select className="bg-[#111] border border-white/10 px-4 py-2 rounded-md">
              <option>All</option>
              <option>AI Film</option>
              <option>UI Design</option>
            </select>

            <select className="bg-[#111] border border-white/10 px-4 py-2 rounded-md">
              <option>Sub Category</option>
              <option>Cinematic</option>
              <option>Product</option>
            </select>
          </div>
        </div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {prompts.map((item, i) => (
            <div
              key={i}
              className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C7E36B]/40 transition group"
            >
              {/* IMAGE */}
              <div className="relative">
                <img src={item.img} className="w-full h-60 object-cover" />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-sm">Preview</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-md font-semibold mb-3">{item.title}</h3>

                {/* PROMPT BOX */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-400 text-sm relative">
                  <p className="line-clamp-4">{item.text}</p>

                  {/* COPY BUTTON */}
                  <button
                    onClick={() => navigator.clipboard.writeText(item.text)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white"
                  >
                    📋
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 LOAD MORE */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#C7E36B] text-black px-6 py-3 rounded-xl hover:opacity-90 transition">
            + Load More Prompts
          </button>
        </div>
      </div>
    </section>
  );
}
