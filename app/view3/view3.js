'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function() {

	console.log("ipfs: " + ipfs)

	ipfs.setProvider({host: "104.131.53.68", port: 5001});

	var registryAddress = '0xbf014c4d7697cd83c9451a93648773cf510dc766';
	var personaAddress = '0xdb24b49d8f7e47d30498ee2a846375c3ba771d3e';

	var personaInfo = {
          name: "Kristoffer",
          info: "blah"
      }

    // put attrib
	ipfs.addJson(personaInfo, function(err, ipfsHash) {
		console.log("ipfshash: " + ipfsHash);

		//get attrib
		 ipfs.catJson(ipfsHash, (err, personaObj) => {
        
         console.log("person: " + JSON.stringify(personaObj));
        
       });

	});

	// var ipfsHash = Persona.ipfsapi.utils.hexToBase58(ipfsHashHex.slice(2));

}]);