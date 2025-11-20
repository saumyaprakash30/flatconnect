// Blog posts configuration
const blogPosts = [
  {
    slug: "apartment-management-app-small-societies",
    title: "Why Every Small Society Needs an Apartment Management App in 2025",
    excerpt: "Discover how apartment management apps revolutionize small societies across India. Learn why digital transformation from diary-based systems is essential for modern communities with 8-200 flats.",
    category: "App Features",
    date: "2025-11-20",
    readTime: "8 min",
    featured: true,
    keywords: ["apartment management app", "small society management", "society digitalization"]
  },
  {
    slug: "society-maintenance-app-guide",
    title: "Complete Guide to Society Maintenance App Features",
    excerpt: "Explore essential features every society maintenance app should have. From expense tracking to resident communication, understand what makes a maintenance management system effective for your community.",
    category: "Society Management",
    date: "2025-11-18", 
    readTime: "12 min",
    featured: true,
    keywords: ["society maintenance app", "apartment maintenance software", "residential society app"]
  },
  {
    slug: "housing-society-app-india",
    title: "Housing Society App India: Top Features for Indian Communities",
    excerpt: "Learn about the most important features Indian housing societies need in their management apps. From multi-language support to local payment methods, discover what works best for Indian communities.",
    category: "Digital Transformation",
    date: "2025-11-15",
    readTime: "10 min",
    featured: true,
    keywords: ["housing society app India", "Indian society management", "apartment app features India"]
  },
  {
    slug: "flat-app-payment-reminder-system",
    title: "Flat App Payment Reminder: Automate Your Maintenance Collection",
    excerpt: "Discover how automated payment reminders can improve maintenance collection rates by 40%. Learn best practices for setting up effective reminder systems that residents actually respond to.",
    category: "Finance & Payments",
    date: "2025-11-12",
    readTime: "9 min",
    featured: true,
    keywords: ["flat app payment reminder", "maintenance payment automation", "society payment collection"]
  }
];

// Function to render blog posts
function renderBlogPosts() {
  const blogContainer = document.getElementById('blog-posts');
  if (!blogContainer) return;

  blogContainer.innerHTML = '';

  blogPosts.forEach(post => {
    const postCard = createBlogPostCard(post);
    blogContainer.appendChild(postCard);
  });
}

// Function to create individual blog post card
function createBlogPostCard(post) {
  const col = document.createElement('div');
  col.className = 'col-lg-6 mb-4';

  const postUrl = `post.html?post=${post.slug}`;

  col.innerHTML = `
    <article class="blog-post-card">
      <div class="blog-post-header">
        <div class="blog-meta">
          <i class="fa fa-calendar"></i> ${formatDate(post.date)} &nbsp;&nbsp;
          <i class="fa fa-tag"></i> ${post.category}
        </div>
      </div>
      <div class="blog-post-content">
        <h3>${post.title}</h3>
        <p class="excerpt">${post.excerpt}</p>
        <a href="${postUrl}" class="read-more-btn">
          Read More <i class="fa fa-arrow-right"></i>
        </a>
      </div>
    </article>
  `;

  return col;
}

// Function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Function to get featured posts
function getFeaturedPosts() {
  return blogPosts.filter(post => post.featured).slice(0, 4);
}

// Function to get posts by category
function getPostsByCategory(category) {
  return blogPosts.filter(post => post.category === category);
}

// Function to search posts
function searchPosts(query) {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery)) ||
    post.category.toLowerCase().includes(lowercaseQuery)
  );
}

// Initialize blog when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderBlogPosts();
  
  // Track blog page view
  if (typeof gtag === 'function') {
    gtag('event', 'page_view', {
      'page_title': 'FlatConnect Blog',
      'page_location': window.location.href,
      'custom_parameter_1': 'blog_main_page'
    });
  }
});

// Export for use in other scripts
window.blogManager = {
  posts: blogPosts,
  renderBlogPosts,
  getFeaturedPosts,
  getPostsByCategory,
  searchPosts,
  formatDate
};