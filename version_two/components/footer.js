class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer-link {
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: #3b82f6;
          transform: translateX(4px);
        }
      </style>

      <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-8">
            
            <!-- About -->
            <div>
              <h3 class="text-xl font-bold mb-4 flex items-center">
                <i data-feather="code" class="w-6 h-6 mr-2"></i>
                CodeBloom
              </h3>
              <p class="text-gray-400">
                Empowering Rwanda's technological future through innovation and collaboration.
              </p>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li><a href="index.html" class="footer-link text-gray-400 flex items-center"><i data-feather="chevron-right" class="w-4 h-4 mr-2"></i> Home</a></li>
                <li><a href="about.html" class="footer-link text-gray-400 flex items-center"><i data-feather="chevron-right" class="w-4 h-4 mr-2"></i> About</a></li>
                <li><a href="participants.html" class="footer-link text-gray-400 flex items-center"><i data-feather="chevron-right" class="w-4 h-4 mr-2"></i> Participants</a></li>
                <li><a href="contact.html" class="footer-link text-gray-400 flex items-center"><i data-feather="chevron-right" class="w-4 h-4 mr-2"></i> Contact</a></li>
              </ul>
            </div>

            <!-- Contact Info -->
<div>
  <h4 class="text-lg font-semibold mb-4">Contact Info</h4>

  <!-- Address -->
  <div class="flex items-start text-gray-400 mb-4">
    <i data-feather="map-pin" class="w-5 h-5 mr-2 mt-0.5"></i>
    <span>KG 123 St, Kigali Heights</span>
  </div>

  <!-- Alert Card -->
  <div class="bg-yellow-600/10 border border-yellow-500/30 rounded-lg p-4 flex items-start">
    <i data-feather="alert-triangle" class="w-5 h-5 text-yellow-400 mr-3 mt-0.5"></i>
    <p class="text-yellow-300 text-sm">
      We’re sorry — email and phone contact details are currently available
      <strong>only to registered participants</strong>.
    </p>
  </div>
</div>


            <!-- Social -->
            <div>
              <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="https://www.facebook.com/" class="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition"><i data-feather="facebook"></i></a>
                <a href="https://x.com/" class="bg-gray-700 p-3 rounded-full hover:bg-blue-400 transition"><i data-feather="x"></i></a>
                <a href="https://www.instagram.com/" class="bg-gray-700 p-3 rounded-full hover:bg-pink-600 transition"><i data-feather="instagram"></i></a>
                <a href="https://www.linkedin.com/" class="bg-gray-700 p-3 rounded-full hover:bg-blue-700 transition"><i data-feather="linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Code for Growth Hackathon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;

    // Render feather icons
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);


