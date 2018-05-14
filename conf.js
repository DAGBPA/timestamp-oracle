/*jslint node: true */
"use strict";

//exports.port = 6611;
//exports.myUrl = 'wss://mydomain.com/pp';
exports.bServeAsHub = false;
exports.bLight = false;


exports.storage = 'sqlite';


exports.hub = 'dagpizza.org/pp';
exports.deviceName = 'Timestamp Oracle';
exports.permanent_pairing_secret = '0000';
exports.control_addresses = ['0TJHUDKYJY6VMLQNK7FQQKMULG2F2OYVV'];
exports.payout_address = 'GN6X7SAFAKBOVSLQKTT26YEFHAXU4FPU';
//Wallet uses first address if bSingleAddress == true or you have to tell it what address to use with dataFeedAddress parameter
exports.bSingleAddress = true;
exports.dataFeedAddress = "";
exports.bWantNewPeers = false;

exports.KEYS_FILENAME = 'keys.json';
exports.TIMESTAMPING_INTERVAL = 60 * 1000; // in milliseconds


console.log('finished timestamp oracle conf');
