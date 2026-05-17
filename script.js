const tools = [
    { name: "Atoms.dev", category: "coding", desc: "Build modern UIs faster with AI-powered components and templates.", url: "https://atoms.dev/?utm_source=affiliate&via=daniel-johnson", tags: ["FEATURED", "WEB"], featured: true },
    { name: "Notion AI", category: "productivity", desc: "The all-in-one AI workspace for your notes, docs, and projects.", url: "https://www.notion.com/", tags: ["WEB", "APP"], featured: true },
    { name: "Suno", category: "music", desc: "Create high-quality, full-length songs from text prompts.", url: "https://suno.com/", tags: ["HOT", "MUSIC"], featured: true },
    { name: "Udio", category: "music", desc: "State-of-the-art AI music generation with high fidelity.", url: "https://www.udio.com/", tags: ["NEW", "MUSIC"] },
    { name: "AIVA", category: "music", desc: "AI music composition for films, games, and media.", url: "https://www.aiva.ai/", tags: ["MUSIC"] },
    { name: "Boomy", category: "music", desc: "Make generative music and share it with the world.", url: "https://boomy.com/", tags: ["MUSIC"] },
    { name: "Soundraw", category: "music", desc: "AI music generator for content creators and artists.", url: "https://soundraw.io/", tags: ["MUSIC"] },
    { name: "Beatoven AI", category: "music", desc: "Create royalty-free mood-based music for your videos.", url: "https://www.beatoven.ai/", tags: ["MUSIC"] },
    { name: "Stable Audio", category: "music", desc: "Stability AI's model for high-quality audio and music generation.", url: "https://stableaudio.com/", tags: ["MUSIC", "AUDIO"] },
    { name: "Orb Producer Suite", category: "music", desc: "AI MIDI plugins for professional music production.", url: "https://www.orb-composer.com/", tags: ["PLUGIN", "MUSIC"] },
    { name: "ElevenLabs", category: "voice", desc: "The gold standard for AI voice synthesis and cloning.", url: "https://elevenlabs.io/", tags: ["VOICE", "API"] },
    { name: "Kits AI", category: "voice", desc: "AI voice platform designed specifically for musicians.", url: "https://www.kits.ai/", tags: ["VOICE", "MUSIC"] },
    { name: "Voicify AI", category: "voice", desc: "Create AI music covers with your favorite voices.", url: "https://www.voicify.ai/", tags: ["VOICE"] },
    { name: "PlayHT", category: "voice", desc: "Realistic AI voice generator for any use case.", url: "https://play.ht/", tags: ["VOICE", "API"] },
    { name: "Synthesizer V", category: "voice", desc: "High-end vocal synthesis for realistic singing performances.", url: "https://dreamtonics.com/synthesizerv/", tags: ["VOICE", "MUSIC"] },
    { name: "LALAL.AI", category: "audio-pro", desc: "World-class stem separation (vocals, drums, bass, instruments).", url: "https://www.lalal.ai/", tags: ["AUDIO", "STEMS"] },
    { name: "Moises", category: "audio-pro", desc: "The musician's app for stem separation and practice tools.", url: "https://moises.ai/", tags: ["AUDIO", "STEMS"] },
    { name: "LANDR", category: "audio-pro", desc: "Industry-standard AI mastering and distribution platform.", url: "https://www.landr.com/", tags: ["AUDIO", "PRO"] },
    { name: "iZotope", category: "audio-pro", desc: "AI-powered mixing and mastering plugins for professional producers.", url: "https://www.izotope.com/", tags: ["AUDIO", "PLUGIN"] },
    { name: "Ultimate Vocal Remover", category: "audio-pro", desc: "The best open-source tool for high-quality stem separation.", url: "https://ultimatevocalremover.com/", tags: ["FREE", "STEMS"] },
    { name: "DJ.Studio", category: "audio-pro", desc: "AI-powered DAW for DJs to create professional mixes faster.", url: "https://dj.studio/", tags: ["AUDIO", "DJ"] },
    { name: "Chartmetric", category: "audio-pro", desc: "AI-driven music data analytics for independent artists.", url: "https://chartmetric.com/", tags: ["ANALYTICS", "MUSIC"] },
    { name: "CrewAI", category: "agents", desc: "Framework for orchestrating autonomous AI agents.", url: "https://www.crewai.com/", tags: ["AGENTS", "DEV"] },
    { name: "Dify", category: "agents", desc: "Open-source LLM application development platform.", url: "https://dify.ai/", tags: ["AGENTS", "OSS"] },
    { name: "Ollama", category: "local", desc: "Run large language models locally on your hardware.", url: "https://ollama.com/", tags: ["LOCAL", "FREE"] },
    { name: "LM Studio", category: "local", desc: "Discover, download, and run local LLMs easily.", url: "https://lmstudio.ai/", tags: ["LOCAL"] },
    { name: "Cursor", category: "coding", desc: "The AI-first code editor for extreme productivity.", url: "https://cursor.com/", tags: ["CODING", "APP"] },
    { name: "Bolt.new", category: "coding", desc: "Build and deploy full-stack apps from a prompt.", url: "https://bolt.new/", tags: ["CODING", "WEB"] },
    { name: "Midjourney", category: "video", desc: "High-fidelity AI image generation via Discord.", url: "https://www.midjourney.com", tags: ["IMAGE"] },
    { name: "Runway", category: "video", desc: "Professional AI video generation and editing suite.", url: "https://runwayml.com/", tags: ["VIDEO", "PRO"] },
    { name: "HeyGen", category: "video", desc: "Realistic AI avatars for professional video production.", url: "https://www.heygen.com/", tags: ["VIDEO", "AVATAR"] }
];

const categoryNames = {
    all: "All Tools",
    coding: "Coding",
    music: "Music Gen",
    voice: "Voice/Vocals",
    "audio-pro": "Audio Pro/Stems",
    agents: "AI Agents",
    local: "Local AI",
    productivity: "Productivity",
    video: "Video/Image"
};

function renderCategories() {
    const nav = document.getElementById('categoryList');
    if (!nav) return;

    const counts = tools.reduce((acc, tool) => {
        acc[tool.category] = (acc[tool.category] || 0) + 1;
        return acc;
    }, {});

    let html = `<button class="filter-btn active" data-category="all">All (${tools.length})</button>`;
    for (const [id, label] of Object.entries(categoryNames)) {
        if (id === 'all') continue;
        html += `<button class="filter-btn" data-category="${id}">${label} (${counts[id] || 0})</button>`;
    }

    nav.innerHTML = html;
    setupFilterListeners();
}

function displayTools(filter = 'all', searchTerm = '') {
    const toolGrid = document.getElementById('toolGrid');
    const featuredGrid = document.getElementById('featuredGrid');
    const featuredSection = document.querySelector('.featured-section');

    if (!toolGrid) return;

    const filtered = tools.filter(t => {
        const matchesFilter = filter === 'all' || t.category === filter;
        const matchesSearch =
            t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.desc.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const createCard = (tool) => `
        <div class="tool-card">
            <div class="card-header">
                <span class="tag">${tool.category}</span>
                <div class="tool-logo">${tool.name[0]}</div>
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
            <div class="badge-row">
                ${(tool.tags || []).map(tag => `<span class="badge ${tag.toLowerCase()}">${tag}</span>`).join('')}
            </div>
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="view-link">Open Tool →</a>
        </div>
    `;

    if (filter === 'all' && searchTerm === '') {
        if (featuredSection) featuredSection.style.display = 'block';
        if (featuredGrid) {
            featuredGrid.innerHTML = tools.filter(t => t.featured).map(createCard).join('');
        }
        toolGrid.innerHTML = tools.filter(t => !t.featured).map(createCard).join('');
    } else {
        if (featuredSection) featuredSection.style.display = 'none';
        toolGrid.innerHTML = filtered.map(createCard).join('');
    }
}

function setupFilterListeners() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.getAttribute('data-category');
            const title = document.getElementById('currentCategoryTitle');
            if (title) title.innerText = categoryNames[cat] || 'Tools';

            const searchInput = document.getElementById('toolSearch');
            const searchValue = searchInput ? searchInput.value : '';

            displayTools(cat, searchValue);
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('toolSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeBtn = document.querySelector('.filter-btn.active');
            const activeCat = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
            displayTools(activeCat, e.target.value);
        });
    }

    document.querySelectorAll('.search-tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const term = tag.innerText.trim();
            if (searchInput) searchInput.value = term;
            displayTools('all', term);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    displayTools();
    setupSearch();
});
