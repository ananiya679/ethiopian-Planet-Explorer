// 1. DATA IN ENGLISH AND AMHARIC WITH DETAILED DESCRIPTIONS
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
            sun: { 
                title: "The Sun", 
                desc: "The Sun is the heart of our Solar System, a massive yellow dwarf star that provides light, heat, and energy to every world bound to it. Its gravitational pull is the primary anchor keeping planets, asteroids, comets, and space debris in stable orbits. Accounting for 99.8% of all the mass in the Solar System, the Sun is composed mainly of hydrogen (73%) and helium (25%). Inside its core, nuclear fusion transforms millions of tons of hydrogen into helium every second, generating tremendous warmth and radiant light.\n\nWithout this continuous nuclear reaction, Earth would be a frozen, lifeless rock drifting in the cosmic dark. The Sun's surface, or photosphere, reaches temperatures of roughly 5,500°C, while its deep core burns at an incredible 15 million°C. Powerful solar flares and coronal mass ejections erupt from its surface, launching streams of charged particles across space. These solar winds interact with Earth's magnetic field, creating glowing auroras in the polar skies.\n\nAstronomers estimate that the Sun is approximately 4.6 billion years old and is roughly halfway through its life cycle. In about 5 billion years, it will expand into a Red Giant before shedding its outer layers into a planetary nebula. Studying the Sun helps scientists understand space weather and the fundamental physics of plasma and magnetic fields." 
            },
            mercury: { 
                title: "Mercury", 
                desc: "Mercury is the smallest planet in our Solar System and sits closest to the blazing Sun. Named after the swift messenger of Roman mythology, it orbits the Sun faster than any other planet, completing a single year in just 88 Earth days. However, its rotation is incredibly slow, taking nearly 59 Earth days to spin once on its axis.\n\nBecause Mercury has virtually no atmosphere to retain or distribute heat, it experiences the most extreme temperature swings in the Solar System. Daytime temperatures soar to an intense 430°C, hot enough to melt lead, while nighttime temperatures drop to a frigid -180°C. Its heavily cratered surface closely resembles Earth's Moon, scarred by billions of years of impacts from meteoroids and comets.\n\nDespite being so close to the Sun, radar observations and space probes like MESSENGER have discovered water ice hidden deep inside permanently shadowed craters at its poles. Mercury has a surprisingly large metallic iron core that makes up about 85% of the planet's radius, creating a weak global magnetic field. Exploring Mercury provides vital clues about how terrestrial planets formed in the early days of our solar system." 
            },
            venus: { 
                title: "Venus", 
                desc: "Venus is often called Earth's twin because of its similar size, mass, and density, but it is a radically hostile world. It is the second planet from the Sun and the hottest planet in our entire Solar System. Venus is wrapped in a dense, toxic atmosphere composed mainly of carbon dioxide with clouds of sulfuric acid, creating a catastrophic runaway greenhouse effect.\n\nSurface temperatures on Venus stay at a scorching 475°C day and night—hotter than the surface of Mercury. The atmospheric pressure at ground level is crushing, equivalent to being nearly 900 meters underwater on Earth. Venus also exhibits a unique retrograde rotation, spinning backwards from east to west compared to most other planets, and its day is actually longer than its year.\n\nThrough dense clouds, radar imaging reveals thousands of volcanoes, vast lava plains, and mountain ranges covering its surface. Robotic spacecraft that have landed on Venus survived for only a few hours before being destroyed by the extreme heat and pressure. Studying Venus gives scientists critical insights into climate dynamics and extreme greenhouse effects." 
            },
            earth: { 
                title: "Earth", 
                desc: "Earth is our home planet, the third world from the Sun, and the only cosmic body known to support life. It is the largest of the four inner rocky planets and possesses a dynamic, living system shaped by liquid water, plate tectonics, and a protective protective atmosphere.\n\nCovered by oceans across 70% of its surface, Earth's unique climate allows water to exist simultaneously as solid ice, liquid water, and vapor. The atmosphere consists of 78% nitrogen and 21% oxygen, shielding us from harmful solar radiation while maintaining temperatures suitable for living organisms. Earth's molten iron core generates a robust magnetic field that deflects damaging cosmic rays and solar winds.\n\nEarth has one natural satellite, the Moon, which stabilizes the planet's axial tilt and creates ocean tides. Over billions of years, complex interactions between geology, ocean currents, and biology have allowed millions of species to thrive. Earth stands as a fragile oasis of life drifting through the vast emptiness of space." 
            },
            mars: { 
                title: "Mars", 
                desc: "Mars, the fourth planet from the Sun, is a cold, desert world nicknamed the 'Red Planet' due to iron oxide (rust) on its surface. It has about half the diameter of Earth, a thin atmosphere composed mostly of carbon dioxide, and two small, irregularly shaped moons named Phobos and Deimos.\n\nMars boasts some of the most spectacular geological features in the Solar System, including Olympus Mons, an extinct shield volcano three times higher than Mount Everest, and Valles Marineris, a canyon system that spans the width of the United States. Evidence gathered by rovers shows that liquid water once flowed across its surface, forming ancient river valleys, lakebeds, and ocean basins.\n\nToday, water exists on Mars primarily as polar ice caps and subsurface deposits. Scientists actively explore Mars using advanced robotic rovers like Perseverance and Curiosity to search for signatures of past microbial life. Human missions to Mars remain a major goal for space agencies worldwide." 
            },
            jupiter: { 
                title: "Jupiter", 
                desc: "Jupiter is the undisputed giant of the Solar System, containing more than double the mass of all other planets combined. As the fifth planet from the Sun, this gas giant is composed almost entirely of hydrogen and helium, lacking a true solid surface.\n\nJupiter's vibrant atmosphere features swirl patterns of clouds, violent jet streams, and gigantic storms. The most famous feature is the Great Red Spot, a colossal anticyclonic storm larger than Earth that has raged for centuries. Jupiter rotates at a dizzying speed, completing one rotation in under 10 hours, which causes the planet to bulge slightly at its equator.\n\nJupiter possesses a powerful magnetic field and commands an extensive system of over 90 moons. Among these are the four large Galilean moons: Io, Europa, Ganymede, and Callisto. Europa, in particular, harbors a global liquid ocean beneath its icy crust, making it a prime candidate in the search for extraterrestrial life." 
            },
            saturn: { 
                title: "Saturn", 
                desc: "Saturn is the sixth planet from the Sun and the second-largest planet in our Solar System, famed for its breathtaking ring system. Although all gas giants have rings, Saturn's are by far the most complex, bright, and extensive, spanning hundreds of thousands of kilometers yet measuring only meters thick.\n\nThese spectacular rings are composed of billions of individual particles of water ice, rock, and dust ranging from tiny grains to house-sized boulders. Saturn itself is a gas giant primarily made of hydrogen and helium. Remarkably, Saturn has the lowest density of any planet; if there were an ocean large enough, Saturn would float on water.\n\nSaturn is orbited by dozens of moons, including Titan, the second-largest moon in the Solar System. Titan features a dense atmosphere and lakes of liquid methane and ethane. Another moon, Enceladus, shoots geysers of salty water into space from an underground ocean, highlighting Saturn's complex system as a rich target for exploration." 
            },
            uranus: { 
                title: "Uranus", 
                desc: "Uranus is the seventh planet from the Sun and the first planet discovered with the aid of a telescope in 1781. Classified as an ice giant, its atmosphere consists of hydrogen, helium, and methane, which absorbs red light and gives the planet its iconic cyan-blue color.\n\nUranus is unique because it rotates almost completely on its side, with an axial tilt of nearly 98 degrees. Scientists suspect a collision with an Earth-sized object long ago knocked Uranus on its side. This extreme tilt causes radical seasonal changes, where each pole gets 42 years of continuous sunlight followed by 42 years of darkness.\n\nUnlike other giant planets, Uranus emits very little internal heat, making it the coldest planetary atmosphere in the Solar System, dropping to -224°C. It possesses a faint ring system and 28 known moons, all named after characters from the works of William Shakespeare and Alexander Pope." 
            },
            neptune: { 
                title: "Neptune", 
                desc: "Neptune is the eighth and outermost official planet in our Solar System, located more than 4.5 billion kilometers from the Sun. Like Uranus, Neptune is an ice giant, rich in water, ammonia, and methane ice surrounding a small rocky core.\n\nNeptune exhibits a deep vivid blue hue caused by atmospheric methane. Despite its extreme distance from the Sun's heat, Neptune hosts the most violent winds in the Solar System, reaching supersonic speeds up to 2,100 kilometers per hour. High-altitude clouds and massive dark storms, such as the Great Dark Spot, sweep across its atmosphere.\n\nIt takes Neptune roughly 165 Earth years to complete a single orbit around the Sun. Neptune has 16 known moons, dominated by Triton, a frozen moon that orbits in reverse (retrograde) and features active nitrogen ice geysers." 
            }
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
            sun: { 
                title: "ፀሐይ", 
                desc: "ፀሐይ በስርዓተ ፀሐያችን ማዕከል የምትገኝ፣ ለሁሉም አካላት ብርሃንን፣ ሙቀትን እና ኃይልን የምትሰጥ ግዙፍ የፕላዝማ ኮከብ ናት። የእሷ ኃይለኛ የስበት ኃይል ፕላኔቶችን፣ አስቴሮይዶችን፣ ኮሜቶችን እና የህዋ ፍርስራሾችን በቋሚ ምህዋር አቀናጅቶ ይይዛል። የመላው ስርዓተ ፀሐይ 99.8% የሚሆነውን ግዙፍ ክብደት የምትይዘው እሷ ስትሆን፣ በአብዛኛው ከሃይድሮጂን (73%) እና ከሄሊየም (25%) ጋዝ የተሰራች ናት። በማዕከላዊ ውህደቷ (Nuclear Fusion) አማካኝነት በየሴኮንዱ ሚሊዮኖች ቶን ሃይድሮጂንን ወደ ሄሊየም በመቀየር እጅግ ከፍተኛ የሆነ ኃይል ታመነጫለች።\n\nይህ ቀጣይነት ያለው ኑክሌርያዊ ሂደት ባይኖር ኖሮ፣ መሬት በጨለማ ህዋ ውስጥ የምትትንከራተት በረዷማና ህይወት የሌላት ድንጋይ ትሆን ነበር። የፀሐይ ውጫዊ ገጽታ የሙቀት መጠን 5,500°C አካባቢ ሲሆን፣ የውስጠኛው ማዕከላዊ ክፍሏ ግን እስከ 15 ሚሊዮን ዲግሪ ሴልሺየስ ይሞቃል። ከውጫዊ አካሏ የሚወጡት ኃይለኛ አውሎ ነፋሶች እና የፕላዝማ ፍንዳታዎች በህዋ ውስጥ ይበተናሉ። እነዚህ የፀሐይ ነፋሳት ከመሬት ማግኔቲክ መስክ ጋር ሲገናኙ በሰሜንና ደቡብ ዋልታዎች ላይ አስደናቂ የሚያበሩ የቀለም ብርሃናትን (Auroras) ይፈጥራሉ።\n\nየስነ-ክዋክብት ተመራማሪዎች እንደሚገምቱት ፀሐይ አሁን 4.6 ቢሊዮን ዓመታት ገደማ ዕድሜ ያላት ሲሆን፣ የህይወት ዘመኗን እኩሌታ ጨርሳለች። ከሌላ 5 ቢሊዮን ዓመታት በኋላ ወደ ግዙፍ ቀይ ኮከብነት በመስፋፋት ውጫዊ አካሏን ወደ ህዋ ትበትናለች። ፀሐይን ማናት በህዋ የአየር ሁኔታ እና በፕላዝማ ፊዚክስ ላይ ያለንን እውቀት ለማሳደግ እጅግ አስፈላጊ ነው።" 
            },
            mercury: { 
                title: "ኩጁፕ (Mercury)", 
                desc: "ኩጁፕ በስርዓተ ፀሐያችን ውስጥ ትንሿ እና ለፀሐይ በጣም ቅርብ የሆነች ፕላኔት ናት። ከማንኛውም ፕላኔት በበለጠ ፍጥነት ፀሐይን የምትዞር ሲሆን፣ አንድ ሙሉ ዓመት ለማጠናቀቅ 88 የመሬት நாட்கችን ብቻ ይወስድባታል። ይሁን እንጂ በራሷ ዘንግ ላይ የምታደርገው ሽክርክሪት በጣም አዝጋሚ በመሆኑ አንድ ቀን ለማጠናቀቅ 59 የመሬት நாட்கችን ይፈጅባታል።\n\nኩጁፕ ሙቀትን አፍኖ የሚይዝ ወይም የሚያሰራጭ የከባቢ አየር (Atmosphere) ስለሌላት በስርዓተ ፀሐይ ውስጥ ከፍተኛው የሙቀት መለዋወጥ ይታይባታል። በቀን ውስጥ የሙቀት መጠኗ እስከ 430°C የሚደርስ ሲሆን፣ በሌሊት ደግሞ ወደ -180°C ቅዝቃዜ ትወርዳለች። ውጫዊ ገጽታዋ በከፍተኛ የዓለትና የኮሜት ግጭቶች የተቦረቦረ በመሆኑ የመሬትን ጨረቃ በጣም ይመስላል።\n\nለፀሐይ በጣም ቅርብ ብትሆንም፣ በዋልታዎቿ አካባቢ ባሉ ጥልቅና ጨለማ ጉድጓዶች ውስጥ በረዶ እንደሚገኝ የናሳ መንኮራኩሮች አረጋግጠዋል። ኩጁፕ ከጠቅላላ መጠኗ 85% ያህሉን የሚይዝ ግዙፍ የብረት ማዕከል (Iron Core) አላት። ኩጁፕን ማናት ፕላኔቶች በስርዓተ ፀሐይ ጎህ ላይ እንዴት እንደተፈጠሩ ለመረዳት ይረዳል።" 
            },
            venus: { 
                title: "ዙህራ (Venus)", 
                desc: "ዙህራ በመጠናቸው፣ በክብደታቸው እና በስብሰባቸው ተመሳሳይነት ምክንያት የመሬት 'መንታ' በመባል ትታወቃለች፤ ነገር ግን እጅግ አደገኛና ጨካኝ አካባቢ ያላት ፕላኔት ናት። ከፀሐይ ሁለተኛዋ ፕላኔት ስትሆን በስርዓተ ፀሐያችን ውስጥ በጣም ሞቃታማዋ ፕላኔት ናት። ወፍራም እና መርዛማ የካርቦን ዳይኦክሳይድ ከባቢ አየር ያላት ሲሆን፣ የሰልፈሪክ አሲድ ደመናዎች ይሸፍኗታል።\n\nየዙህራ የሙቀት መጠን ቀንና ሌሊት 475°C አካባቢ ጸንቶ የሚቆይ ሲሆን፣ ይህም እርሳስን (Lead) ለማቅለጥ የሚያስችል ከፍተኛ ሙቀት ነው። የመሬቷ አየር ጫና ከመሬት ጋር ሲነጻጸር በ90 እጥፍ ይበልጣል፤ ይህም በውቅያኖስ ውስጥ 900 ሜትር ጥልቀት ውስጥ ከመግባት ጋር እኩል ነው። በተጨማሪም ዙህራ ከሌሎች ፕላኔቶች በተቃራኒ አቅጣጫ (ከምስራቅ ወደ ምዕራብ) በግልባጭ ትሽከረከራለች።\n\nበወፍራም ደመናዋ ስር በሺዎች የሚቆጠሩ እሳተ ጎመራዎች እና የቲክ ላቫ ሜዳዎች ይገኛሉ። ወደ ዙህራ የተላኩ የጠፈር መንኮራኩሮች በከፍተኛው ሙቀትና ጫና ምክንያት ከጥቂት ሰዓታት በላይ መቆየት አልቻሉም። ዙህራን ማናት ስለ አየር ንብረት መዛባት እና ስለ ከባድ የግሪንሃውስ ተፅዕኖ ጠቃሚ ትምህርት ይሰጠናል።" 
            },
            earth: { 
                title: "መሬት (Earth)", 
                desc: "መሬት መኖሪያችን፣ ከፀሐይ ሶስተኛዋ ፕላኔት እና በአጽናፈ ሰማይ ውስጥ ህይወት ያላቸው ፍጥረታት እንደሚገኙባት የምትታወቅ ብቸኛዋ ዓለም ናት። ከውስጣዊ ዓለታማ ፕላኔቶች ሁሉ ትልቋ ስትሆን፣ በፈሳሽ ውሃ፣ በቴክቶኒክ ሰሌዳዎች እንቅስቃሴ እና በጥሩ ከባቢ አየር የተገነባች ናት።\n\n70% አካሏ በፈሳሽ ውቅያኖሶች የተሸፈነ ሲሆን፣ ውሃ በፈሳሽ፣ በበረዶ እና በጋዝ መልክ እንዲኖር የሚያስችል ፍጹም የሙቀት መጠን አላት። ከባቢ አየሯ 78% ናይትሮጅን እና 21% ኦክስጅን የያዘ ሲሆን፣ ጎጂ ጨረሮችን በመከላከል ለህይወት አስፈላጊውን ሁኔታ ያመቻቻል። የመሬት የብረት ማዕከል (Core) ኃይለኛ የማግኔት መስክ በመፍጠር ፕላኔቷን ከህዋ ጨረሮች ይጠብቃታል።\n\nመሬት 'ጨረቃ' የምትባል አንድ የተፈጥሮ ሳተላይት ያላት ሲሆን፣ እሷም የፕላኔቷን መናወጥ በማረጋጋት የውቅያኖስ ማዕበሎችን ትፈጥራለች። በቢሊዮን ከሚቆጠሩ ዓመታት በላይ በመሬት ላይ የተከናወኑ ጂኦሎጂያዊ እና ባዮሎጂያዊ ሂደቶች ሚሊዮኖች ዝርያዎች እንዲራቡ አስችለዋል። መሬት በሰፊው ህዋ ውስጥ ያለች ብቸኛ የህይወት ኦሳይስ ናት።" 
            },
            mars: { 
                title: "ማርስ (Mars)", 
                desc: "ማርስ ከፀሐይ አራተኛዋ ፕላኔት ስትሆን፣ በአካሏ ላይ ባለው የብረት ኦክሳይድ (ዝገት) ምክንያት 'ቀይ ፕላኔት' በመባል ትታወቃለች። መጠኗ የመሬትን እኩሌታ ያህል ሲሆን፣ በአብዛኛው ከካርቦን ዳይኦክሳይድ የተሰራ በጣም ቀጭን ከባቢ አየር እና ፎቦስና ዲሞስ የተባሉ ሁለት ትናንሽ ጨረቃዎች አሏት።\n\nማርስ በስርዓተ ፀሐይ ውስጥ አስደናቂ የተፈጥሮ ቅርጾች አሏት፤ ከነዚህም መካከል ከኤቨረስት ተራራ በሶስት እጥፍ የሚበልጠው 'ኦሊምፐስ ሞንስ' የተባለው ግዙፍ እሳተ ጎመራ እና አሜሪካን የሚያክል ጥልቅ ሸለቆ ይገኙበታል። የሮቨር ምርምሮች እንደሚያሳዩት ከቢሊዮን ዓመታት በፊት በማርስ ገጽ ላይ ፈሳሽ ውሃ ይፈስስ ነበር።\n\nዛሬ ላይ ውሃ በማርስ ላይ የሚገኘው በዋልታዎቿ በረዶ ስር እና ከምድር ስር ብቻ ነው። ሳይንቲስቶች የጥንት ጥቃቅን ህይወታቸው ምልክቶችን ለመፈለግ ፐርሲቪያራንስ እና ኩሪዮሲቲ የተባሉ ሮቨሮችን በመጠቀም ምርምር እያደረጉ ይገኛሉ። ወደፊት ሰዎችን ወደ ማርስ መላክ የብዙ አገራት ህዋ ተቋማት ዋና አላማ ነው።" 
            },
            jupiter: { 
                title: "መሽተሪ (Jupiter)", 
                desc: "መሽተሪ የስርዓተ ፀሐያችን ትልቋ ፕላኔት ስትሆን፣ የሌሎች ፕላኔቶች በሙሉ ተደምረው ከሁለት እጥፍ በላይ ትበልጣለች። ከፀሐይ አምስተኛዋ ፕላኔት ስትሆን፣ በአብዛኛው ከሃይድሮጂን እና ከሄሊየም ጋዝ የተሰራች በመሆኗ ጠንካራ የመሬት አካል የላትም።\n\nየመሽተሪ ከባቢ አየር በቀለማት ያሸበረቁ ደመናዎች፣ ኃይለኛ የነፋስ ሽክርክሪቶች እና ግዙፍ አውሎ ነፋሶች የተሞላ ነው። ከሁሉ በላይ የሚታወቀው 'ታላቁ ቀይ ነጥብ' (Great Red Spot) የተባለው አውሎ ነፋስ ከመሬት የሚበልጥ እና ለዘመናት የቆየ ነው። መሽተሪ በራሷ ዘንግ ላይ በከፍተኛ ፍጥነት የምትሽከረከር ሲሆን፣ አንድ ቀን ለማጠናቀቅ 10 ሰዓታት ብቻ ይወስድባታል።\n\nመሽተሪ ኃይለኛ የማግኔት መስክ እና ከ90 በላይ ጨረቃዎች ያሏት ጥቃቅን የስርዓተ ፀሐይ ስርዓት ይመስላል። ከነዚህም መካከል አይኦ፣ ዩሮፓ፣ ጋኒሜድ እና ካሊስቶ የተባሉት አራት ግዙፍ ጨረቃዎች ይገኙበታል። በዩሮፓ የበረዶ ሽፋን ስር ፈሳሽ ውቅያኖስ በመኖሩ ለህይወት መገኘት ተስፋ ሰጪ ቦታ ተደርጋ ትወሰዳለች።" 
            },
            saturn: { 
                title: "ዙሀል (Saturn)", 
                desc: "ዙሀል ከፀሐይ ስድስተኛዋ እና በስርዓተ ፀሐይ ውስጥ ሁለተኛዋ ትልቅ ፕላኔት ናት፤ በዙሪያዋ ባሉት ውብ የቀለበት ስርዓቶች በሰፊው ትታወቃለች። ሁሉም የጋዝ ፕላኔቶች ቀለበት ቢኖራቸውም፣ የዙሀል ቀለበቶች ግን እጅግ ደማቅ፣ ሰፊ እና በመቶ ሺዎች የሚቆጠሩ ኪሎ ሜትሮች የሚዘረጉ ናቸው።\n\nእነዚህ ቀለበቶች ከቢሊዮን ከሚቆጠሩ የበረዶ፣ የዓለት እና የአቧራ ቅንጣቶች የተሰሩ ናቸው። ዙሀል እራሷ በአብዛኛው ከሃይድሮጂንና ሄሊየም ጋዝ የተሰራች ናት። የሚገርመው የዙሀል ጥፍግና (Density) በጣም ዝቅተኛ በመሆኑ፣ የሚበቃ ግዙፍ ውቅያኖስ ቢኖር ኖሮ ዙሀል በውሃ ላይ መዋኘት ትችል ነበር።\n\nዙሀል በብዙ ጨረቃዎች የታጀበች ስትሆን፣ ከነሱም መካከል ሁለተኛዋ ትልቅ ጨረቃ የሆነችው 'ታይታን' ትገኝበታለች። ታይታን ወፍራም ከባቢ አየር እና የፈሳሽ ሚቴን ሀይቆች አሏት። ሌላዋ 'ኤንሴላደስ' የምትባለው ጨረቃ ደግሞ ከምድር ስር ካለው ውቅያኖሷ የበረዶ ፏፏቴዎችን ወደ ህዋ ትተፋለች።" 
            },
            uranus: { 
                title: "ዩራኑስ (Uranus)", 
                desc: "ዩራኑስ ከፀሐይ ሰባተኛዋ ፕላኔት ስትሆን፣ በ1781 በቴሌስኮፕ የታየች የመጀመሪያዋ ፕላኔት ናት። የበረዶ ግዙፍ (Ice Giant) ከሚባሉት ወገን ስትሆን፣ ከባቢ አየሯ ከሃይድሮጂን፣ ሄሊየም እና ሚቴን ጋዝ የተሰራ ነው። ሚቴኑ ቀይ ብርሃንን ስለሚስብ ፕላኔቷ ውብ ሰማያዊ-አረንጓዴ ቀለም እንድትይዝ ያደርጋታል።\n\nዩራኑስን ልዩ የሚያደርጋት በራሷ ዘንግ ላይ በ98 ዲግሪ ተዝቅዝቃ በጎኗ መዞሯ ነው። ድሮ ከግዙፍ አካል ጋር በደረሰባት ግጭት ምክንያት እንደተዘቀዘቀች ይታመናል። ይህ መዘቅዘቅ በዋልታዎቿ ላይ ለ42 ዓመታት የሚቆይ የብርሃን እና ለ42 ዓመታት የሚቆይ የጨለማ ወቅቶችን ይፈጥራል።\n\nዩራኑስ ውስጣዊ ሙቀት ስለሌላት በስርዓተ ፀሐያችን ውስጥ በጣም ቀዝቃዛዋ ፕላኔት ናት (እስከ -224°C ትወርዳለች)። በዙሪያዋ ደካማ ቀለበቶች እና በሼክስፒር ተውኔት ገጸ-ባህሪያት የተሰየሙ 28 ጨረቃዎች አሏት።" 
            },
            neptune: { 
                title: "ኔፕቲዩን (Neptune)", 
                desc: "ኔፕቲዩን ከፀሐይ ስምንተኛዋ እና በጣም ሩቅ የሆነች ህጋዊ ፕላኔት ናት፤ ከፀሐይ በ4.5 ቢሊዮን ኪሎ ሜትር ርቀት ላይ ትገኛለች። እንደ ዩራኑስ ሁሉ የበረዶ ግዙፍ ስትሆን፣ በውስጧ ከውሃ፣ አሞንያ እና ሚቴን በረዶ የተሰራ አካል አላት።\n\nበከባቢ አየሯ ውስጥ ባለው ሚቴን ምክንያት ጥልቅ ሰማያዊ ቀለም አላት። ከፀሐይ በጣም ሩቅ ብትሆንም፣ በስርዓተ ፀሐያችን ውስጥ እጅግ አውዳሚና ኃይለኛ ነፋስ የሚነፍስባት ፕላኔት ናት፤ የነፋሷ ፍጥነት በሰዓት እስከ 2,100 ኪሎ ሜትር ይደርሳል። በጥልቅ ሰማያዊ አካሏ ላይ ግዙፍ ጥቁር አውሎ ነፋሶች ይታያሉ።\n\nኔፕቲዩን ፀሐይን አንድ ጊዜ ለመዞር 165 የመሬት ዓመታት ይፈጅባታል። 16 ታዋቂ ጨረቃዎች ያሏት ሲሆን፣ ከነሱም ትልቋ 'ትራይተን' በግልባጭ አቅጣጫ የምትሽከረከር እና የሞቀ ናይትሮጅን በረዶ ወደ ህዋ የምትተፋ አስደናቂ ጨረቃ ናት።" 
            }
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
        if(loader) {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 500);
        }
    }, 1000);
});

// 3. LANGUAGE SWITCHER
const langBtn = document.getElementById("language");
if(langBtn) {
    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "am" : "en";
        langBtn.innerText = currentLang === "en" ? "አማርኛ" : "English";
        updateLanguage();
        loadQuizQuestion();
    });
}

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
if(themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        themeBtn.innerText = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
    });
}

// 5. SEARCH FILTER
const searchInput = document.getElementById("search");
if(searchInput) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".planet-card");
        cards.forEach(card => {
            const name = card.querySelector("p").innerText.toLowerCase();
            card.style.display = name.includes(value) ? "block" : "none";
        });
    });
}

// 6. BUTTON CATEGORY FILTER (ALL, INNER, OUTER)
function filterPlanets(category) {
    const cards = document.querySelectorAll(".planet-card");
    document.querySelectorAll(".filter-buttons button").forEach(btn => btn.classList.remove("active"));
    if(event && event.target) {
        event.target.classList.add("active");
    }
    cards.forEach(card => {
        if (category === "all") card.style.display = "block";
        else if (category === "inner" && card.classList.contains("inner")) card.style.display = "block";
        else if (category === "outer" && card.classList.contains("outer")) card.style.display = "block";
        else card.style.display = "none";
    });
}

// 7. FIXED PLANET POPUP MODAL (WORKS WHEN CLICKED/TOUCHED)
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupImg = document.getElementById("popup-img");

function openPopup(planetName) {
    // Convert to lowercase to match object keys
    const key = planetName.toLowerCase();
    const planetInfo = spaceData[currentLang].planets[key];
    
    if (planetInfo) {
        popupTitle.innerText = planetInfo.title;
        popupText.innerText = planetInfo.desc;
        
        let extension = "webp";
        if (key === "sun" || key === "mercury") {
            extension = "png";
        }
        
        popupImg.src = `${key}.${extension}`;
        popup.style.display = "flex";
    }
}

function closePopup() {
    if(popup) popup.style.display = "none";
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
    if(!qQuestion || !qOptions) return;
    const questions = quizQuestions[currentLang];
    const currentQ = questions[currentQuestionIndex];
    qQuestion.innerText = currentQ.q;
    qOptions.innerHTML = "";
    qResult.innerText = "";
    if(nextBtn) nextBtn.style.display = "none";

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
    if(nextBtn) nextBtn.style.display = "block";
}

if(nextBtn) {
    nextBtn.onclick = () => {
        currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions[currentLang].length;
        loadQuizQuestion();
    };
}

loadQuizQuestion();

// 9. NASA API INTEGRATION
async function fetchNasaData() {
    try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        const data = await response.json();
        if(document.getElementById("nasa-img")) document.getElementById("nasa-img").src = data.url;
        if(document.getElementById("nasa-title")) document.getElementById("nasa-title").innerText = data.title;
        if(document.getElementById("nasa-description")) document.getElementById("nasa-description").innerText = data.explanation;
    } catch (error) {
        console.log("NASA API fallback.");
    }
}
fetchNasaData();

// 10. SCROLL ANIMATION FOR ROCKET
window.addEventListener("scroll", () => {
    const rocket = document.getElementById("rocket");
    if(rocket) {
        let scrollPos = window.scrollY;
        rocket.style.bottom = (20 + scrollPos * 0.4) + "px";
    }
});