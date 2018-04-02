

const Wallet = require('./wallet');
const wallet = new Wallet();
console.log(wallet.toString());

/*
const Blockchain = require('./blockchain');

const bc = new Blockchain();
for (let i = 0; i < 10; i++) {
    console.log(bc.addBlock(`foo ${i}`).toString());
}
*/

//const Block = require('./block');
//const fooBlock = Block.mineBlock(Block.genesis() ); 
//console.log(fooBlock.toString());
//const block = new Block('foo', 'bar', 'zoo', 'baz');
//console.log(block.toString());
//console.log(Block.genesis().toString() );