const typingText=document.querySelector('.type-field p')
const input=document.querySelector('.wrapper .input-field')
const time=document.querySelector('.time span b')
const mistake=document.querySelector('.mistake span b')
const wpm=document.querySelector('.wpm span ')
const cpm=document.querySelector('.cpm span ')
const btn=document.querySelector('button')

let timer;
let maxTimer=60;
let timeLeft=maxTimer;
let charIndex=0;
let mistakes=0;
let isTyping=false;

function loadParagrapgh(){

const paragraph=["The golden hues of the setting sun painted the sky with shades of orange and pink, casting long shadows across the tranquil meadow. A gentle breeze rustled through the tall grass, carrying with  it the scent of wildflowers in full bloom. In the distance, the soft  chirping of crickets began to fill the air, signaling the approaching evening." ,
                "The sun was setting, filling the sky with soft orange and pink colors. A light breeze moved through the grass, bringing the sweet smell of flowers. In the distance, crickets began to chirp as night slowly arrived. Everything felt calm, as if nature was taking a quiet moment to enjoy the beauty of the evening.",
                "Beneath the towering canopy of ancient trees, the forest floor was dappled with soft sunlight. The air was thick with the earthy scent of moss and damp wood, while the distant call of a bird echoed through the stillness. Every step felt like a journey into an untouched world, where time seemed slower and nature ruled with quiet majesty.",
                "In the quiet forest, sunlight peeked through the tall trees, leaving soft patches of light on the ground. The air smelled fresh, like wet leaves and wood. Birds chirped in the distance, and the forest felt calm, almost like time was moving slower. A small stream flowed over rocks, its gentle sound mixing with the peaceful stillness around.",
                "The sun set, casting a warm glow across the sky in shades of orange and pink. A gentle breeze rustled the leaves, while birds chirped in the distance. The air was fresh, filled with the scent of blooming flowers. Nearby, a small stream babbled softly, its water sparkling in the fading light. As the stars began to twinkle above, the evening felt calm and serene, a perfect moment of tranquility.",
                "As I sit in my room late at night, staring at the computer screen, I decide it would be a good idea to create this text. There isn't much meaning to it, other than to get some simple practice. A lot of the texts that have been created are rather short, and don't give a good representation of actual typing speed and accuracy. They lack the length to gauge where your strengths and weaknesses are when typing.",
                "Trying to make a wise, good choice when thinking about what kinds of careers might be best for you is a hard thing to do. Your future may very well depend on the ways you go about finding the best job openings for you in the world of work. Some people will feel that there is one and only one job in the world for them. Hard thinking and a lot of hard work will help them find the one job that is best for them.",
                "Because of the laboriousness of the translation process, since the 1940s efforts have been made, with varying degrees of success, to automate translation or to mechanically aid the human translator. More recently, the rise of the Internet has fostered a world-wide market for translation services and has facilitated 'language localization'. Ideally, the translator must know both languages, as well as the subject that is to be translated."
            ];
const randomIndex=Math.floor(Math.random()*paragraph.length);
typingText.innerHTML='';
for(const char of paragraph[randomIndex]){
 
typingText.innerHTML+='<span>'+char+'</span>';
}
typingText.querySelectorAll('span')[0].classList.add('active');
document.addEventListener("keydown",()=>input.focus());
typingText.addEventListener("click",()=>{input.focus()});
}

function initTyping(){
    
   const char=typingText.querySelectorAll('span');
   const typedChar=input.value.charAt(charIndex);
   console.log(char.length);
   console.log(charIndex);
   if(charIndex<char.length && timeLeft>0)
   {
    if(!isTyping)
    {
        timer=setInterval(initTime,1000);
        isTyping=true;
    }
    if(char[charIndex].innerText==typedChar){
        char[charIndex].classList.add('correct');
    }
    else{
        mistakes++;
        char[charIndex].classList.add('incorrect');
    }
    charIndex++;
    char[charIndex].classList.add('active');
    mistake.innerHTML=mistakes;
    }
    else{
        clearInterval(timer);
        input.value='';
    }
}
input.addEventListener("input",initTyping);
function initTime(){
    if(timeLeft>0)
    {
        timeLeft--;
        time.innerText=timeLeft;
        let wpmval=Math.round(((charIndex-mistakes)/5)/(maxTimer-timeLeft)*60);
        wpm.innerText=wpmval;
        cpm.innerText=charIndex-mistakes;
    }
    else{
        clearInterval(timer);
    }
}
loadParagrapgh(); 
function reset(){
    loadParagrapgh();
    clearInterval(timer);
    timeLeft=maxTimer;
    charIndex=0;
    mistakes=0;
    isTyping=false;
    wpm.innerText=0;
    cpm.innerText=0;
    mistake.innerText=0;
    time.innerText=timeLeft;
    input.value='';
}
btn.addEventListener("click",reset);


