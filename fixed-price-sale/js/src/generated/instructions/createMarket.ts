/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';
import { GatingConfig, gatingConfigBeet } from '../types/GatingConfig';

/**
 * @category Instructions
 * @category CreateMarket
 * @category generated
 */
export type CreateMarketInstructionArgs = {
  treasuryOwnerBump: number;
  name: string;
  description: string;
  mutable: boolean;
  price: beet.bignum;
  piecesInOneWallet: beet.COption<beet.bignum>;
  startDate: beet.bignum;
  endDate: beet.COption<beet.bignum>;
  gatingConfig: beet.COption<GatingConfig>;
};
/**
 * @category Instructions
 * @category CreateMarket
 * @category generated
 */
const createMarketStruct = new beet.FixableBeetArgsStruct<
  CreateMarketInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['treasuryOwnerBump', beet.u8],
    ['name', beet.utf8String],
    ['description', beet.utf8String],
    ['mutable', beet.bool],
    ['price', beet.u64],
    ['piecesInOneWallet', beet.coption(beet.u64)],
    ['startDate', beet.u64],
    ['endDate', beet.coption(beet.u64)],
    ['gatingConfig', beet.coption(gatingConfigBeet)],
  ],
  'CreateMarketInstructionArgs',
);
/**
 * Accounts required by the _createMarket_ instruction
 * @category Instructions
 * @category CreateMarket
 * @category generated
 */
export type CreateMarketInstructionAccounts = {
  market: web3.PublicKey;
  store: web3.PublicKey;
  sellingResourceOwner: web3.PublicKey;
  sellingResource: web3.PublicKey;
  mint: web3.PublicKey;
  treasuryHolder: web3.PublicKey;
  owner: web3.PublicKey;
  collectionMint?: web3.PublicKey;
};

const createMarketInstructionDiscriminator = [103, 226, 97, 235, 200, 188, 251, 254];

/**
 * Creates a _CreateMarket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateMarket
 * @category generated
 */
export function createCreateMarketInstruction(
  accounts: CreateMarketInstructionAccounts,
  args: CreateMarketInstructionArgs,
) {
  const {
    market,
    store,
    sellingResourceOwner,
    sellingResource,
    mint,
    treasuryHolder,
    owner,
    collectionMint,
  } = accounts;

  const [data] = createMarketStruct.serialize({
    instructionDiscriminator: createMarketInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: market,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: store,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: sellingResourceOwner,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: sellingResource,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: treasuryHolder,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: owner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (collectionMint) {
    keys.push({
      pubkey: collectionMint,
      isWritable: false,
      isSigner: false,
    });
  }

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo'),
    keys,
    data,
  });
  return ix;
}
