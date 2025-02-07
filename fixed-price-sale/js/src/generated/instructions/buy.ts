/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@safecoin/safe-token';
import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';

/**
 * @category Instructions
 * @category Buy
 * @category generated
 */
export type BuyInstructionArgs = {
  tradeHistoryBump: number;
  vaultOwnerBump: number;
};
/**
 * @category Instructions
 * @category Buy
 * @category generated
 */
const buyStruct = new beet.BeetArgsStruct<
  BuyInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['tradeHistoryBump', beet.u8],
    ['vaultOwnerBump', beet.u8],
  ],
  'BuyInstructionArgs',
);
/**
 * Accounts required by the _buy_ instruction
 * @category Instructions
 * @category Buy
 * @category generated
 */
export type BuyInstructionAccounts = {
  market: web3.PublicKey;
  sellingResource: web3.PublicKey;
  userTokenAccount: web3.PublicKey;
  userWallet: web3.PublicKey;
  tradeHistory: web3.PublicKey;
  treasuryHolder: web3.PublicKey;
  newMetadata: web3.PublicKey;
  newEdition: web3.PublicKey;
  masterEdition: web3.PublicKey;
  newMint: web3.PublicKey;
  editionMarker: web3.PublicKey;
  vault: web3.PublicKey;
  owner: web3.PublicKey;
  newTokenAccount: web3.PublicKey;
  masterEditionMetadata: web3.PublicKey;
  clock: web3.PublicKey;
  tokenMetadataProgram: web3.PublicKey;
  additionalKeys?: web3.AccountMeta[];
};

const buyInstructionDiscriminator = [102, 6, 61, 18, 1, 218, 235, 234];

/**
 * Creates a _Buy_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Buy
 * @category generated
 */
export function createBuyInstruction(accounts: BuyInstructionAccounts, args: BuyInstructionArgs) {
  const {
    market,
    sellingResource,
    userTokenAccount,
    userWallet,
    tradeHistory,
    treasuryHolder,
    newMetadata,
    newEdition,
    masterEdition,
    newMint,
    editionMarker,
    vault,
    owner,
    newTokenAccount,
    masterEditionMetadata,
    clock,
    tokenMetadataProgram,
  } = accounts;

  const [data] = buyStruct.serialize({
    instructionDiscriminator: buyInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: market,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: sellingResource,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: userTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: userWallet,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: tradeHistory,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: treasuryHolder,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: newMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: newEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: masterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: newMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: editionMarker,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: vault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: owner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: newTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: masterEditionMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: clock,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.additionalKeys) {
    keys.push(...accounts.additionalKeys);
  }

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo'),
    keys,
    data,
  });
  return ix;
}
