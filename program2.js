Here is the JavaScript program that solves the Secret Decoder Ring Challenge:


function decodeMessage(message, decoderKey) {
    let messageIndex = 0;
    let decoderKeyIndex = 0;

    while (messageIndex < message.length && decoderKeyIndex < decoderKey.length) {
        if (decoderKey[decoderKeyIndex] === '*') {
            decoderKeyIndex++;
            while (messageIndex < message.length && (decoderKeyIndex === decoderKey.length || message[messageIndex] !== decoderKey[decoderKeyIndex])) {
                messageIndex++;
            }
        } else if (decoderKey[decoderKeyIndex] === '?') {
            messageIndex++;
            decoderKeyIndex++;
        } else if (message[messageIndex] === decoderKey[decoderKeyIndex]) {
            messageIndex++;
            decoderKeyIndex++;
        } else {
            return false;
        }
    }

    return messageIndex === message.length && decoderKeyIndex === decoderKey.length;
}

// Test cases
console.log(decodeMessage("aa", "a"));  // false
console.log(decodeMessage("aa", "*"));  // true
console.log(decodeMessage("cb", "?a"));  // false


This JavaScript program works similarly to the Python program. It uses two pointers, `