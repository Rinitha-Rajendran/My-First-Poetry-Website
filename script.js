// // script.js

// // Example: Display an alert
// document.addEventListener('DOMContentLoaded', function () {
//     alert('Welcome to Your Poetry Website!');
// });
// function showContent(card) {
//     // Get the content element inside the clicked card
//     var content = card.querySelector('.face2 .content');

//     // Toggle the 'show' class to display/hide the content
//     content.classList.toggle('show');

//     // If the content is being shown, fetch and load the poem content
//     if (content.classList.contains('show')) {
//         fetch('poem1.html')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.text();
//             })
//             .then(poemContent => {
//                 // Update the content of the '.content' element with the fetched poem content
//                 content.innerHTML = poemContent;
//             })
//             .catch(error => console.error('Error fetching poem:', error));
//     }
// }
function showPoem(poemUrl) {
    fetch(poemUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(poemContent => {
            document.getElementById('poemContent').innerHTML = poemContent;
            openModal();
        })
        .catch(error => console.error('Error fetching poem:', error));
}

function openModal() {
    document.getElementById('poemModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('poemModal').style.display = 'none';
}

function initComparisons() {
    var x, i;
    /* Find all elements with an "overlay" class: */
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      /* Once for each "overlay" element:
      pass the "overlay" element as a parameter when executing the compareImages function: */
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      /* Get the width and height of the img element */
      w = img.offsetWidth;
      h = img.offsetHeight;
      /* Set the width of the img element to 50%: */
      img.style.width = (w / 2) + "px";
      /* Create slider: */
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      /* Insert slider */
      img.parentElement.insertBefore(slider, img);
      /* Position the slider in the middle: */
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /* Execute a function when the mouse button is pressed: */
      slider.addEventListener("mousedown", slideReady);
      /* And another function when the mouse button is released: */
      window.addEventListener("mouseup", slideFinish);
      /* Or touched (for touch screens: */
      slider.addEventListener("touchstart", slideReady);
       /* And released (for touch screens: */
      window.addEventListener("touchend", slideFinish);
      function slideReady(e) {
        /* Prevent any other actions that may occur when moving over the image: */
        e.preventDefault();
        /* The slider is now clicked and ready to move: */
        clicked = 1;
        /* Execute a function when the slider is moved: */
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /* The slider is no longer clicked: */
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /* If the slider is no longer clicked, exit this function: */
        if (clicked == 0) return false;
        /* Get the cursor's x position: */
        pos = getCursorPos(e)
        /* Prevent the slider from being positioned outside the image: */
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /* Execute a function that will resize the overlay image according to the cursor: */
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        /* Get the x positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x coordinate, relative to the image: */
        x = e.pageX - a.left;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /* Resize the image: */
        img.style.width = x + "px";
        /* Position the slider: */
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }

//   function initComparisons() {
//     var x, i;
//     /* Find all elements with an "overlay" class: */
//     x = document.getElementsByClassName("img-comp-overlay");
//     for (i = 0; i < x.length; i++) {
//       /* Once for each "overlay" element:
//       pass the "overlay" element as a parameter when executing the compareImages function: */
//       compareImages(x[i]);
//     }
//     function compareImages(img) {
//       var slider, img, clicked = 0, w, h;
//       /* Get the width and height of the img element */
//       w = img.offsetWidth;
//       h = img.offsetHeight;
//       /* Set the width of the img element to 50%: */
//       img.style.width = (w / 2) + "px";
//       /* Create slider: */
//       slider = document.createElement("DIV");
//       slider.setAttribute("class", "img-comp-slider");
//       /* Insert slider */
//       img.parentElement.insertBefore(slider, img);
//       /* Position the slider in the middle: */
//       slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
//       slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
//       /* Execute a function when the mouse button is pressed: */
//       slider.addEventListener("mousedown", slideReady);
//       /* And another function when the mouse button is released: */
//       window.addEventListener("mouseup", slideFinish);
//       /* Or touched (for touch screens: */
//       slider.addEventListener("touchstart", slideReady);
//        /* And released (for touch screens: */
//       window.addEventListener("touchend", slideFinish);
//       function slideReady(e) {
//         /* Prevent any other actions that may occur when moving over the image: */
//         e.preventDefault();
//         /* The slider is now clicked and ready to move: */
//         clicked = 1;
//         /* Execute a function when the slider is moved: */
//         window.addEventListener("mousemove", slideMove);
//         window.addEventListener("touchmove", slideMove);
//       }
//       function slideFinish() {
//         /* The slider is no longer clicked: */
//         clicked = 0;
//       }
//       function slideMove(e) {
//         var pos;
//         /* If the slider is no longer clicked, exit this function: */
//         if (clicked == 0) return false;
//         /* Get the cursor's x position: */
//         pos = getCursorPos(e)
//         /* Prevent the slider from being positioned outside the image: */
//         if (pos < 0) pos = 0;
//         if (pos > w) pos = w;
//         /* Execute a function that will resize the overlay image according to the cursor: */
//         slide(pos);
//       }
//       function getCursorPos(e) {
//         var a, x = 0;
//         e = (e.changedTouches) ? e.changedTouches[0] : e;
//         /* Get the x positions of the image: */
//         a = img.getBoundingClientRect();
//         /* Calculate the cursor's x coordinate, relative to the image: */
//         x = e.pageX - a.left;
//         /* Consider any page scrolling: */
//         x = x - window.pageXOffset;
//         return x;
//       }
//       function slide(x) {
//         /* Resize the image: */
//         img.style.width = x + "px";
//         /* Position the slider: */
//         slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
//       }
//     }
//   }

//   /* Open when someone clicks on the span element */
// function openNav() {
//   document.getElementById("myNav").style.width = "100%";
// }

// /* Close when someone clicks on the "x" symbol inside the overlay */
// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
// }
document.addEventListener("DOMContentLoaded", function() {
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;
  const totalItems = carouselItems.length;

  function showItem(index) {
    carouselItems.forEach(item => item.classList.remove("active"));
    carouselItems[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
  }

  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

function toggleAuthorInfo() {
  var authorInfo = document.getElementById("author-info");
  if (authorInfo.style.display === "none") {
      authorInfo.style.display = "block";
  } else {
      authorInfo.style.display = "none";
  }
}

