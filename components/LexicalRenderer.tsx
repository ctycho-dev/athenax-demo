import { JSX } from "react";

interface LexicalNode {
   type: string;
   children?: LexicalNode[];
   text?: string;
   format?: number;
   tag?: string;
   mode?: string;
   listType?: string;
   [key: string]: any;
}

interface LexicalContent {
   root: LexicalNode;
}

function renderTextNode(node: LexicalNode) {
   if (!node.text) return null;

   let text = node.text;

   // Handle different text formats
   // format: 0 = normal, 1 = bold, 2 = italic, 3 = bold+italic
   if (node.format === 1) {
      return <strong key={Math.random()}>{text}</strong>;
   } else if (node.format === 2) {
      return <em key={Math.random()}>{text}</em>;
   } else if (node.format === 3) {
      return (
         <strong key={Math.random()}>
            <em>{text}</em>
         </strong>
      );
   }

   return text;
}

function renderNode(node: LexicalNode, index: number): React.ReactNode {
   if (!node) return null;

   // Text node
   if (node.type === "text") {
      return renderTextNode(node);
   }

   // Paragraph
   if (node.type === "paragraph") {
      return (
         <p key={index} className="mb-4 leading-relaxed">
            {node.children?.map((child, i) => renderNode(child, i))}
         </p>
      );
   }

   // Headings
   if (node.type === "heading") {
      const Tag = node.tag as keyof JSX.IntrinsicElements;
      const className =
         node.tag === "h1"
            ? "text-4xl font-bold mb-6 mt-8"
            : node.tag === "h2"
              ? "text-3xl font-bold mb-4 mt-6"
              : node.tag === "h3"
                ? "text-2xl font-bold mb-4 mt-6"
                : "text-xl font-bold mb-3 mt-4";

      return (
         <Tag key={index} className={className}>
            {node.children?.map((child, i) => renderNode(child, i))}
         </Tag>
      );
   }

   // Quote
   if (node.type === "quote") {
      return (
         <blockquote
            key={index}
            className="border-l-4 border-[#E63636] pl-4 italic my-6 text-gray-700"
         >
            {node.children?.map((child, i) => renderNode(child, i))}
         </blockquote>
      );
   }

   // Lists
   if (node.type === "list") {
      const ListTag = node.listType === "bullet" ? "ul" : "ol";
      return (
         <ListTag key={index} className="list-disc list-inside mb-4 space-y-2">
            {node.children?.map((child, i) => renderNode(child, i))}
         </ListTag>
      );
   }

   // List items
   if (node.type === "listitem") {
      return (
         <li key={index} className="ml-4">
            {node.children?.map((child, i) => renderNode(child, i))}
         </li>
      );
   }

   // Root node
   if (node.type === "root") {
      return <>{node.children?.map((child, i) => renderNode(child, i))}</>;
   }

   // Fallback for unknown nodes
   return null;
}

export default function LexicalRenderer({ content }: { content: LexicalContent }) {
   if (!content || !content.root) {
      return <p className="text-gray-500">No content available.</p>;
   }

   return <div className="prose prose-lg max-w-none">{renderNode(content.root, 0)}</div>;
}
