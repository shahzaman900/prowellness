import type { NewsPost } from "@/lib/news/types";

export const post: NewsPost = {
  slug: "understanding-stroke-recognizing-the-signs-and-the-link-to-hypertension",
  title:
    "Understanding Stroke: Recognizing the Signs and the Link to Hypertension",
  publishedAt: "2024-04-24",
  excerpt:
    "Stroke is a leading cause of disability. Recognizing the FAST warning signs and managing hypertension via RPM are critical to saving lives.",
  category: "RPM",
  tags: ["Stroke", "Hypertension", "FAST", "Prevention"],
  coverImage: "/images/programs-condition-hero.png",
  coverImageAlt: "Recognizing stroke signs and managing hypertension",
  author: "ProWell Care Editorial Team",
  status: "published",
  sourceUrl:
    "https://prowellcare.com/understanding-stroke-recognizing-the-signs-and-the-link-to-hypertension/",
  content: [
    {
      type: "paragraph",
      text: "Stroke is a leading cause of death worldwide, and early recognition is vital. The American Heart Association (AHA) emphasizes the F.A.S.T. acronym as a primary way to identify a stroke in progress.",
    },
    {
      type: "heading",
      level: 2,
      text: "The F.A.S.T. Acronym",
    },
    {
      type: "list",
      items: [
        "Face Drooping: Does one side of the face droop or feel numb?",
        "Arm Weakness: Is one arm weak? Does it drift downward when raised?",
        "Speech Difficulty: Is speech slurred or difficult to understand?",
        "Time to Call 911: Call immediately if any signs appear, even if they go away.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The Hypertension Connection",
    },
    {
      type: "paragraph",
      text: "High blood pressure is a significant risk factor for stroke, as it damages arteries and makes them susceptible to blockages. Managing BP through proactive solutions like Remote Patient Monitoring (RPM) is crucial for prevention.",
    },
    {
      type: "paragraph",
      text: "ProactiveWellness specializes in enhancing patient management for hypertension, helping providers reduce hospitalizations and maintain high patient satisfaction through accessible RPM services.",
    },
  ],
};
