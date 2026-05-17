const tools = [
    // --- FEATURED ---
    { name: "Atoms.dev", category: "coding", desc: "Build modern UIs faster with AI-powered components and templates.", url: "https://atoms.dev/?utm_source=affiliate&via=daniel-johnson" },
    { name: "Notion AI", category: "productivity", desc: "The all-in-one AI workspace for your notes, docs, and projects.", url: "https://www.notion.com/" },

    // --- MUSIC GENERATION (music) ---
    { name: "Suno", category: "music", desc: "Create high-quality, full-length songs from text prompts.", url: "https://suno.com/" },
    { name: "Udio", category: "music", desc: "State-of-the-art AI music generation with high fidelity.", url: "https://www.udio.com/" },
    { name: "AIVA", category: "music", desc: "AI music composition for films, games, and media.", url: "https://www.aiva.ai/" },
    { name: "Boomy", category: "music", desc: "Make generative music and share it with the world.", url: "https://boomy.com/" },
    { name: "Soundraw", category: "music", desc: "AI music generator for content creators and artists.", url: "https://soundraw.io/" },
    { name: "Beatoven AI", category: "music", desc: "Create royalty-free mood-based music for your videos.", url: "https://www.beatoven.ai/" },
    { name: "Stable Audio", category: "music", desc: "Stability AI's model for high-quality audio and music generation.", url: "https://stableaudio.com/" },
    { name: "Orb Producer Suite", category: "music", desc: "AI MIDI plugins for professional music production.", url: "https://www.orb-composer.com/" },

    // --- VOICE / VOCALS (voice) ---
    { name: "ElevenLabs", category: "voice", desc: "The gold standard for AI voice synthesis and cloning.", url: "https://elevenlabs.io/" },
    { name: "Kits AI", category: "voice", desc: "AI voice platform designed specifically for musicians.", url: "https://www.kits.ai/" },
    { name: "Voicify AI", category: "voice", desc: "Create AI music covers with your favorite voices.", url: "https://www.voicify.ai/" },
    { name: "PlayHT", category: "voice", desc: "Realistic AI voice generator for any use case.", url: "https://play.ht/" },
    { name: "Synthesizer V", category: "voice", desc: "High-end vocal synthesis for realistic singing performances.", url: "https://dreamtonics.com/synthesizerv/" },

    // --- AUDIO PRO / TOOLS (audio-pro) ---
    { name: "LALAL.AI", category: "audio-pro", desc: "World-class stem separation (vocals, drums, bass, instruments).", url: "https://www.lalal.ai/" },
    { name: "Moises", category: "audio-pro", desc: "The musician's app for stem separation and practice tools.", url: "https://moises.ai/" },
    { name: "LANDR", category: "audio-pro", desc: "Industry-standard AI mastering and distribution platform.", url: "https://www.landr.com/" },
    { name: "iZotope", category: "audio-pro", desc: "AI-powered mixing and mastering plugins for professional producers.", url: "https://www.izotope.com/" },
    { name: "Ultimate Vocal Remover", category: "audio-pro", desc: "The best open-source tool for high-quality stem separation.", url: "https://ultimatevocalremover.com/" },
    { name: "DJ.Studio", category: "audio-pro", desc: "AI-powered DAW for DJs to create professional mixes faster.", url: "https://dj.studio/" },
    { name: "Chartmetric", category: "audio-pro", desc: "AI-driven music data analytics for independent artists.", url: "https://chartmetric.com/" },

    // --- AGENTIC AI (agents) ---
    { name: "CrewAI", category: "agents", desc: "Framework for orchestrating autonomous AI agents.", url: "https://www.crewai.com/" },
    { name: "Dify", category: "agents", desc: "Open-source LLM application development platform.", url: "https://dify.ai/" },

    // --- LOCAL AI (local) ---
    { name: "Ollama", category: "local", desc: "Run large language models locally on your hardware.", url: "https://ollama.com/" },
    { name: "LM Studio", category: "local", desc: "Discover, download, and run local LLMs easily.", url: "https://lmstudio.ai/" },

    // --- CODING ---
    { name: "Cursor", category: "coding", desc: "The AI-first code editor for extreme productivity.", url: "https://cursor.com/" },
    { name: "Bolt.new", category: "coding", desc: "Build and deploy full-stack apps from a prompt.", url: "https://bolt.new/" },

    // --- VIDEO / IMAGE ---
    { name: "Midjourney", category: "video", desc: "High-fidelity AI image generation via Discord.", url: "https://www.midjourney.com" },
    { name: "Runway", category: "video", desc: "Professional AI video generation and editing suite.", url: "https://runwayml.com/" },
    { name: "HeyGen", category: "video", desc: "Realistic AI avatars for professional video production.", url: "https://www.heygen.com/" }
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
