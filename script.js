const tools = [
    { name: "Atoms.dev", category: "coding", desc: "Build modern UIs faster with AI templates.", url: "https://atoms.dev/?via=daniel", tags: ["FEATURED", "WEB"], featured: true },
    { name: "Suno", category: "music", desc: "Generate full-length songs with vocals.", url: "https://suno.com", tags: ["HOT", "FREE"], featured: true },
    { name: "Notion AI", category: "productivity", desc: "The all-in-one AI workspace.", url: "https://notion.com", tags: ["WEB", "APP"], featured: true },
    { name: "Udio", category: "music", desc: "Professional high-fidelity AI music.", url: "https://udio.com", tags: ["NEW", "WEB"] },
    { name: "ElevenLabs", category: "voice", desc: "Advanced AI voice synthesis.", url: "https://elevenlabs.io", tags: ["API", "PRO"] },
    { name: "Ollama", category: "local", desc: "Run LLMs locally on your machine.", url: "https://ollama.com", tags: ["FREE", "LOCAL"] },
    { name: "Cursor", category: "coding", desc: "AI-first code editor for pair programming.", url: "https://cursor.com", tags: ["HOT", "APP"] },
    { name: "HeyGen", category: "video", desc: "Realistic AI video avatars.", url: "https://heygen.com", tags: ["API", "PRO"] }
];

const categoryNames = {
    all: "All Tools",
    coding: "Coding",
    music: "Music Gen",
    voice: "Voice/Vocals",
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
                ${tool.tags.map(tag => `<span class="badge ${tag.toLowerCase()}">${tag}</span>`).join('')}
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
