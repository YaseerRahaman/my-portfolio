document.addEventListener('DOMContentLoaded', () => {
    const viewGalleryButtons = document.querySelectorAll('.view-gallery-btn');
    const modal = document.getElementById('galleryModal');
    const closeModal = document.querySelector('.close-btn');
    const galleryImagesContainer = document.getElementById('galleryImages');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentImageIndex = 0;
    let currentGallery = [];

    // Sample image data for different galleries
    const galleryData = {
        bathroom: ['assets/image/bathroom/b_1.jpeg', 'assets/image/bathroom/b_2.jpeg', 'assets/image/bathroom/b_3.jpeg', 'assets/image/bathroom/b_5.jpeg','assets/image/bathroom/b_6.jpeg','assets/image/bathroom/b_7.jpeg','assets/image/bathroom/b_8.jpeg','assets/image/bathroom/b_9.jpeg'],
        'meeting-room': ['assets/image/meeting_room/m_2.png', 'assets/image/meeting_room/m_3.jpeg', 'assets/image/meeting_room/m_4.png','assets/image/meeting_room/m_5.jpeg','assets/image/meeting_room/m_6.png'],
        'hotel-room': ['assets/image/hotel_room/h_1.jpeg', 'assets/image/hotel_room/h_2.jpeg', 'assets/image/hotel_room/h_4.jpeg','assets/image/hotel_room/h_5.jpeg', 'assets/image/hotel_room/h_6.jpeg', 'assets/image/hotel_room/h_7.jpeg'],
        villa: ['assets/image/villa/v_1.jpeg', 'assets/image/villa/v_2.jpeg', 'assets/image/villa/v_3.jpeg'],
        gym: ['assets/image/gym/g_1.jpeg', 'assets/image/gym/g_2.jpeg', 'assets/image/gym/g_3.jpeg','assets/image/gym/g_4.jpeg', 'assets/image/gym/g_5.jpeg', 'assets/image/gym/g_6.jpeg'],
        conference: ['assets/image/conference/cf_1.jpeg', 'assets/image/conference/cf_2.jpeg', 'assets/image/conference/cf_3.jpeg','assets/image/conference/cf_4.jpeg']
    };

    // Event listener to open the gallery
    viewGalleryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const gallery = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            openGallery(gallery);
        });
    });

    // Function to open gallery and load images
    function openGallery(gallery) {
        currentGallery = galleryData[gallery];
        currentImageIndex = 0; // Reset index
        loadImages();
        modal.style.display = 'flex'; // Open the modal
    }

    // Function to load images into the gallery modal
    function loadImages() {
        galleryImagesContainer.innerHTML = ''; // Clear existing images
        const imagesToShow = currentGallery.slice(currentImageIndex, currentImageIndex + 3);
        imagesToShow.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            galleryImagesContainer.appendChild(img);
        });
        updateNavigationButtons();
    }

    // Update the prev/next buttons visibility
    function updateNavigationButtons() {
        prevBtn.disabled = currentImageIndex === 0;
        nextBtn.disabled = currentImageIndex + 3 >= currentGallery.length;
    }

    // Navigate to the previous set of images
    prevBtn.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex -= 3;
            loadImages();
        }
    });

    // Navigate to the next set of images
    nextBtn.addEventListener('click', () => {
        if (currentImageIndex + 3 < currentGallery.length) {
            currentImageIndex += 3;
            loadImages();
        }
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
