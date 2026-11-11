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
    January: ["car.png", "earing.png", "poongal1.png", "pongalnight.png", "unopark.png"],
    February: ["firstvc.jpeg", "ramstea.png", "thaipusam.png"],
    March: ["aqulinbday.jpeg", "namafirstshadow.jpeg", "teashopla.jpeg", "vijaysendpana.jpeg"],
    April: ["carcolour.png", "firstselfi.png", "kutty.png", "parrtoshopaftercoffeekings.mp4"],
    May: ["airports.png", "Mouse.png", "Saaniyabirthday.png", "unphone.png", "whirtshirt.png"],
    June: ["mybdaygift.png", "returnsrikumaranch-mdu.mp4", "revelevdocall.png", "truckgame.jpeg"],
    July: ["ahh.jpeg", "beforetravel.png", "firstcoffeekings.png", "kuttypraveen.png", "maa.jpeg", "myscan.png", "mytreatment.png", "nicknamesinsta.jpeg", "purchase.png", "thara.png", "travel.mp4"],
    August: ["amarbrogift.png", "chello.jpeg", "clarification.jpeg", "edit.jpeg", "unkugift.jpeg", "urfavrt.png"],
    September: ["afterloggapmeet.mp4", "deepanbday.png", "neketacar.png", "unkuvachuvhatsappwallper.png", "urfavdress.png"],
    October: [],
    November: [],
    December: []
  };
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

  return (
    <main className="site-shell">

      {/* MUSIC - stays mounted on every unlocked page */}
      <audio
        ref={audioRef}
        src="/pirai-thedum-bgm.mp3"
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
                  <span className="mug-drink">☕</span>
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

              <div className="sparkles">
                ✨　♡　✦　♡　✨
              </div>

              <div className="birthday-reveal">

                <h1>Cheers to you, Singam! 🤎</h1>

                <h2>Happy Birthday! 🎂</h2>

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
                      <span className="memory-art birthday-art">
                        🎂
                      </span>

                      <span className="memory-date">
                        05 December 2026
                      </span>

                      <strong>Your Special Day</strong>

                      <span className="card-hint">
                        Open this memory ↗
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
                      <span className="memory-art moments-art">
                        📷
                      </span>

                      <span className="memory-date">
                        Little things
                      </span>

                      <strong>Our Memories</strong>

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
                              Miss you and love you so much pa! 🤎
                            </p>

                            <p>
                              Un Mayilu waiting for you da,
                              thangamayyyy! 🦁🌙
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
        <div className="diary-cover-springs" aria-hidden="true">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className="diary-cover-content">
          <span className="diary-cover-small">A COLLECTION OF LITTLE MOMENTS</span>
          <div className="diary-cover-flower">✿</div>
          <h1>Mailyu's<br />Little Diary</h1>
          <p>Our memories, kept close forever ♡</p>
          <div className="diary-cover-decoration">✦　♡　✦</div>
          <button
            className="diary-open-button"
            onClick={() => {
              setDiaryOpened(true);
              setSelectedMonth(null);
              setSelectedPhotoIndex(0);
            }}
          >
            Open diary →
          </button>
        </div>
      </div>
      <p className="diary-cover-note">A little book filled with us 🤎</p>
    </div>
  ) : !selectedMonth ? (
    <div className="diary-page diary-index-page">
      <p className="eyebrow">TWELVE MONTHS, LITTLE MOMENTS</p>
      <h1>Choose a chapter ♡</h1>
      <p className="handwriting detail-copy">
        Every month has a little story to remember.
      </p>

      <div className="month-grid">
        {months.map((month, index) => (
          <button
            key={month}
            className="month-card"
            onClick={() => {
              setSelectedMonth(month);
              setSelectedPhotoIndex(0);
            }}
          >
            <span className="month-number">{String(index + 1).padStart(2, "0")}</span>
            <strong>{month}</strong>
            <span className="card-hint">
              {memoryFiles[month].length
                ? `${memoryFiles[month].length} little moments →`
                : "Coming soon ♡"}
            </span>
          </button>
        ))}
      </div>

      <button
        className="secondary-button"
        onClick={() => setDiaryOpened(false)}
      >
        ← Close diary
      </button>
    </div>
  ) : (
    <div className="diary-spread">
      <div className="diary-spiral" aria-hidden="true">
        {Array.from({ length: 11 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <section className="diary-page diary-photo-page">
        <p className="diary-page-kicker">{selectedMonth.toUpperCase()} · OUR LITTLE ARCHIVE</p>
        <h1>{selectedMonth} Memories</h1>

        {memoryFiles[selectedMonth]?.length > 0 ? (
          <>
            {(() => {
              const files = memoryFiles[selectedMonth];
              const file = files[selectedPhotoIndex];
              const isVideo = file.toLowerCase().endsWith(".mp4");
              const filePath = `/pic/${monthFolders[selectedMonth]}/${file}`;
              const title = file.replace(/\\.[^/.]+$/, "");

              return (
                <>
                  <div className="diary-photo-frame">
                    {isVideo ? (
                      <video
                        key={filePath}
                        src={filePath}
                        controls
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        key={filePath}
                        src={filePath}
                        alt={`${selectedMonth} memory: ${title}`}
                      />
                    )}
                  </div>
                  <p className="diary-photo-name">{title}</p>
                  <p className="diary-page-number">
                    MEMORY {selectedPhotoIndex + 1} / {files.length}
                  </p>
                </>
              );
            })()}
          </>
        ) : (
          <div className="diary-empty-photo">
            <span>♡</span>
            <p>More memories will be added here.</p>
          </div>
        )}
      </section>

      <section className="diary-page diary-story-page">
        <div className="diary-story-inner">
          <span className="diary-story-flower">✿</span>
          <p className="eyebrow">A LITTLE STORY TO KEEP</p>
          {memoryFiles[selectedMonth]?.length > 0 ? (
            <>
              <h2>
                {memoryFiles[selectedMonth][selectedPhotoIndex].replace(/\\.[^/.]+$/, "")}
              </h2>
              <p className="diary-story-text">
                A little moment from {selectedMonth} — one of those memories
                that deserves its own page in this diary. Some moments may look
                simple, but they become special because they are ours. ♡
              </p>
              <div className="diary-writing-lines">
                <span />
                <span />
                <span />
              </div>
            </>
          ) : (
            <p className="diary-story-text">
              This chapter is waiting for its little moments. ♡
            </p>
          )}

          <div className="diary-heart">♡</div>
          <p className="diary-signoff">kept with love, always</p>
        </div>

        {memoryFiles[selectedMonth]?.length > 0 && (
          <div className="diary-slide-controls">
            <button
              className="diary-nav-button"
              onClick={() =>
                setSelectedPhotoIndex(
                  (selectedPhotoIndex - 1 + memoryFiles[selectedMonth].length) %
                  memoryFiles[selectedMonth].length
                )
              }
              disabled={selectedPhotoIndex === 0}
            >
              🦁 Previous
            </button>
            <span>{selectedPhotoIndex + 1} / {memoryFiles[selectedMonth].length}</span>
            <button
              className="diary-nav-button"
              onClick={() =>
                setSelectedPhotoIndex(
                  (selectedPhotoIndex + 1) % memoryFiles[selectedMonth].length
                )
              }
              disabled={selectedPhotoIndex === memoryFiles[selectedMonth].length - 1}
            >
              Next 🦚
            </button>
          </div>
        )}
      </section>
    </div>
  )}

  <div className="diary-bottom-actions">
    {diaryOpened && selectedMonth && (
      <button
        className="secondary-button"
        onClick={() => {
          setSelectedMonth(null);
          setSelectedPhotoIndex(0);
        }}
      >
        ← All months
      </button>
    )}
    <button
      className="secondary-button"
      onClick={() => {
        setSelectedMemory(null);
        setSelectedMonth(null);
        setDiaryOpened(false);
        setSelectedPhotoIndex(0);
      }}
    >
      ← Back to memories
    </button>
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