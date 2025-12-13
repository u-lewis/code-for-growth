document.addEventListener('DOMContentLoaded', function () {
    /* ----------------------------------------------------------
       SPONSOR SLIDER — FIXED (no more shrinking on small screens)
    -----------------------------------------------------------*/
    const sponsors = [
        { name: "Microsoft", img: "img/microsoft.png" },
        { name: "equity", img: "img/equity.png" },
        { name: "MTN Rwanda", img: "img/mtn.png" },
        { name: "BK Tech House", img: "img/bk.png" },
        { name: "Github", img: "img/git.png" },
        { name: "netlify", img: "img/netlify.png" },
        { name: "Sina Gerard", img: "img/sina.jfif" },
        { name: "art", img: "img/art.png" }
    ];

    const sponsorTrack = document.querySelector('.sponsor-track');

    if (sponsorTrack) {
        // Duplicate sponsors for infinite loop effect
        const allSponsors = [...sponsors, ...sponsors];

        allSponsors.forEach(sponsor => {
            const sponsorItem = document.createElement('div');
            sponsorItem.className = 'sponsor-item mx-6 flex items-center justify-center';

            // Prevent shrinking on all screen sizes
            sponsorItem.style.flex = "0 0 auto";     
            sponsorItem.style.minWidth = "130px";    
            sponsorItem.style.display = "flex";      

            sponsorItem.innerHTML = `
                <img src="${sponsor.img}" alt="${sponsor.name}" 
                     style="height:70px; width:auto; object-fit:contain;">
            `;

            sponsorTrack.appendChild(sponsorItem);
        });
    }


    /* ----------------------------------------------------------
       PARTICIPANTS GENERATOR
    -----------------------------------------------------------*/
    const participantsGrid = document.getElementById('participants-grid');

    if (participantsGrid) {
        const rwandaNames = [
            "Alice Uwase", "Bob Imani", "Claire Mukamana", "David Habimana", "Eva Nyirahabimana",
            "Frank Mutabazi", "Grace Uwimana", "Henry Niyonshuti", "Uwacu Zaneza Lewis", "James Nkurunziza",
            "Kevin Rwigema", "Linda Mutesi", "Mike Byiringiro", "Nancy Ingabire", "Olivier Nshuti",
            "Patrick Niyigena", "Queen Uwase", "Roger Kwizera", "Sarah Uwamahoro", "Tom Ndahiro",
            "Umutoni Uwase", "Vincent Niyigena", "Winnie Mukamana", "Xavier Niyomugabo", "Yves Nsengiyumva",
            "Zoe Uwimbabazi", "Aime Niyonsaba", "Ishimwe Prince", "Chris Niyomugabo", "Diane Uwase"
        ];

        rwandaNames.forEach((name, index) => {
            const card = document.createElement('div');
            card.className = 'participant-card bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition';

            card.innerHTML = `
                <div class="flex items-center mb-3">
                     <img 
            src="img/pfp/${index + 1}.png" alt="${name}" class="w-12 h-12 rounded-full mr-3">
                    <div>
                        <h3 class="font-semibold text-gray-800">${name}</h3>
                        <p class="text-sm text-gray-600">Participant ID: CFG-${1000 + index}</p>
                    </div>
                </div>
                <p class="text-sm text-gray-700">Advancing to semi-finals on Dec 15, 2025</p>
            `;

            participantsGrid.appendChild(card);
        });
    }


    /* ----------------------------------------------------------
       CONTACT FORM ALERT
    -----------------------------------------------------------*/
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
