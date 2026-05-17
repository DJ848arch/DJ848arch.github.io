const tools = [
    // --- FEATURED ---
    { name: "Atoms.dev", category: "coding", desc: "Build modern UIs faster with AI-powered components and templates.", url: "https://atoms.dev/?utm_source=affiliate&via=daniel-johnson" },
    { name: "Notion AI", category: "writing", desc: "The all-in-one AI workspace for your notes, docs, and projects.", url: "https://www.notion.com/" },

    // --- BROWSER CONTROL / COMPUTER USE ---
    { name: "Browser Use", category: "browser", desc: "Connect LLMs to any website to perform tasks like a human.", url: "https://browser-use.com/" },
    { name: "MultiOn", category: "browser", desc: "Personal AI agent that can navigate the web and take actions for you.", url: "https://www.multion.ai/" },
    { name: "OpenInterpreter", category: "browser", desc: "An open-source, local-first interpreter that lets AI control your computer.", url: "https://openinterpreter.com/" },
    { name: "Skyvern", category: "browser", desc: "Automate browser-based workflows using AI agents.", url: "https://www.skyvern.com/" },

    // --- INFRASTRUCTURE / DEVOPS ---
    { name: "RunPod", category: "infrastructure", desc: "Cloud GPU platform for training and scaling AI models.", url: "https://www.runpod.io/" },
    { name: "Lepton AI", category: "infrastructure", desc: "Build and deploy AI applications in minutes, not weeks.", url: "https://www.lepton.ai/" },
    { name: "Unsloth AI", category: "infrastructure", desc: "Fine-tune LLMs 2-5x faster and with 70% less memory.", url: "https://unsloth.ai/" },
    { name: "OctoAI", category: "infrastructure", desc: "The fastest way to run, tune, and scale your AI models.", url: "https://octo.ai/" },
    { name: "Banana.dev", category: "infrastructure", desc: "Serverless GPU hosting for production-scale AI models.", url: "https://www.banana.dev/" },

    // --- GAME DEV ---
    { name: "Scenario.gg", category: "games", desc: "AI-generated game assets that stay consistent with your art style.", url: "https://www.scenario.com/" },
    { name: "Rosebud AI", category: "games", desc: "Create entire games from a prompt—text-to-game platform.", url: "https://www.rosebud.ai/" },
    { name: "Inworld AI", category: "games", desc: "AI-powered NPCs with personality and memory for virtual worlds.", url: "https://inworld.ai/" },
    { name: "Ludo AI", category: "games", desc: "The creative assistant for game designers—generate ideas and research.", url: "https://ludo.ai/" },

    // --- DATA / ML ---
    { name: "Gretel AI", category: "data", desc: "Safe, synthetic data to train your models without privacy risks.", url: "https://gretel.ai/" },
    { name: "Snorkel AI", category: "data", desc: "Programmatic data labeling for faster machine learning development.", url: "https://snorkel.ai/" },
    { name: "Mostly AI", category: "data", desc: "Generate realistic synthetic data for testing and development.", url: "https://mostly.ai/" },

    // --- AGENTS ---
    { name: "CrewAI", category: "agents", desc: "Framework for orchestrating autonomous AI agents.", url: "https://www.crewai.com/" },
    { name: "Dify", category: "agents", desc: "Open-source LLM application development platform.", url: "https://dify.ai/" },
    { name: "Taskade AI", category: "agents", desc: "Productivity platform with built-in multi-agent workflows.", url: "https://www.taskade.com/" },

    // --- DESIGN / CAD ---
    { name: "Uizard", category: "design", desc: "Design mobile apps and websites in minutes with AI.", url: "https://uizard.io/" },
    { name: "Galileo AI", category: "design", desc: "Generative AI for interface design—text to high-fidelity UI.", url: "https://www.usegalileo.ai/" },
    { name: "Spline AI", category: "design", desc: "3D design and collaboration platform with AI power.", url: "https://spline.design/ai" },
    { name: "Meshy AI", category: "design", desc: "AI-powered 3D asset generation for creative professionals.", url: "https://www.meshy.ai/" },

    // --- LOCAL AI ---
    { name: "Ollama", category: "local", desc: "Run large language models locally on macOS, Linux, and Windows.", url: "https://ollama.com/" },
    { name: "LM Studio", category: "local", desc: "Discover, download, and run local LLMs easily.", url: "https://lmstudio.ai/" },
    { name: "Jan AI", category: "local", desc: "Turn your computer into a private AI workstation.", url: "https://jan.ai/" },

    // --- FINANCE / LEGAL ---
    { name: "FinChat", category: "finance", desc: "ChatGPT for finance—investment research on public companies.", url: "https://finchat.io/" },
    { name: "Harvey AI", category: "legal", desc: "Professional AI for elite law firms.", url: "https://www.harvey.ai/" },

    // --- WRITING / STORYTELLING ---
    { name: "Sudowrite", category: "writing", desc: "The non-judgmental AI writing partner for fiction authors.", url: "https://www.sudowrite.com/" },
    { name: "NovelAI", category: "writing", desc: "AI-assisted storytelling and image generation.", url: "https://novelai.net/" },
    { name: "ChatGPT", category: "writing", desc: "OpenAI's legendary conversational assistant.", url: "https://openai.com/chatgpt" },
    
    // --- AUTOMATION / PROMPT ---
    { name: "PromptLayer", category: "automation", desc: "The first platform to manage and track your AI prompts.", url: "https://promptlayer.com/" },
    { name: "LangFuse", category: "automation", desc: "Open source observability and analytics for LLM apps.", url: "https://langfuse.com/" },
    { name: "Make", category: "automation", desc: "Visually build complex AI automations.", url: "https://www.make.com/" }
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
