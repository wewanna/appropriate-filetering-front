const axios = require('axios')

function addSentence() {
    if(event.keyCode == 13){
        let sentence = document.getElementById('ori-sentence-input').value;
        document.getElementById('ori-sentence-list').innerHTML += '<div class="ori-sentence">' + sentence  + '</div>';
        let result = sentenceClassification(sentence);
        if(result['data'] === -1) {
            document.getElementById('result-sentence-list').innerHTML += '<div class="ori-sentence">에러가 발생하였습니다.</div>';
        } else if(result['data'] === 0) {
            document.getElementById('result-sentence-list').innerHTML += '<div class="ori-sentence good">' + result['text'] + '</div>';
        } else if(result['data'] === 1 ) {
            document.getElementById('result-sentence-list').innerHTML += '<div class="ori-sentence bad">' + result['text'] + '</div>';
        }

        document.getElementById('ori-sentence-input').value = '';
        
   }
}

async function sentenceClassification (data) {
    try {
      let res = await axios({
        method: 'post',
        url: 'http://127.0.0.1:5000',
        timeout: 8000,
        data: { text: data }
      })
      if (res.status !== 200) {
        return -1
      }
      let result = 0
      if (res.data === 0) {
        result = 0
      } else if (res.data === 1) {
        result = 1
      }
      return { data: result, text: data }
    } catch (err) {
      console.error(err)
      return -1
    }
  }