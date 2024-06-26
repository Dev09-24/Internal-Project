const btn = document.querySelector('#btn');
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};
recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
}            
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    const resp = document.getElementById('response');
    resp.innerHTML = transcript;

    const resp2 = document.getElementById('response2');
    resp2.innerHTML = transcript;
    console.log(transcript)

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "hindi-IND";
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;   
    
     var res1 = /hey/;
     var res2 = /hello/;
     var res3 = /Google/;
     var res4 = /YouTube/;
     var res5 = /date/;
     var res6 = /day/;
     var res7 = /Facebook/;
     var res8 = /Amazon/;
     var res9 = /Flipkart/;
     var res10 = /Geeks for Geeks/;
     var res11 = /Java T point/;
     var res12 = /Hindi music/;
     var res13 = /English music/;
     var res14 = /home/;
     var res15 = /assignment/;
     var res16 = /Monu/;

    // greeting alex
    if(res1.test(transcript) || res2.test(transcript))  {
        speech.text = "hello , how can i help you";
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(transcript === "Alex how are you") {
        speech.text = "I am good , and what about you ?";
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(transcript === "even I am good")  {
        speech.text = "that's great , how can i help you?";
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }

    //opening websites
    else if(res3.test(transcript)) {
        speech.text = "okay , opening Google";
        window.open("https://www.google.com" , "_blank");
        console.log(speech.text)
        window.speechSynthesis.speak(speech);    
    }
    else if(res4.test(transcript)) {
        speech.text = "okay , opening YouTube";
        window.open("https://www.youtube.com" , "_blank");
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(res7.test(transcript)) {
        speech.text = "okay , opening facebook";
        window.open("https://www.facebook.com" , "_blank");
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(res8.test(transcript)) {
        speech.text = "okay , opening amazon";
        window.open("https://www.amazon.in/" , "_blank");
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(res9.test(transcript)) {
        speech.text = "okay , opening flipkart";
        window.open("https://www.flipkart.com/" , "_blank");
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(res10.test(transcript)) {
        speech.text = "okay , opening geeks for geeks";
        window.open("https://www.geeksforgeeks.org/" , "_blank");
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(res11.test(transcript)) {
        speech.text = "okay , opening java t point";
        window.open("https://www.javatpoint.com/" , "_blank");
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(res12.test(transcript)) {
        speech.text = "okay , playing Hindi songs. Enjoy";
        window.open("https://www.youtube.com/watch?v=0CmcaWyzPtM" , "_blank");
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(res13.test(transcript)) {
        speech.text = "okay , playing English songs. Enjoy";
        window.open("https://www.youtube.com/watch?v=z8y8UZMQaLo" , "_blank");
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(res14.test(transcript)) {
        speech.text = "okay , gagan is a chutiya";
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(res15.test(transcript)) {
        speech.text = "areee gand may baaadd gyya assignment";
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    else if(res16.test(transcript)) {
        speech.text = "aree moonu khaddee hoo college niklo saarre";
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }
    //knowing date

    else if (res5.test(transcript)) {
        const d = new Date();
        const months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
        const month = months[d.getMonth()];

        speech.text = `today's date is ${d.getDate()} ${month} ${d.getFullYear()}`;

        window.speechSynthesis.speak(speech);
    }
    else if(res6.test(transcript)) {
        const d = new Date();
        const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
        const day = days[d.getDay()];
        speech.text = `Today is ${day}`
        window.speechSynthesis.speak(speech);
    }
    else {
        speech.text = "sorry i don't have any information regarding this";
        console.log(speech.text)
        window.speechSynthesis.speak(speech);
    }  
};        
// start recognition
btn.addEventListener('click' , ()=> {
    recognition.start();
})