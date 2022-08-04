const connex = new Connex({
    node: 'https://mainnet.veblocks.net/',
    network: 'main'
})

const ticker = connex.thor.ticker();
(async () => {
    await ticker.next();
     document.getElementById("status").innerText = 'Latest block# '+connex.thor.status.head.number;
    await getSVG();
})();

async function getSVG(){
  const tomABI = {"constant":true,"inputs":[],"name":"createTom","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}

  const createTomMethod = connex.thor.account('0x5bE4dC49e862cb28571664e3e692e61E8bf25F26').method(tomABI)

  const resp = await createTomMethod.call();
  const result = atob(resp.decoded["0"])
  document.getElementById("base64").innerHTML=result;
}