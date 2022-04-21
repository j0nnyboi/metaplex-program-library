/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@safecoin/spl-token';
import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';
import {
  CreateMasterEditionArgs,
  createMasterEditionArgsBeet,
} from '../types/CreateMasterEditionArgs';

/**
 * @category Instructions
 * @category DeprecatedCreateMasterEdition
 * @category generated
 */
export type DeprecatedCreateMasterEditionInstructionArgs = {
  createMasterEditionArgs: CreateMasterEditionArgs;
};
/**
 * @category Instructions
 * @category DeprecatedCreateMasterEdition
 * @category generated
 */
const DeprecatedCreateMasterEditionStruct = new beet.FixableBeetArgsStruct<
  DeprecatedCreateMasterEditionInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['createMasterEditionArgs', createMasterEditionArgsBeet],
  ],
  'DeprecatedCreateMasterEditionInstructionArgs',
);
/**
 * Accounts required by the _DeprecatedCreateMasterEdition_ instruction
 *
 * @property [_writable_] edition Unallocated edition V1 account with address as pda of ['metadata', program id, mint, 'edition']
 * @property [_writable_] mint Metadata mint
 * @property [_writable_] printingMint Printing mint - A mint you control that can mint tokens that can be exchanged for limited editions of your master edition via the MintNewEditionFromMasterEditionViaToken endpoint
 * @property [_writable_] oneTimePrintingAuthorizationMint One time authorization printing mint - A mint you control that prints tokens that gives the bearer permission to mint any number of tokens from the printing mint one time via an endpoint with the token-metadata program for your metadata. Also burns the token.
 * @property [**signer**] updateAuthority Current Update authority key
 * @property [**signer**] printingMintAuthority Printing mint authority - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY.
 * @property [**signer**] mintAuthority Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
 * @property [] metadata Metadata account
 * @property [**signer**] payer payer
 * @property [**signer**] oneTimePrintingAuthorizationMintAuthority One time authorization printing mint authority - must be provided if using max supply. THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY.
 * @category Instructions
 * @category DeprecatedCreateMasterEdition
 * @category generated
 */
export type DeprecatedCreateMasterEditionInstructionAccounts = {
  edition: web3.PublicKey;
  mint: web3.PublicKey;
  printingMint: web3.PublicKey;
  oneTimePrintingAuthorizationMint: web3.PublicKey;
  updateAuthority: web3.PublicKey;
  printingMintAuthority: web3.PublicKey;
  mintAuthority: web3.PublicKey;
  metadata: web3.PublicKey;
  payer: web3.PublicKey;
  oneTimePrintingAuthorizationMintAuthority: web3.PublicKey;
};

const deprecatedCreateMasterEditionInstructionDiscriminator = 2;

/**
 * Creates a _DeprecatedCreateMasterEdition_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category DeprecatedCreateMasterEdition
 * @category generated
 */
export function createDeprecatedCreateMasterEditionInstruction(
  accounts: DeprecatedCreateMasterEditionInstructionAccounts,
  args: DeprecatedCreateMasterEditionInstructionArgs,
) {
  const {
    edition,
    mint,
    printingMint,
    oneTimePrintingAuthorizationMint,
    updateAuthority,
    printingMintAuthority,
    mintAuthority,
    metadata,
    payer,
    oneTimePrintingAuthorizationMintAuthority,
  } = accounts;

  const [data] = DeprecatedCreateMasterEditionStruct.serialize({
    instructionDiscriminator: deprecatedCreateMasterEditionInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: edition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: printingMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: oneTimePrintingAuthorizationMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: updateAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: printingMintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: mintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: payer,
      isWritable: false,
      isSigner: true,
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
      pubkey: oneTimePrintingAuthorizationMintAuthority,
      isWritable: false,
      isSigner: true,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
    keys,
    data,
  });
  return ix;
}
