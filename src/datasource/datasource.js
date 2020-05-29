import {
    Pocket,
    PocketRpcProvider,
    typeGuard,
    RpcError,
    PocketAAT,
    Configuration
} from "@pokt-network/pocket-js/dist/web.js"

export class DataSource {
    constructor(pocketAAT, dispatchers) {
        this.pocketAAT = pocketAAT
        this.dispatchers = dispatchers
    }

    // Retrieve or set a pocket instance
    async getPocketInstance() {
        if (!this.pocket) {
            //
            const configuration = new Configuration(5, 1000, undefined, 40000)
            const rpcProviderPocket = new Pocket(this.dispatchers, undefined, configuration)
            // Import client PubKey and unlock account
            const clientPrivateKey = "c86b5424ab1d73da92522d21adbd48b217a66b61f78fa8e2c93e9ea47afa55716220b1e1364c4f120914d80000b63bdac6a58fc3dbb2ff063bcfcb4f8915a49b"
            const clientAccount = await rpcProviderPocket.keybase.importAccount(Buffer.from(clientPrivateKey, "hex"), "test123")
            await rpcProviderPocket.keybase.unlockAccount(clientAccount.addressHex, "test123", 0)
            const clientPubKeyHex = 
                clientAccount.publicKey.toString("hex")
            const appPubKeyHex =
                "3895f3a84afb824d7e2e63c5042a93ccdb13e0f891d5d61d10289df50d6c251d"
            const appPrivateKey =
                "7ae62c4d807a85fb5e60ffd80d30b3132b836fd3506cc0d4cef87d9dd118db0d3895f3a84afb824d7e2e63c5042a93ccdb13e0f891d5d61d10289df50d6c251d"
            const aat = await PocketAAT.from(
                "0.0.1",
                clientPubKeyHex,
                appPubKeyHex,
                appPrivateKey
            )
            const blockchain = "0002"
            const pocketRpcProvider = new PocketRpcProvider(
                rpcProviderPocket,
                aat,
                blockchain
            )
            this.pocket = new Pocket(this.dispatchers, pocketRpcProvider)
        }
        return this.pocket
    }

    // /**
    //  * @returns {Account}
    //  */
    // async unlockAccount(publicKey, passphrase) {
    //     const pocket = await this.getPocketInstance()
    //     const addressHex = addressFromPublickey(publicKey)

    //     const unlockOrError = await pocket.keybase.unlockAccount(addressHex, passphrase, 0)
    //     if (typeGuard(unlockOrError, Error)) {
    //         return false
    //     } else {
    //         return true
    //     }
    // }

    /**
     * @returns {Account}
     */
    async createAccount(passphrase) {
        const pocket = await this.getPocketInstance()
        const accountOrError = await pocket.keybase.createAccount(passphrase)

        if (typeGuard(accountOrError, Error)) {
            return undefined
        } else {
            return accountOrError
        }
    }

    /**
     * @returns {BigInt}
     */
    async getBalance(address) {
        const pocket = await this.getPocketInstance()

        const balanceResponseOrError = await pocket.rpc().query.getBalance(address)
        if (typeGuard(balanceResponseOrError, RpcError)) {
            return 0
        } else {
            return Number(balanceResponseOrError.balance.toString())
        }
    }
}