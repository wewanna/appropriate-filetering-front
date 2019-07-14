function addSentence() {
    if(event.keyCode == 13){
        let sentence = document.getElementById('ori-sentence-input').value;
        document.getElementById('ori-sentence-list').innerHTML +=
            '<div class="ori-sentence">' + sentence  + '</div>'
        
   }
}