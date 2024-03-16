'use strict'

function onInitGallery() {
    loadImages()
    initEventListeners()
    fetchDataFromAPI()
    initializeLocalStorage()
}

function loadImages() {
    const imagePaths = {
        "'1.jpg'": "imgs/meme-imgs (square)/1.jpg",
        "2.jpg": "imgs/meme-imgs (square)/2.jpg",
        "3.jpg": "imgs/meme-imgs (square)/3.jpg",
        "4.jpg": "imgs/meme-imgs (square)/4.jpg",
        "5.jpg": "imgs/meme-imgs (square)/5.jpg",
        "6.jpg": "imgs/meme-imgs (square)/6.jpg",
        "7.jpg": "imgs/meme-imgs (square)/7.jpg",
        "8.jpg": "imgs/meme-imgs (square)/8.jpg",
        "9.jpg": "imgs/meme-imgs (square)/9.jpg",
        "10.jpg": "imgs/meme-imgs (square)/10.jpg",
        "11.jpg": "imgs/meme-imgs (square)/11.jpg",
        "12.jpg": "imgs/meme-imgs (square)/12.jpg",
        "13.jpg": "imgs/meme-imgs (square)/13.jpg",
        "14.jpg": "imgs/meme-imgs (square)/14.jpg",
        "15.jpg": "imgs/meme-imgs (square)/15.jpg",
        "16.jpg": "imgs/meme-imgs (square)/16.jpg",
        "17.jpg": "imgs/meme-imgs (square)/17.jpg",
        "18.jpg": "imgs/meme-imgs (square)/18.jpg",
        "19.jpg": "imgs/meme-imgs (various aspect ratios)/2.jpg",
        "20.jpg": "imgs/meme-imgs (various aspect ratios)/003.jpg",
        "21.jpg": "imgs/meme-imgs (various aspect ratios)/004.jpg",
        "22.jpg": "imgs/meme-imgs (various aspect ratios)/5.jpg",
        "23.jpg": "imgs/meme-imgs (various aspect ratios)/006.jpg",
        "24.jpg": "imgs/meme-imgs (various aspect ratios)/8.jpg",
        "25.jpg": "imgs/meme-imgs (various aspect ratios)/9.jpg",
        "26.jpg": "imgs/meme-imgs (various aspect ratios)/12.jpg",
        "27.jpg": "imgs/meme-imgs (various aspect ratios)/19.jpg",
        "28.jpg": "imgs/meme-imgs (various aspect ratios)/20.jpg",
        "29.jpg": "imgs/meme-imgs (various aspect ratios)/21.jpg",
        "30.jpg": "imgs/meme-imgs (various aspect ratios)/22.jpg",
        "31.jpg": "imgs/meme-imgs (various aspect ratios)/23.jpg",
        "32.jpg": "imgs/meme-imgs (various aspect ratios)/24.jpg",
        "33.jpg": "imgs/meme-imgs (various aspect ratios)/25.jpg",
        "34.jpg": "imgs/meme-imgs (various aspect ratios)/26.jpg",
        "35.jpg": "imgs/meme-imgs (various aspect ratios)/27.jpg",
        "36.jpg": "imgs/meme-imgs (various aspect ratios)/28.jpg",
        "37.jpg": "imgs/meme-imgs (various aspect ratios)/29.jpg",
        "38.jpg": "imgs/meme-imgs (various aspect ratios)/30.jpg",
        "39.jpg": "imgs/meme-imgs (various aspect ratios)/31.jpg",
        "40.jpg": "imgs/meme-imgs (various aspect ratios)/32.jpg",
        "41.jpg": "imgs/meme-imgs (various aspect ratios)/33.jpg",
        "42.jpg": "imgs/meme-imgs (various aspect ratios)/34.jpg",
    }

    const galleryContainer = document.querySelector('.gallery-container')

    for (const filename in imagePaths) {
        const imageUrl = imagePaths[filename]
        const galleryItem = document.createElement('div')
        galleryItem.classList.add('gallery-item')

        const img = document.createElement('img')
        img.src = imageUrl
        img.alt = "Meme Image"

        galleryItem.appendChild(img)
        galleryContainer.appendChild(galleryItem)
    }
}

function initEventListeners() {
    const galleryItems = document.querySelectorAll('.gallery-item img')
    
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const imageUrl = item.src
            console.log("Image clicked! URL: ", imageUrl)
        })
    })
}

function fetchDataFromAPI() {
    console.log("Fetching data from API...")
}

function initializeLocalStorage() {
    console.log("Initializing local storage...")
}