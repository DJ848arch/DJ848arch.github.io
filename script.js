// To earn side money, replace these '#' links with your actual affiliate links!
const tools = [
    { name: "Atoms.dev", category: "coding", desc: "Build modern UIs faster with AI-powered components and templates.", url: "https://atoms.dev/?utm_source=affiliate&via=daniel-johnson" },
    { name: "ChatGPT", category: "writing", desc: "Advanced language model for chat and content creation.", url: "https://openai.com/chatgpt" },
    { name: "Midjourney", category: "image", desc: "Stunning AI art generation from text prompts.", url: "https://www.midjourney.com" },
    { name: "GitHub Copilot", category: "coding", desc: "Your AI pair programmer for writing code faster.", url: "https://github.com/features/copilot" },
    { name: "Notion AI", category: "productivity", desc: "AI-powered workspace for notes and organization.", url: "https://affiliate.notion.so/YOUR_ID" },
    { name: "Jasper", category: "writing", desc: "Marketing-focused AI content generator.", url: "https://jasper.ai?special_link=YOUR_ID" },
    { name: "Claude", category: "writing", desc: "Helpful and safe AI assistant for complex tasks.", url: "https://claude.ai" },
    { name: "AdCreative.ai", category: "productivity", desc: "Generate conversion-focused ad creatives in seconds.", url: "https://free-trial.adcreative.ai/YOUR_ID" },
    { name: "SurferSEO", category: "writing", desc: "AI-driven content optimization for search engines.", url: "https://surferseo.com/?fpr=YOUR_ID" }
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