/*jslint node: true */
"use strict";
var headlessWallet = require('dag-pizza-headless');
var conf = require('dag-pizza-dough/conf.js');
var db = require('dag-pizza-dough/db.js');
var eventBus = require('dag-pizza-dough/event_bus.js');
var objectHash = require('dag-pizza-dough/object_hash.js');
var desktopApp = require('dag-pizza-dough/desktop_app.js');
var request = require('request');
var async = require('async');


function postTimestamp(address) {
	var composer = require('dag-pizza-dough/composer.js');
	var network = require('dag-pizza-dough/network.js');
	var callbacks = composer.getSavingCallbacks({
		ifNotEnoughFunds: function(err) {
			console.error(err);
		},
		ifError: function(err) {
			console.error(err);
		},
		ifOk: function(objJoint) {
			network.broadcastJoint(objJoint);
		}
	});

	var datafeed = {
		time: new Date().toString(),
		timestamp: Date.now()
	};
	composer.composeDataFeedJoint(address, datafeed, headlessWallet.signer, callbacks);
}


eventBus.once('headless_wallet_ready', function() {
	headlessWallet.readSingleAddress(function(address) {
		setInterval(postTimestamp, conf.TIMESTAMPING_INTERVAL, address);
	});
});