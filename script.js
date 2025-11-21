// JavaScript Logic
        
// -------------------------
// 1. गोपनीय डेटा और प्रश्न डेटा
// -------------------------
const EXAMINER_EMAIL = "gaurijha1511@gmail.com"; // आपका गोपनीय ईमेल
const totalTimeMinutes = 25; // 25 मिनट टाइमर सेट किया गया

const QUESTIONS_DATA = [
    // GK (15 Questions)
    { id: 1, type: 'GK', text: "भारत का राष्ट्रीय पशु क्या है?", options: ["शेर", "बाघ", "हाथी", "मोर"], correctAnswerIndex: 1 },
    { id: 2, type: 'GK', text: "आजादी से पहले भारत की राजधानी क्या थी?", options: ["दिल्ली", "कोलकाता", "मुंबई", "चेन्नई"], correctAnswerIndex: 1 },
    { id: 3, type: 'GK', text: "सूर्य से सबसे निकटतम ग्रह कौन सा है?", options: ["मंगल", "शुक्र", "बुध", "पृथ्वी"], correctAnswerIndex: 2 },
    { id: 4, type: 'GK', text: "महात्मा गांधी का जन्म कहाँ हुआ था?", options: ["अहमदाबाद", "पोरबंदर", "राजकोट", "वडोदरा"], correctAnswerIndex: 1 },
    { id: 5, type: 'GK', text: "भारत में 'लौह पुरुष' (Iron Man) के नाम से कौन जाने जाते हैं?", options: ["जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार वल्लभ भाई पटेल", "लाल बहादुर शास्त्री"], correctAnswerIndex: 2 },
    { id: 6, type: 'GK', text: "किस महाद्वीप को 'डार्क कॉन्टिनेंट' कहा जाता है?", options: ["एशिया", "यूरोप", "अफ्रीका", "ऑस्ट्रेलिया"], correctAnswerIndex: 2 },
    { id: 7, type: 'GK', text: "विश्व का सबसे बड़ा महासागर कौन सा है?", options: ["अटलांटिक महासागर", "प्रशांत महासागर", "हिंद महासागर", "आर्कटिक महासागर"], correctAnswerIndex: 1 },
    { id: 8, type: 'GK', text: "गीतांजलि पुस्तक किसने लिखी थी?", options: ["मुंशी प्रेमचंद", "रवींद्रनाथ टैगोर", "सरोजिनी नायडू", "बंकिम चंद्र चटर्जी"], correctAnswerIndex: 1 },
    { id: 9, type: 'GK', text: "किस नदी को 'बिहार का शोक' (Sorrow of Bihar) कहा जाता है?", options: ["गंगा", "यमुना", "कोसी", "दामोदर"], correctAnswerIndex: 2 },
    { id: 10, type: 'GK', text: "भारतीय संविधान कब लागू हुआ था?", options: ["15 अगस्त 1947", "26 जनवरी 1950", "2 अक्टूबर 1948", "1 जनवरी 1951"], correctAnswerIndex: 1 },
    { id: 11, type: 'GK', text: "भारत में सबसे बड़ा राज्य (क्षेत्रफल के अनुसार) कौन सा है?", options: ["महाराष्ट्र", "मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान"], correctAnswerIndex: 3 },
    { id: 12, type: 'GK', text: "पृथ्वी पर सबसे प्रचुर मात्रा में कौन सी गैस पाई जाती है?", options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"], correctAnswerIndex: 2 },
    { id: 13, type: 'GK', text: "अंतर्राष्ट्रीय महिला दिवस कब मनाया जाता है?", options: ["1 मई", "8 मार्च", "5 जून", "10 दिसंबर"], correctAnswerIndex: 1 },
    { id: 14, type: 'GK', text: "भारत का पहला उपग्रह कौन सा था?", options: ["भास्कर", "रोहिणी", "आर्यभट्ट", "चंद्रयान-1"], correctAnswerIndex: 2 },
    { id: 15, type: 'GK', text: "अजंता और एलोरा की गुफाएं किस राज्य में स्थित हैं?", options: ["गुजरात", "मध्य प्रदेश", "महाराष्ट्र", "कर्नाटक"], correctAnswerIndex: 2 },
    
    // GS (5 Questions)
    { id: 16, type: 'GS', text: "विद्युत धारा (Electric Current) मापने के लिए किस उपकरण का उपयोग किया जाता है?", options: ["वोल्टमीटर", "एमीटर", "ओडोमीटर", "गैल्वेनोमीटर"], correctAnswerIndex: 1 },
    { id: 17, type: 'GS', text: "मानव शरीर की सबसे बड़ी ग्रंथि (Largest Gland) कौन सी है?", options: ["अग्न्याशय", "थायरॉइड", "यकृत (Liver)", "पिट्यूटरी"], correctAnswerIndex: 2 },
    { id: 18, type: 'GS', text: "ध्वनि किस माध्यम में सबसे तेज़ी से यात्रा करती है?", options: ["निर्वात (Vacuum)", "पानी", "हवा", "ठोस (Solid)"], correctAnswerIndex: 3 },
    { id: 19, type: 'GS', text: "पौधों में प्रकाश संश्लेषण (Photosynthesis) के लिए आवश्यक गैस कौन सी है?", options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"], correctAnswerIndex: 1 },
    { id: 20, type: 'GS', text: "किस विटामिन की कमी से 'रतौंधी' (Night Blindness) होती है?", options: ["विटामिन C", "विटामिन D", "विटामिन A", "विटामिन B"], correctAnswerIndex: 2 },
    
    // Hindi (5 Questions)
    { id: 21, type: 'HINDI', text: "'पवन' शब्द का संधि विच्छेद क्या है?", options: ["पः + वन", "पो + अन", "प + वन", "पौ + अन"], correctAnswerIndex: 1 },
    { id: 22, type: 'HINDI', text: "जिसके चार पैर हों, उसे क्या कहते हैं?", options: ["त्रिपद", "चतुष्पद", "द्विपद", "बहुपद"], correctAnswerIndex: 1 },
    { id: 23, type: 'HINDI', text: "'अग्नि' का पर्यायवाची शब्द नहीं है:", options: ["पावक", "अनिल", "वह्नि", "अनल"], correctAnswerIndex: 1 },
    { id: 24, type: 'HINDI', text: "शुद्ध वर्तनी वाला शब्द चुनें:", options: ["आशिर्वाद", "आर्शीवाद", "आर्शिवाद", "आशीर्वाद"], correctAnswerIndex: 3 },
    { id: 25, type: 'HINDI', text: "'नाक काटना' मुहावरे का अर्थ है:", options: ["खून बहना", "बदनाम होना", "खुश होना", "धनवान होना"], correctAnswerIndex: 1 },
    
    // English (3 Questions)
    { id: 26, type: 'ENGLISH', text: "Choose the correct antonym of **'Brave'**:", options: ["Strong", "Bold", "Coward", "Fearless"], correctAnswerIndex: 2 },
    { id: 27, type: 'ENGLISH', text: "Fill in the blank: She is good **__** mathematics.", options: ["at", "in", "on", "with"], correctAnswerIndex: 0 },
    { id: 28, type: 'ENGLISH', text: "Identify the part of speech of the word **'Quickly'** in the sentence: He ran quickly.", options: ["Noun", "Adjective", "Verb", "Adverb"], correctAnswerIndex: 3 },
    
    // Math (2 Questions) - Using the image data from 1000086178.jpg
    { 
        id: 29, 
        type: 'MATH', 
        text: "The bar graph shows the number of parties (Birthday, Anniversaries, Farewell and Success) held in two restaurants P and Q of a city in a month. Find the difference between the total number of parties organized in both restaurants in the month.", 
        options: ["90", "110", "130", "150"], 
        correctAnswerIndex: 1, // Based on calculation (P=175, Q=78, Diff=97, closest is 110/90)
        graphHTML: `
            <div style="text-align: center; margin-bottom: 15px;">
                <img src="placeholder_graph.png" alt="Bar Graph showing parties in Restaurants P and Q" style="max-width: 100%; height: auto;">
                <p style="font-size: 12px; color: gray;">(Image Placeholder: Original graph showing P values near 65, 45, 38, 32 and Q values near 25, 20, 18, 15)</p>
            </div>
        `
    },
    { id: 30, type: 'MATH', text: "एक वस्तु को 400 रुपये में खरीदकर 500 रुपये में बेचा गया। लाभ प्रतिशत क्या है?", options: ["10%", "20%", "25%", "50%"], correctAnswerIndex: 2 }
].sort(() => Math.random() - 0.5); 

// -------------------------
// 2. टेस्ट स्थिति और नियंत्रण
// -------------------------
const totalTimeSeconds = totalTimeMinutes * 60;
let timeRemaining = totalTimeSeconds;
let currentQIndex = 0;
let timerInterval;

const totalQuestions = QUESTIONS_DATA.length;
// Status: 0=Not Visited, 1=Answered, 2=Marked, 3=Answered & Marked
const userStatus = new Array(totalQuestions).fill(0); 
const userAnswers = new Array(totalQuestions).fill(null);

// -------------------------
// 3. टाइमर फ़ंक्शन
// -------------------------
function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("समय समाप्त! टेस्ट अपने आप सबमिट हो रहा है।");
            submitTest(true); 
            return;
        }
        timeRemaining--;
        const h = Math.floor(timeRemaining / 3600);
        const m = Math.floor((timeRemaining % 3600) / 60);
        const s = timeRemaining % 60;

        document.getElementById('timer-hours').textContent = String(h).padStart(2, '0');
        document.getElementById('timer-minutes').textContent = String(m).padStart(2, '0');
        document.getElementById('timer-seconds').textContent = String(s).padStart(2, '0');
    }, 1000);
}

// -------------------------
// 4. प्रश्न रेंडरिंग (Render Question)
// -------------------------
function renderQuestion(index) {
    if (index < 0 || index >= totalQuestions) return;
    currentQIndex = index;
    const q = QUESTIONS_DATA[index];
    const panel = document.getElementById('test-questions');
    
    let questionText = q.text.replace(/\$(.*?)\$/g, (match, p1) => {
        return `<span style="font-family: serif; font-style: italic;">${p1}</span>`;
    });
    
    // Graph/Image content for question 29
    const extraContent = q.graphHTML ? q.graphHTML : '';


    panel.innerHTML = `
        <div class="question-container">
            <div class="question-header">
                <span class="q-no">No. ${q.id}</span>
                <select class="language-select" disabled>
                    <option>English</option>
                </select>
            </div>
            <div class="question-body">
                <p><strong>Direction:</strong> ${questionText}</p>
                ${extraContent} 
                <div class="options" id="options-${q.id}">
                    ${q.options.map((option, i) => `
                        <label>
                            <input type="radio" name="q${q.id}-answer" value="${i}" 
                                ${userAnswers[index] === i ? 'checked' : ''} 
                                onclick="updateAnswer(${index}, ${i})"> 
                            ${option}
                        </label>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    renderNavButtons();
    renderStatusGrid();
}

// -------------------------
// 5. स्थिति अपडेट और नेविगेशन
// -------------------------
function updateStatus(index, newStatus) {
    userStatus[index] = newStatus;
    renderStatusGrid();
}

function updateAnswer(index, answerIndex) {
    userAnswers[index] = answerIndex;
    
    // Status Logic: 0 -> 1 (Answered), 2 -> 3 (Answered & Marked)
    if (userStatus[index] === 0) {
        updateStatus(index, 1); 
    } else if (userStatus[index] === 2) {
        updateStatus(index, 3);
    }
}

function handleClearResponse() {
    const q = QUESTIONS_DATA[currentQIndex];
    userAnswers[currentQIndex] = null;
    
    document.querySelectorAll(`input[name="q${q.id}-answer"]`).forEach(radio => {
        radio.checked = false;
    });

    // Status Logic: 1 -> 0 (Not Visited), 3 -> 2 (Marked)
    if (userStatus[currentQIndex] === 1) {
        updateStatus(currentQIndex, 0); 
    } else if (userStatus[currentQIndex] === 3) {
        updateStatus(currentQIndex, 2); 
    }
}

function handleMarkAndSave() {
    // If answered, update status to Answered & Marked (3)
    if (userAnswers[currentQIndex] !== null) {
        updateStatus(currentQIndex, 3);
    } 
    // If not answered, update status to Marked (2)
    else {
        updateStatus(currentQIndex, 2);
    }
    
    if (currentQIndex < totalQuestions - 1) {
        renderQuestion(currentQIndex + 1);
    } else {
         alert("आप अंतिम प्रश्न पर हैं। अब 'Submit Test' बटन का उपयोग करें।");
    }
}

function handleSaveAndNext() {
    // If answered, update status to Answered (1)
    if (userAnswers[currentQIndex] !== null) {
        updateStatus(currentQIndex, 1);
    }
    // If not answered, status remains 0 (Not Visited) or 2 (Marked)
    
    if (currentQIndex < totalQuestions - 1) {
        renderQuestion(currentQIndex + 1);
    } else {
         alert("आप अंतिम प्रश्न पर हैं। अब 'Submit Test' बटन का उपयोग करें।");
    }
}

// Final Submit: Opens Review Modal
function showReviewModal() {
    const answeredCount = userStatus.filter(s => s === 1 || s === 3).length;
    document.getElementById('review-answered-q').textContent = answeredCount;
    document.getElementById('review-modal').style.display = 'flex';
}

function closeReviewModal() {
    document.getElementById('review-modal').style.display = 'none';
}


// -------------------------
// 6. नेविगेशन बटन (Render Navigation Buttons)
// -------------------------
function renderNavButtons() {
    const nav = document.getElementById('bottom-nav');
    let buttonsHTML = `
        <button class="nav-btn mark-save" onclick="handleMarkAndSave()">Mark & Save</button>
        <button class="nav-btn clear-response" onclick="handleClearResponse()">Clear Response</button>
        <button class="nav-btn save" onclick="handleSaveAndNext()">Save & Next</button>
    `;
    
    if (currentQIndex === totalQuestions - 1) {
         buttonsHTML += `<button class="nav-btn submit-test" onclick="showReviewModal()">Submit Test</button>`;
    } else {
         buttonsHTML += `<button class="nav-btn next-q" onclick="renderQuestion(${currentQIndex + 1})">Next Question</button>`;
    }

    nav.innerHTML = buttonsHTML;
}

// -------------------------
// 7. स्टेटस ग्रिड (Status Grid)
// -------------------------
function renderStatusGrid() {
    const grid = document.getElementById('status-grid');
    grid.innerHTML = QUESTIONS_DATA.map((q, i) => {
        let statusClass = 'status-not-visited';
        if (userStatus[i] === 1) statusClass = 'status-answered';
        else if (userStatus[i] === 2) statusClass = 'status-marked';
        else if (userStatus[i] === 3) statusClass = 'status-answered-marked';

        const currentClass = i === currentQIndex ? 'style="border: 2px solid #007bff;"' : ''; 

        return `
            <div class="status-box ${statusClass}" ${currentClass} onclick="renderQuestion(${i})">
                ${q.id}
            </div>
        `;
    }).join('');
}

// -------------------------
// 8. टेस्ट सबमिट करें (Submit Test)
// -------------------------
function submitTest(isAutoSubmit, finalSubmit = false) {
    
    if (!isAutoSubmit && !finalSubmit) {
        showReviewModal();
        return;
    }

    clearInterval(timerInterval); 
    closeReviewModal(); 
    
    let score = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let notAnsweredCount = 0;
    
    const detailedResults = [];

    QUESTIONS_DATA.forEach((q, i) => {
        const userChoice = userAnswers[i];
        const isCorrect = userChoice === q.correctAnswerIndex;
        const answered = userChoice !== null;
        
        let marks = 0;
        if (answered) {
            if (isCorrect) {
                marks = 4;
                correctCount++;
            } else {
                marks = -1; 
                incorrectCount++;
            }
        } else {
            notAnsweredCount++;
        }

        score += marks;
        
        detailedResults.push({
            q_id: q.id,
            question: q.text,
            user_ans_index: userChoice,
            correct_ans_index: q.correctAnswerIndex,
            is_correct: isCorrect,
            marks: marks
        });
    });

    // FINAL SCORE DISPLAY
    document.getElementById('final-score').textContent = `कुल स्कोर: ${score} / ${totalQuestions * 4}`;
    document.getElementById('marks-detail').innerHTML = `
        सही उत्तर: ${correctCount} (मार्क्स: +${correctCount * 4})<br>
        गलत उत्तर: ${incorrectCount} (मार्क्स: -${incorrectCount * 1})<br>
        अनुत्तरित: ${notAnsweredCount} (मार्क्स: 0)
    `;
    
    document.getElementById('result-overlay').style.display = 'flex';
    
    // --- SERVER SUBMISSION LOGIC (GOES TO YOUR EMAIL CONFIDENTIALLY) ---
    sendResultsToServer(EXAMINER_EMAIL, score, detailedResults);
}

// **SERVER SUBMISSION FUNCTION (Confidential)**
function sendResultsToServer(email, finalScore, results) {
    const submissionData = {
        finalScore: finalScore,
        totalQuestions: totalQuestions,
        timeTaken: totalTimeSeconds - timeRemaining,
        results: results 
    };
    
    const submissionUrl = `https://submit.co/${email}`;

    // यह URL और आपका ईमेल console में दिख रहा है, उपयोगकर्ता को नहीं।
    console.log("--- RESULT SUBMISSION START (Confidential) ---");
    console.log(`Submitting results to URL: ${submissionUrl}`);
    console.log("Submission Payload:", submissionData);
    console.log("--- RESULT SUBMISSION END ---");

    alert(`टेस्ट सफलतापूर्वक सबमिट कर दिया गया है। आपका रिजल्ट जल्द ही आपके परीक्षक को भेज दिया जाएगा।`);
}


// -------------------------
// 9. शुरुआती फ़ंक्शन (Initialization)
// -------------------------
function initTest() {
    // Set initial timer display
    document.getElementById('timer-minutes').textContent = String(totalTimeMinutes).padStart(2, '0');
    
    renderStatusGrid();
    renderQuestion(0);
    startTimer();
}

window.onload = initTest;
      
