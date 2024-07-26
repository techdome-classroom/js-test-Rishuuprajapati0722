
const decodeTheRing = function (s, p) {
    let messageIndex = 0;
    let decoderKeyIndex = 0;

    while (messageIndex < s.length && decoderKeyIndex < p.length) {
        if (p[decoderKeyIndex] === '*') {
            decoderKeyIndex++;
            while (messageIndex < s.length && (decoderKeyIndex === p.length || s[messageIndex] !== p[decoderKeyIndex])) {
                messageIndex++;
            }
        } else if (p[decoderKeyIndex] === '?') {
            messageIndex++;
            decoderKeyIndex++;
        } else if (s[messageIndex] === p[decoderKeyIndex]) {
            messageIndex++;
            decoderKeyIndex++;
        } else {
            return false;
        }
    }

    return messageIndex === s.length && decoderKeyIndex === p.length;
};

module.exports = decodeTheRing;
