import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQsData = [
    {
        question: "What does incubation include?",
        answer: "Capital structuring, vault setup, 1:1 matching, tokenomics, GTM, media, and ongoing support.",
    },
    {
        question: "Do we need funding before applying?",
        answer: "No. Grant acquisition is part of incubation.",
    },
    {
        question: "Do we need to deploy capital?",
        answer: "Optional. Vault participation unlocks 1:1 matching and yield-funded growth.",
    },
];  

interface AccordionItemProps {
    question: string;
    answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b last:border-0 border-gray-200 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-2 text-left hover:text-blue-600 transition-colors cursor-pointer"
            >
                <span className="text-lg font-semibold text-gray-900">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {isOpen && (
                <div className="py-4 text-gray-600 leading-relaxed text-base">
                    {answer}
                </div>
            )}
        </div>
    );
};

export const FAQs = () => (
    <section className="py-24 px-6 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">FAQs</h2>
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
                {FAQsData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </div>
    </section>
);
