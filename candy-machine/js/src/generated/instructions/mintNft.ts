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
 * @category MintNft
 * @category generated
 */
export type MintNftInstructionArgs = {
  creatorBump: number;
};
/**
 * @category Instructions
 * @category MintNft
 * @category generated
 */
const mintNftStruct = new beet.BeetArgsStruct<
  MintNftInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['creatorBump', beet.u8],
  ],
  'MintNftInstructionArgs',
);
/**
 * Accounts required by the _mintNft_ instruction
 * @category Instructions
 * @category MintNft
 * @category generated
 */
export type MintNftInstructionAccounts = {
  candyMachine: web3.PublicKey;
  candyMachineCreator: web3.PublicKey;
  payer: web3.PublicKey;
  wallet: web3.PublicKey;
  metadata: web3.PublicKey;
  mint: web3.PublicKey;
  mintAuthority: web3.PublicKey;
  updateAuthority: web3.PublicKey;
  masterEdition: web3.PublicKey;
  tokenMetadataProgram: web3.PublicKey;
  clock: web3.PublicKey;
  recentBlockhashes: web3.PublicKey;
  instructionSysvarAccount: web3.PublicKey;
};

const mintNftInstructionDiscriminator = [211, 57, 6, 167, 15, 219, 35, 251];

/**
 * Creates a _MintNft_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MintNft
 * @category generated
 */
export function createMintNftInstruction(
  accounts: MintNftInstructionAccounts,
  args: MintNftInstructionArgs,
) {
  const {
    candyMachine,
    candyMachineCreator,
    payer,
    wallet,
    metadata,
    mint,
    mintAuthority,
    updateAuthority,
    masterEdition,
    tokenMetadataProgram,
    clock,
    recentBlockhashes,
    instructionSysvarAccount,
  } = accounts;

  const [data] = mintNftStruct.serialize({
    instructionDiscriminator: mintNftInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: candyMachine,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: candyMachineCreator,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: wallet,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: mintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: updateAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: masterEdition,
      isWritable: true,
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
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: clock,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: recentBlockhashes,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: instructionSysvarAccount,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ'),
    keys,
    data,
  });
  return ix;
}
