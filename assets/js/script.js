/*------------------------------------------------------------------
* Bootstrap Simple Admin Template
* Version: 3.0
* Author: Alexis Luna
* Website: https://github.com/alexis-luna/bootstrap-simple-admin-template
-------------------------------------------------------------------*/
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const sidebar = document.getElementById('sidebar');
        const body = document.getElementById('body');
        const sidebarCollapse = document.getElementById('sidebarCollapse');

        // Check saved sidebar state on page load
        const sidebarState = localStorage.getItem('sidebarState');
        if (sidebarState === 'opened') {
            sidebar.classList.remove('active');
            body.classList.remove('active');
        } else if (sidebarState === 'closed') {
            sidebar.classList.add('active');
            body.classList.add('active');
        }

        // Toggle sidebar and save state on button click
        sidebarCollapse.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            body.classList.toggle('active');
            
            // Save the updated state to localStorage
            if (sidebar.classList.contains('active')) {
                localStorage.setItem('sidebarState', 'closed');
            } else {
                localStorage.setItem('sidebarState', 'opened');
            }
        });

        // Close sidebar on mobile when clicking outside of it
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && !sidebarCollapse.contains(e.target)) {
                    sidebar.classList.add('active');
                    body.classList.add('active');
                    localStorage.setItem('sidebarState', 'closed');
                }
            }
        });

        // Highlight the active menu item based on the current path
        const currentPath = window.location.pathname;
        const menuItems = document.querySelectorAll('#sidebar ul li a');
        
        menuItems.forEach(item => {
            if (item.getAttribute('href') === currentPath) {
                item.classList.add('active');
                item.parentElement.classList.add('active');
            }
        });
    });
})();


