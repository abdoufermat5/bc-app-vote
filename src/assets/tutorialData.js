/* eslint-disable */
const AUTHOR = "blck-dev tontines";
export const tutosData = {
  keypair: {
    author: AUTHOR,
    title: "About keypair",
    content: `Stellar relies on public key cryptography to ensure that transactions
        are secure: every account requires a valid keypair consisting of a
        public key and a private key. The public key is, as the name suggests,
        public. It's visible on the ledger, anyone can look it up, and it's what
        others use to send payments to the account, identify the issuer of an
        asset, and verify that a given transaction is authorized.`
  },
  accountCreate: {
    author: AUTHOR,
    title: "Account Creation",
    content: `A keypair alone doesn’t create an account: before an account exists on the ledger,
        it needs an XLM balance sufficient to meet the minimum network reserve. The minimum reserve,
        which is determined by validator vote, is intended to disincentivize the creation of tons of 
        unused accounts in order to prevent ledger spam and maintain the efficiency and scalability of the network.
        Less abstractly, accounts are the central data structure in Stellar — they hold balances, sign transactions,
        and issue assets. Accounts can only exist with a valid keypair and the required minimum balance of lumens (XLM).`
  }
};

export const keysNote = {
  timeBounds: {
    author: AUTHOR,
    title: "Time Bounds",
    content: `Time bounds are optional but recommended, as they put a time limit on the transaction — so either 
        the transaction makes it onto the ledger or it times out and fails, depending on your time parameters.
        You can also configure your transaction to not submit until a specified date and time.`
  },
  memo: {
    author: AUTHOR,
    title: "Memo",
    content: `Input context for the transaction. This field is more informational than technical.`
  },
  txSeqNumber: {
    author: AUTHOR,
    title: "Transaction Sequence Number",
    content: `Every transaction increases the source account’s sequence number by one. A sequence number is like a page
        number and prevents the same transaction from being submitted to the network more than once. 
        When you input the Source Account above, you should see a button appear that you can select to fetch the account’s next sequence number.`
  },
  baseFee: {
    author: AUTHOR,
    title: "Base Fee",
    content: `<p>Stellar requires a small fee for all transactions. Currently, the network minimum is 100 stroops, 
        but you can set your fee to anything above that.</p>

        <p>Stroop: the smallest unit of a lumen, one ten-millionth of a lumen (.0000001 XLM)</p>
        
        <p>The minimum fee required for a given transaction equals the number of operations in
        the transaction multiplied by the base fee for the given ledger. (transaction fee = # of operations * base fee)</p>
        
        <p>When you input a base fee price, you specify the maximum amount that you're willing to pay per operation. 
        That does not necessarily mean that you'll pay that amount, you will only be charged the lowest amount needed for your
        transaction to make it to the ledger. If network traffic is light, and the number of submitted operations is below the network
        ledger limit, you will only pay the network minimum (currently 100 stroops).
        When network traffic exceeds the ledger limit, the network enters into surge pricing mode, and your fee becomes a max bid.</p>`
  },
  asset: {
    author: AUTHOR,
    title: "Asset",
    content: `Assets can exist in three forms: alphanumeric 4, alphanumeric 12, and liquidity pool shares.
    Alphanumeric 4: the asset code is less than or equal to four characters

    Alphanumeric 12: the asset code is less than or equal to twelve characters
    `
  },
  trustline: {
    author: AUTHOR,
    title: "Trustlines",
    content: `Trustlines are an explicit opt-in for an account to hold a particular 
        asset. To hold a specific asset, an account must establish a trustline with 
        the issuing account using the changeTrust operation.`
  },
  trustLimit: {
    author: AUTHOR,
    title: "Trust Limit",
    content: `This field determines how much of the asset your account can hold. 
        Leaving this field blank allows for the maximum amount.

        To remove a trustline, get rid of any remaining amount of the asset by sending 
        it back to the issuing account (burning it) or sending it to a different account. 
        Then set the Trust Limit to 0.
    `
  },
  memo: {
    author: AUTHOR,
    title: "",
    content: ``
  }
};
