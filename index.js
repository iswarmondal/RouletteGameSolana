const web3 = require("@solana/web3.js")

// Connect to the network
const connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed")

// Create a wallet to receiving the SOL
const userWallet =web3.Keypair.generate();

// Wallet keys
const publicKey =new web3.PublicKey(userWallet._keypair.publicKey).toString()
const secretKey = userWallet._keypair.secretKey;

// Transction object
const transaction = new web3.Transaction().add(
    web3.SystemProgram.transfer(
        {
            fromPubkey: new web3.PublicKey(from.publicKey.toString()),
            toPubkey: new web3.PublicKey(to.PublicKey.toString()),
            lamports: web3.LAMPORTS_PER_SOL
        }
    )
)

// Signature
const signature = await web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [fromWalletInstance]
)

console.log(signature);