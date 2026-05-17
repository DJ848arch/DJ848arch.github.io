const tools = [
    // --- FEATURED ---
    { name: "Atoms.dev", category: "coding", desc: "Build modern UIs faster with AI-powered components and templates.", url: "https://atoms.dev/?utm_source=affiliate&via=daniel-johnson" },
    { name: "Notion AI", category: "productivity", desc: "The all-in-one AI workspace for your notes, docs, and projects.", url: "https://www.notion.com/" },

    // --- AGENTIC AI ---
    { name: "CrewAI", category: "agents", desc: "Framework for orchestrating role-playing, autonomous AI agents.", url: "https://www.crewai.com/" },
    { name: "Taskade AI Agents", category: "agents", desc: "Automate your workflows with multi-agent AI teams.", url: "https://www.taskade.com/ai/agents" },
    { name: "Flowise AI", category: "agents", desc: "Drag & drop UI to build your customized LLM orchestration flow.", url: "https://flowiseai.com/" },
    { name: "AgentOps", category: "agents", desc: "Observability and tracking for your AI agents.", url: "https://www.agentops.ai/" },
    { name: "Dify", category: "agents", desc: "Open-source LLM application development platform.", url: "https://dify.ai/" },

    // --- LOCAL / OFFLINE AI ---
    { name: "LM Studio", category: "local", desc: "Run any open-source LLM locally on your computer, offline.", url: "https://lmstudio.ai/" },
    { name: "Ollama", category: "local", desc: "Get up and running with large language models locally.", url: "https://ollama.com/" },
    { name: "AnythingLLM", category: "local", desc: "Full-stack desktop AI assistant that runs locally.", url: "https://useanything.com/" },
    { name: "Pinokio", category: "local", desc: "The browser that lets you install and run any AI app with one click.", url: "https://pinokio.computer/" },
    { name: "Jan AI", category: "local", desc: "Turn your computer into an AI-powered workstation.", url: "https://jan.ai/" },

    // --- DESIGN / CAD / 3D ---
    { name: "Viktor.ai", category: "design", desc: "Build and distribute web apps for engineering and CAD workflows.", url: "https://www.viktor.ai/start-now" },
    { name: "Spline AI", category: "design", desc: "Generate 3D objects, animations, and textures using prompts.", url: "https://spline.design/ai" },
    { name: "Meshy AI", category: "design", desc: "The fastest 3D AI generator for gaming and creative assets.", url: "https://www.meshy.ai/" },
    { name: "Kaedim", category: "design", desc: "Convert 2D images to 3D models automatically with AI.", url: "https://www.kaedim3d.com/" },

    // --- VIDEO / IMAGE ---
    { name: "HeyGen", category: "video", desc: "Create professional AI videos with life-like avatars in minutes.", url: "https://www.heygen.com/" },
    { name: "Synthesia", category: "video", desc: "AI video generation platform using realistic AI avatars.", url: "https://www.synthesia.io/" },
    { name: "Opus Clip", category: "video", desc: "Turn long videos into viral short clips with one click.", url: "https://www.opus.pro/" },
    { name: "Descript", category: "video", desc: "AI-powered video and podcast editing like a word doc.", url: "https://www.descript.com/" },
    { name: "Midjourney", category: "video", desc: "Top-tier AI image generation via Discord.", url: "https://www.midjourney.com" },
    { name: "Canva AI", category: "video", desc: "Magic Media tools for photos and video design.", url: "https://www.canva.com" },
    { name: "Pictory AI", category: "video", desc: "Automatically create short branded videos from long-form content.", url: "https://pictory.ai/partner-with-pictory" },

    // --- API / ROUTERS ---
    { name: "OpenRouter", category: "api", desc: "One API for every LLM. Compare models and switch instantly.", url: "https://openrouter.ai/" },
    { name: "Groq", category: "api", desc: "LPU Inference Engine—the world's fastest LLM inference.", url: "https://groq.com/" },
    { name: "Replicate", category: "api", desc: "Run AI models with a cloud API.", url: "https://replicate.com/" },

    // --- CODING ---
    { name: "Cursor", category: "coding", desc: "The AI-first code editor built for maximum productivity.", url: "https://cursor.com/" },
    { name: "Bolt.new", category: "coding", desc: "Build, run, and deploy full-stack web apps from a prompt.", url: "https://bolt.new/" },
    { name: "GitHub Copilot", category: "coding", desc: "Your AI pair programmer integrated in your IDE.", url: "https://github.com/features/copilot" },
    { name: "Blink AI", category: "coding", desc: "The app creation platform for AI-native developers.", url: "https://blink.new/" },

    // --- SECURITY ---
    { name: "Snyk AI", category: "security", desc: "Find and fix vulnerabilities in your code using AI.", url: "https://snyk.io/product/snyk-code/" },
    { name: "Dropzone AI", category: "security", desc: "AI-powered SOC analyst that investigates every alert.", url: "https://www.dropzone.ai/" },

    // --- PRODUCTIVITY ---
    { name: "HubSpot AI", category: "productivity", desc: "AI-powered CRM and marketing tools to automate business growth.", url: "https://www.hubspot.com/" },
    { name: "Mem AI", category: "productivity", desc: "The self-organizing workspace that thinks for you.", url: "https://mem.ai/" },
    { name: "Motion", category: "productivity", desc: "AI that automatically plans your day and schedule.", url: "https://www.usemotion.com/" },
    { name: "Rewind AI", category: "productivity", desc: "The search engine for your life—record what you see and hear.", url: "https://www.rewind.ai/" },
    { name: "Systeme.io", category: "productivity", desc: "The easiest all-in-one marketing platform for your online business.", url: "https://systeme.io/" },

    // --- WRITING ---
    { name: "ChatGPT", category: "writing", desc: "OpenAI's legendary conversational AI.", url: "https://openai.com/chatgpt" },
    { name: "Copy.ai", category: "writing", desc: "AI platform for high-converting marketing copy.", url: "https://www.copy.ai/" },
    { name: "Jasper", category: "writing", desc: "Professional AI content platform for marketing and business teams.", url: "https://www.jasper.ai/partners/solutions" },
    { name: "SurferSEO", category: "writing", desc: "AI-driven content optimization to help your articles rank #1 on Google.", url: "https://surferseo.com/" },
    { name: "Grammarly", category: "writing", desc: "AI-powered writing assistant for clear, professional messages.", url: "https://www.grammarly.com/affiliates" }
];

const toolGrid = document.getElementById('toolGrid');
const searchInput = document.getElementById('toolSearch');
const filterBtns = document.querySelectorAll('.filter-btn');

function displayTools(filteredTools) {
    toolGrid.innerHTML = filteredTools.map(tool => `
        <div class="tool-card">
            <span class="tag">${tool.category.toUpperCase()}</span>
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" style="color: #818cf8; text-decoration: none; font-weight: 600;">View Tool →</a>
        </div>
    `).join('');
}

// Initial display
displayTools(tools);

// Search functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = tools.filter(t => t.name.toLowerCase().includes(term) || t.desc.toLowerCase().includes(term));
    displayTools(filtered);
});

// Category filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        if (category === 'all') {
            displayTools(tools);
        } else {
            const filtered = tools.filter(t => t.category === category);
            displayTools(filtered);
        }
    });
});
