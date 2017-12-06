var recognition = new webkitSpeechRecognition();
        //recognition.lang = 'ja-JP';

        // 録音終了時トリガー
        recognition.onresult = function (e) {
            if (e.results.length > 0) {
                var value = e.results[0][0].transcript;
                alert(value);
                document.querySelector('#area1').textContent = value;
            }
        };

function onMicClick() {
        alert('start');
        //window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
        
        //recognition.onresult = (event) => {
        //    var text = event.results.item(0).item(0).transcript;
        //    alert(text);
        //    const textArea = $("#text-input-message");
        //    $("#text-input-message").val(textArea.val() + text);
        //};

        // 録音開始
        recognition.start();
};

function onStopClick(){
        recognition.stop();
}
