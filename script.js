document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const submitBtn = document.getElementById('submitBtn');
    const resultDiv = document.getElementById('result');
    const loadingOverlay = document.getElementById('loading');
    const darkModeToggle = document.getElementById('darkModeToggle');

    submitBtn.addEventListener('click', fetchJobs);
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    async function fetchJobs() {
        const url = urlInput.value.trim();
        if (!url) {
            showNotification('Please enter a valid URL.', 'error');
            return;
        }

        showLoading(true);

        try {
            const response = await fetch(`http://localhost:8000/fetch-job/?url=${encodeURIComponent(url)}`);
            const data = await response.json();

            if (data.status === 'success') {
                displayJobs(data.data);
                showNotification('Jobs fetched successfully!', 'success');
            } else {
                showNotification(`Error: ${data.message}`, 'error');
            }
        } catch (error) {
            showNotification(`Error: ${error.message}`, 'error');
        } finally {
            showLoading(false);
        }
    }

    function displayJobs(jobs) {
        let output = '';
        if (Array.isArray(jobs)) {
            jobs.forEach((job, index) => {
                output += createJobHTML(job, index);
            });
        } else if (typeof jobs === 'object') {
            output = createJobHTML(jobs, 0);
        } else {
            output = '<p>No job data available.</p>';
        }
        resultDiv.innerHTML = output;
        animateResults();
    }

    function createJobHTML(job, index) {
        return `
            <div class="job-item" style="animation-delay: ${index * 0.1}s">
                <p class="job-detail"><strong>Company:</strong> ${job.company || 'N/A'}</p>
                <p class="job-detail"><strong>Location:</strong> ${job.location || 'N/A'}</p>
                <h3 class="job-title">${job.role || 'N/A'}</h3>
                <p class="job-detail"><strong>Experience:</strong> ${job.experience || 'N/A'}</p>
                <p class="job-detail"><strong>Skills:</strong> ${job.skills || 'N/A'}</p>
                <p class="job-detail"><strong>Description:</strong> ${job.description || 'N/A'}</p>
            </div>
        `;
    }

    function showLoading(isLoading) {
        loadingOverlay.style.display = isLoading ? 'flex' : 'none';
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    function animateResults() {
        const jobItems = document.querySelectorAll('.job-item');
        jobItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // Add input animation
    urlInput.addEventListener('focus', () => {
        urlInput.parentElement.classList.add('input-focus');
    });

    urlInput.addEventListener('blur', () => {
        urlInput.parentElement.classList.remove('input-focus');
    });

    // Add button hover effect
    submitBtn.addEventListener('mouseover', () => {
        submitBtn.style.transform = 'scale(1.05)';
    });

    submitBtn.addEventListener('mouseout', () => {
        submitBtn.style.transform = 'scale(1)';
    });

    // Implement smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
