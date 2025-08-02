import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Book, Bot, Lightbulb, Image } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 text-gray-800">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Smart Kids AI Lab – Ranisankail</h1>
        <p className="text-lg">Empowering Rural Children with Artificial Intelligence and Digital Skills</p>
        <p className="text-base text-gray-600">গ্রামীণ শিশুদের কৃত্রিম বুদ্ধিমত্তা ও ডিজিটাল শিক্ষায় প্রশিক্ষণ দেওয়া হচ্ছে</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <Brain className="text-blue-600" /> Our Mission / আমাদের লক্ষ্য
            </h2>
            <p>
              To introduce Artificial Intelligence, coding, and digital literacy to children in the village of Ranisankail, Thakurgaon. We aim to reduce the digital divide and prepare young minds for the future.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              রানীশংকৈল গ্রামের শিশুদের AI, কোডিং ও ডিজিটাল শিক্ষা প্রদান করা আমাদের মূল লক্ষ্য।
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <Bot className="text-purple-600" /> What We Teach / আমরা কী শেখাই
            </h2>
            <p>
              We teach Scratch, Python basics, Teachable Machine, robotics, and logical thinking through hands-on projects. Our goal is fun, engagement, and real-world skills.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              আমরা Scratch, Python, রোবোটিক্স ও AI শেখাই – মজার ও বাস্তবভিত্তিক শিক্ষা।
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="text-yellow-500" /> Why It Matters / এর গুরুত্ব
            </h2>
            <p>
              Rural children deserve the same opportunities as those in cities. By learning tech early, they become more confident, creative, and ready for tomorrow's world.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              প্রযুক্তি শিক্ষা পেলে গ্রামের শিশুরাও আত্মবিশ্বাসী ও উদ্ভাবনী হয়ে উঠতে পারে।
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <Book className="text-green-600" /> Get Involved / অংশ নিন
            </h2>
            <p>
              Want to help? We welcome donations, volunteers, and partnerships. Contact us to learn more and support this mission for change.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              আপনি সহায়তা করতে চান? অনুদান, স্বেচ্ছাসেবী এবং অংশীদারদের আমন্ত্রণ জানানো হচ্ছে।
            </p>
            <Button className="mt-4">Contact Us</Button>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <Image className="text-pink-500" /> Photo Gallery / ছবির গ্যালারি
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/photos/classroom1.jpg" alt="Classroom" className="rounded-2xl shadow" />
          <img src="/photos/robot-workshop.jpg" alt="Robot workshop" className="rounded-2xl shadow" />
          <img src="/photos/students-smiling.jpg" alt="Happy students" className="rounded-2xl shadow" />
          <img src="/photos/ai-session.jpg" alt="AI learning session" className="rounded-2xl shadow" />
        </div>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500">
        &copy; 2025 Smart Kids AI Lab – Ranisankail. Built for the future.
      </footer>
    </main>
  );
}
