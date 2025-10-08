document.addEventListener('DOMContentLoaded', function() {
       // Sidebar Toggle Function (With Temporary Debug Logs)
   function toggleSidebar() {
       console.log('Toggle function called!'); // Confirms click reaches here
       const sidebar = document.getElementById('sidebar');
       const main = document.getElementById('main');
       const toggleBtn = document.querySelector('.toggle-btn');
       console.log('Elements check:', { sidebar: !!sidebar, main: !!main, toggleBtn: !!toggleBtn }); // true/false for each
       if (sidebar && main && toggleBtn) {
           const wasActive = sidebar.classList.contains('active');
           sidebar.classList.toggle('active');
           main.classList.toggle('shifted');
           toggleBtn.classList.toggle('active');
           console.log('Classes toggled! Sidebar active now:', !wasActive); // Shows state change
       } else {
           console.error('Elements missing—check HTML IDs!');
       }
   }
   

    // Populate Sidebar Menu (Matches Your Flat Nav)
    function populateSidebar() {
        const sidebarMenu = document.getElementById('sidebar-menu');
        if (sidebarMenu) {
            sidebarMenu.innerHTML = `
                <li><a href="index.html">🏠 Home</a></li>
                <li><a href="education.html">🎓 Education</a></li>
                <li><a href="experience.html">⚡ Experience</a></li>
                <li><a href="skills.html">🛠️ Skills</a></li>
                <li><a href="certifications.html">🏆 Certification</a></li>
                <li><a href="advocacy.html">❤️ Advocacy</a></li>
                <li><a href="portfolio.html">🎮 Portfolio</a></li>
            `;
        }
    }

    // Highlight Active Link in Sidebar
    function highlightActive() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        // Sidebar
        const sideLinks = document.querySelectorAll('#sidebar-menu a');
        sideLinks.forEach(link => link.classList.remove('active'));
        const sideActive = Array.from(sideLinks).find(link => link.getAttribute('href') === currentPath);
        if (sideActive) sideActive.classList.add('active');
    }

    // Close Sidebar on Outside Click
    document.addEventListener('click', function(e) {
        const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.querySelector('.toggle-btn');
        if (sidebar && !sidebar.contains(e.target) && !toggleBtn.contains(e.target) && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });

    // Event Listeners
    const toggleBtn = document.querySelector('.toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent outside click close
            toggleSidebar();
        });
    }

    // Resize: Close on Desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const sidebar = document.getElementById('sidebar');
            const main = document.getElementById('main');
            const toggleBtn = document.querySelector('.toggle-btn');
            if (sidebar) sidebar.classList.remove('active');
            if (main) main.classList.remove('shifted');
            if (toggleBtn) toggleBtn.classList.remove('active');
        }
    });

    // Initialize
    populateSidebar();
    highlightActive();
});
