class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #3B82F6, #06B6D4);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after,
        .active::after {
          width: 100%;
        }
      </style>

      <nav class="bg-white shadow-sm">
        <div class="container mx-auto px-6 py-4">
          <div class="flex justify-between items-center">

            <!-- Logo -->
            <a href="index.html" class="flex items-center">
              <div class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-xl px-3 py-1 rounded mr-2">
                CFG
              </div>
              <span class="text-xl font-bold text-gray-800">CodeForGrowth</span>
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
              <a href="index.html" class="nav-link text-gray-600 hover:text-gray-900" data-page="index.html">Home</a>
              <a href="about.html" class="nav-link text-gray-600 hover:text-gray-900" data-page="about.html">About</a>
              <a href="participants.html" class="nav-link text-gray-600 hover:text-gray-900" data-page="participants.html">Participants</a>
              <a href="contact.html" class="nav-link text-gray-600 hover:text-gray-900" data-page="contact.html">Contact</a>
            </div>

            <!-- Mobile Hamburger -->
            <button id="menu-btn" class="md:hidden text-gray-700 focus:outline-none">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          <!-- Mobile Menu -->
          <div id="mobile-menu" class="hidden md:hidden mt-4 space-y-3">
            <a href="index.html" class="block nav-link text-gray-600" data-page="index.html">Home</a>
            <a href="about.html" class="block nav-link text-gray-600" data-page="about.html">About</a>
            <a href="participants.html" class="block nav-link text-gray-600" data-page="participants.html">Participants</a>
            <a href="contact.html" class="block nav-link text-gray-600" data-page="contact.html">Contact</a>
          </div>
        </div>
      </nav>
    `;

    this.highlightActivePage();
    this.setupMobileMenu();
  }

  setupMobileMenu() {
    const btn = this.querySelector('#menu-btn');
    const menu = this.querySelector('#mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = this.querySelectorAll('[data-page]');
    links.forEach(link => {
      if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('active', 'text-gray-900', 'font-semibold');
        link.classList.remove('text-gray-600');
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
