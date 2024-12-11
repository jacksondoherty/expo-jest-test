import { Keypair } from "@solana/web3.js";

test("test", () => {
  const keypair = Keypair.generate();
  console.log(keypair.publicKey.toBase58());
});
