/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/

// Blockchain example obtained via ChatGPT
// 
// goal:  build a website to demonstrate the use of this code
//
// Modify the code:
// 
//    add a 'memo' property to the Block object
//    Memo is a property only seemingly available in React... I can't find anything else referring to memos in vanilla JS
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
    // The timestamp acts as a nonce to randomize the hash of the blockchain
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
        this.getTransactions();
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

    // Returns a single dump of the blockchain's hashes in a string
    getBlockSum() {
        let blockSum = 0;
        for (let i = 0; i < this.chain.length; i++) {
            blockSum += parseInt(this.chain[i].hash);
        }
        return blockSum;
    }
    
    // Returns an array of each hash in the blockchain
    getTransactions() {
        let transactionList = [];
        let myTable = document.getElementById("myTable");
        myTable.innerHTML = "<tr><th>Transaction</th><th>Hash</th></tr>"
        for (let i = 0; i < this.chain.length; i++) {
            transactionList.push(this.chain[i].hash);
            myTable.innerHTML += "<tr><td>" + i + "</td><td>" + this.chain[i].hash + "</td></tr>";
        }
    }

    getDataList() { // Unfinished and unused, from work in class
        let result = [];
    }

}

// Testing object creating and methods
let myCoin = new Blockchain(); // creates Genesis block [0]

// function to create current date, and create new block, allows event listener to call method
function newBlockInit() {
    let today = new Date();
    let data = parseFloat(document.getElementById("txtData").value);
    myCoin.addBlock(new Block(today, { amount: data } ));
}

// function call to allow event listener to use object method
function callSum() {
    let spot = document.getElementById("sumLanding");
    spot.innerHTML = "Sum: " + myCoin.getBlockSum();
}


// Function exists simply to call method
function callTransactions() {
    myCoin.getTransactions();
}

// myCoin.addBlock(new Block('02/01/2024', { amount: 4 }));
// myCoin.addBlock(new Block('03/01/2024', { amount: 8 }));

// console.log('Is blockchain valid? ' + myCoin.isChainValid());

// console.log(myCoin.getBlockSum());

// // Tamper with data
// myCoin.chain[1].data = { amount: 100 };
// myCoin.chain[1].hash = myCoin.chain[1].calculateHash();

// console.log('Is blockchain valid? ' + myCoin.isChainValid());

// Event listeners
let btnNew = document.getElementById("btnNewBlock");
let btnSum = document.getElementById("showChain");
btnSum.addEventListener("click", callSum);
btnNew.addEventListener("click", newBlockInit);
btnNew.addEventListener("click", callTransactions);