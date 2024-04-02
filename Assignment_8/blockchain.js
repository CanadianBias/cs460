// Blockchain example obtained via ChatGPT
// 
// goal:  build a website to demonstrate the use of this code
//
// Modify the code:
// 
//    add a 'memo' property to the Block object
//
// Build these functions:
//    getBlockSum() - return the sum of the blockchain elements
//
//    getTransactions() - return an array of the transactions
//       list these transactions in tabular format on click of a button\
//   
//   explain in comments, and implement a nonce for each transaction 
//
//   implement additional functionality during class discussion
//

/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/

/*

Blockchain stores transaction data as a list.
Each element contains the hash of the prior element.
To fake a transaction, each element after the hack needs to be re-added to the chain.

*/

// define my own hasing algorithm without needing SHA256 library
// challenge: find a library to reference that does a real SHA256
function SHA256(str) {
    let hash = 0;

    // loop through each char in str
    for (let i=0;i<str.length;i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
    }

    return hash;
}

class Block {
  constructor(timestamp, data, previousHash = '') {
    this.timestamp = timestamp; // when the transaction occurred
    this.data = data; // time sent by caller
    this.previousHash = previousHash; // integrity check on chain
    this.hash = this.calculateHash(); // this link's hash
  }

  calculateHash() {
    // each link's hash hash is concatenation of previous hash, time, and data stringified
    return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

class Blockchain {
    constructor() {
    // every chain starts with a genesis block
        this.chain = [this.createGenesisBlock()];
    }
    // first element in the array
    // blockchain needs genesis block to start
    createGenesisBlock() {
        const today = new Date();
        return new Block(today, 'Genesis block', '0');
    }

    getLatestBlock() {
        // return the last element of the chain Array
        // const a = [0,1,2,3] a.length=4, a[a.length-1]
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock); // add to the end of the chain Array
    }

    // check integrity of the entire chain
    isChainValid() {
    // starting with second element of array to skip genesis element
    for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];

        // re-hash this link Check #1
        if (currentBlock.hash !== currentBlock.calculateHash()) {
            return false;
        }

        // verify stored hashes
        if (currentBlock.previousHash !== previousBlock.hash) {
            return false;
        }
    }

    // valid chain! looped through all links!
    return true;
    }

    getDataList() {
        let result = [];
    }

}

// Usage
let myCoin = new Blockchain(); // creates Genesis block [0]
myCoin.addBlock(new Block('02/01/2024', { amount: 4 }));
myCoin.addBlock(new Block('03/01/2024', { amount: 8 }));

console.log('Is blockchain valid? ' + myCoin.isChainValid());

// Tamper with data
myCoin.chain[1].data = { amount: 100 };
myCoin.chain[1].hash = myCoin.chain[1].calculateHash();

console.log('Is blockchain valid? ' + myCoin.isChainValid());