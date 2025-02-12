/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@safecoin/safe-token';
import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';
import {
  MintPrintingTokensViaTokenArgs,
  mintPrintingTokensViaTokenArgsBeet,
} from '../types/MintPrintingTokensViaTokenArgs';

/**
 * @category Instructions
 * @category DeprecatedMintPrintingTokensViaToken
 * @category generated
 */
export type DeprecatedMintPrintingTokensViaTokenInstructionArgs = {
  mintPrintingTokensViaTokenArgs: MintPrintingTokensViaTokenArgs;
};
/**
 * @category Instructions
 * @category DeprecatedMintPrintingTokensViaToken
 * @category generated
 */
const DeprecatedMintPrintingTokensViaTokenStruct = new beet.BeetArgsStruct<
  DeprecatedMintPrintingTokensViaTokenInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['mintPrintingTokensViaTokenArgs', mintPrintingTokensViaTokenArgsBeet],
  ],
  'DeprecatedMintPrintingTokensViaTokenInstructionArgs',
);
/**
 * Accounts required by the _DeprecatedMintPrintingTokensViaToken_ instruction
 *
 * @property [_writable_] destination Destination account
 * @property [_writable_] token Token account containing one time authorization token
 * @property [_writable_] oneTimePrintingAuthorizationMint One time authorization mint
 * @property [_writable_] printingMint Printing mint
 * @property [**signer**] burnAuthority Burn authority
 * @property [] metadata Metadata key (pda of ['metadata', program id, mint id])
 * @property [] masterEdition Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition'])
 * @category Instructions
 * @category DeprecatedMintPrintingTokensViaToken
 * @category generated
 */
export type DeprecatedMintPrintingTokensViaTokenInstructionAccounts = {
  destination: web3.PublicKey;
  token: web3.PublicKey;
  oneTimePrintingAuthorizationMint: web3.PublicKey;
  printingMint: web3.PublicKey;
  burnAuthority: web3.PublicKey;
  metadata: web3.PublicKey;
  masterEdition: web3.PublicKey;
};

const deprecatedMintPrintingTokensViaTokenInstructionDiscriminator = 8;

/**
 * Creates a _DeprecatedMintPrintingTokensViaToken_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category DeprecatedMintPrintingTokensViaToken
 * @category generated
 */
export function createDeprecatedMintPrintingTokensViaTokenInstruction(
  accounts: DeprecatedMintPrintingTokensViaTokenInstructionAccounts,
  args: DeprecatedMintPrintingTokensViaTokenInstructionArgs,
) {
  const {
    destination,
    token,
    oneTimePrintingAuthorizationMint,
    printingMint,
    burnAuthority,
    metadata,
    masterEdition,
  } = accounts;

  const [data] = DeprecatedMintPrintingTokensViaTokenStruct.serialize({
    instructionDiscriminator: deprecatedMintPrintingTokensViaTokenInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: destination,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: token,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: oneTimePrintingAuthorizationMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: printingMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: burnAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: masterEdition,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
    keys,
    data,
  });
  return ix;
}
