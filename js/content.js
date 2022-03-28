'use strict';

// textareaのノード取得
const idInputField = document.getElementById("inputField");

//  コピーイベントのボタンを取得
const btn = document.querySelector('.copy-value');

const idCopy = document.getElementById("copy");
const idDelete = document.getElementById("delete");
const idStart = document.getElementById("start");
const idStop = document.getElementById("stop");

let finalTranscript = "";

// Preparation for speech recognition
const speech = new webkitSpeechRecognition();
speech.lang = "ja-JP";
speech.interimResults = true;
speech.continuous = true;


const recording = () => {

    speech.start();

    speech.onaudiostart = () => {
        const show_msg = document.querySelector(".show-recording-msg");
        show_msg.innerHTML = "Recording Now...";
        const i = document.createElement("i");
        i.className = "fa-solid fa-rotate faa-spin animated";
        show_msg.appendChild(i);
    }

    // speech.onend = () => { 
    //     resetElement();
    // }

    speech.onresult = (e) => {

        for (let i = e.resultIndex; i < e.results.length; i++) {

            let text = e.results[i][0].transcript;
            
            if (!e.results[i].isFinal) continue;
            
            if (e.results[i].isFinal) {
                finalTranscript += text;
            } 
        }
        idInputField.value = finalTranscript;
    }
}

const recordingStop = () => {
    speech.stop();
    finalTranscript = "";

    resetElement();
}

const copyToClipBoard = (e) => {
    
    let textLength = idInputField.value.length;
    if (textLength === 0) {
        return;
    }
    btn.className = "copy-value";
    
    const clipboard = new ClipboardJS('#copy');
    
    clipboard.on('success', function(e) {
        btn.className = "copy-value  tooltip";
    });
}


const deleteTextArea = () => {
    idInputField.value = "";
    finalTranscript = "";
}

const resetElement = (resetElem=".show-recording-msg", deleteElem = "body > div.show-recording-msg > i") => {
    const show_msg = document.querySelector(resetElem);
    show_msg.innerHTML = "";
    const getNode = document.querySelector(deleteElem);
    getNode.remove();
}


// クリック イベント
document.querySelector('#start').addEventListener('click', recording);
document.querySelector('#stop').addEventListener('click', recordingStop);
document.querySelector('#copy').addEventListener('click', copyToClipBoard);
document.querySelector('#delete').addEventListener('click', deleteTextArea);
