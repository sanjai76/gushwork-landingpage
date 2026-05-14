// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// IMAGE SLIDER

const featuredImage = document.getElementById("featuredImage");

const thumbnails = document.querySelectorAll(".thumb");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");


const images = [

    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop"

];

let currentIndex = 0;

function updateImage(index) {

    featuredImage.src = images[index];

    thumbnails.forEach((thumb) => {
        thumb.classList.remove("active");
    });

    thumbnails[index].classList.add("active");

}

nextBtn.addEventListener("click", () => {

    currentIndex = (currentIndex + 1) % images.length;

    updateImage(currentIndex);

});

prevBtn.addEventListener("click", () => {

    currentIndex =
        (currentIndex - 1 + images.length) % images.length;

    updateImage(currentIndex);

});

thumbnails.forEach((thumb, index) => {

    thumb.addEventListener("click", () => {

        currentIndex = index;

        updateImage(index);

    });

});




// OPTIONAL HOVER EFFECT

const mhRows = document.querySelectorAll(".mh-tech-table tbody tr");

mhRows.forEach((row) => {

    row.addEventListener("mouseenter", () => {

        row.style.background = "#24324f";

    });

    row.addEventListener("mouseleave", () => {

        row.style.background = "transparent";

    });

});




// ===================================
// FEATURE CARD HOVER EFFECT
// ===================================

const mhfCards = document.querySelectorAll(".mhf-feature-card");

mhfCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.borderColor = "#27348b";

    });

    card.addEventListener("mouseleave", () => {

        card.style.borderColor = "#d9d9d9";

    });

});
// REQUEST BUTTON EFFECT

const mhfQuoteBtn = document.querySelector(".mhf-request-btn");

mhfQuoteBtn.addEventListener("click", () => {

    alert("Quote Request Submitted!");

});




// ======================================
// FAQ ACCORDION
// ======================================

const mhfaqItems = document.querySelectorAll(".mhfaq-item");

mhfaqItems.forEach((item) => {

    const button = item.querySelector(".mhfaq-question");

    button.addEventListener("click", () => {

        mhfaqItems.forEach((faq) => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});




// =========================================
// CATALOGUE FORM SUBMIT
// =========================================

const mhcatForm = document.querySelector(".mhcat-form");

mhcatForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Catalogue Request Submitted!");

});




// =========================================
// APPLICATION SLIDER
// =========================================

const mhappSlider = document.querySelector(".mhapp-slider");

const mhappNextBtn = document.querySelector(".next-btn");

const mhappPrevBtn = document.querySelector(".prev-btn");

let mhappScrollAmount = 0;

mhappNextBtn.addEventListener("click", () => {

    mhappScrollAmount += 450;

    if (mhappScrollAmount > mhappSlider.scrollWidth) {

        mhappScrollAmount = 0;

    }

    mhappSlider.style.transform =
        `translateX(-${mhappScrollAmount}px)`;

});


mhappPrevBtn.addEventListener("click", () => {

    mhappScrollAmount -= 450;

    if (mhappScrollAmount < 0) {

        mhappScrollAmount = 0;

    }

    mhappSlider.style.transform =
        `translateX(-${mhappScrollAmount}px)`;

});



// =========================================
// PROCESS DATA
// =========================================

const mhproProcessData = [

    {
        step: "1",
        tab: "Raw Material",
        heading: "High-Grade Raw Material Selection",

        description:
            "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",

        points: [
            "PE100 grade material",
            "Optimal molecular weight distribution"
        ],

        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
    },

    {
        step: "2",
        tab: "Extrusion",
        heading: "Advanced Extrusion Technology",

        description:
            "High-performance extrusion systems deliver superior pipe consistency and dimensional precision.",

        points: [
            "Uniform melt flow",
            "Advanced screw technology"
        ],

        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
    },

    {
        step: "3",
        tab: "Cooling",
        heading: "Efficient Cooling Process",

        description:
            "Controlled cooling ensures dimensional stability and long-term durability of the pipes.",

        points: [
            "Temperature controlled tanks",
            "Precision water circulation"
        ],

        image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
    },

    {
        step: "4",
        tab: "Sizing",
        heading: "Accurate Pipe Sizing",

        description:
            "Precision calibration systems maintain exact pipe dimensions and tolerance levels.",

        points: [
            "Perfect roundness",
            "Dimensional accuracy"
        ],

        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
    },

    {
        step: "5",
        tab: "Quality Control",
        heading: "Strict Quality Inspection",

        description:
            "Each pipe undergoes multiple quality checks to ensure premium manufacturing standards.",

        points: [
            "Pressure testing",
            "Leak-proof verification"
        ],

        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
    },

    {
        step: "6",
        tab: "Marking",
        heading: "Automated Pipe Marking",

        description:
            "Advanced marking systems provide accurate identification and batch traceability.",

        points: [
            "Laser identification",
            "Production tracking"
        ],

        image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
    },

    {
        step: "7",
        tab: "Cutting",
        heading: "Precision Pipe Cutting",

        description:
            "Automated cutting technology ensures accurate pipe lengths with clean finishing.",

        points: [
            "Smooth edge finish",
            "Accurate measurements"
        ],

        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
    },

    {
        step: "8",
        tab: "Packaging",
        heading: "Safe Packaging & Delivery",

        description:
            "Secure packaging protects pipes during handling, storage, and transportation.",

        points: [
            "Protective wrapping",
            "Damage-free transport"
        ],

        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
    }

];

/* =========================================
   ELEMENTS
========================================= */

const mhproTabs =
    document.querySelectorAll(".mhpro-tab");

const mhproHeading =
    document.getElementById("mhproHeading");

const mhproDescription =
    document.getElementById("mhproDescription");

const mhproPoints =
    document.getElementById("mhproPoints");

const mhproMainImage =
    document.getElementById("mhproMainImage");

const mhproStep =
    document.getElementById("mhproStep");

const mhproStepTitle =
    document.getElementById("mhproStepTitle");

const mhproNextBtn =
    document.getElementById("mhproNextBtn");

const mhproPrevBtn =
    document.getElementById("mhproPrevBtn");

const mhproDesktopNext =
    document.querySelector(".mhpro-arrow.right");

const mhproDesktopPrev =
    document.querySelector(".mhpro-arrow.left");

/* =========================================
   CURRENT INDEX
========================================= */

let mhproCurrentIndex = 0;

/* =========================================
   UPDATE CONTENT FUNCTION
========================================= */

function mhproUpdateContent(index) {

    const data =
        mhproProcessData[index];

    // HEADING
    mhproHeading.innerText =
        data.heading;

    // DESCRIPTION
    mhproDescription.innerText =
        data.description;

    // IMAGE
    mhproMainImage.src =
        data.image;

    // STEP
    mhproStep.innerText =
        data.step;

    // STEP TITLE
    mhproStepTitle.innerText =
        data.tab;

    // POINTS
    mhproPoints.innerHTML = "";

    data.points.forEach(point => {

        mhproPoints.innerHTML += `

        <div class="mhpro-point">

            <i class="fa-solid fa-circle-check"></i>

            <span>${point}</span>

        </div>

        `;

    });

    // ACTIVE TAB
    mhproTabs.forEach(tab => {

        tab.classList.remove("active");

    });

    mhproTabs[index].classList.add("active");

}

/* =========================================
   TAB CLICK
========================================= */

mhproTabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        mhproCurrentIndex = index;

        mhproUpdateContent(mhproCurrentIndex);

    });

});

/* =========================================
   NEXT FUNCTION
========================================= */

function mhproNextSlide() {

    mhproCurrentIndex++;

    if (mhproCurrentIndex >= mhproProcessData.length) {

        mhproCurrentIndex = 0;

    }

    mhproUpdateContent(mhproCurrentIndex);

}

/* =========================================
   PREVIOUS FUNCTION
========================================= */

function mhproPrevSlide() {

    mhproCurrentIndex--;

    if (mhproCurrentIndex < 0) {

        mhproCurrentIndex =
            mhproProcessData.length - 1;

    }

    mhproUpdateContent(mhproCurrentIndex);

}

/* =========================================
   DESKTOP ARROWS
========================================= */

mhproDesktopNext.addEventListener(
    "click",
    mhproNextSlide
);

mhproDesktopPrev.addEventListener(
    "click",
    mhproPrevSlide
);

/* =========================================
   MOBILE/TABLET BUTTONS
========================================= */

mhproNextBtn.addEventListener(
    "click",
    mhproNextSlide
);

mhproPrevBtn.addEventListener(
    "click",
    mhproPrevSlide
);

/* =========================================
   INITIAL LOAD
========================================= */

mhproUpdateContent(mhproCurrentIndex);


// =========================================
// TESTIMONIAL AUTO CLONE
// =========================================

const mhtrustSlider =
    document.getElementById("mhtrustSlider");

const mhtrustCards =
    document.querySelectorAll(".mhtrust-card");

mhtrustCards.forEach((card) => {

    const clone = card.cloneNode(true);

    mhtrustSlider.appendChild(clone);

});




// =========================================
// PORTFOLIO BUTTON EFFECT
// =========================================

const mhportBtns =
    document.querySelectorAll(".mhport-btn");

mhportBtns.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        btn.innerHTML = "Explore Solution";

    });

    btn.addEventListener("mouseleave", () => {

        btn.innerHTML = "Learn More";

    });

});




// =========================================
// DOWNLOAD BUTTON EFFECT
// =========================================

const mhdocBtns =
    document.querySelectorAll(".mhdoc-download-btn");

mhdocBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        btn.innerHTML = `
      Downloading...
      <i class="fa-solid fa-spinner fa-spin"></i>
    `;

        setTimeout(() => {

            btn.innerHTML = `
        Download PDF
        <i class="fa-solid fa-download"></i>
      `;

        }, 2000);

    });

});

// =========================================
// TALK BUTTON
// =========================================

const mhdocTalkBtn =
    document.querySelector(".mhdoc-talk-btn");

mhdocTalkBtn.addEventListener("click", () => {

    alert("Our expert team will contact you shortly.");

});




// =========================================
// CTA FORM
// =========================================

const mhctaForm =
    document.getElementById("mhctaForm");

const mhctaBtn =
    document.querySelector(".mhcta-submit-btn");

mhctaForm.addEventListener("submit", (e) => {

    e.preventDefault();

    mhctaBtn.innerHTML = "Submitting...";

    setTimeout(() => {

        mhctaBtn.innerHTML = "Quote Requested ✓";

        mhctaBtn.style.background = "#1d9d55";

    }, 1800);

});




// =========================================
// FOOTER SIMPLE INTERACTION
// =========================================

const footerSocialIcons =
    document.querySelectorAll('.social-icons i');

footerSocialIcons.forEach(icon => {

    icon.addEventListener('mouseenter', () => {

        icon.style.transform = 'translateY(-4px) scale(1.05)';

    });

    icon.addEventListener('mouseleave', () => {

        icon.style.transform = 'translateY(0px) scale(1)';

    });

});




