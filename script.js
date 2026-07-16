// ===================================
// 1. LOADER & INITIALIZATION
// ===================================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
    // ገጹ ሲጫን ጥያቄውን ወዲያው ይጀምራል
    setTimeout(loadQuiz, 100);
});

// ===================================
// 2. PLANET DATA (ENGLISH & AMHARIC) - EXPANDED VERSION
// ===================================
const planetData = {
    en: {
        Sun: {
            image: "images/sun.png",
            title: "☀️ The Sun (The Star)",
            text: "The Sun is the colossal star at the absolute center of our Solar System, containing 99.8% of all the mass in the entire system. It is a nearly perfect sphere of superheated hot plasma, fueled by nuclear fusion reactions deep within its core where hydrogen is fused into helium. This process releases a mind-boggling amount of energy, emitting light, heat, and charged particles that sustain almost all life on Earth. Without the Sun's immense gravity, Earth and all other celestial bodies would drift endlessly into deep space. Structurally, the Sun's surface layer, the photosphere, burns at about 5,500°C, while its core reaches an unimaginable 15 million degrees Celsius. Its powerful solar wind creates a protective bubble around our planetary system known as the heliosphere. It is approximately 4.6 billion years old and is expected to shine in its current state for another 5 billion years, acting as the ultimate engine of our neighborhood.\n\nIn addition to these core facts, the Sun's magnetic field goes through a cycle called the solar cycle every 11 years, during which solar flares, coronal mass ejections, and sunspots reach a peak before subsiding. These massive solar eruptions can release energetic particles that travel across space, occasionally colliding with Earth's magnetosphere to cause beautiful auroras, but they also pose a threat by potentially disrupting modern satellite communications, GPS navigation systems, and power grids on Earth. The Sun is classified as a yellow dwarf star, and though it seems incredibly huge to us, it is actually considered a medium-sized star when compared to hypergiants in the wider Milky Way galaxy. NASA's Parker Solar Probe and ESA's Solar Orbiter are currently studying the Sun closer than any spacecraft in human history, brave enough to fly directly through the outermost part of its atmosphere, the corona, to unlock the mysteries of solar wind acceleration and coronal heating."
        },
        Mercury: {
            image: "images/mercury.png",
            title: "☿ Mercury (The Swift Messenger)",
            text: "Mercury is the smallest, innermost, and fastest-orbiting planet in our Solar System, named after the swift Roman messenger god. Located incredibly close to the Sun, a year on Mercury lasts just 88 Earth days, meaning it zips through space at an astonishing speed of nearly 47 kilometers per second. However, its rotation is painfully slow, taking about 59 Earth days to spin just once on its axis. Because it has virtually no atmosphere to trap heat (only a thin exosphere), Mercury experiences the most extreme temperature fluctuations in the entire Solar System. During the day, the surface is directly baked by the Sun and reaches a scorching 430°C, while at night, with no air to retain the warmth, temperatures plunge to a freezing -180°C. Structurally, Mercury is highly metallic, containing a massive iron core that makes up about 85% of the planet's radius. Its heavily cratered, ancient gray surface closely resembles our Moon, scarred by billions of years of asteroid impacts and deep volcanic activity.\n\nAdding to its mysterious nature, scientists discovered that despite its extreme heat, Mercury actually harbors deposits of water ice hidden deep inside permanently shadowed craters at its poles, where the Sun's rays never reach. It is also the only terrestrial planet besides Earth to possess a global magnetic field, though it is only about 1% as strong as Earth’s, which helps protect its surface from the intense solar wind. Mercury has been visited by only a few spacecraft, including NASA's Mariner 10 in the 1970s and the MESSENGER probe, which entered its orbit in 2011 to map the planet in unprecedented detail. Currently, the joint European-Japanese BepiColombo mission is on its way to conduct further scientific investigations of this rugged, iron-rich world."
        },
        Venus: {
            image: "images/venus.webp",
            title: "♀ Venus (The Scorching Twin)",
            text: "Venus is the second planet from the Sun and is often called Earth’s sister planet because of their highly similar size, mass, and bulk composition. However, beneath its beautiful, bright reflective clouds lies a literal hellscape, making it the hottest planet in our Solar System with a constant surface temperature of about 465°C. This extreme heat is caused by a runaway greenhouse effect generated by its incredibly thick, toxic atmosphere, which is composed of 96% carbon dioxide and features clouds of highly corrosive sulfuric acid. The atmospheric pressure on Venus’s surface is a crushing 90 times greater than Earth's, equivalent to being one kilometer deep underwater. Intriguingly, Venus rotates backward on its axis (retrograde rotation) compared to most other planets, meaning the Sun rises in the west and sets in the east. It also spins so slowly that its day (243 Earth days) is actually longer than its year (225 Earth days). Its surface is a vast volcanic desert covered in lava plains, towering active volcanoes, and warped mountains.\n\nTo understand Venus's dynamic nature, scientists have analyzed radar data from missions like NASA’s Magellan, which revealed a surface heavily modified by intense volcanism and tectonic forces, with thousands of volcanic structures and unique pancake-shaped lava domes. Despite its hostile environment, Venus remains a subject of intense scientific curiosity, especially regarding its upper atmosphere, where some researchers hypothesize that microbial life could potentially survive in the highly acidic but relatively temperate cloud decks. In the past, early Venus may have possessed liquid water oceans and a climate similar to Earth’s before the runaway greenhouse effect permanently altered its destiny. Future space exploration missions, such as NASA's VERITAS and DAVINCI, as well as Europe's EnVision, are planned to launch in the coming decade to peer beneath the dense acid clouds, map its topography, and determine if its volcanoes are still actively erupting today."
        },
        Earth: {
            image: "images/earth.webp",
            title: "🌍 Earth (The Oasis of Life)",
            text: "Earth is our beautiful home planet, the third from the Sun, and the only known place in the entire vast universe that harbors and sustains complex biological life. It is uniquely positioned in the circumstellar habitable zone, or 'Goldilocks Zone,' where temperatures are just right for liquid water to exist stably on the surface. Approximately 71% of Earth's surface is covered by vast, deep oceans of liquid water, earning it the famous nickname 'The Blue Marble.' Earth’s protective atmosphere is composed of 78% nitrogen, 21% oxygen, and trace gases, shielding us from harmful solar radiation while keeping the planet comfortably warm through a balanced greenhouse effect. Our planet has a dynamic surface featuring active tectonic plates that constantly shift, forming majestic mountain ranges, deep ocean trenches, and volcanic chains. Earth possesses a strong magnetic field generated by its molten nickel-iron outer core, which deflects dangerous solar winds. With its single loyal companion, the Moon, Earth remains a perfectly balanced haven of biodiversity.\n\nBeyond its biological abundance, Earth’s climate and ecosystems are driven by a complex web of interconnected systems, including the water cycle, carbon cycle, and atmospheric circulation. The planet's tilt of 23.5 degrees is responsible for our changing seasons, which distribute solar energy across the globe and drive the migrations of millions of animal species. Tectonic activity on Earth is unique among terrestrial planets, recycling carbon and other vital nutrients back into the mantle, which helps stabilize our atmosphere over millions of years. Our oceans not only support a vast array of marine life but also act as a massive heat sink, regulating global temperatures and weather patterns. Human civilization, alongside millions of other species, relies entirely on the delicate balance of these natural systems. As we continue to study Earth using advanced environmental satellites, we gain a deeper appreciation of our responsibility to protect and preserve this fragile, lifegiving oasis in the vast, cold emptiness of space."
        },
        Mars: {
            image: "images/mars.webp",
            title: "♂ Mars (The Rust-Red Desert)",
            text: "Mars is the fourth planet from the Sun and has captured human imagination for centuries as a primary target for future human colonization. Known widely as the Red Planet, its distinctive rust-red hue comes from a high abundance of iron oxide (rust) covering its vast, dusty desert surface. Mars is a cold, dry, terrestrial world with a very thin, unbreathable atmosphere composed of 95% carbon dioxide. Despite its current barren state, scientists have found overwhelming evidence of liquid water flowing across its surface billions of years ago, indicating it may have once been habitable. Mars boasts some of the most dramatic geological features in the Solar System, including Olympus Mons, the largest volcano in the system which stands three times taller than Mount Everest, and Valles Marineris, a colossal canyon system that dwarfs Earth’s Grand Canyon. It has polar ice caps made of water ice and frozen carbon dioxide (dry ice) that shrink and grow with the Martian seasons. Mars has two tiny, irregular moons, Phobos and Deimos, which are believed to be captured asteroids.\n\nAdding to the excitement of Martian exploration, a fleet of robotic rovers and orbiters, including NASA's Curiosity and Perseverance, along with the Ingenuity helicopter, have spent years analyzing the planet's soil, looking for organic molecules and ancient biosignatures. These missions have confirmed that Mars once had deep lakes, active river deltas, and perhaps even a northern ocean, making it highly likely that microscopic life could have thrived there in its warm, wet past. Mars also experiences massive, planet-encircling dust storms that can last for months, completely blocking out the Sun and testing the survival of solar-powered machinery. Because Mars has a day-night cycle very similar to Earth's (a Martian day, or 'sol,' is about 24 hours and 39 minutes), it is considered the most practical destination for future human exploration. Space agencies and private aerospace companies are actively developing technologies to send astronauts to Mars, with plans to establish permanent habitats and eventually transform the cold desert into a second home for humanity."
        },
        Jupiter: {
            image: "images/jupiter.webp",
            title: "♃ Jupiter (The King of Giants)",
            text: "Jupiter is the colossal fifth planet from the Sun and the undisputed king of our planetary system, carrying more than twice the mass of all other planets combined. As a massive gas giant, Jupiter has no solid surface; it is composed almost entirely of hydrogen and helium gas wrapping around a dense, high-pressure core. Its outer atmosphere is highly turbulent, characterized by colorful, swirling bands of clouds whipped by supersonic winds up to 600 kilometers per hour. The planet's most iconic feature is the Great Red Spot, a mammoth, counter-clockwise spinning hurricane-like storm wider than Earth itself that has raged for at least 300 years. Jupiter possesses an incredibly powerful magnetic field, 14 times stronger than Earth’s, which traps radiation and creates brilliant auroras at its poles. It also acts as a cosmic shield for the inner planets by gravitationally deflecting dangerous comets and asteroids. Jupiter has a vast family of at least 95 moons, including Ganymede (the largest moon in the Solar System) and Europa, which hides a massive liquid ocean beneath its icy crust.\n\nExploring deeper into Jupiter's realm, NASA's Juno spacecraft has been orbiting the planet since 2016, peer beneath its thick cloud cover to study its deep atmosphere, gravity field, and magnetic environment. Juno's discoveries have revealed that Jupiter's core is not a small, solid rock as previously thought, but rather a large, 'fuzzy' core made of dissolved heavy elements mixed with metallic hydrogen. This metallic hydrogen layer, under extreme pressures, acts like an electrical conductor, which is the source of Jupiter's immense magnetic field. Furthermore, Jupiter's moons present some of the most exciting targets in the search for extraterrestrial life. Europa, Ganymede, and Callisto are all believed to host subsurface oceans beneath their icy shells, heated by the intense gravitational flexing (tidal forces) caused by Jupiter's massive pull. Future missions like ESA's JUICE (Jupiter Icy Moons Explorer) and NASA's Europa Clipper are on their way to investigate these ocean worlds and determine if they possess the necessary conditions to support alien life forms."
        },
        Saturn: {
            image: "images/saturn.webp",
            title: "♄ Saturn (The Jewel of the System)",
            text: "Saturn is the sixth planet from the Sun and is widely regarded as the most visually spectacular planet in our Solar System due to its magnificent, extensive ring system. These bright, wide rings are not solid structures; they are composed of billions of individual particles ranging in size from tiny dust grains to house-sized chunks of water ice and rocky debris, all orbiting the planet in perfect harmony. Like Jupiter, Saturn is a massive gas giant made mostly of hydrogen and helium, and it is so incredibly light and low in density that it would actually float in a giant bathtub if one existed. Despite its serene appearance, Saturn has a highly active atmosphere with super-fast winds reaching up to 1,800 kilometers per hour. The planet's north pole features a bizarre, permanent six-sided jet stream pattern known as the Hexagon. Saturn has surpassed all other planets with a staggering count of over 140 moons. Among them is Titan, a massive moon larger than Mercury, which has a thick nitrogen atmosphere and lakes of liquid methane on its cold surface.\n\nTo uncover Saturn's deep secrets, the historic Cassini-Huygens mission spent 13 years orbiting the planet, providing spectacular close-up views of its rings and dropping a probe onto the mysterious surface of Titan. Cassini discovered that another of Saturn's moons, Enceladus, is actively shooting giant geysers of water ice, organic molecules, and salt into space from a hidden ocean beneath its icy surface, making it one of the top candidates for harboring microbial life in our Solar System. Saturn's rings themselves are incredibly thin, averaging only about 10 meters in thickness despite stretching out for hundreds of thousands of kilometers, and scientists estimate they may be relatively young, perhaps formed just 10 to 100 million years ago from the icy remains of a shattered moon or comet. As Saturn continues its slow, 29-year journey around the Sun, it remains a focal point of astronomical study, offering crucial clues about the formation of planetary systems and the conditions necessary for life to arise in the outer reaches of space."
        },
        Uranus: {
            image: "images/uranus.webp",
            title: "♅ Uranus (The Sideways Ice Giant)",
            text: "Uranus is the seventh planet from the Sun and is classified as an 'Ice Giant' because its bulk composition consists of a hot, dense fluid of icy materials—water, ammonia, and methane—above a small rocky core. What makes Uranus truly unique is its extreme axial tilt of 98 degrees, which means the planet literally rolls through space on its side like a bowling ball. This extreme tilt causes highly unusual seasons; each of its poles spends 42 Earth years bathed in continuous sunlight followed by 42 years of complete, icy darkness. Uranus has a beautiful pale cyan-blue color, which is caused by methane gas in its atmosphere absorbing red light. It holds the title of the coldest atmosphere in the Solar System, with temperatures dropping to a freezing -224°C. Uranus has a faint but distinct system of 13 narrow dark rings and is orbited by 28 known moons, which are named after characters from the works of William Shakespeare and Alexander Pope. It was also the first planet to be discovered using a telescope, by William Herschel in 1781.\n\nDeepening our understanding of this cold world, planetary scientists believe that the extreme pressure inside Uranus's mantle may cause carbon atoms to crystallize into diamonds, creating a literal rain of diamonds falling through its icy layers toward the core. Uranus also possesses a highly unusual, lopsided magnetic field that is tilted at 59 degrees away from its rotational axis and shifted offset from the planet's center, causing its magnetosphere to wobble violently as it spins. The only spacecraft to ever visit Uranus was NASA's Voyager 2 in 1986, which captured close-up images of its pale, featureless clouds and discovered several new rings and moons, including the highly fractured, bizarrely scarred moon Miranda. Today, Uranus is gaining renewed interest from space agencies, with planetary scientists urging for a dedicated robotic flagship mission to orbit the planet, map its gravitational field, and drop a probe into its deep atmosphere to solve the mystery of why it emits so little internal heat compared to other gas giants."
        },
        Neptune: {
            image: "images/neptune.webp",
            title: "♆ Neptune (The Supersonic Ice Giant)",
            text: "Neptune is the eighth, most distant, and darkest major planet in our Solar System, located about 4.5 billion kilometers from the Sun. Like its neighbor Uranus, it is an Ice Giant, but it has a much deeper, royal blue color due to trace amounts of methane and an unidentified atmospheric component. Because of its extreme distance, Neptune takes a staggering 165 Earth years to complete just one single orbit around the Sun. Despite receiving very little solar heat, Neptune has a highly active and violent atmosphere, powered by an internal heat source. It is home to the most powerful winds in the Solar System, which rage at supersonic speeds of up to 2,100 kilometers per hour, fast enough to break the sound barrier on Earth. In 1989, NASA's Voyager 2 spacecraft observed the Great Dark Spot, a massive storm system in its atmosphere. Neptune has 16 known moons, the most famous being Triton, a frozen world that orbits Neptune backward (retrograde orbit) and features active geysers spewing liquid nitrogen into space.\n\nLooking closer at Neptune's unique characteristics, Triton's retrograde orbit is highly significant because it suggests the moon did not form alongside Neptune but was instead captured from the Kuiper Belt, a distant ring of icy objects beyond the major planets. Over billions of years, Triton's orbit is slowly decaying, and scientists calculate that it will eventually be torn apart by Neptune's immense gravitational forces, forming a spectacular new ring system that will rival Saturn's. Neptune itself is surrounded by five main rings, named after astronomers who made key discoveries about the planet, which have unusual clumped structures known as ring arcs. Unlike Uranus, Neptune has a warm core that radiates more than twice the energy it receives from the Sun, driving its extremely dynamic weather and creating short-lived dark storms. Since Voyager 2's brief flyby in 1989, no spacecraft has returned to Neptune, leaving it as one of the most mysterious and enticing frontiers for future deep-space exploration."
        }
    },
    am: {
        Sun: {
            image: "images/sun.png",
            title: "☀️ ፀሐይ (ባለ ግርማዋ ኮከብ)",
            text: "ፀሐይ በስርዓተ ፀሐያችን መሃል የምትገኝ ግዙፍ ኮከብ ስትሆን፣ የጠቅላላው ስርዓት 99.8% የሚሆነውን ክብደት ብቻዋን ትይዛለች። እጅግ በጣም ሞቃት በሆነ የፕላዝማ ጋዝ የተገነባች ፍጹም ክብ ቅርጽ ያላት አካል ናት። በውስጧ በሚካሄደው የኒውክሌር ውህደት (Nuclear Fusion) ሃይድሮጂን ጋዝ ወደ ሄሊየም ሲቀየር የሚለቀቀው ከፍተኛ ሙቀትና ብርሃን በምድር ላይ ላለው ህይወት ዋነኛ ምንጭ ነው። የፀሐይ የስበት ኃይል ባይኖር ኖሮ ምድርና ሌሎች ፕላኔቶች አቅጣጫቸውን አጥተው በህዋ ውስጥ ይበተኑ ነበር። የፀሐይ ውጫዊ ክፍል 5,500 ዲግሪ ሴልሺየስ የሚነድ ሲሆን፣ ውስጣዊ እምብርቷ (Core) ደግሞ አስገራሚ 15 ሚሊዮን ዲግሪ ሴልሺየስ ይሞቃል። ዕድሜዋ 4.6 ቢሊዮን ዓመት ገደማ ሲሆን፣ ለሚቀጥሉት 5 ቢሊዮን ዓመታት በዚህ ጥንካሬዋ እንደምትቀጥል ይገመታል።\n\nከእነዚህ መሠረታዊ እውነታዎች በተጨማሪ፣ የፀሐይ መግነጢሳዊ መስክ በየ11 ዓመቱ የፀሐይ ዑደት (Solar Cycle) በሚባል ሂደት ውስጥ ያልፋል፤ በዚህ ጊዜ የፀሐይ ነበልባሎች (Solar Flares)፣ የኮሮናል ቁስ መወርወር (Coronal Mass Ejections) እና የፀሐይ ነጠብጣቦች ከፍተኛ ደረጃ ላይ ደርሰው እንደገና ይረጋጋሉ። እነዚህ ግዙፍ የፀሐይ ፍንዳታዎች በህዋ ውስጥ የሚጓዙ ከፍተኛ ኃይል ያላቸውን ቅንጣቶች የሚለቁ ሲሆን፣ አልፎ አልፎ ከምድር መግነጢሳዊ መስክ ጋር በመጋጨት ውብ የሰሜንና ደቡብ ዋልታ ብርሃናትን (Auroras) ይፈጥራሉ፤ ነገር ግን በምድር ላይ ያሉ የዘመናዊ ሳተላይት ግንኙነቶችን፣ የጂፒኤስ (GPS) አሰሳ ስርዓቶችንና የኃይል ማከፋፈያ መስመሮችን የማስተጓጎል አቅም አላቸው። ፀሐይ በቢጫ ድንክ ኮከብ (Yellow Dwarf) መደብ ውስጥ የምትመደብ ሲሆን፣ ለእኛ በጣም ግዙፍ ብትመስልም በጠቅላላው ሚልኪ ዌይ ጋላክሲ ውስጥ ካሉ ግዙፍ ከዋክብት ጋር ሲነፃፀር መካከለኛ መጠን እንዳላት ትቆጠራለች። በአሁኑ ጊዜ የናሳ ፓርከር ሶላር ፕሮብ (Parker Solar Probe) እና የአውሮፓው ሶላር ኦርቢተር የፀሐይን ውጫዊ ከባቢ አየር በመብረር ከፍተኛ ምርምር እያደረጉ ይገኛሉ።"
        },
        Mercury: {
            image: "images/mercury.png",
            title: "☿ ፊጋ (ለፀሐይ የቅርቧ ፕላኔት)",
            text: "ፊጋ (Mercury) በስርዓተ ፀሐያችን ውስጥ ትን῟ እና ለፀሐይ በጣም ቅርብ የሆነችው ፈጣን ፕላኔት ናት። ለፀሐይ ቅርብ ከመሆኗ የተነሳ በሰከንድ 47 ኪሎ ሜትር በመጓዝ በአጭር 88 ቀናት ውስጥ ፀሐይን አንድ ጊዜ ትዞራለች። ይሁንና በራሷ ዘንግ ላይ ለመዞር 59 የምድር ቀናትን ስለምትፈጅ ቀኗ በጣም ረጅም ነው። ፊጋ ከባቢ አየር ስለሌላት የሙቀት መለዋወጧ እጅግ አስደንጋጭ ነው፤ ቀትር ላይ በፀሐይ በቀጥታ ስትቃጠል ሙቀቷ 430 ዲግሪ ሴልሺየስ የሚደርስ ሲሆን፣ በሌሊት ደግሞ ሙቀቱን የሚይዝ አየር ስለሌለ ወደ -180 ዲግሪ ሴልሺየስ ይቀዘቅዛል። የውስጥ አካሏ 85% የሚሆነው ከጠንካራ ብረት የተሠራ ሲሆን፣ ውጫዊ ገጽታዋ በብዙ የጠፈር አካላት ግጭት የተበሳሳና የጨረቃን መልክ የሚመስል ግራጫማ መሬት ነው።\n\nለዚህች ምስጢራዊ ፕላኔት ተጨማሪ እውነታ ሲጨመር፣ ሳይንቲስቶች ምንም እንኳን ፊጋ እጅግ በጣም ሞቃት ብትሆንም በሰሜንና ደቡብ ዋልታዎቿ ላይ በቋሚነት ጥላ በሆኑ ጥልቅ ጉድጓዶች ውስጥ የበረዶ ክምችት ማግኘታቸው አስደናቂ ነው። በተጨማሪም ፊጋ ከምድር ውጪ የራሷ የሆነ መግነጢሳዊ መስክ ያላት ብቸኛዋ ድንጋያማ ፕላኔት ናት፤ ምንም እንኳን ጥንካሬው ከምድር መግነጢሳዊ መስክ 1% ብቻ ቢሆንም፣ ከፀሐይ የሚመጣውን ኃይለኛ የንፋስ ግፊት ለመቋቋም ይረዳታል። ፊጋ እስካሁን የተጎበኘችው በሁለት የጠፈር መንኮራኩሮች ብቻ ሲሆን፣ እነሱም በ1970ዎቹ የተላከው ማሪነር 10 እና በ2011 በምህዋሯ ውስጥ በመግባት ዝርዝር ካርታ የሰራው የናሳው ሜሴንጀር (MESSENGER) ናቸው። በአሁኑ ጊዜ የአውሮፓና ጃፓን ትብብር የሆነው ቤፒኮሎምቦ (BepiColombo) መንኮራኩር ስለ ፊጋ ተጨማሪ ሳይንሳዊ ምርምር ለማድረግ በመጓዝ ላይ ይገኛል።"
        },
        Venus: {
            image: "images/venus.webp",
            title: "♀ ዙህራ (ተቀጣጣይዋ ፕላኔት)",
            text: "ዙህራ (Venus) ከፀሐይ ሁለተኛዋ ፕላኔት ስትሆን በክብደቷና በስፋቷ ምድርን ስለምትመስል 'የምድር መንትያ' ትባላለች። ነገር ግን በውስጧ ያለው ሁኔታ ከምድር ፈጽሞ የተለየና እጅግ አስፈሪ ነው። ከባቢ አየሯ 96% ካርቦን ዳይኦክሳይድ የያዘና በሰልፈሪክ አሲድ ደመናዎች የተሸፈነ በመሆኑ፣ ከፀሐይ የሚገባውን ሙቀት አፍኖ በመያዝ (Runaway Greenhouse Effect) የሙቀት መጠኗን 465 ዲግሪ ሴልሺየስ ያደርሰዋል፤ ይህም በስርዓተ ፀሐያችን ውስጥ አንደኛ ሞቃቷ ፕላኔት ያደርጋታል። በዙህራ ላይ ያለው የአየር ግፊት በምድር ላይ ካለው በ90 እጥፍ ይበልጣል። ሌላው አስገራሚ ነገር ዙህራ ከሌሎች ፕላኔቶች በተቃራኒ አቅጣጫ (ከምስራቅ ወደ ምዕራብ) የምትዞር ሲሆን፣ በራሷ ዘንግ ላይ የምትዞረው በጣም በዝግታ በመሆኑ አንድ ቀኗ (243 የምድር ቀናት) ከአንድ ዓመቷ (225 የምድር ቀናት) ይረዝማል።\n\nየዙህራን ውስብስብ ተፈጥሮ ለማጥናት ሳይንቲስቶች የናሳ ማጄላን (Magellan) መንኮራኩር በራዳር የላከውን መረጃ የተጠቀሙ ሲሆን፣ ይህም የፕላኔቷ ገጽታ በከፍተኛ የእሳተ ገሞራ ፍንዳታና በቴክቶኒክ ኃይሎች የተቀየረ መሆኑን አሳይቷል። በገጽታዋ ላይ በሺዎች የሚቆጠሩ እሳተ ገሞራዎችና ልዩ የፓንኬክ ቅርጽ ያላቸው የቀለጡ ዓለቶች ይገኛሉ። ምንም እንኳን አካባቢዋ እጅግ አስቸጋሪ ቢሆንም፣ የሳይንስ ሊቃውንት በዙህራ የላይኛው ከባቢ አየር ደመናዎች ውስጥ (ሙቀቱ መካከለኛ በሆነበት ቦታ) ጥቃቅን ተህዋሲያን (Microbial Life) ሊኖሩ ይችላሉ የሚል ግምት ስላላቸው ጥናታቸውን ቀጥለዋል። ከቢሊዮን ዓመታት በፊት ግን ዙህራ ልክ እንደ ምድር የውቅያኖስ ውሃና ምቹ አየር እንደነበራት ይታመናል። ለወደፊቱ የሚላኩት የናሳ ቬሪታስ (VERITAS)፣ ዳቪንቺ (DAVINCI) እና የአውሮፓ ኢንቪዥን (EnVision) መንኮራኩሮች የዙህራን ምስጢራዊ ደመናዎች ሰንጥቀው በመግባት እሳተ ገሞራዎቿ አሁንም ንቁ መሆናቸውን ያረጋግጣሉ።"
        },
        Earth: {
            image: "images/earth.webp",
            title: "🌍 ምድር (የህይወት መገኛ እምብርት)",
            text: "ምድር (Earth) ከፀሐይ በሶስተኛ ደረጃ ላይ የምትገኝ፣ እኛ የምንኖርባትና በጠቅላላው ዩኒቨርስ ውስጥ እስካሁን ህይወት ያላቸው ፍጥረታት እንደሚኖሩባት የምትታወቅ ብቸኛዋ ልዩ ፕላኔት ናት። ከፀሐይ ያላት ርቀት በጣም ሞቃት ወይም በጣም ቀዝቃዛ ስላልሆነ ውሃ በፈሳሽ መልክ በምድር ላይ እንዲገኝ አስችሏል፤ የገጽታዋ 71% በውቅያኖስ የተሸፈነ በመሆኑም 'ሰማያዊቷ ፕላኔት' ትባላለች። የምድር ከባቢ አየር 78% ናይትሮጅንና 21% ኦክስጅን የያዘ በመሆኑ ፍጥረታት በቀላሉ እንዲተነፍሱና ከጠፈር ከሚመጡ ጎጂ ጨረሮች እንድንጠበቅ ያደርገናል። ምድር በውስጧ ባለው የቀለጠ ብረት ምክንያት ጠንካራ መግነጢሳዊ መስክ ያላት ሲሆን፣ ይህ መስክ ከፀሐይ የሚመጡ ጎጂ ነፋሳትን ይከላከላል። ምድር እጅግ ውብ የሆነችና በአንድ ጨረቃ የምትታጀብ ድንቅ ፕላኔት ናት።\n\nምድር ካላት ባዮሎጂያዊ ብልጽግና ባሻገር፣ የአየር ንብረቷና የስነ-ምህዳሯ ሂደት እርስ በርስ በተሳሰሩ እንደ የውሃ ዑደት፣ የካርቦን ዑደትና የከባቢ አየር ዝውውር ባሉ ተፈጥሯዊ ስርዓቶች የሚመራ ነው። የምድር የ23.5 ዲግሪ ዘንበል ማለት በአራቱ ወቅቶች መፈራረቅ ላይ ከፍተኛ ሚና የሚጫወት ሲሆን፣ ይህም የፀሐይ ብርሃን በምድር ላይ በእኩልነት እንዲከፋፈልና በሚሊዮኖች የሚቆጠሩ እንስሳት ከቦታ ቦታ እንዲሰደዱ ያደርጋል። በምድር ላይ ያለው የቴክቶኒክ ሰሌዳዎች እንቅስቃሴ ካርቦንና ሌሎች ጠቃሚ ንጥረ ነገሮችን ወደ መሬት ውስጥ መልሶ በማስገባት ከባቢ አየርን ለረጅም ጊዜ ለማረጋጋት ይረዳል። ውቅያኖሶቻችን የባህር ውስጥ ፍጥረታትን ከመደገፍ አልፈው፣ የምድርን አጠቃላይ የአየር ሁኔታና ሙቀት ይቆጣጠራሉ። የሰው ልጅ ስልጣኔና በሚሊዮን የሚቆጠሩ ፍጥረታት ህልውና የተመሰረተው በእነዚህ የተፈጥሮ ሚዛኖች ላይ በመሆኑ፣ ምድርን ከተለያዩ ብክለቶችና የአየር ንብረት ለውጦች መጠበቅ የሁላችንም ትልቅ ኃላፊነት ነው።"
        },
        Mars: {
            image: "images/mars.webp",
            title: "♂ ማርስ (ቀይዋ በረሃማ ፕላኔት)",
            text: "ማርስ (Mars) ከፀሐይ አራተኛዋ ፕላኔት ስትሆን በገጽታዋ ላይ ባለው ከፍተኛ የብረት ኦክሳይድ (ዝገት) ምክንያት ደማቅ ቀይ ቀለም ስላላት 'ቀይዋ ፕላኔት' ትባላለች። ማርስ ቀዝቃዛና ደረቅ በረሃማ መሬት ያላት ሲሆን፣ በጣም ቀጭንና መተንፈስ የማይቻል ከባቢ አየር አላት። ይሁንና ሳይንቲስቶች ከቢሊዮን ዓመታት በፊት በላዩ ላይ ፈሳሽ ውሃ ይፈስ እንደነበር የሚያሳዩ በርካታ ማስረጃዎችን አግኝተዋል፤ ይህም ቀደም ሲል ህይወት ኖሮባት ሊሆን ይችላል የሚል ተስፋ ሰጥቷል። ማርስ በስርዓተ ፀሐይ ውስጥ ትልቁን እሳተ ገሞራ (ኦሊምፐስ ሞንስ - ከኤቨረስት በሶስት እጥፍ የሚበልጥ) እና ግዙፍ ሸለቆዎችን ይዛለች። በደቡብና ሰሜን ዋልታዎቿ ላይ የበረዶ ክምችቶች አሏት። ማርስ ፎቦስና ዲሞስ የሚባሉ ሁለት ትንንሽ ጨረቃዎች አሏት።\n\nየማርስን አስደናቂ ምርምር ለማስቀጠል፣ እንደ ናሳው ኪውሪዮሲቲ (Curiosity) እና ፐርሲቪየራንስ (Perseverance) ያሉ ሮቦቶች እንዲሁም የኢንጄኑቲ ሄሊኮፕተር በላዩ ላይ ዓመታትን በማሳለፍ አፈርና ዓለቱን ሲመረምሩ ቆይተዋል። እነዚህ መንኮራኩሮች ማርስ ቀደም ሲል ጥልቀት ያላቸው ሐይቆችና ንቁ ወንዞች እንደነበሯት አረጋግጠዋል፤ ይህም በጥንት ጊዜ ጥቃቅን ተህዋሲያን ይኖሩባት እንደነበር ትልቅ ጠቋሚ ነው። ማርስ መላውን ፕላኔት የሚሸፍኑና ለወራት የሚቆዩ ግዙፍ የአሸዋ አውሎ ነፋሶች ያስተናግዳል። የማርስ አንድ ቀን ከምድር ጋር እጅግ ተቀራራቢ በመሆኑ (24 ሰዓት ከ39 ደቂቃ ገደማ)፣ ለወደፊቱ የሰው ልጅ በጠፈር ምርምር ቀዳሚ መዳረሻው ለማድረግ እየሰራ ይገኛል። የተለያዩ የጠፈር ተቋማትና የግል ኩባንያዎች ሰዎችን ወደ ማርስ ለመላክና በዚያም ቋሚ የመኖሪያ ጣቢያ ለመገንባት የሚያስችሉ ዘመናዊ ቴክኖሎጂዎችን በመንደፍ ላይ ናቸው።"
        },
        Jupiter: {
            image: "images/jupiter.webp",
            title: "♃ ጁፒተር (የፕላኔቶች ንጉሥ)",
            text: "ጁፒተር (Jupiter) ከፀሐይ አምስተኛ ደረጃ ላይ የሚገኝና የፕላኔቶች ሁሉ ንጉሥ በመባል የሚታወቀው ትልቁ ጋዝ ፕላኔት ነው። ክብደቱ ከሌሎች ፕላኔቶች ሁሉ በአንድ ላይ ተደምረው በሁለት እጥፍ ይበልጣል። በአብዛኛው ከሃይድሮጂንና ሄሊየም ጋዝ የተሠራ በመሆኑ ምንም ዓይነት ጠንካራ መሬት የለውም። በጁፒተር ላይ ያለው ዋነኛ መለያ ምልክት 'ታላቁ ቀይ ነጥብ' (Great Red Spot) የሚባለውና ከምድር የሚሰፋው፣ ከ300 ዓመታት በላይ የዘለቀው ግዙፍ አውሎ ነፋስ ነው። ጁፒተር በጣም ኃይለኛ መግነጢሳዊ መስክ ስላለው ከጠፈር የሚመጡ አስፈሪ የጠፈር አካላትን በስበት ኃይሉ በመሳብ ምድርን ከተለያዩ አደጋዎች የሚጠብቅ 'የጠፈር ጋሻ' ሆኖ ያገለግላል። ጁፒተር ቢያንስ 95 ጨረቃዎች ያሉት ሲሆን፣ ከነዚህም ውስጥ ጋኒሜድ የተባለው ጨረቃ ከሜርኩሪ ፕላኔት ይበልጣል።\n\nስለ ጁፒተር ጥልቅ ምስጢር ለማወቅ፣ የናሳው ጁኖ (Juno) መንኮራኩር ከ2016 ጀምሮ በምህዋሯ ውስጥ በመዞር ወፍራም የጋዝ ደመናዋን ሰንጥቆ በመግባት መግነጢሳዊ መስኩንና ከባቢ አየሩን እያጠና ይገኛል። የጁኖ ግኝቶች እንደሚያሳዩት የጁፒተር መካከለኛ እምብርት ቀደም ሲል እንደሚታሰበው ጠንካራ ድንጋይ ሳይሆን፣ የቀለጡ ከባድ ንጥረ ነገሮችና የብረት ባህሪ ያለው ሃይድሮጂን ድብልቅ ነው። ይህ ፈሳሽ የብረት ሃይድሮጂን ከፍተኛ ኃይል ያለው የኤሌክትሪክ ፍሰት ስለሚፈጥር ለጁፒተር ግዙፍ መግነጢሳዊ መስክ መገኛ ነው። ከዚህም በላይ የጁፒተር ጨረቃዎች እንደ ዩሮፓ (Europa) እና ጋኒሜድ በበረዶ ካባቸው ስር ሰፊ የፈሳሽ ውሃ ውቅያኖስ እንዳላቸው ይታመናል፤ ይህም በስርዓተ ፀሐያችን ውስጥ ከምድር ውጪ ህይወት ሊገኝባቸው የሚችሉ ቀዳሚ ቦታዎች ያደርጋቸዋል። ወደ እነዚህ ጨረቃዎች የሚጓዙት የአውሮፓው ጁስ (JUICE) እና የናሳው ዩሮፓ ክሊፐር መንኮራኩሮች ጥናታቸውን ለመቀጠል በመጓዝ ላይ ናቸው።"
        },
        Saturn: {
            image: "images/saturn.webp",
            title: "♄ ሳተርን (ቀለበት ባለቤቷ ፕላኔት)",
            text: "ሳተርን (Saturn) ከፀሐይ ስድስተኛዋ ፕላኔት ስትሆን በሚያምሩና ሰፊ በሆኑት የበረዶና የዓለት ቀለበቶቿ ምክንያት 'የስርዓተ ፀሐያችን ጌጥ' በመባል ትታወቃለች። እነዚህ ቀለበቶች ከአቧራ ቅንጣት ጀምሮ እስከ ትላልቅ ተራራዎች የሚያህሉ የበረዶና የድንጋይ ስብርባሪዎች ስብስብ ናቸው። ሳተርን በአብዛኛው ጋዝ በመሆኗ ክብደቷ እጅግ በጣም ቀላል ነው፤ በቂ ስፋት ያለው የውሃ ገንዳ ቢኖር ሳተርን በውሃው ላይ የመንሳፈፍ አቅም አላት። በከባቢ አየሯ ላይ በሰዓት እስከ 1,800 ኪሎ ሜትር የሚሮጥ ብርቱ ነፋስ ይነፍሳል። በሰሜን ዋልታዋ ላይ ባለ ስድስት ማዕዘን ቅርጽ ያለው ቋሚ የደመና አዙሪት (Hexagon) ይገኛል። ሳተርን ከ140 በላይ ጨረቃዎች ያሏት ሲሆን፣ ታይታን (Titan) የተባለው ጨረቃዋ የራሱ ወፍራም ከባቢ አየርና የፈሳሽ ሚቴን ባህሮች ያሉት አስደናቂ ጠፈር ነው።\n\nየሳተርንን ውስብስብ ምስጢር ለመፍታት ካሲኒ-ሁይገንስ (Cassini-Huygens) የተባለችው የታሪክ እውቅ መንኮራኩር ለ13 ዓመታት በሳተርን ምህዋር በመዞር አስደናቂ ጥናት ያደረገች ሲሆን፣ ሁይገንስ የተባለውን መመርመሪያ ደግሞ ወደ ታይታን ጨረቃ ላይ በማሳረፍ የመጀመሪያውን ምስል ልካለች። ካሲኒ እንደገለጸው ኤንሴላደስ (Enceladus) የተባለው ሌላኛው የሳተርን ጨረቃ በበረዶው ስር ካለው ውቅያኖስ ውስጥ ግዙፍ የበረዶና የውሃ ትነትን ወደ ጠፈር ይረጫል፤ ይህ ውሃ ኦርጋኒክ ንጥረ ነገሮችን የያዘ በመሆኑ ባክቴሪያዎች ሊኖሩበት እንደሚችል ይታመናል። የሳተርን ቀለበቶች ምንም እንኳን በመቶ ሺዎች የሚቆጠሩ ኪሎ ሜትሮችን ቢዘረጉም፣ ውፍረታቸው በአማካይ 10 ሜትር ብቻ ነው። ሳይንቲስቶች እነዚህ ቀለበቶች ከ10 እስከ 100 ሚሊዮን ዓመታት በፊት በአንድ ጨረቃ ወይም ኮሜት መጋጨት የተፈጠሩ አዲስ አካላት እንደሆኑ ይገምታሉ። ሳተርን ፀሐይን አንድ ጊዜ ለመዞር 29 የምድር ዓመታት ይፈጅባታል።"
        },
        Uranus: {
            image: "images/uranus.webp",
            title: "♅ ዩራነስ (በጎኗ የምትሽከረከረው ፕላኔት)",
            text: "ዩራነስ (Uranus) ከፀሐይ ሰባተኛ ደረጃ ላይ የምትገኝና የቀዘቀዙ ግዙፍ ፕላኔቶች (Ice Giants) የሚባሉት ተጠቃሽ ናት። ይህች ፕላኔት ከሌሎቹ ሁሉ ለየት የሚያደርጋት በራሷ ዘንግ ላይ በ98 ዲግሪ ዘንበል ብላ በጎኗ መሽከረከሯ ነው፤ ይህም በህዋ ላይ ልክ እንደ ኳስ እየተንከባለለች እንድትጓዝ ያደርጋታል። በዚህ ምክንያት በአንዱ ዋልታዋ ላይ ለ42 ዓመታት ሙሉ የቀን ብርሃን ሲሆን፣ በቀሪው 42 ዓመታት ደግሞ ጨለማና ቅዝቃዜ ይሆናል። በከባቢ አየሯ ውስጥ ባለው ሜቴን ጋዝ ምክንያት ውብ የሆነ ሰማያዊ-አረንጓዴ ቀለም አላት። በስርዓተ ፀሐያችን ውስጥ እጅግ በጣም ቀዝቃዛዋ ፕላኔት ስትሆን ሙቀቷ እስከ -224 ዲግሪ ሴልሺየስ ይወርዳል። ዩራነስ 13 ቀጭን ቀለበቶችና 28 ጨረቃዎች አሏት።\n\nለዩራነስ ምርምር ትልቅ ትኩረት የሰጡ ሳይንቲስቶች እንደሚገምቱት፣ በፕላኔቷ ውስጥ ባለው ከፍተኛ ጫናና ቅዝቃዜ ምክንያት ካርቦን ወደ አልማዝነት ተቀይሮ በበረዶው ንብርብር ውስጥ 'የአልማዝ ዝናብ' (Diamond Rain) ሆኖ ይዘንባል። የዩራነስ መግነጢሳዊ መስክ ከፕላኔቷ መሀል በ59 ዲግሪ የራቀና የተዛባ በመሆኑ፣ በምትዞርበት ጊዜ መግነጢሳዊ መስኳ በከፍተኛ ሁኔታ ይወዛወዛል። ዩራነስን በቅርብ ርቀት የጎበኘችው ብቸኛዋ መንኮራኩር በ1986 ያለፈችው የናሳዋ ቮዬጀር 2 (Voyager 2) ስትሆን፣ እሷም በርካታ አዳዲስ ጨረቃዎችንና ቀለበቶችን ማግኘት ችላለች። ከእነዚህም ውስጥ ሚራንዳ (Miranda) የተባለው ጨረቃ በከፍተኛ ግጭት የተሰነጣጠቁ አስገራሚ ሰንሰለታማ ዓለቶች አሉት። በአሁኑ ጊዜ የሳይንስ ሊቃውንት ወደ ዩራነስ ልዩ ምህዋር የሚገባ መንኮራኩር ለመላክ ሰፊ እቅድ እያወጡ ይገኛሉ።"
        },
        Neptune: {
            image: "images/neptune.webp",
            title: "♆ ኔፕቱን (ነፋሻማዋ ሰማያዊ ፕላኔት)",
            text: "ኔፕቱን (Neptune) ከፀሐይ በስምንተኛና በመጨረሻ ደረጃ ላይ የምትገኝ፣ እጅግ የራቀችና የቀዘቀዘች ሰማያዊ ፕላኔት ናት። ከፀሐይ በ4.5 ቢሊዮን ኪሎ ሜትር ርቀት ላይ ስለምትገኝ ፀሐይን አንድ ጊዜ ለመዞር ሙሉ 165 የምድር ዓመታትን ትፈጃለች። ኔፕቱን በስርዓተ ፀሐያችን ውስጥ ፈጣንና አስፈሪ ነፋስ የሚነፍስባት ፕላኔት ናት፤ የነፋሱ ፍጥነት በሰዓት እስከ 2,100 ኪሎ ሜትር ይደርሳል (ይህም ከድምፅ ፍጥነት ይበልጣል)። በከባቢ አየሯ ውስጥ ሜቴን ስላለው ደማቅ ሰማያዊ ቀለም አላት። ኔፕቱን 16 ጨረቃዎች ያሏት ሲሆን፣ ትራይተን (Triton) የተባለው ትልቁ ጨረቃዋ ከፕላኔቷ አቅጣጫ በተቃራኒ የሚዞርና ፈሳሽ ናይትሮጅንን ወደ ጠፈር የሚረጩ ንቁ እሳተ ገሞራዎች ያሉበት እጅግ ቀዝቃዛ ቦታ ነው።\n\nየትራይተን ጨረቃ በተቃራኒ አቅጣጫ መዞር (Retrograde Orbit) ሳይንቲስቶችን በጣም ያስገረመ ሲሆን፣ ይህም ጨረቃዋ ከኔፕቱን ጋር አብራ እንዳልተፈጠረችና ከኩይፐር ቀበቶ (Kuiper Belt) በስበት ኃይል ተስባ እንደመጣች ያሳያል። ከቢሊዮን ዓመታት በኋላ ግን በትራይተንና በኔፕቱን መካከል ባለው የስበት መሳሳብ ምክንያት ጨረቃዋ ተሰባብራ ልክ እንደ ሳተርን አይነት ውብ የሆነ ቀለበት እንደምትፈጥር ይገመታል። ኔፕቱን አምስት ዋና ዋና ቀለበቶች ያሏት ሲሆን፣ እነዚህ ቀለበቶች ደማቅ ቅንጣቶች ያሉባቸው ልዩ ቅስቶች (Ring Arcs) አሏቸው። ኔፕቱን ከዩራነስ በተለየ መልኩ ከውስጧ ከፍተኛ ሙቀት የምታመነጭ በመሆኑ በከባቢ አየሯ ላይ የተለያዩ ፈጣን አውሎ ነፋሳትን ትፈጥራለች። በ1989 ቮዬጀር 2 ካለፈች በኋላ እስካሁን ሌላ መንኮራኩር ያልደረሰባት በመሆኑ ኔፕቱን አሁንም እጅግ ምስጢራዊ የሆነ የጠፈር ክፍል ናት።"
        }
    }
};

let currentLang = "en";

// ===================================
// 3. POPUP SYSTEM
// ===================================
function openPopup(planetName) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const popupTitle = document.getElementById("popup-title");
    const popupText = document.getElementById("popup-text");

    const data = planetData[currentLang][planetName];
    if (data && popup) {
        if (popupImg) popupImg.src = data.image;
        if (popupTitle) popupTitle.textContent = data.title;
        if (popupText) popupText.textContent = data.text;
        popup.style.display = "flex";
    }
}

function closePopup() {
    const popup = document.getElementById("popup");
    if (popup) popup.style.display = "none";
}

window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

// ===================================
// 4. PLANET FILTERING
// ===================================
function filterPlanets(category) {
    const cards = document.querySelectorAll(".planet-card");
    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } else if (category === "inner") {
            card.style.display = card.classList.contains("inner") ? "block" : "none";
        } else if (category === "outer") {
            card.style.display = card.classList.contains("outer") ? "block" : "none";
        }
    });
}

// ===================================
// 5. SPACE QUIZ SYSTEM
// ===================================
const quizData = {
    en: [
        { question: "Which planet is called the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
        { question: "What is the largest planet in our Solar System?", options: ["Saturn", "Earth", "Jupiter", "Neptune"], answer: "Jupiter" },
        { question: "Which planet is famous for its beautiful rings?", options: ["Uranus", "Saturn", "Mars", "Mercury"], answer: "Saturn" },
        { question: "Which is the coldest planet in our Solar System?", options: ["Uranus", "Neptune", "Mars", "Jupiter"], answer: "Uranus" },
        { question: "What is the star at the center of our Solar System?", options: ["The Moon", "Sirius", "The Sun", "Proxima Centauri"], answer: "The Sun" },
        { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: "Mercury" },
        { question: "Which planet is known as the hottest planet in the Solar System?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: "Venus" },
        { question: "Which planet is the farthest from the Sun?", options: ["Uranus", "Saturn", "Neptune", "Jupiter"], answer: "Neptune" }
    ],
    am: [
        { question: "ቀይ ፕላኔት በመባል የሚታወቀው የትኛው ነው?", options: ["ምድር", "ማርስ", "ጁፒተር", "ዙህራ"], answer: "ማርስ" },
        { question: "በስርዓተ ፀሐያችን ውስጥ ትልቁ ፕላኔት የትኛው ነው?", options: ["ሳተርን", "ምድር", "ጁፒተር", "ኔፕቱን"], answer: "ጁፒተር" },
        { question: "በሚያምሩ ቀለበቶቹ የሚታወቀው ፕላኔት የትኛው ነው?", options: ["ዩራነስ", "ሳተርን", "ማርስ", "ፊጋ"], answer: "ሳተርን" },
        { question: "በስርዓተ ፀሐያችን ውስጥ በጣም ቀዝቃዛው ፕላኔት የትኛው ነው?", options: ["ዩራነስ", "ኔፕቱን", "ማርስ", "ጁፒተር"], answer: "ዩራነስ" },
        { question: "በስርዓተ ፀሐያችን መሃል የሚገኘው ኮከብ ማን ይባላል?", options: ["ጨረቃ", "ሲሪየስ", "ፀሐይ", "ፕሮክሲማ"], answer: "ፀሐይ" },
        { question: "ለፀሐይ በጣም ቅርብ የሆነችው ፕላኔት የትኛዋ ናት?", options: ["ዙህራ", "ፊጋ", "ምድር", "ማርስ"], answer: "ፊጋ" },
        { question: "በስርዓተ ፀሐያችን ውስጥ በጣም ሞቃቷ ፕላኔት ማን ትባላለች?", options: ["ፊጋ", "ዙህራ", "ማርስ", "ጁፒተር"], answer: "ዙህራ" },
        { question: "ከፀሐይ በጣም የራቀችው የመጨረሻዋ ፕላኔት የትኛዋ ናት?", options: ["ዩራነስ", "ሳተርን", "ኔፕቱን", "ጁፒተር"], answer: "ኔፕቱን" }
    ]
};

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    const questionElement = document.getElementById("quiz-question");
    const optionsContainer = document.getElementById("quiz-options");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-btn");

    if (!questionElement || !optionsContainer || !resultElement || !nextButton) {
        console.error("Quiz HTML elements are missing!");
        return;
    }

    resultElement.textContent = "";
    nextButton.style.display = "none";
    optionsContainer.innerHTML = "";

    const currentQuiz = quizData[currentLang][currentQuestionIndex];
    questionElement.textContent = currentQuiz.question;

    currentQuiz.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        
        // ምርጫ ቁልፎች ስታይል
        button.style.width = "100%";
        button.style.padding = "14px";
        button.style.margin = "8px 0";
        button.style.borderRadius = "8px";
        button.style.background = "#2563eb";
        button.style.color = "white";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";
        button.style.border = "none";

        button.onclick = () => selectAnswer(option, button);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedOption, buttonElement) {
    const currentQuiz = quizData[currentLang][currentQuestionIndex];
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-btn");
    const allButtons = document.querySelectorAll("#quiz-options button");

    allButtons.forEach(btn => btn.disabled = true);

    const totalQuestions = quizData[currentLang].length;

    if (selectedOption === currentQuiz.answer) {
        score++;
        resultElement.textContent = currentLang === "en" ? "🎉 Correct!" : "🎉 ትክክል ነዎት!";
        resultElement.style.color = "#38dfff";
        buttonElement.style.background = "#22c55e"; 
    } else {
        resultElement.textContent = currentLang === "en" ? `❌ Wrong! Correct answer: ${currentQuiz.answer}` : `❌ ስህተት! ትክክለኛው መልስ፡ ${currentQuiz.answer}`;
        resultElement.style.color = "#ff4a4a";
        buttonElement.style.background = "#ef4444"; 
    }

    if (currentQuestionIndex === totalQuestions - 1) {
        nextButton.textContent = currentLang === "en" ? "Show Result 📊" : "ውጤት አሳይ 📊";
    } else {
        nextButton.textContent = currentLang === "en" ? "Next Question ➡️" : "ቀጣይ ጥያቄ ➡️";
    }

    nextButton.style.display = "block";
}

// የ"Next" በተን ክሊክ ክስተት አስተዳዳሪ
document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.getElementById("next-btn");
    if (nextButton) {
        nextButton.addEventListener("click", () => {
            const totalQuestions = quizData[currentLang].length;
            if (currentQuestionIndex === totalQuestions - 1) {
                showFinalScore();
            } else {
                currentQuestionIndex++;
                loadQuiz();
            }
        });
    }
    loadQuiz();
});

function showFinalScore() {
    const questionElement = document.getElementById("quiz-question");
    const optionsContainer = document.getElementById("quiz-options");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-btn");
    const totalQuestions = quizData[currentLang].length;

    if (!questionElement || !optionsContainer || !resultElement || !nextButton) return;

    optionsContainer.innerHTML = "";
    resultElement.textContent = "";

    if (currentLang === "en") {
        questionElement.textContent = `🏆 Quiz Finished! Score: ${score} / ${totalQuestions}`;
        resultElement.textContent = `Percentage: ${Math.round((score / totalQuestions) * 100)}%`;
        nextButton.textContent = "Restart Quiz 🔄";
    } else {
        questionElement.textContent = `🏆 ፈተናው ተጠናቋል! ውጤት፡ ${score} / ${totalQuestions}`;
        resultElement.textContent = `በፐርሰንት፡ ${Math.round((score / totalQuestions) * 100)}%`;
        nextButton.textContent = "እንደገና ጀምር 🔄";
    }

    resultElement.style.color = "#38dfff";
    nextButton.style.display = "block";

    nextButton.onclick = () => {
        currentQuestionIndex = 0;
        score = 0;
        loadQuiz();
    };
}

// ===================================
// 6. NASA APOD API
// ===================================
async function fetchNasaData() {
    const nasaImg = document.getElementById("nasa-img");
    const nasaTitle = document.getElementById("nasa-title");
    const nasaDesc = document.getElementById("nasa-description");

    try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        if (!response.ok) throw new Error("API Limit");
        const data = await response.json();

        if (nasaImg) nasaImg.src = data.url;
        if (nasaTitle) nasaTitle.textContent = data.title;
        if (nasaDesc) nasaDesc.textContent = data.explanation;
    } catch (error) {
        if (nasaTitle) nasaTitle.textContent = "Milky Way Galaxy";
        if (nasaDesc) nasaDesc.textContent = "The Milky Way is the galaxy that includes our Solar System.";
    }
}
fetchNasaData();

// ===================================
// 7. ROCKET LAUNCH EFFECT
// ===================================
const rocket = document.getElementById("rocket");
if (rocket) {
    rocket.addEventListener("click", () => {
        rocket.classList.add("launch");
        setTimeout(() => rocket.classList.remove("launch"), 5000);
    });
}

// ===================================
// 8. LANGUAGE SWITCHER
// ===================================
const langButton = document.getElementById("language");
if (langButton) {
    langButton.addEventListener("click", () => {
        if (currentLang === "en") {
            currentLang = "am";
            langButton.textContent = "English";
            translateToAmharic();
        } else {
            currentLang = "en";
            langButton.textContent = "አማርኛ";
            translateToEnglish();
        }
    });
}

function translateToAmharic() {
    document.querySelector(".logo").innerHTML = "🌍 ፕላኔት ኤክስፕሎረር";
    document.querySelector("nav ul").children[0].innerHTML = '<a href="#home">መነሻ</a>';
    document.querySelector("nav ul").children[1].innerHTML = '<a href="#solar">ስርዓተ ፀሐይ</a>';
    document.querySelector("nav ul").children[2].innerHTML = '<a href="#orbit">3D እይታ</a>';
    document.querySelector("nav ul").children[3].innerHTML = '<a href="#features">ባህሪያት</a>';
    document.querySelector("nav ul").children[4].innerHTML = '<a href="#gallery">ማሳያ</a>';
    document.querySelector("nav ul").children[5].innerHTML = '<a href="#quiz">ጥያቄዎች</a>';
    document.querySelector("nav ul").children[6].innerHTML = '<a href="#nasa">ናሳ (NASA)</a>';
    
    document.getElementById("search").placeholder = "ፕላኔት ይፈልጉ...";
    document.querySelector(".hero-text h1").innerHTML = "የእኛን አስደናቂ <span>ስርዓተ ፀሐይ</span> ያስሱ";
    document.querySelector(".hero-text p").textContent = "ስለ ፀሐይ እና ስለ ስምንቱ ፕላኔቶች ይወቁ። ጠፈርን በመመርመር ይደሰቱ።";
    document.querySelector(".start").textContent = "🚀 መመርመር ይጀምሩ";
    
    document.querySelector(".orbit-section h2").textContent = "ተንቀሳቃሽ የስርዓተ ፀሐይ እይታ";
    document.querySelector(".solar-system h2").textContent = "የእኛ ስርዓተ ፀሐይ";
    document.querySelector(".solar-system p").textContent = "ስለ ፀሐይ እና ስለ ስምንቱ አስደናቂ ፕላኔቶች ያስሱ።";
    
    document.querySelector(".filter-buttons").children[0].textContent = "🌌 ሁሉንም";
    document.querySelector(".filter-buttons").children[1].textContent = "🪨 ውስጣዊ ፕላኔቶች";
    document.querySelector(".filter-buttons").children[2].textContent = "🪐 ውጫዊ ፕላኔቶች";

    document.querySelector(".quiz h2").textContent = "🚀 የጠፈር ጥያቄዎች";
    document.querySelector(".quiz p").textContent = "የስርዓተ ፀሐይ እውቀትዎን ይፈትሹ!";
    
    currentQuestionIndex = 0;
    score = 0;
    loadQuiz();
}

function translateToEnglish() {
    document.querySelector(".logo").innerHTML = "🌍 Planet Explorer";
    document.querySelector("nav ul").children[0].innerHTML = '<a href="#home">Home</a>';
    document.querySelector("nav ul").children[1].innerHTML = '<a href="#solar">Solar System</a>';
    document.querySelector("nav ul").children[2].innerHTML = '<a href="#orbit">3D Solar</a>';
    document.querySelector("nav ul").children[3].innerHTML = '<a href="#features">Features</a>';
    document.querySelector("nav ul").children[4].innerHTML = '<a href="#gallery">Gallery</a>';
    document.querySelector("nav ul").children[5].innerHTML = '<a href="#quiz">Quiz</a>';
    document.querySelector("nav ul").children[6].innerHTML = '<a href="#nasa">NASA</a>';

    document.getElementById("search").placeholder = "Search Planet...";
    document.querySelector(".hero-text h1").innerHTML = "Explore Our <span>Amazing Solar System</span>";
    document.querySelector(".hero-text p").textContent = "Discover the Sun and the eight planets. Learn amazing facts and enjoy exploring space.";
    document.querySelector(".start").textContent = "🚀 Start Exploring";

    document.querySelector(".orbit-section h2").textContent = "Animated Solar System";
    document.querySelector(".solar-system h2").textContent = "Our Solar System";
    document.querySelector(".solar-system p").textContent = "Explore the Sun and the eight amazing planets.";

    document.querySelector(".filter-buttons").children[0].textContent = "🌌 All";
    document.querySelector(".filter-buttons").children[1].textContent = "🪨 Inner Planets";
    document.querySelector(".filter-buttons").children[2].textContent = "🪐 Outer Planets";

    document.querySelector(".quiz h2").textContent = "🚀 Space Quiz";
    document.querySelector(".quiz p").textContent = "Test your Solar System knowledge!";
    
    currentQuestionIndex = 0;
    score = 0;
    loadQuiz();
}
// ===================================
// 9. DARK & LIGHT MODE SYSTEM
// ===================================
// በክላስ ስም (class="theme") ቁልፉን እንፈልገዋለን
const themeToggle = document.querySelector(".theme");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        // በbody ላይ light-mode የሚለውን ክላስ ማብራት/ማጥፋት
        document.body.classList.toggle("light-mode");

        // የቁልፉን ምስል (Icon) መቀየር
        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "☀️"; // ወደ Light ሲቀየር የፀሐይ ምልክት
        } else {
            themeToggle.textContent = "🌙"; // ወደ Dark ሲቀየር የጨረቃ ምልክት
        }
    });
}
// ===================================
// 3D SOLAR SYSTEM - MOONS DATA
// ===================================
const planetMoons = {
    en: {
        Sun: "The Sun is a star and does not have moons.",
        Mercury: "Mercury has 0 moons.",
        Venus: "Venus has 0 moons.",
        Earth: "Earth has 1 moon (The Moon).",
        Mars: "Mars has 2 moons (Phobos and Deimos).",
        Jupiter: "Jupiter has 95 confirmed moons (including Ganymede, Europa, Io, and Callisto).",
        Saturn: "Saturn has over 146 moons (including Titan and Enceladus).",
        Uranus: "Uranus has 28 known moons (including Titania and Miranda).",
        Neptune: "Neptune has 16 known moons (including Triton)."
    },
    am: {
        Sun: "ፀሐይ ኮከብ ስለሆነች ጨረቃ የላትም።",
        Mercury: "ፊጋ 0 ጨረቃዎች አሏት።",
        Venus: "ዙህራ 0 ጨረቃዎች አሏት።",
        Earth: "ምድር 1 ጨረቃ አላት።",
        Mars: "ማርስ 2 ጨረቃዎች አሏት (ፎቦስ እና ዲሞስ)።",
        Jupiter: "ጁፒተር 95 የተረጋገጡ ጨረቃዎች አሉት (ጋኒሜድ እና ዩሮፓን ጨምሮ)።",
        Saturn: "ሳተርን ከ146 በላይ ጨረቃዎች አሏት (ታይታን እና ኤንሴላደስን ጨምሮ)።",
        Uranus: "ዩራነስ 28 የታወቁ ጨረቃዎች አሏት (ቲታኒያ እና ሚራንዳን ጨምሮ)።",
        Neptune: "ኔፕቱን 16 የታወቁ ጨረቃዎች አሏት (ትራይተንን ጨምሮ)።"
    }
};
// ===================================
// 3D PLANETS CLICK DETECTOR (FOR MOONS)
// ===================================
document.addEventListener("DOMContentLoaded", () => {
    // በ3D Orbit ክፍል ውስጥ ያሉትን ሁሉንም ፕላኔቶች እንፈልጋለን
    // (በአንተ HTML/CSS አደረጃጀት መሰረት የክላስ ስሙ .planet ወይም በክፍሉ ውስጥ ያሉትን አካላት ያነባል)
    const orbitPlanets = document.querySelectorAll(".orbit-section .planet, .solar-system .planet-card");

    orbitPlanets.forEach(planet => {
        planet.addEventListener("click", () => {
            // የፕላኔቱን ስም ከID ወይም ከክላስ ስም ወይም ከጽሑፍ እንወስዳለን
            let planetName = planet.id || planet.getAttribute("data-planet") || planet.querySelector("h3")?.textContent;
            
            // የፕላኔቱን ስም እናስተካክላለን (ክፍተቶችንና ኢሞጂዎችን ለማጥፋት)
            if (planetName) {
                planetName = planetName.replace(/[^\w]/g, '').trim(); // ቃላቶችን ብቻ ያስቀራል
                
                // በአማርኛ ከተጻፈ ወደ እንግሊዝኛ ቁልፍ ለመቀየር
                if (planetName.includes("ምድር") || planetName.includes("Earth")) planetName = "Earth";
                if (planetName.includes("ፊጋ") || planetName.includes("Mercury")) planetName = "Mercury";
                if (planetName.includes("ዙህራ") || planetName.includes("Venus")) planetName = "Venus";
                if (planetName.includes("ማርስ") || planetName.includes("Mars")) planetName = "Mars";
                if (planetName.includes("ጁፒተር") || planetName.includes("Jupiter")) planetName = "Jupiter";
                if (planetName.includes("ሳተርን") || planetName.includes("Saturn")) planetName = "Saturn";
                if (planetName.includes("ዩራነስ") || planetName.includes("Uranus")) planetName = "Uranus";
                if (planetName.includes("ኔፕቱን") || planetName.includes("Neptune")) planetName = "Neptune";
                if (planetName.includes("ፀሐይ") || planetName.includes("Sun")) planetName = "Sun";

                const moonMessage = planetMoons[currentLang][planetName];
                
                if (moonMessage) {
                    // የጨረቃውን ብዛት በቆንጆ የብቅ-ባይ መልዕክት (Alert) ያሳያል
                    alert(`ℹ️ ${moonMessage}`);
                }
            }
        });
    });
});