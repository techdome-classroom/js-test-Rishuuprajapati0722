
function decodeTheRing(message, decoderKey) {
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
console.log(decodeTheRing("aa", "a"));  // false
console.log(decodeTheRing("aa", "*"));  // true
console.log(decodeTheRing("cb", "?a"));  // false

