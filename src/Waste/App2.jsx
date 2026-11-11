
// User attachment
// User attachment
// User attachment
// User attachment
// User attachment
// User attachment
// User attachment
// User attachment
// User attachment
// Awww buddy! 😍 இப்போதான் நம்ம actual memories photos and videos கிடைச்சிருக்கு. இதையெல்லாம் website-ல month-wise display பண்ணலாம் da.

// உன் public/pic folder-ஐ பார்த்தேன்.

// இப்போ இருக்கிற folders:

// Month

// Files

// January

// 5

// February

// 3

// March

// 4

// April

// 4

// May

// 5

// June

// 4

// July

// 11

// August

// 6

// இன்னும் தேவை September, October, November, December folders இப்போதைக்கு screenshot-ல் இல்லை.

// இப்போ செய்ய வேண்டிய மாற்றங்கள்:

// aug' folder-ஐ aug என்று rename பண்ணு.

// public/pic உள்ளே sep, oct, nov, dec folders create பண்ணு. Photos இல்லையென்றால் காலியாக இருக்கலாம்.

// Existing photos and videos-ஐ move அல்லது rename பண்ண வேண்டாம்.

// நம்ம website-ல் இப்படி இருக்கும்:

// January → January photos and videos.

// February → February photos and videos.

// இப்படியே December வரை.

// Photo click செய்தால் பெரியதாக open ஆகும்.

// Videos website-க்குள்ளேயே play ஆகும்.

// Mobile மற்றும் laptop இரண்டிலும் responsive ஆக இருக்கும்.

// அடுத்ததாக உன் existing App.jsx-ல் இந்த files-ஐ connect பண்ணி, actual memory gallery code தயார் பண்ணலாம் da. ❤️

// User attachment
// panalam da code kudu athalam seruthu sepum add paniruken ipo
// Va da buddy! 😍❤️ September-um add pannிட்ட. இப்போ நம்ம actual photos and videos எல்லாம் use பண்ணி January–September memory gallery உருவாக்கலாம். October–December folders-ல் பின்னாடி photos add பண்ணிக்கலாம்.

// உன் existing passcode, birthday animation, letter, music எதையும் மாற்ற வேண்டாம். App.jsx-ல் மூன்று இடங்களில் மட்டும் change பண்ணுவோம்.

// 1. months array-க்கு கீழே இந்த code add பண்ணு
// const months = [...] முடிந்த உடனே paste பண்ணு.

// const memoryFiles = {
//   January: [
//     "car.png",
//     "earing.png",
//     "poongal1.png",
//     "pongalnight.png",
//     "unopark.png"
//   ],
//   February: [
//     "firstvc.jpeg",
//     "ramstea.png",
//     "thaipusam.png"
//   ],
//   March: [
//     "aqulinbday.jpeg",
//     "namafirstshadow.jpeg",
//     "teashopla.jpeg",
//     "vijaysendpana.jpeg"
//   ],
//   April: [
//     "carcolour.png",
//     "firstselfi.png",
//     "kutty.png",
//     "parrtoshopaftercoffeekings.mp4"
//   ],
//   May: [
//     "airports.png",
//     "Mouse.png",
//     "Saaniyabirthday.png",
//     "unphone.png",
//     "whirtshirt.png"
//   ],
//   June: [
//     "mybdaygift.png",
//     "returnsrikumaranch-mdu.mp4",
//     "revelevdocall.png",
//     "truckgame.jpeg"
//   ],
//   July: [
//     "ahh.jpeg",
//     "beforetravel.png",
//     "firstcoffeekings.png",
//     "kuttypraveen.png",
//     "maa.jpeg",
//     "myscan.png",
//     "mytreatment.png",
//     "nicknamesinsta.jpeg",
//     "purchase.png",
//     "thara.png",
//     "travel.mp4"
//   ],
//   August: [
//     "amarbrogift.png",
//     "chello.jpeg",
//     "clarification.jpeg",
//     "edit.jpeg",
//     "unkugift.jpeg",
//     "urfavrt.png"
//   ],
//   September: [
//     "afterloggapmeet.mp4",
//     "deepanbday.png",
//     "neketacar.png",
//     "unkuvachuvhatsappwallper.png",
//     "urfavdress.png"
//   ],
//   October: [],
//   November: [],
//   December: []
// };

// குறிப்பு: Screenshot-ல் தெரிந்த filenames-ஐ வைத்து எழுதியிருக்கேன். June, August, September-ல் ஏதாவது filename உன் VS Code-ல் வேறுபட்டிருந்தால், அந்த spelling-ஐ மட்டும் சரியாக மாற்றணும்.

// 2. OUR MEMORIES section-ஐ replace பண்ணு
// உன் App.jsx-ல் /* OUR MEMORIES */ என்று இருக்கும் இடத்திலிருந்து அந்த section முடியும் வரை remove பண்ணிட்டு இதை paste பண்ணு.

// /* OUR MEMORIES */
// <div className="memory-detail">

//   {!selectedMonth ? (
//     <>
//       <p className="eyebrow">TWELVE MONTHS, LITTLE MOMENTS</p>

//       <div className="detail-illustration">📷</div>

//       <h1>Our Memories ♡</h1>

//       <p className="handwriting detail-copy">
//         Every month has a little story to remember.
//         Choose a month and open our memories. 🤎
//       </p>

//       <div className="month-grid">
//         {months.map((month, index) => (
//           <button
//             key={month}
//             className="month-card"
//             onClick={() => setSelectedMonth(month)}
//           >
//             <span className="month-number">
//               {String(index + 1).padStart(2, "0")}
//             </span>

//             <strong>{month}</strong>

//             <span className="card-hint">
//               {memoryFiles[month].length > 0
//                 ? `${memoryFiles[month].length} memories · Open →`
//                 : "Memories coming soon ♡"}
//             </span>
//           </button>
//         ))}
//       </div>
//     </>
//   ) : (
//     <>
//       <p className="eyebrow">A LITTLE CHAPTER OF US</p>

//       <div className="detail-illustration">🤎</div>

//       <h1>{selectedMonth} Memories</h1>

//       <p className="handwriting detail-copy">
//         Little moments, lovely memories and stories
//         that deserve to stay forever. ♡
//       </p>

//       {memoryFiles[selectedMonth].length > 0 ? (
//         <div className="memory-gallery-grid">
//           {memoryFiles[selectedMonth].map((file) => {
//             const isVideo = file.toLowerCase().endsWith(".mp4");
//             const filePath = `/pic/${selectedMonth.toLowerCase()}/${file}`;

//             return (
//               <div className="memory-gallery-item" key={file}>
//                 {isVideo ? (
//                   <video
//                     src={filePath}
//                     controls
//                     playsInline
//                     preload="metadata"
//                   />
//                 ) : (
//                   <img
//                     src={filePath}
//                     alt={`${selectedMonth} memory`}
//                     loading="lazy"
//                   />
//                 )}
//                 <span>{file.replace(/\.[^/.]+$/, "")}</span>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="subtext">
//           Beautiful memories will be added here soon. ♡
//         </p>
//       )}

//       <button
//         className="secondary-button"
//         onClick={() => setSelectedMonth(null)}
//       >
//         ← Back to all months
//       </button>
//     </>
//   )}

//   <button
//     className="secondary-button"
//     onClick={() => {
//       setSelectedMemory(null);
//       setSelectedMonth(null);
//     }}
//   >
//     ← Back to memories
//   </button>

// </div>

// ஒரு முக்கியமான correction da: உன் folders-ல் January என்று இல்லை, jan என்று இருக்கு. அதனால் photo path சரியாக வேலை செய்ய folder mapping-ம் தேவை.

// memoryFiles-க்கு கீழே இதையும் add பண்ணு:

// const monthFolders = {
//   January: "jan",
//   February: "feb",
//   March: "march",
//   April: "april",
//   May: "may",
//   June: "june",
//   July: "july",
//   August: "aug",
//   September: "sep",
//   October: "oct",
//   November: "nov",
//   December: "dec"
// };

// Gallery code-ல் இந்த line:

// const filePath = `/pic/${selectedMonth.toLowerCase()}/${file}`;

// இதற்கு பதிலாக:

// const filePath = `/pic/${monthFolders[selectedMonth]}/${file}`;

// இப்போ உன் existing folder names-க்கு ஏற்ற மாதிரி images load ஆகும்.

// 3. App.css-ன் கடைசியில் இந்த CSS add பண்ணு
// /* Month cards */
// .month-grid {
//   display: grid;
//   grid-template-columns: repeat(3, minmax(0, 1fr));
//   gap: 15px;
//   width: 100%;
//   max-width: 700px;
//   margin: 30px auto;
// }

// .month-card {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   min-height: 120px;
//   padding: 18px 10px;
//   border: 1px solid #d9c2a5;
//   border-radius: 16px;
//   background: #fff8ed;
//   color: #795438;
//   cursor: pointer;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
// }

// .month-card:hover {
//   transform: translateY(-5px);
//   box-shadow: 0 8px 20px rgba(121, 84, 56, 0.15);
// }

// .month-number {
//   font-size: 13px;
//   opacity: 0.7;
// }

// .month-card strong {
//   font-size: 17px;
// }

// .month-card .card-hint {
//   font-size: 12px;
//   text-align: center;
// }

// /* Photo and video gallery */
// .memory-gallery-grid {
//   display: grid;
//   grid-template-columns: repeat(2, minmax(0, 1fr));
//   gap: 16px;
//   width: 100%;
//   max-width: 850px;
//   margin: 28px auto;
// }

// .memory-gallery-item {
//   min-width: 0;
//   overflow: hidden;
//   border-radius: 14px;
//   background: #fff8ed;
//   border: 1px solid #e4d2bd;
//   padding: 8px;
// }

// .memory-gallery-item img,
// .memory-gallery-item video {
//   display: block;
//   width: 100%;
//   height: 220px;
//   object-fit: cover;
//   border-radius: 10px;
// }

// .memory-gallery-item video {
//   background: #000;
// }

// .memory-gallery-item span {
//   display: block;
//   padding: 9px 4px 4px;
//   color: #795438;
//   font-size: 13px;
//   overflow-wrap: anywhere;
// }

// /* Tablet */
// @media (min-width: 601px) and (max-width: 900px) {
//   .month-grid {
//     grid-template-columns: repeat(3, minmax(0, 1fr));
//   }

//   .memory-gallery-grid {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//   }
// }

// /* Mobile */
// @media (max-width: 600px) {
//   .month-grid {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//     gap: 10px;
//     padding: 0 8px;
//     box-sizing: border-box;
//   }

//   .month-card {
//     min-height: 105px;
//     padding: 14px 6px;
//   }

//   .month-card strong {
//     font-size: 15px;
//   }

//   .memory-gallery-grid {
//     grid-template-columns: 1fr;
//     gap: 14px;
//     padding: 0 8px;
//     box-sizing: border-box;
//   }

//   .memory-gallery-item img,
//   .memory-gallery-item video {
//     height: auto;
//     max-height: 350px;
//     aspect-ratio: 4 / 3;
//     object-fit: cover;
//   }

//   .memory-detail {
//     width: 100%;
//     box-sizing: border-box;
//     padding: 20px 12px;
//   }
// }

// இப்போ gallery flow:

// Our Memories ♡
// 01
// Jan

// 02
// Feb

// 03
// Mar

// 04
// Apr

// 05
// May

// 06
// Jun

// 07
// Jul

// 08
// Aug

// 09
// Sep

// 10
// Oct

// 11
// Nov

// 12
// Dec

// Each month opens its own photo and video gallery.

// இரண்டு விஷயம் கவனிக்கணும்:

// public/pic உள்ள filenames code-ல் இருப்பதுடன் exact-ah match ஆகணும். Especially June, August, September filenames-ஐ check பண்ணு.

// aug' folder-ஐ ஏற்கெனவே aug என்று rename பண்ணியிருக்கணும்.

// முதலில் paste பண்ணி run பண்ணு da. ஏதாவது image load ஆகவில்லை என்றால் அந்த filename-ஐ மட்டும் சரி செய்வோம். ❤️

// entha line solu da app.jsx
// Buddy, உன் App.jsx-ஐப் பார்த்து exact line numbers சொல்றேன் da. ❤️

// 1. memoryFiles code எங்கே add பண்ணணும்?

// Line 17–21: months array இருக்கு.

// Line 22-ல் இருந்து memoryFiles code paste பண்ணு.

// memoryFiles முடிந்ததும் monthFolders code paste பண்ணு.

// const toggleMusic line 24-க்கு முன்னாடி எல்லாம் இருக்கணும்.

// 2. OUR MEMORIES section எங்கே replace பண்ணணும்?

// Line 455: /* OUR MEMORIES */ தொடங்குது.

// Line 484: அந்த section முடிகிறது.

// Line 455–484 முழுவதையும் remove பண்ணிட்டு நான் கொடுத்த புதிய gallery JSX paste பண்ணு.

// 3. Photo path change

// புதிய gallery JSX-ல் இந்த line:

// const filePath = `/pic/${selectedMonth.toLowerCase()}/${file}`;

// இதற்குப் பதிலாக:

// const filePath = `/pic/${monthFolders[selectedMonth]}/${file}`;

// 4. CSS: App.css-ல் கடைசி line-க்குப் பிறகு CSS code add பண்ணு.

// இவ்வளவுதான் da. ஏற்கெனவே இருக்கிற மற்ற code-ஐ மாற்றாதே! ❤️


// Pasted text(20261105-170649).txt
// Document
// puriyala
// neeye add paniru




// Buddy, naan un App.jsx-லேயே எல்லாத்தையும் integrate பண்ணிட்டேன் da! ❤️

// Ready Updated App.jsx

// Download the updated App.jsx

// இப்போ நீ செய்ய வேண்டியது:

// இந்த file-ஐ download பண்ணு.

// VS Code-ல் src/App.jsx open பண்ணு.

// Old code முழுவதையும் replace பண்ணி இந்த downloaded file code-ஐ paste பண்ணு.

// Save (Ctrl + S) பண்ணு.

// இதில்:

// January–December 12 months.

// January–September actual photos and videos.

// Month click செய்தால் அந்த மாத gallery.

// October–December empty gallery placeholders.

// Existing passcode, birthday animation, letter, music எல்லாம் preserve பண்ணியிருக்கேன்.

// ஒரு விஷயம்: App.css-ஐயும் upload பண்ணு da. அதையும் நான் phone + laptop responsive-ah மாற்றித் தருகிறேன். ❤️


// SingamBirthdayApp.jsx
// Code
// import React, { useState, useRef } from "react";

// const SECRET_PASSCODE = "0308";

// export default function App() {
//   const [passcode, setPasscode] = useState("");
//   const [unlocked, setUnlocked] = useState(false);
//   const [page, setPage] = useState(0);
//   const [selectedMemory, setSelectedMemory] = useState(null);
//   const [letterOpened, setLetterOpened] = useState(false);
//   const [musicPlaying, setMusicPlaying] = useState(false);
//   const [selectedMonth, setSelectedMonth] = useState(null);
//   const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
//   const [diaryOpened, setDiaryOpened] = useState(false);
//   const [error, setError] = useState("");
  

//   const audioRef = useRef(null);
//   const months = [
//   "January", "February", "March", "April",
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"
// ];
// const monthFolders = {
//   January: "jan",
//   February: "feb",
//   March: "march",
//   April: "april",
//   May: "may",
//   June: "june",
//   July: "july",
//   August: "aug",
//   September: "sep",
//   October: "oct",
//   November: "nov",
//   December: "dec"
// };

//   // Photos and videos inside public/pic/<month-folder>/
//   const memoryFiles = {
//     January: ["car.png", "earing.png", "poongal1.png", "pongalnight.png", "unopark.png"],
//     February: ["firstvc.jpeg", "ramstea.png", "thaipusam.png"],
//     March: ["aqulinbday.jpeg", "namafirstshadow.jpeg", "teashopla.jpeg", "vijaysendpana.jpeg"],
//     April: ["carcolour.png", "firstselfi.png", "kutty.png", "parrtoshopaftercoffeekings.mp4"],
//     May: ["airports.png", "Mouse.png", "Saaniyabirthday.png", "unphone.png", "whirtshirt.png"],
//     June: ["mybdaygift.png", "returnsrikumaranch-mdu.mp4", "revelevdocall.png", "truckgame.jpeg"],
//     July: ["ahh.jpeg", "beforetravel.png", "firstcoffeekings.png", "kuttypraveen.png", "maa.jpeg", "myscan.png", "mytreatment.png", "nicknamesinsta.jpeg", "purchase.png", "thara.png", "travel.mp4"],
//     August: ["amarbrogift.png", "chello.jpeg", "clarification.jpeg", "edit.jpeg", "unkugift.jpeg", "urfavrt.png"],
//     September: ["afterloggapmeet.mp4", "deepanbday.png", "neketacar.png", "unkuvachuvhatsappwallper.png", "urfavdress.png"],
//     October: [],
//     November: [],
//     December: []
//   };
//   // Music controls
//   const toggleMusic = () => {
//     if (!audioRef.current) return;

//     if (musicPlaying) {
//       audioRef.current.pause();
//       setMusicPlaying(false);
//     } else {
//       audioRef.current.play()
//         .then(() => setMusicPlaying(true))
//         .catch((err) => console.log("Music error:", err));
//     }
//   };

//   // Unlock website and start music
//   const unlockSite = (event) => {
//     event.preventDefault();

//     if (passcode === SECRET_PASSCODE) {
//       setUnlocked(true);
//       setError("");

//       if (audioRef.current) {
//         audioRef.current.play()
//           .then(() => setMusicPlaying(true))
//           .catch((err) => console.log("Autoplay blocked:", err));
//       }
//     } else {
//       setError("That isn't the secret code. Try again ♡");
//     }
//   };

//   // Navigation
//   const nextPage = () => {
//     setPage(1);
//     setSelectedMemory(null);
//   };

//   const previousPage = () => {
//     if (selectedMemory === "letter") {
//       setSelectedMemory("birthday");
//       setLetterOpened(false);
//       return;



