// 1. DATA IN ENGLISH AND AMHARIC
const spaceData = {
    en: {
        navHome: "Home", navSolar: "Solar System", navOrbit: "3D Solar", navFeatures: "Features",
        navGallery: "Gallery", navQuiz: "Quiz", navNasa: "NASA",
        heroHeading: "Explore Our <span>Amazing Solar System</span>",
        heroDesc: "Discover the Sun and the eight planets. Learn amazing facts and enjoy exploring space.",
        startBtn: "🚀 Start Exploring", orbitHeading: "Animated Solar System",
        solarHeading: "Our Solar System", solarDesc: "Explore the Sun and the eight amazing planets.",
        btnAll: "🌌 All", btnInner: "🪨 Inner Planets", btnOuter: "🪐 Outer Planets",
        cardSun: "Sun (Star)", cardMercury: "Mercury", cardVenus: "Venus", cardEarth: "Earth", cardMars: "Mars",
        cardJupiter: "Jupiter", cardSaturn: "Saturn", cardUranus: "Uranus", cardNeptune: "Neptune",
        featLearnHead: "🌍 Learn", featLearnDesc: "Learn about every planet in our Solar System.",
        featFactsHead: "📚 Facts", featFactsDesc: "Discover amazing facts about planets, stars, and space.",
        featQuizHead: "❓ Quiz", featQuizDesc: "Test your knowledge with fun space questions.",
        featExploreHead: "🚀 Explore", featExploreDesc: "Enjoy beautiful images and explore the universe.",
        galleryHeading: "Planet Gallery", galleryDesc: "Click on any planet to learn more.",
        galMercury: "Mercury", galVenus: "Venus", galEarth: "Earth", galMars: "Mars",
        galJupiter: "Jupiter", galSaturn: "Saturn", galUranus: "Uranus", galNeptune: "Neptune",
        quizHeading: "🚀 Space Quiz", quizDesc: "Test your Solar System knowledge!",
        nasaHeading: "🚀 NASA Astronomy Picture of the Day", footerLogo: "🌍 Planet Explorer",
        footerDesc: "Discover the beauty of our Solar System.",
        planets: {
            Sun: { title: "The Sun", desc: "The Sun is the star at the center of our Solar System. It gives light and heat to all planets." },
            Mercury: { title: "Mercury", desc: "Mercury is the smallest planet and closest to the Sun. It is very hot during the day and freezing at night." },
            Venus: { title: "Venus", desc: "Venus is the hottest planet because of its thick atmosphere. It shines brightly in the night sky." },
            Earth: { title: "Earth", desc: "Earth is our home planet. It is the only planet known to have life, water, and air." },
            Mars: { title: "Mars", desc: "Mars is known as the Red Planet because of iron oxide on its surface. Scientists are exploring it for signs of life." },
            Jupiter: { title: "Jupiter", desc: "Jupiter is the largest planet in our Solar System. It has a giant red storm that has lasted for hundreds of years." },
            Saturn: { title: "Saturn", desc: "Saturn is famous for its beautiful rings made of ice and rock. It is a giant gas planet." },
            Uranus: { title: "Uranus", desc: "Uranus is an ice giant planet. It rotates on its side, unlike all other planets." },
            Neptune: { title: "Neptune", desc: "Neptune is the farthest planet from the Sun. It is a blue, windy, and icy world." }
        }
    },
    am: {
        navHome: "ዋና ገጽ", navSolar: "ስርዓተ ፀሐይ", navOrbit: "3ዲ እይታ", navFeatures: "ባህሪያት",
        navGallery: "ማዕከለ-ስዕላት", navQuiz: "ፈተና", navNasa: "ናሳ (NASA)",
        heroHeading: "ድንቁን <span>የስርዓተ ፀሐይ አካል</span> ያስሱ",
        heroDesc: "ፀሐይንና ስምንቱን ፕላኔቶች ይወቁ። አስደናቂ እውነታዎችን ይማሩ እና በህዋ ጉዞ ይደሰቱ።",
        startBtn: "🚀 ማሰስ ጀምር", orbitHeading: "የፕላኔቶች እንቅስቃሴ",
        solarHeading: "የእኛ ስርዓተ ፀሐይ", solarDesc: "ፀሐይን እና ስምንቱን አስደናቂ ፕላኔቶች ያስሱ።",
        btnAll: "🌌 ሁሉንም", btnInner: "🪨 የውስጥ ፕላኔቶች", btnOuter: "🪐 የውጭ ፕላኔቶች",
        cardSun: "ፀሐይ (ኮከብ)", cardMercury: "ኩጁፕ (Mercury)", cardVenus: "ዙህራ (Venus)", cardEarth: "መሬት (Earth)", cardMars: "ማርስ (Mars)",
        cardJupiter: "መሽተሪ (Jupiter)", cardSaturn: "ዙሀል (Saturn)", cardUranus: "ዩራኑስ (Uranus)", cardNeptune: "ኔፕቲዩን (Neptune)",
        featLearnHead: "🌍 መማር", featLearnDesc: "በስርዓተ ፀሐይ ውስጥ ስላሉት እያንዳንዱ ፕላኔቶች ይማሩ።",
        featFactsHead: "📚 እውነታዎች", featFactsDesc: "ስለ ፕላኔቶች፣ ከዋክብት እና ስለ ህዋ አስደናቂ እውነታዎችን ያግኙ።",
        featQuizHead: "❓ ፈተና", featQuizDesc: "አስደሳች የህዋ ጥያቄዎችን በመመለስ እውቀትዎን ይፈትሹ።",
        featExploreHead: "🚀 ማሰስ", featExploreDesc: "በሚያማምሩ ምስሎች ይደሰቱ እና አጽናፈ ሰማይን ያስሱ።",
        galleryHeading: "የፕላኔቶች ማዕከለ-ስዕላት", galleryDesc: "የበለጠ ለመማር በማንኛውም ፕላኔት ላይ ይጫኑ።",
        galMercury: "ኩጁፕ", galVenus: "ዙህራ", galEarth: "መሬት", galMars: "ማርስ",
        galJupiter: "መሽተሪ", galSaturn: "ዙሀል", galUranus: "ዩራኑስ", galNeptune: "ኔፕቲዩን",
        quizHeading: "🚀 የህዋ ፈተና", quizDesc: "የስርዓተ ፀሐይ እውቀትዎን ይፈትሹ!",
        nasaHeading: "🚀 የዕለቱ የናሳ (NASA) የስነ-ክዋክብት ምስል", footerLogo: "🌍 ፕላኔት ኤክስፕሎረር",
        footerDesc: "የስርዓተ ፀሐያችንን ውበት ይረዱ።",
        planets: {
            Sun: { title: "ፀሐይ", desc: "ፀሐይ በስርዓተ ፀሐያችን መሃል የምትገኝ ኮከብ ናት። ለሁሉም ፕላኔቶች ብርሃን እና ሙቀትን ትሰጣለች።" },
            Mercury: { title: "ኩጁፕ (Mercury)", desc: "ኩጁፕ ትንBackwardዋ እና ለፀሐይ በጣም ቅርብ የሆነች ፕላኔት ናት። ቀን ላይ በጣም ይሞቃል፣ ሌሊት ደግሞ በረዶ ይሆናል።" },
            Venus: { title: "ዙህራ (Venus)", desc: "ዙህራ በወፍራም ከባቢ አየርዋ ምክንያት በጣም ሞቃታማ ፕላኔት ናት። በምሽት ሰማይ ላይ ደምቃ ትታያለች።" },
            Earth: { title: "መሬት (Earth)", desc: "መሬት መኖሪያችን ናት። ህይወት፣ ውሃ እና አየር እንዳላት የሚታወቅ ብቸኛዋ ፕላኔት ናት።" },
            Mars: { title: "ማርስ (Mars)", desc: "ማርስ ላይ ባለው የብረት ኦክሳይድ ምክንያት ቀይ ፕላኔት በመባል ትታወቃለች። ሳይንቲስቶች የህይወት ምልክት ለማግኘት እያጠኑዋት ነው።" },
            Jupiter: { title: "መሽተሪ (Jupiter)", desc: "መሽተሪ በስርዓተ ፀሐያችን ውስጥ ትልቁ ፕላኔት ናት። ለዘመናት የቆየ ታላቅ ቀይ አውሎ ነፋስ አላት።" },
            Saturn: { title: "ዙሀል (Saturn)", desc: "ዙሀል ከበረዶ እና ከዓለት በተሠሩ ውብ ቀለበቶቿ ታዋቂ ናት። ግዙፍ የጋዝ ፕላኔት ናት።" },
            Uranus: { title: "ዩራኑስ (Uranus)", desc: "ዩራኑስ የበረዶ ግዙፍ ፕላኔት ናት። ከሌሎች ፕላኔቶች በተለየ ጎኗን አጋድላ ትሽከረከራለች።" },
            Neptune: { title: "ኔፕቲዩን (Neptune)", desc: "ኔፕቲዩን ከፀሐይ በጣም የራቀች ፕላኔት ናት። ሰማያዊ፣ ነፋሻማ እና ቀዝቃዛ ዓለም ናት።" }
        }
    }
};

const quizQuestions = {
    en: [
        { q: "Which planet is known as the Red Planet?", o: ["Earth", "Mars", "Jupiter", "Venus"], a: "Mars" },
        { q: "What is the largest planet in our solar system?", o: ["Saturn", "Jupiter", "Earth", "Neptune"], a: "Jupiter" },
        { q: "Which planet is closest to the Sun?", o: ["Mercury", "Venus", "Mars", "Uranus"], a: "Mercury" }
    ],
    am: [
        { q: "ቀይ ፕላኔት በመባል የሚታወቀው የትኛው ነው?", o: ["መሬት", "ማርስ", "መሽተሪ", "ዙህራ"], a: "ማርስ" },
        { q: "በስርዓተ ፀሐያችን ውስጥ ትልቁ ፕላኔት የትኛው ነው?", o: ["ዙሀል", "መሽተሪ", "መሬት", "ኔፕቲዩን"], a: "መሽተሪ" },
        { q: "ለፀሐይ በጣም ቅርብ የሆነው ፕላኔት የትኛው ነው?", o: ["ኩጁፕ", "ዙህራ", "ማርስ", "ዩራኑስ"], a: "ኩጁፕ" }
    ]
};

let currentLang = "en";

// 2. LOADER
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }, 1000);
});

// 3. LANGUAGE SWITCHER
const langBtn = document.getElementById("language");
langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "am" : "en";
    langBtn.innerText = currentLang === "en" ? "አማርኛ" : "English";
    updateLanguage();
    loadQuizQuestion();
});

function updateLanguage() {
    const data = spaceData[currentLang];
    document.getElementById("nav-home").innerText = data.navHome;
    document.getElementById("nav-solar").innerText = data.navSolar;
    document.getElementById("nav-orbit").innerText = data.navOrbit;
    document.getElementById("nav-features").innerText = data.navFeatures;
    document.getElementById("nav-gallery").innerText = data.navGallery;
    document.getElementById("nav-quiz").innerText = data.navQuiz;
    document.getElementById("nav-nasa").innerText = data.navNasa;
    document.getElementById("hero-heading").innerHTML = data.heroHeading;
    document.getElementById("hero-desc").innerText = data.heroDesc;
    document.querySelector(".start").innerText = data.startBtn;
    document.getElementById("orbit-heading").innerText = data.orbitHeading;
    document.getElementById("solar-heading").innerText = data.solarHeading;
    document.getElementById("solar-desc").innerText = data.solarDesc;
    document.getElementById("btn-all").innerText = data.btnAll;
    document.getElementById("btn-inner").innerText = data.btnInner;
    document.getElementById("btn-outer").innerText = data.btnOuter;
    document.getElementById("card-sun").innerText = data.cardSun;
    document.getElementById("card-mercury").innerText = data.cardMercury;
    document.getElementById("card-venus").innerText = data.cardVenus;
    document.getElementById("card-earth").innerText = data.cardEarth;
    document.getElementById("card-mars").innerText = data.cardMars;
    document.getElementById("card-jupiter").innerText = data.cardJupiter;
    document.getElementById("card-saturn").innerText = data.cardSaturn;
    document.getElementById("card-uranus").innerText = data.cardUranus;
    document.getElementById("card-neptune").innerText = data.cardNeptune;
    document.getElementById("feat-learn-head").innerText = data.featLearnHead;
    document.getElementById("feat-learn-desc").innerText = data.featLearnDesc;
    document.getElementById("feat-facts-head").innerText = data.featFactsHead;
    document.getElementById("feat-facts-desc").innerText = data.featFactsDesc;
    document.getElementById("feat-quiz-head").innerText = data.featQuizHead;
    document.getElementById("feat-quiz-desc").innerText = data.featQuizDesc;
    document.getElementById("feat-explore-head").innerText = data.featExploreHead;
    document.getElementById("feat-explore-desc").innerText = data.featExploreDesc;
    document.getElementById("gallery-heading").innerText = data.galleryHeading;
    document.getElementById("gallery-desc").innerText = data.galleryDesc;
    document.getElementById("gal-mercury").innerText = data.galMercury;
    document.getElementById("gal-venus").innerText = data.galVenus;
    document.getElementById("gal-earth").innerText = data.galEarth;
    document.getElementById("gal-mars").innerText = data.galMars;
    document.getElementById("gal-jupiter").innerText = data.galJupiter;
    document.getElementById("gal-saturn").innerText = data.galSaturn;
    document.getElementById("gal-uranus").innerText = data.galUranus;
    document.getElementById("gal-neptune").innerText = data.galNeptune;
    document.getElementById("quiz-heading").innerText = data.quizHeading;
    document.getElementById("quiz-desc").innerText = data.quizDesc;
    document.getElementById("nasa-heading").innerText = data.nasaHeading;
    document.getElementById("footer-logo").innerText = data.footerLogo;
    document.getElementById("footer-desc").innerText = data.footerDesc;
}

// 4. DARK/LIGHT THEME SWITCHER
const themeBtn = document.querySelector(".theme");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeBtn.innerText = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});

// 5. SEARCH FILTER
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".planet-card");
    cards.forEach(card => {
        const name = card.querySelector("p").innerText.toLowerCase();
        card.style.display = name.includes(value) ? "block" : "none";
    });
});

// 6. BUTTON CATEGORY FILTER (ALL, INNER, OUTER)
function filterPlanets(category) {
    const cards = document.querySelectorAll(".planet-card");
    document.querySelectorAll(".filter-buttons button").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    cards.forEach(card => {
        if (category === "all") card.style.display = "block";
        else if (category === "inner" && card.classList.contains("inner")) card.style.display = "block";
        else if (category === "outer" && card.classList.contains("outer")) card.style.display = "block";
        else card.style.display = "none";
    });
}

// 7. PLANET POPUP MODAL (CORRECTED: WITHOUT IMAGES/ FOLDER)
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupImg = document.getElementById("popup-img");

function openPopup(planetName) {
    const data = spaceData[currentLang].planets[planetName];
    popupTitle.innerText = data.title;
    popupText.innerText = data.desc;
    
    // Set correct extension
    const formattedName = planetName.toLowerCase();
    let extension = "webp";
    if (formattedName === "sun" || formattedName === "mercury") {
        extension = "png";
    }
    
    // Corrected image path (Directly from root folder)
    popupImg.src = `${formattedName}.${extension}`;
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
}

window.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
});

// 8. SPACE QUIZ SYSTEM
let currentQuestionIndex = 0;
const qQuestion = document.getElementById("quiz-question");
const qOptions = document.getElementById("quiz-options");
const qResult = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

function loadQuizQuestion() {
    const questions = quizQuestions[currentLang];
    const currentQ = questions[currentQuestionIndex];
    qQuestion.innerText = currentQ.q;
    qOptions.innerHTML = "";
    qResult.innerText = "";
    nextBtn.style.display = "none";

    currentQ.o.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.style.cssText = "display:block; width:100%; margin:10px 0; padding:10px; background:#11254c; color:white; border:none; border-radius:5px; cursor:pointer;";
        btn.onclick = () => checkAnswer(option, currentQ.a);
        qOptions.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        qResult.innerText = currentLang === "en" ? "🎉 Correct Answer!" : "🎉 ትክክለኛ መልስ!";
        qResult.style.color = "#00ffcc";
    } else {
        qResult.innerText = currentLang === "en" ? `❌ Wrong. Correct is ${correct}` : `❌ ስህተት ነው። ትክክለኛው፡ ${correct}`;
        qResult.style.color = "#ff4a4a";
    }
    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions[currentLang].length;
    loadQuizQuestion();
};

loadQuizQuestion();

// 9. NASA API INTEGRATION
async function fetchNasaData() {
    try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        const data = await response.json();
        document.getElementById("nasa-img").src = data.url;
        document.getElementById("nasa-title").innerText = data.title;
        document.getElementById("nasa-description").innerText = data.explanation;
    } catch (error) {
        console.log("NASA API Error, loading default fallback.");
    }
}
fetchNasaData();

// 10. SCROLL ANIMATION FOR ROCKET
window.addEventListener("scroll", () => {
    const rocket = document.getElementById("rocket");
    let scrollPos = window.scrollY;
    rocket.style.bottom = (20 + scrollPos * 0.4) + "px";
});