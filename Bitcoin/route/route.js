var btcController = require('../controllers/bitcoin');

module.exports = function (app) {
    const prefix = '/api/v1';
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    //// RPC Call apis ////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    app.post(prefix + '/createaccount', btcController.createAccount);
    app.post(prefix + '/associateaddress', btcController.associateAddresss);
    app.post(prefix + '/settxfee', btcController.setTxFee);
    app.post(prefix + '/getreceivedbyaccount', btcController.getReceivedByAccount);
    app.post(prefix + '/getreceivedbyaddress', btcController.getReceivedByAddress);
    app.get(prefix + '/getaccountbalance/:account', btcController.getAccountBalance);
    app.get(prefix + '/getalltransactionsbyaccount/:address', btcController.getAllTransactionsByAccount);
    app.get(prefix + '/getaccount/:address', btcController.getAccount);
    app.get(prefix + '/getaccountaddress/:account', btcController.getAccountAddress);
    app.get(prefix + '/getaddressesbyaccount/:account', btcController.getAccountByAddress);
    app.get(prefix + '/getblockcount', btcController.getBlockCount);
    app.get(prefix + '/getbestblockhash', btcController.getBestBlockHash);
    app.get(prefix + '/getblock/:hash', btcController.getBlock);
    app.get(prefix + '/getblockhash/:index', btcController.getBlockHash);
    app.get(prefix + '/gettransaction/:txid', btcController.getTransaction);
    app.get(prefix + '/getrawtransaction/:txid', btcController.getRawTransaction);
    app.get(prefix + '/listaccounts', btcController.listAccounts);
    app.get(prefix + '/listsinceblock/:blockhash', btcController.listSinceBlock);
    app.post(prefix + '/sendfrom', btcController.sendFrom);
    app.post(prefix + '/sendmany', btcController.sendMany);
    app.post(prefix + '/sendtoaddress', btcController.sendToAddress);
    app.post(prefix + '/listtransactions', btcController.listTransactions);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    //// Utility apis ////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    app.get('/blocks/latest/:count', btcController.getBlocksLatest);
    app.get('/blocks', btcController.getBlocks);
    app.get('/block/:height', btcController.getBlockHeight);
    app.get('/transaction/:txid', btcController.getTransactionInfo);
    app.get('/block/transactions/:height', btcController.getBlockTransactions);
}
