
/*
    GENERATE RANDOM TOKEN
    cat /dev/urandom | tr -dc A-Z9 | head -c${1:-81}
*/

const IOTA = require("iota.lib.js");
const iota = new IOTA({provider:'https://nodes.devnet.iota.org:443'});

// PRIVATE KEY
const seed = 'XIKHRHPFUC9K9N9UOHBPNSJNPVKGGNCZ9LX9VFPTQQA9EAXOMPYLOXXXNCZGSDNDVKZWLKOEYEQIIRDIF';

// PUBLIC KEY for SEED
// QNMIJABAMNOOJUYHTHBXKQEGABETDIJTEM9EJKVNWRCKTWUSREHXEBNJJRDHCGFVTQTVMHLVSFYQWQAQDJCZYOQTTA

// PRIVATE KEY
// const sendAddress = 'U9LVIXOOZSPTSIWJPOTQGJCRBEGJWUTLKUNHDSKOFLRSVZKV9WWEUXISSLWEMPOMGCGTSUNEMTYFEZXUB';

// PUBLIC KEY for sendAddress
const sendAddress = 'HAFMOHFUOOOIZNTLAMA9AAKAQQKJNELUMGGANZNABUYSLLGXSFMYI9PRUDHMTNHXH9YFRKBUOAOXRIMRWDUOJHWAUA';

const transaction = [
    {
        value: 10,
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