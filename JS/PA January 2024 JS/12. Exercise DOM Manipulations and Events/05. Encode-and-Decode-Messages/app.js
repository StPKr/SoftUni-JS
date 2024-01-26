function encodeAndDecodeMessages() {
    const [encodeTextArea, decodeTextArea] = document.querySelectorAll('textarea');
    const btns = document.querySelectorAll('button');
    const encodeBtn = btns[0];
    const decodeBtn = btns[1];
    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);
    let placeholder = "";

    function encode() {
        for (let ch of encodeTextArea.value) {
            const newChar = String.fromCharCode(ch.charCodeAt(0) + 1);
            placeholder += newChar;
        }
        decodeTextArea.value = placeholder;
        encodeTextArea.value = "";
        placeholder = "";
    }
    function decode() {
        for (let ch of decodeTextArea.value) {
            const newChar = String.fromCharCode(ch.charCodeAt(0) - 1);
            placeholder += newChar;
        }
        decodeTextArea.value = placeholder;
        placeholder = "";
    }
}