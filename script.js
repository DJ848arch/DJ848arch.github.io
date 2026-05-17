const tools = [
    { name: "Atoms.dev", category: "coding", desc: "Build modern UIs faster with AI-powered components and templates.", url: "https://atoms.dev/?utm_source=affiliate&via=daniel-johnson" },
    { name: "Viktor.ai", category: "coding", desc: "Build and distribute powerful web apps for engineering and CAD workflows.", url: "https://www.viktor.ai/start-now" },
    { name: "Blink AI", category: "coding", desc: "The all-in-one app creation platform for AI-native entrepreneurs and developers.", url: "https://blink.new/?utm_source=meta&utm_medium=paid&utm_campaign=App+Builder+-+US+-+Scale+-+04.27.2026+-+Copy&utm_content=did-you-know-build-ai-app-captioned+-+Copy&utm_id=120246712631170744&utm_term=120246712666730744" },
    { name: "One Shot AI", category: "productivity", desc: "Ultra-precise AI trading signals for every market, directly inside TradingView.", url: "https://oneshotalgo.com/?rqz9pt9q=ly1fl3a7&utm_medium=paid&utm_source=ig&utm_id=120247574726490483&utm_content=120247829327940483&utm_term=120247656624080483&utm_campaign=120247574726490483&twrclid=182698940271955968" },
    { name: "Made This AI", category: "productivity", desc: "Create high-quality AI content and automation solutions.", url: "https://www.madethis.com/?utm_source=ig&utm_medium=Instagram_Reels&utm_campaign=L0408&utm_content=v1&utm_id=52626285952530&utm_term=52626285952330" },
    { name: "ChatGPT", category: "writing", desc: "Advanced language model for chat and content creation.", url: "https://openai.com/chatgpt" },
    { name: "Jasper", category: "writing", desc: "Professional AI content platform for marketing and business teams.", url: "https://www.jasper.ai/partners/solutions" },
    { name: "OutlierKit", category: "productivity", desc: "Powerful AI tools for content creators and YouTubers to grow their reach.", url: "https://outlierkit.com/p/affiliate" },
    { name: "SurferSEO", category: "writing", desc: "AI-driven content optimization to help your articles rank #1 on Google.", url: "https://surferseo.com/?fpr=YOUR_ID" },
    { name: "Pictory AI", category: "image", desc: "Automatically create short, highly-shareable branded videos from your long form content.", url: "https://pictory.ai/partner-with-pictory" },
    { name: "Systeme.io", category: "productivity", desc: "The easiest all-in-one marketing platform for your online business.", url: "https://systeme.io/affiliate-program" },
    { name: "Midjourney", category: "image", desc: "Stunning AI art generation from text prompts.", url: "https://www.midjourney.com" },
    { name: "GitHub Copilot", category: "coding", desc: "Your AI pair programmer for writing code faster.", url: "https://github.com/features/copilot" },
    { name: "Notion AI", category: "productivity", desc: "AI-powered workspace for notes and organization.", url: "https://affiliate.notion.so/YOUR_ID" },
    { name: "Claude", category: "writing", desc: "Helpful and safe AI assistant for complex tasks.", url: "https://claude.ai" },
    { name: "Writesonic", category: "writing", desc: "AI writer that creates SEO-friendly content for blogs, Facebook ads, and Google ads.", url: "https://writesonic.com/affiliate" },
    { name: "Grammarly", category: "writing", desc: "AI-powered writing assistant that makes your messages, documents, and posts clear.", url: "https://www.grammarly.com/affiliates" },
    { name: "AdCreative.ai", category: "productivity", desc: "Generate conversion-focused ad creatives in seconds.", url: "https://free-trial.adcreative.ai/YOUR_ID" }
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
