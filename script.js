const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');
const breedText = document.getElementById('breed');

fileInput.addEventListener('change', function (event) {
    const uploadedFile = event.target.files[0];

    // Check if a file is uploaded
    if (uploadedFile) {
        // Create a new FileReader object
        const reader = new FileReader();

        reader.onload = function (e) {
            // Set the image source after reading the file
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';

            // Here, you'd make an API call to your backend with the uploaded data (e.target.result)
            // This is a placeholder; replace it with your actual API call
            getDogBreedsFromAPI(e.target.result);
        };

        reader.readAsDataURL(uploadedFile);
    }
});

// This function represents your actual API call and needs to be replaced
// with your specific implementation to fetch dog breeds and images
function getDogBreedsFromAPI(imageData) {
    // Replace with your API call logic
    // This example just returns placeholder data
    const placeholderBreeds = ["PitBull", "Breed 2", "Breed 3"];
    const placeholderImages = [
        ["https://th.bing.com/th/id/OIP.6iDNL3PBhIYkKf-lTkjX0QHaFj?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.a60da3cbd0cda8bc591b711a8d7d2576?rik=lOxYfGaK2HDwHQ&riu=http%3a%2f%2felelur.com%2fdata_images%2fdog-breeds%2fpit-bull%2fpit-bull-04.jpg&ehk=TGGuSF%2bsyLQkQoY%2buX8munCgSFzYmbZcTpNPjP8fv%2bY%3d&risl=&pid=ImgRaw&r=0", "https://cf.ltkcdn.net/dogs/images/std/245944-1600x1067-Pitbull.jpg", "https://th.bing.com/th/id/OIP.6iDNL3PBhIYkKf-lTkjX0QHaFj?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.a60da3cbd0cda8bc591b711a8d7d2576?rik=lOxYfGaK2HDwHQ&riu=http%3a%2f%2felelur.com%2fdata_images%2fdog-breeds%2fpit-bull%2fpit-bull-04.jpg&ehk=TGGuSF%2bsyLQkQoY%2buX8munCgSFzYmbZcTpNPjP8fv%2bY%3d&risl=&pid=ImgRaw&r=0", "https://cf.ltkcdn.net/dogs/images/std/245944-1600x1067-Pitbull.jpg", "https://th.bing.com/th/id/OIP.6iDNL3PBhIYkKf-lTkjX0QHaFj?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.a60da3cbd0cda8bc591b711a8d7d2576?rik=lOxYfGaK2HDwHQ&riu=http%3a%2f%2felelur.com%2fdata_images%2fdog-breeds%2fpit-bull%2fpit-bull-04.jpg&ehk=TGGuSF%2bsyLQkQoY%2buX8munCgSFzYmbZcTpNPjP8fv%2bY%3d&risl=&pid=ImgRaw&r=0", "https://cf.ltkcdn.net/dogs/images/std/245944-1600x1067-Pitbull.jpg"], // Images for Breed 1
        ["https://th.bing.com/th/id/OIP.6iDNL3PBhIYkKf-lTkjX0QHaFj?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.a60da3cbd0cda8bc591b711a8d7d2576?rik=lOxYfGaK2HDwHQ&riu=http%3a%2f%2felelur.com%2fdata_images%2fdog-breeds%2fpit-bull%2fpit-bull-04.jpg&ehk=TGGuSF%2bsyLQkQoY%2buX8munCgSFzYmbZcTpNPjP8fv%2bY%3d&risl=&pid=ImgRaw&r=0", "https://cf.ltkcdn.net/dogs/images/std/245944-1600x1067-Pitbull.jpg", "https://th.bing.com/th/id/OIP.6iDNL3PBhIYkKf-lTkjX0QHaFj?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.a60da3cbd0cda8bc591b711a8d7d2576?rik=lOxYfGaK2HDwHQ&riu=http%3a%2f%2felelur.com%2fdata_images%2fdog-breeds%2fpit-bull%2fpit-bull-04.jpg&ehk=TGGuSF%2bsyLQkQoY%2buX8munCgSFzYmbZcTpNPjP8fv%2bY%3d&risl=&pid=ImgRaw&r=0", "https://cf.ltkcdn.net/dogs/images/std/245944-1600x1067-Pitbull.jpg", "https://th.bing.com/th/id/OIP.6iDNL3PBhIYkKf-lTkjX0QHaFj?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.a60da3cbd0cda8bc591b711a8d7d2576?rik=lOxYfGaK2HDwHQ&riu=http%3a%2f%2felelur.com%2fdata_images%2fdog-breeds%2fpit-bull%2fpit-bull-04.jpg&ehk=TGGuSF%2bsyLQkQoY%2buX8munCgSFzYmbZcTpNPjP8fv%2bY%3d&risl=&pid=ImgRaw&r=0", "https://cf.ltkcdn.net/dogs/images/std/245944-1600x1067-Pitbull.jpg"], // Images for Breed 1
        ["https://th.bing.com/th/id/OIP.6iDNL3PBhIYkKf-lTkjX0QHaFj?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.a60da3cbd0cda8bc591b711a8d7d2576?rik=lOxYfGaK2HDwHQ&riu=http%3a%2f%2felelur.com%2fdata_images%2fdog-breeds%2fpit-bull%2fpit-bull-04.jpg&ehk=TGGuSF%2bsyLQkQoY%2buX8munCgSFzYmbZcTpNPjP8fv%2bY%3d&risl=&pid=ImgRaw&r=0", "https://cf.ltkcdn.net/dogs/images/std/245944-1600x1067-Pitbull.jpg", "https://th.bing.com/th/id/OIP.6iDNL3PBhIYkKf-lTkjX0QHaFj?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.a60da3cbd0cda8bc591b711a8d7d2576?rik=lOxYfGaK2HDwHQ&riu=http%3a%2f%2felelur.com%2fdata_images%2fdog-breeds%2fpit-bull%2fpit-bull-04.jpg&ehk=TGGuSF%2bsyLQkQoY%2buX8munCgSFzYmbZcTpNPjP8fv%2bY%3d&risl=&pid=ImgRaw&r=0", "https://cf.ltkcdn.net/dogs/images/std/245944-1600x1067-Pitbull.jpg", "https://th.bing.com/th/id/OIP.6iDNL3PBhIYkKf-lTkjX0QHaFj?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.a60da3cbd0cda8bc591b711a8d7d2576?rik=lOxYfGaK2HDwHQ&riu=http%3a%2f%2felelur.com%2fdata_images%2fdog-breeds%2fpit-bull%2fpit-bull-04.jpg&ehk=TGGuSF%2bsyLQkQoY%2buX8munCgSFzYmbZcTpNPjP8fv%2bY%3d&risl=&pid=ImgRaw&r=0", "https://cf.ltkcdn.net/dogs/images/std/245944-1600x1067-Pitbull.jpg"], // Images for Breed 1
    ];

    // Display breed names
    breedText.innerHTML = "<h2>Breeds:</h2>";
    placeholderBreeds.forEach((breed, index) => {
        breedText.innerHTML += `<h1>${breed}</h1>`;
        // Display images for each breed
        const images = placeholderImages[index].slice(0, 10); // Show only the first 10 images
        images.forEach(image => {
            breedText.innerHTML += `<img src="${image}" alt="${breed}" style="max-width: 100px; margin-right: 5px;">`;
        });
    });
}
