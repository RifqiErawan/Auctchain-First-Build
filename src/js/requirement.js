var contractAddress = '0xf6f1fe4342f9d8e7a41bad4fdc13ae72b7715e98';
var abiInterface = [ { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "auctions", "outputs": [ { "name": "seller", "type": "address" }, { "name": "title", "type": "string" }, { "name": "description", "type": "string" }, { "name": "link", "type": "string" }, { "name": "blockNumberOfDeadline", "type": "uint256" }, { "name": "status", "type": "uint8" }, { "name": "startingPrice", "type": "uint256" }, { "name": "currentBid", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "History", "outputs": [ { "name": "bidder", "type": "address" }, { "name": "amount", "type": "uint256" }, { "name": "timestamp", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "uint256" } ], "name": "auctionsBidOnByUser", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "uint256" } ], "name": "auctionsRunByUser", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "name", "type": "string" }, { "indexed": false, "name": "email", "type": "string" }, { "indexed": false, "name": "contact", "type": "string" } ], "name": "AccountRegistered", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "title", "type": "string" }, { "indexed": false, "name": "startingPrice", "type": "uint256" } ], "name": "AuctionCreated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "auctionId", "type": "uint256" }, { "indexed": false, "name": "bidder", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "BidPlaced", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "auctionId", "type": "uint256" }, { "indexed": false, "name": "winningBidder", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "AuctionEndedWithWinner", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "auctionId", "type": "uint256" }, { "indexed": false, "name": "topBid", "type": "uint256" }, { "indexed": false, "name": "reservePrice", "type": "uint256" } ], "name": "AuctionEndedWithoutWinner", "type": "event" }, { "constant": false, "inputs": [ { "name": "_name", "type": "string" }, { "name": "_email", "type": "string" }, { "name": "_contact", "type": "string" } ], "name": "register", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" } ], "name": "isRegistered", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" } ], "name": "getRegisteredData", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_title", "type": "string" }, { "name": "_description", "type": "string" }, { "name": "_link", "type": "string" }, { "name": "_deadline", "type": "uint256" }, { "name": "_startingPrice", "type": "uint256" } ], "name": "createAuction", "outputs": [ { "name": "auctionId", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "idx", "type": "uint256" } ], "name": "getAuction", "outputs": [ { "name": "", "type": "address" }, { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getAuctionCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "idx", "type": "uint256" } ], "name": "getStatus", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" } ], "name": "getAuctionsCountForUser", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" }, { "name": "idx", "type": "uint256" } ], "name": "getAuctionIdForUserAndIdx", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "auctionId", "type": "uint256" } ], "name": "getBidCountForAuction", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "auctionId", "type": "uint256" }, { "name": "idx", "type": "uint256" } ], "name": "getBidForAuctionByIdx", "outputs": [ { "name": "bidder", "type": "address" }, { "name": "amount", "type": "uint256" }, { "name": "timestamp", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "auctionId", "type": "uint256" } ], "name": "placeBid", "outputs": [ { "name": "success", "type": "bool" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "getRefundValue", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdrawRefund", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "auctionId", "type": "uint256" } ], "name": "endAuction", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint16" } ], "name": "isLeapYear", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint256" } ], "name": "leapYearsBefore", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "month", "type": "uint8" }, { "name": "year", "type": "uint16" } ], "name": "getDaysInMonth", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getYear", "outputs": [ { "name": "", "type": "uint16" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getMonth", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getDay", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getHour", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getMinute", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getSecond", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getWeekday", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint16" }, { "name": "month", "type": "uint8" }, { "name": "day", "type": "uint8" }, { "name": "hour", "type": "uint8" }, { "name": "minute", "type": "uint8" } ], "name": "toTimestamp", "outputs": [ { "name": "timestamp", "type": "uint256" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint16" }, { "name": "month", "type": "uint8" }, { "name": "day", "type": "uint8" }, { "name": "hour", "type": "uint8" } ], "name": "toTimestamp", "outputs": [ { "name": "timestamp", "type": "uint256" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint16" }, { "name": "month", "type": "uint8" }, { "name": "day", "type": "uint8" } ], "name": "toTimestamp", "outputs": [ { "name": "timestamp", "type": "uint256" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint16" }, { "name": "month", "type": "uint8" }, { "name": "day", "type": "uint8" }, { "name": "hour", "type": "uint8" }, { "name": "minute", "type": "uint8" }, { "name": "second", "type": "uint8" } ], "name": "toTimestamp", "outputs": [ { "name": "timestamp", "type": "uint256" } ], "payable": false, "stateMutability": "pure", "type": "function" } ];

function getContract(){
    return new web3.eth.Contract(abiInterface, contractAddress);
}