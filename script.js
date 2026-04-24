const categories = {
    "work": { name: "Work & Productivity" },
    "ppt": { name: "Presentations" },
    "code": { name: "General Code" },
    "backend": { name: "Backend Development" },
    "frontend": { name: "Frontend Development" }
};

const mainContainer = document.getElementById('ai-categories');

// Only actual existing AI tools
const realAIs = {
    "work": [
        "Notion AI", "ChatGPT", "Claude", "Gemini", "Microsoft Copilot", 
        "Jasper", "GrammarlyGO", "Perplexity", "Copy.ai", "Otter.ai", 
        "Fireflies.ai", "Mem.ai", "Taskade", "ClickUp AI", "Rose AI"
    ],
    "ppt": [
        "Tome", "Gamma", "Beautiful.ai", "SlidesAI", "Pitch", 
        "Canva Magic Design", "Sendsteps", "Kroma.ai", "Designs.ai", "Prezi AI"
    ],
    "code": [
        "GitHub Copilot", "Cursor", "Codeium", "Tabnine", "Cody", 
        "Mintlify", "Amazon Q", "Blackbox AI", "Replit Ghostwriter", 
        "Mutable.ai", "Bito", "CodeRabbit"
    ],
    "backend": [
        "Prisma AI", "Supabase AI", "SQLCoder", "Postman AI", 
        "Warp AI", "Amazon CodeGuru", "Snyk Code", "DeepCode", "Safurai"
    ],
    "frontend": [
        "v0.dev", "Locofy", "Framer AI", "Relume", "Webflow AI", 
        "Builder.io", "Galileo AI", "Uizard", "TeleportHQ", "Anima", "Magician"
    ]
};

for (const [key, data] of Object.entries(categories)) {
    // create section container
    const section = document.createElement('section');
    section.className = 'content-section';
    section.id = key; 
    
    // create section title
    const title = document.createElement('h2');
    title.textContent = data.name;
    section.appendChild(title);
    
    // create list container
    const list = document.createElement('div');
    list.className = 'model-list';
    
    const aiNames = realAIs[key] || [];
    
    // create actual <a> tags for each AI
    aiNames.forEach(name => {
        const item = document.createElement('a');
        item.className = 'model-item';
        item.href = "#"; // Placeholder for real external links
        item.textContent = name;
        list.appendChild(item);
    });
    
    section.appendChild(list);
    mainContainer.appendChild(section);
}
