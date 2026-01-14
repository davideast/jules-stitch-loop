// Test script to simulate dispatch-jules.ts argument parsing
import matter from 'gray-matter';
import { readFileSync } from 'fs';

// Read the next-prompt.md file content
const promptContent = readFileSync('next-prompt.md', 'utf-8');

console.log('📄 Raw content:');
console.log(promptContent);
console.log('---');

// Simulate what dispatch-jules.ts does
const parsed = matter(promptContent);
const fileName = parsed.data.page;
const prompt = parsed.content;

console.log('📦 Parsed frontmatter:');
console.log('  page:', fileName);
console.log('---');
console.log('📝 Prompt content:');
console.log(prompt.trim());
