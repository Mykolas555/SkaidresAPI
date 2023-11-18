// Citatu slideris

function getData() {
    fetch("https://strangerthings-quotes.vercel.app/api/quotes/50")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data){
                createSlides(data);
                createSlideButtons(data);
            }else{
                showError(data);
            }
        }
    )
};

function createSlides(data) {
    const carousel = document.querySelector(".carousel-inner");
    for (let i in data) {
        let slideInfo = data[i];
        let slide = document.createElement("div");
        slide.className = "carousel-item";
        if (parseInt(i) == 0) {
            slide.classList.add("active");
        }
        slide.innerHTML=`<h3><i class="fa-regular fa-comment" style="color: #ffc800;"></i>
                        ${slideInfo.author}</h3>
                        <p>-${slideInfo.quote}</p>`;
        carousel.appendChild(slide);
    }
};

function createSlideButtons(data) {
    const slideButtonIndicators = document.querySelector(".carousel-indicators");
    for (let j = 3; j < data.length; j++) {
        let sliderbutton = document.createElement("button");
        sliderbutton.setAttribute("type", "button");
        sliderbutton.setAttribute("data-bs-target", "#carouselExampleDark");
        sliderbutton.setAttribute("data-bs-slide-to", j);
        sliderbutton.setAttribute("aria-label", `Slide ${j + 1}`);
        slideButtonIndicators.appendChild(sliderbutton);
        console.log(j);
    }
};

function showError(data){
    document.querySelector("#carouselExampleDark").style.display = 'none';
    const alertElement = document.querySelector('.alert');
    alertElement.textContent = data.Error;
    alertElement.style.display = 'block';
};

getData();
