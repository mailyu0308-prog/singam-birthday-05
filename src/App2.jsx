import React, { useState, useRef } from "react";



const SECRET_PASSCODE = "0308";



export default function App() {

  const [passcode, setPasscode] = useState("");

  const [unlocked, setUnlocked] = useState(false);

  const [page, setPage] = useState(0);

  const [selectedMemory, setSelectedMemory] = useState(null);

  const [letterOpened, setLetterOpened] = useState(false);

  const [musicPlaying, setMusicPlaying] = useState(false);

  const [selectedMonth, setSelectedMonth] = useState(null);

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const [diaryOpened, setDiaryOpened] = useState(false);

  const [error, setError] = useState("");

  const [diaryChoice, setDiaryChoice] = useState(null);





  const audioRef = useRef(null);

  const months = [

  "January", "February", "March", "April",

  "May", "June", "July", "August",

  "September", "October", "November", "December"

];

const monthFolders = {

  January: "jan",

  February: "feb",

  March: "march",

  April: "april",

  May: "may",

  June: "june",

  July: "july",

  August: "aug",

  September: "sep",

  October: "oct",

  November: "nov",

  December: "dec"

};



  // Photos and videos inside public/pic/<month-folder>/

  const memoryFiles = {

    January: ["Abdulbday.jpeg","car.png", "earing.png", "poongal1.png", "pongalnight.png", "unopark.png"],

    February: ["firstvc.jpeg", "ramstea.png", "thaipusam.png"],

    March: ["aqulinbday.jpeg", "namafirstshadow.jpeg", "teashopla.jpeg", "vijaysendpana.jpeg"],

    April: ["carcolour.png", "firstselfi.png", "kutty.png", "parrtoshopaftercoffeekings.mp4"],

    May: ["airports.png", "Mouse.png", "Saaniyabirthday.png", "unphone.png", "whirtshirt.png"],

    June: ["mybdaygift.png", "returnsrikumaranch-mdu.mp4", "revelevdocall.png", "truckgame.jpeg"],

    July: ["ahh.jpeg", "beforetravel.png", "firstcoffeekings.png", "kuttypraveen.png", "maa.jpeg", "myscan.png", "mytreatment.png", "nicknamesinsta.jpeg", "purchase.png", "tara.png", "travel.mp4"],

    August: ["amarbrogift.png", "chello.jpeg", "clarification.jpeg", "edit.jpeg", "unkugift.jpeg", "urfavrt.png"],

    September: ["afterloggapmeet.mp4", "deepanbday.png", "neketacar.png", "unkuvachuvhatsappwallper.png", "urfavdress.png","firstlovepost.png"],

    October: [],

    November: [],

    December: []

  };

  const allVideos = Object.entries(memoryFiles).flatMap(([month, files]) =>
    files.filter((file) => file.toLowerCase().endsWith(".mp4")).map((file) => ({
      month, file, src: `/pic/${monthFolders[month]}/${file}`,
    }))
  );

  // Music controls

  const toggleMusic = () => {

    if (!audioRef.current) return;



    if (musicPlaying) {

      audioRef.current.pause();

      setMusicPlaying(false);

    } else {

      audioRef.current.play()

        .then(() => setMusicPlaying(true))

        .catch((err) => console.log("Music error:", err));

    }

  };



  // Unlock website and start music

  const unlockSite = (event) => {

    event.preventDefault();



    if (passcode === SECRET_PASSCODE) {

      setUnlocked(true);

      setError("");



      if (audioRef.current) {

        audioRef.current.play()

          .then(() => setMusicPlaying(true))

          .catch((err) => console.log("Autoplay blocked:", err));

      }

    } else {

      setError("That isn't the secret code. Try again ♡");

    }

  };



  // Navigation

  const nextPage = () => {

    setPage(1);

    setSelectedMemory(null);

  };



  const previousPage = () => {

    if (selectedMemory === "letter") {

      setSelectedMemory("birthday");

      setLetterOpened(false);

      return;

    }



    if (selectedMemory) {

      setSelectedMemory(null);

      return;

    }



    setPage(0);

  };



// memory and storys

const memoryStories = {

  January: {

    "Abdulbday.jpeg" : "Nama first pesikitathu intha celebration ku aprm tha ne enkitha tha loaction keta na send paney athuku aprm iruthu tha na unkita pesa start panay",

    "car.png": "Nama pesa start pana apo na ena pandra keta apo ne send pana pic ithu. Some memories stay special without needing a reason. ♡",

    "earing.png": "Na Third stud potu unku anupchen ne nala iruku alaga iruku nu sona and pongal intha pic anupchen . 🤎",

    "poongal1.png": "unoda thambi nu intha picture anupche pongal anki. ♡",

    "pongalnight.png": "Intha shirt sudha edututhu thantha shirt nu anupcha 🌙",

    "unopark.png": "Nama First time park la uno play panom apo unaya sticker poda eduthe  ♡"

  },



  February: {

    "firstvc.jpeg": "First time vdo call anki enku fever na face wash pana pore nu sona na vc potu pana kudathu nu solitu unoda bedsheet ah kamika and na fasewash pandren ah paka ka ne cut pana aprm facewash panitu bus la pogeyla nala fever agirchu ne thituna ♡",

    "thaipusam.png": "Thaipusam nu veratham iruthen apo kovil ku pogarthuku ena dress poda keten ne pink sona aprm na ready agitu unku snd panay. 🤎",

    "ramstea.png": "Na perima vettuku poitu vara apo ne enaya picup pana vantha apidye nama ramstea ponom  ☕"

},



  March: {

    "aqulinbday.jpeg": "My life changing day paa anki enoda stud kadal la poiruchu nu aluthen apo metro pora apo ne samathanam pana apo tha start achu spark ♡",

    "namafirstshadow.jpeg": "Na oruku poitu vantha aprm sla la iruthu pora apo edutha shawdow pic ithu  🌙",

    "teashopla.jpeg": "Ellarum class mudichutu sla ku pinadi iruka tea shop ku pona apo edutha pic☕",

    "vijaysendpana.jpeg": "ne gopal deepan vijay ellarum kalan kadai la iruka apo vijay send pana pic ♡"

  },



  April: {

    "carcolour.png": "Na suba ne vijay susyy thiruvizga nu paka poitu  sapita ashok pillar ponom na rice vangitu nala ila nu sona apo atha ne vangi sapita inu niyabagam iruku aprm tea kudika ponom apo vara apotha intha colour car nala irukum nu sona 🚗",

    "firstselfi.png": "Enooda screen glass ah vangi potu nala iruka nu pakura apo edutha pic its turn to our first selfi bro ♡",

    "kutty.png": "A cute little praveen alaga iruku paka unaya mariye ila unmaiya nee nu ketu tu iruthen alaga iruka bro🤎",

    "parrtoshopaftercoffeekings.mp4": "Parrota kadai ku poitu coffee kings ponom ellarum ne serious ah match pathutu irutha  ☕"

  },



  May: {

    "airports.png": "Abdul veetuku poitu vara apo nama pattu ketu kittu vanthom na un madila paduthu thooginten aprm stop varaapo airports ah kalati en bag la vacha vanga ma poita  ♡",

    "Mouse.png": "Un ku mouse pad work agala nu new mouse vangitu anupcha  🤎",

    "Saaniyabirthday.png": "Saaniya birthday ku video call pesunathu 🎂",

    "unphone.png": "Sla la ibm certificate kaga un phone vanguna apo edutha pic snap pota ♡",

    "whirtshirt.png": "Intha combo vanganu nu soli anupcha  🤎"

  },



  June: {

    "mybdaygift.png": "A birthday gift memory. na enga amma kita venum nu sona earings ah surprise ah bday gift ah kudutha serioursly unexpexted Some gifts are special not just because of what they are, but because of the thought behind them. ♡",

    "returnsrikumaranch-mdu.mp4": "A little journey memory. Every road has a story, and this one gets a page in our diary return madurai to chennai ponom. 🌙",

    "revelevdocall.png": "Ne vangi kudutha earings ah potutu unku video call pani kamichathu. ♡",

    "truckgame.jpeg": "A little gaming memory. unku intha game romba pudikum atha eduthuenku anupcha. 🎮"

  },



  July: {

    "ahh.jpeg": "na unkuda enyachum dhroorama poganum sona apo ne enkita enga ma poganum unku nu kete antha sec somethings splc  ♡",

    "beforetravel.png": "Nama first time chennai to madurai ponom poi solitu frds kita apo koyabedu la oru shop la sapitom na vendam nu soney analum vangi sapitu nu sona  🤎",

    "firstcoffeekings.png": "Our first Coffee Kings memory. Na kopiten nu ne enaya kopitu pona apo unkku na kudutha flower inu vachu irukiya nu theriyala vachu irukiya? ☕",

    "kuttypraveen.png": "Intha pic ne once view la anupcha na thirudi vachu irken😅 cute innocent praveen kutty♡",

    "maa.jpeg": "Na paa nu kopita apo ne maa nu reply pana aww Some memories become precious in ways words cannot explain. 🤎",

    "myscan.png": "Intha scan eduka pona apo thani kudika mudiama unku phn pani polambitu iruthen ♡",

    "mytreatment.png": "Enku trips potrutha apo ku unaya tha romba theduchu unkita msg layum call layum pesitu iruthen🤎",

    "nicknamesinsta.jpeg": "Our little nickname memory. Some names become special because of the person behind them. enga amma enaya peacock solurathu pudikum sonay and enku ne vacha nick names ithu ♡",

    "purchase.png": "nama ooruku porathuku munadi ne thiruvizha ku dress edukanu tnagar poi edutha tshirt enku send pana 🤎",

    "tara.png": "ooruku poitu veliya poren tara va thookitu nu anupcha  ♡",

    "travel.mp4": "Nama poi solitu pona trip oda vdo  🌙"

  },



  August: {

    "amarbrogift.png": "Amar bro unku dubai la iruthu vangitu vantha perfume ♡",

    "chello.jpeg": "na anupcha post la chello nu potrukatha pathu siricha ena keta apo enaya onnu ila di chello nu sona 🙈🤎",

    "clarification.jpeg": "ne enaya hurt agijatha pesala nu soli oru clarfication kudutha athu nalatha na feel panama iruken athukaga unaya pathi nenaka yocikama ila  ♡",

    "edit.jpeg": "Insta la trend atha namala vachu edit pani anupchen ne ai la photo share panatha nu thituva 🤎",

    "unkugift.jpeg": "unku na kudutha card! ♡",

    "urfavrt.png": "Apple fizz unku pudikum saraku pathila itha kudipen nu soli verpuethu va 🤷‍♀️"

  },



  September: {

    "afterloggapmeet.mp4": "Unnaya pakanum na ketu tu iruthen ne pakavay varala apo sudden ah vijay kuda vantha surprise ah iruthuchu actullay avan phone panum pothum un voice ketuchu athunalatha  vanthen 😁♡",

    "deepanbday.png": "Deepan birthday la enaya potu verpu agi vita nala 🎂",

    "neketacar.png": "Enrome la iruthuchu unku anupchen apo kondu va nu sona 🚗",

    "unkuvachuvhatsappwallper.png": "enoda second number la unku vacha special wallpaper  ♡",

    "urfavdress.png": "intha dress unku pudikum na alaga iruken nu sona orutharava 🌝 🤎",

    "firstlovepost.png" : "First time ne love post send pana ootikitta alaguuuuu🥹😚 "



  }

};



  return (

    <main className="site-shell">



      {/* MUSIC - stays mounted on every unlocked page */}

      <audio

        ref={audioRef}

        src="/En_Manadhin_Singame.mp3"

        loop

      />



      {/* MUSIC BUTTON - hidden on passcode page */}

      {unlocked && (

        <button className="music-button" onClick={toggleMusic}>

          {musicPlaying ? "🔊 Music On" : "🎵 Music Off"}

        </button>

      )}



      {!unlocked ? (



        /* PASSCODE PAGE */

        <section className="screen lock-screen">



          <div className="tiny-stars">✦ ☾ ✦</div>

          <div className="lion-mark">🦁🌙</div>



          <p className="eyebrow">

            A LITTLE SOMETHING FOR YOU

          </p>



          <h1>Before you come in...</h1>



          <p className="subtext">

            There is a tiny surprise waiting behind this door.

          </p>



          <form className="passcode-form" onSubmit={unlockSite}>

            <input

              aria-label="Secret passcode"

              type="password"

              inputMode="numeric"

              maxLength="8"

              placeholder="Enter the secret code"

              value={passcode}

              onChange={(event) => setPasscode(event.target.value)}

            />



            <button type="submit">

              Open the door →

            </button>

          </form>



          {error && (

            <p className="error-message">{error}</p>

          )}



          <p className="hint">A date holds the key ♡</p>



        </section>



      ) : (



        <>



          {/* COFFEE + TEA BIRTHDAY SURPRISE */}

          {page === 0 && (

            <section className="screen coffee-screen">



              <div className="tiny-stars">✦ ☾ ✦</div>



              <p className="eyebrow">

                A LITTLE BIRTHDAY CHEERS

              </p>



              <h1 className="coffee-heading">

                Just a little Birthday Cheers for you... ♡

              </h1>



              <div className="mug-stage">



                <div className="mug coffee-mug">

  <span className="mug-drink coffee-emoji">☕</span>

  <span className="mug-label">Coffee</span>

  <span className="mug-heart">♡</span>

</div>



                <div className="mug tea-mug">

                  <span className="mug-drink">🍵</span>

                  <span className="mug-label">Tea</span>

                  <span className="mug-heart">♡</span>

                </div>



              </div>



              <p className="clink-text">Clink! ♡</p>

              <p className="headphone-note">

  🎧 Please wear your headphones ♡

</p>



              <div className="sparkles">

                ✨　♡　✦　♡　✨

              </div>



              <div className="birthday-reveal">



                <h1>Cheers to you, Singam! 🤎</h1>



                <h2>Happy Birthday en thangamayyy! 🎂</h2>



                <p>

                  May this year bring you peace, strength,

                  happiness and all the good things you truly deserve. ♡

                </p>



                <button

                  className="gift-button"

                  onClick={nextPage}

                >

                  Open to your gift ♡ →

                </button>



              </div>



            </section>

          )}



          {/* MEMORIES PAGE */}

          {page === 1 && (

            <section className="screen memories-screen">



              {!selectedMemory ? (



                <>

                  <p className="eyebrow">

                    LITTLE MOMENTS, BIG MEANING

                  </p>



                  <h1>Our Little Memories</h1>



                  <p className="subtext">

                    Two little pages, kept safe here.

                  </p>



                  <div className="memory-grid">



                    <button

                      className="memory-card"

                      onClick={() => {

                        setSelectedMemory("birthday");

                        setLetterOpened(false);

                      }}

                    >

                      {/* <span className="memory-art birthday-art">

                        🎂

                      </span> */}

                      <div className="memory-card-image">

  <img

    src="/pic/coverpic/yourpic.jpeg"

    alt="Your Special Day"

  />

</div>



                      <span className="memory-date">

                        05 December 2026

                      </span>



                      <strong>Your Special Day</strong>



                      <span className="card-hint">

                        A Little Letter for You 🦁 ↗

                      </span>

                    </button>



                    <button

                      className="memory-card"

                      onClick={() => {

                        setSelectedMemory("moments");

                        setDiaryOpened(false);

                        setSelectedMonth(null);

                        setSelectedPhotoIndex(0);

                      }}

                    >

                      {/* <span className="memory-art moments-art">

                        📷

                      </span> */}

                       <div className="memory-card-image ">

  <img className="moonimg1"

    src="/pic/coverpic/moon.jpeg"

    alt="Our Chinna Ulagam"

  />

</div>

                      <span className="memory-date">

                        Little things

                      </span>



                      <strong>Our Chinna Ulagam 🦁🦚</strong>



                      <span className="card-hint">

                        Open this memory ↗

                      </span>

                    </button>





                  </div>

                </>



              ) : selectedMemory === "birthday" ? (



                /* YOUR SPECIAL DAY */

                <div className="memory-detail">



                  <p className="eyebrow">A DAY MADE FOR YOU</p>



                  <div className="detail-illustration">

                    🎂

                  </div>



                  <h1>05 December 2026</h1>



                  <p className="handwriting detail-copy">

                    A day made a little more special because

                    it's yours. Happy birthday, Singam! ♡

                  </p>



                  <button

                    className="gift-button"

                    onClick={() => {

                      setSelectedMemory("letter");

                      setLetterOpened(false);

                    }}

                  >

                    Open your letter ♡

                  </button>



                  <button

                    className="secondary-button"

                    onClick={() => setSelectedMemory(null)}

                  >

                    ← Back to memories

                  </button>



                </div>



              ) : selectedMemory === "letter" ? (



                /* BIRTHDAY LETTER */

                <div className="memory-detail letter-detail">



                  <p className="eyebrow">A LITTLE LETTER</p>



                  {!letterOpened ? (



                    <>

                      <div className="envelope-scene">

                        <div className="envelope-back">

                          <div className="envelope-pocket"></div>

                        </div>



                        <div className="envelope-flap"></div>



                        <div className="wax-seal">

                          🦁🌙

                        </div>

                      </div>



                      <div className="peel-instruction">

                        <p>

                          Something special is waiting inside...

                        </p>



                        <button

                          onClick={() => setLetterOpened(true)}

                        >

                          Pull your letter ♡

                        </button>

                      </div>

                    </>



                  ) : (



                    <>

                      <article className="revealed-letter">



                        <div className="letter-content">



                          <div className="letter-decor">

                            <span>🕯️</span>

                            <span>🦁🌙</span>

                          </div>



                          <p className="handwriting">

                            Dear My Favourite One,

                          </p>



                          <div className="handwriting letter-message">

                            <p>

                              Hey bro! Happy and happiest birthday,

                              en thangamayyyy! 🤎

                            </p>



                            <p>

                              Pa, indha year nee face pannadhu,

                              ippo face pannittu irukkuradhu ellame

                              December 4, 11:59-oda mudinjidattum

                              nu naan pray panren pa.

                            </p>



                            <p>

                              Unakku indha maadhiri vala vala-nu

                              pesuradhu pudikkuma nu enakku theriyala.

                              Enna situation-la idha nee padippa nu

                              kooda theriyala. Nee enakku evlo

                              pudikkum nu unakkum theriyum.

                            </p>



                            <p>

                              Aana ippadi nee pesama irukkuradhu

                              kashtama irukku. Adhukku pinnadi nee

                              face panra struggles-ah yosichu paatha,

                              idhellam oru pain-ah kooda unakku

                              theriyadhu nu enakku puriyudhu.

                              Unakku irukkura problems-la ennai pathi

                              yosikka kooda mudiyadhu nu enakkum

                              theriyum da.

                            </p>



                            <p>

                              Aana please, nee unnai nalla paathukko.

                              Nee nalla irundha dhaan un family-ah

                              nalla paathukka mudiyum. Ellame oru

                              naal cure aagum. Full-ah cure aaguma

                              nu theriyala, aana konjam konjama

                              samalichu, ellathayum overcome panni

                              thirumbi vandhuruva pa.

                            </p>



                            <p>

                              Unakku naan thunaiya irukken.

                              Edhaavadhu kashtama irundha sollu.

                              Illa, thittanum-na kooda thittu.

                              Aana pesama mattum irukkaadha.

                              Summa thittiyaavadhu pesu!

                            </p>



                            <p>

                              One request, birthday boy: please accept!

                              Summa naan noi noi-nu edhuvum pesamaaten.

                              Nee solradha kettuttu irukken.

                              Avlodhaan. Seri, okay!

                            </p>



                            <p>

                              Jokes apart, unakku eppo thonudho

                              appo pesu. Relax aagittu va.

                            </p>

                              <p>

                                Aprm oru mukiyamana vishayam Background odura&#x20;

                                song ena nu theryiama pakuraya unakaga nama&#x20;

                                stry vachu nanay ready pana song  tha lyrics

                                by mybuddy and music by gemini pa nala iruka

                                 lyrics nala gavanichu paru puriyum ena nu !

                                </p>

                            <p>

                              Miss you and love you so much pa! 🤎

                            </p>



                            <p>

                              Un Mayilu waiting for you da,

                             en thangamayyyy! 🦁🌙

                            </p>



                            <p>

                              Enna nadandhaalum, naan irukken.

                            </p>

                          </div>



                          <p className="handwriting-signature">

                            Ippadikku,

                            <br />

                            Un Mayilu Kutty 🦚

                          </p>



                        </div>

                      </article>



                    </>

                  )}



                  <button

                    className="secondary-button"

                    onClick={() => {

                      if (letterOpened) {

                        setLetterOpened(false);

                      } else {

                        setSelectedMemory("birthday");

                      }

                    }}

                  >

                    ← Back

                  </button>



                </div>



              ) : (



               /* OUR MEMORIES - DIARY */



<div className="diary-area">
  {!diaryOpened ? (
    <div className="diary-cover-wrap">
      <div className="diary-cover">
        <div className="diary-cover-springs" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <span key={index} />)}</div>
        <div className="diary-cover-content">
          <span className="diary-cover-small">A COLLECTION OF LITTLE MOMENTS</span>
          <div className="diary-cover-flower">✿</div>
          <h1>Mailyu's<br />Little Diary</h1>
          <p>Our memories, kept close forever ♡</p>
          <div className="diary-cover-decoration">✦　♡　✦</div>
          <button className="diary-open-button" onClick={() => { setDiaryOpened(true); setDiaryChoice(null); setSelectedMonth(null); setSelectedPhotoIndex(0); }}>Open diary →</button>
        </div>
      </div>
      <p className="diary-cover-note">A little book filled with us 🤎</p>
    </div>
  ) : diaryChoice === null ? (
    <div className="diary-choice-page">
      <p className="diary-page-kicker">OUR LITTLE WORLD ♡</p>
      <h1>Choose Your Memories</h1>
      <p>Every little moment has a story.</p>
      <div className="diary-choice-grid">
        <button className="diary-choice-card" onClick={() => { setDiaryChoice("pictures"); setSelectedMonth(null); setSelectedPhotoIndex(0); }}><span>📸</span><h2>Pictures</h2><p>Our memories, month by month ♡</p></button>
        <button className="diary-choice-card" onClick={() => setDiaryChoice("videos")}><span>🎥</span><h2>Our Memories of Years</h2><p>Little videos, forever memories ♡</p></button>
      </div>
    </div>
  ) : diaryChoice === "pictures" && !selectedMonth ? (
    <div className="diary-month-book">
      <div className="diary-month-spread">
        <section className="diary-month-page diary-month-left">
          <p className="diary-page-kicker">OUR LITTLE CHAPTERS · 01–06</p><h1>Our Memories ♡</h1><p className="diary-month-intro">January to June</p>
          <div className="diary-month-grid">
            {months.slice(0, 6).map((month, index) => (
              <button key={month} className="diary-month-card" onClick={() => { setSelectedMonth(month); setSelectedPhotoIndex(0); }}>
                <span className="month-number">{String(index + 1).padStart(2, "0")}</span><strong>{month}</strong>
                <span className="card-hint">{memoryFiles[month].filter((file) => !file.toLowerCase().endsWith(".mp4")).length ? `${memoryFiles[month].filter((file) => !file.toLowerCase().endsWith(".mp4")).length} little moments →` : "Coming soon ♡"}</span>
              </button>
            ))}
          </div>
        </section>
        <div className="diary-month-binding" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <span key={index} />)}</div>
        <section className="diary-month-page diary-month-right">
          <p className="diary-page-kicker">OUR LITTLE CHAPTERS · 07–12</p><h1>More Memories ♡</h1><p className="diary-month-intro">July to December</p>
          <div className="diary-month-grid">
            {months.slice(6, 12).map((month, index) => (
              <button key={month} className="diary-month-card" onClick={() => { setSelectedMonth(month); setSelectedPhotoIndex(0); }}>
                <span className="month-number">{String(index + 7).padStart(2, "0")}</span><strong>{month}</strong>
                <span className="card-hint">{memoryFiles[month].filter((file) => !file.toLowerCase().endsWith(".mp4")).length ? `${memoryFiles[month].filter((file) => !file.toLowerCase().endsWith(".mp4")).length} little moments →` : "Coming soon ♡"}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
      <button className="secondary-button diary-close-book" onClick={() => setDiaryChoice(null)}>← Back to choices</button>
    </div>
  ) : diaryChoice === "pictures" && selectedMonth ? (
    <div className="diary-spread">
      <div className="diary-spiral" aria-hidden="true">{Array.from({ length: 11 }, (_, index) => <span key={index} />)}</div>
      <section className="diary-page diary-photo-page">
        <p className="diary-page-kicker">{selectedMonth.toUpperCase()} · OUR LITTLE ARCHIVE</p><h1>{selectedMonth} Memories</h1>
        {memoryFiles[selectedMonth].filter((file) => !file.toLowerCase().endsWith(".mp4")).length > 0 ? (() => {
          const files = memoryFiles[selectedMonth].filter((file) => !file.toLowerCase().endsWith(".mp4"));
          const file = files[selectedPhotoIndex];
          const filePath = `/pic/${monthFolders[selectedMonth]}/${file}`;
          const title = file.replace(/\.[^/.]+$/, "");
          return <><div className="diary-photo-frame"><img key={filePath} src={filePath} alt={`${selectedMonth} memory: ${title}`} /></div><p className="diary-photo-name">{title}</p><p className="diary-page-number">MEMORY {selectedPhotoIndex + 1} / {files.length}</p></>;
        })() : <div className="diary-empty-photo"><span>♡</span><p>More memories will be added here.</p></div>}
      </section>
      <section className="diary-page diary-story-page">
        <div className="diary-story-inner">
          <span className="diary-story-flower">✿</span><p className="eyebrow">A LITTLE STORY TO KEEP</p>
          {memoryFiles[selectedMonth].filter((file) => !file.toLowerCase().endsWith(".mp4")).length > 0 ? <>
            <h2>{memoryFiles[selectedMonth].filter((file) => !file.toLowerCase().endsWith(".mp4"))[selectedPhotoIndex].replace(/\.[^/.]+$/, "")}</h2>
            <p className="diary-story-text">{memoryStories[selectedMonth]?.[memoryFiles[selectedMonth].filter((file) => !file.toLowerCase().endsWith(".mp4"))[selectedPhotoIndex]] || "This little moment is waiting for its story. ♡"}</p>
            <div className="diary-writing-lines"><span /><span /><span /></div>
          </> : <p className="diary-story-text">More memories will be added here. ♡</p>}
          <div className="diary-heart">♡</div><p className="diary-signoff">kept with love, always</p>
        </div>
        {memoryFiles[selectedMonth].filter((file) => !file.toLowerCase().endsWith(".mp4")).length > 0 && <div className="diary-slide-controls">
          <button className="secondary-button" onClick={() => setSelectedPhotoIndex((i) => Math.max(0, i - 1))} disabled={selectedPhotoIndex === 0}>← Previous</button>
          <span>{selectedPhotoIndex + 1} / {memoryFiles[selectedMonth].filter((file) => !file.toLowerCase().endsWith(".mp4")).length}</span>
          <button className="gift-button" onClick={() => setSelectedPhotoIndex((i) => Math.min(memoryFiles[selectedMonth].filter((file) => !file.toLowerCase().endsWith(".mp4")).length - 1, i + 1))} disabled={selectedPhotoIndex === memoryFiles[selectedMonth].filter((file) => !file.toLowerCase().endsWith(".mp4")).length - 1}>Next →</button>
        </div>}
      </section>
    </div>
  ) : diaryChoice === "videos" ? (
    <div className="diary-video-collection">
      <p className="diary-page-kicker">OUR LITTLE MOMENTS ♡</p><h1>Our Memories of Years</h1><p>Every little video holds a memory. 🤎</p>
      <div className="diary-video-grid">
        {allVideos.map((video, index) => <div className="diary-video-card" key={video.file}>
          <video src={video.src} controls playsInline preload="metadata" />
          <h3>Memory {index + 1}</h3><p>{video.month}</p><p>{memoryStories[video.month]?.[video.file] || "A little moment to keep forever. ♡"}</p>
        </div>)}
      </div>
      <button className="secondary-button" onClick={() => setDiaryChoice(null)}>← Back to choices</button>
    </div>
  ) : null}
  <div className="diary-bottom-actions">
    {diaryOpened && diaryChoice === "pictures" && selectedMonth && <button className="secondary-button" onClick={() => { setSelectedMonth(null); setSelectedPhotoIndex(0); }}>← All months</button>}
    <button className="secondary-button" onClick={() => { setSelectedMemory(null); setSelectedMonth(null); setDiaryOpened(false); setDiaryChoice(null); setSelectedPhotoIndex(0); }}>← Back to memories</button>
  </div>
</div>

              )}



            </section>

          )}



          {/* BACK BUTTON */}

          {page > 0 && !selectedMemory && (

            <button

              className="back-button"

              onClick={previousPage}

            >

              ← Back

            </button>

          )}



        </>

      )}



      <div className="footer-mark">

        🦁　☾　♡

      </div>



    </main>

  );

}