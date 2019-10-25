const IOTA = require("iota.lib.js");
const iota = new IOTA({provider:'https://nodes.devnet.iota.org:443'});

const seed = 'XIKHRHPFUC9K9N9UOHBPNSJNPVKGGNCZ9LX9VFPTQQA9EAXOMPYLOXXXNCZGSDNDVKZWLKOEYEQIIRDIF';

const sendAddress = 'LFLMJMWNFXEMPDG9LU9BPONXFNKYIUTMVFCFRKKKBK9FRFGG9CYKSFLK9TUICSGWOFFHUGIPKJBIUUEEF';

const transaction = [
    {
        value: 0,
        address: sendAddress,
        tag: 'HELLOWORLD'
    }
];

iota.api.sendTransfer(seed,3, 9, transaction, (error, success) => {
    if(error) {
        console.log(error);
    } else {
        console.log(success);
    }
})