/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@safecoin/safe-token';
import * as definedTypes from '../types';
import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';

/**
 * @category Instructions
 * @category MintFractionalShares
 * @category generated
 */
export type MintFractionalSharesInstructionArgs = {
  numberOfShareArgs: definedTypes.NumberOfShareArgs;
};
/**
 * @category Instructions
 * @category MintFractionalShares
 * @category generated
 */
const MintFractionalSharesStruct = new beet.BeetArgsStruct<
  MintFractionalSharesInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['numberOfShareArgs', definedTypes.numberOfShareArgsBeet],
  ],
  'MintFractionalSharesInstructionArgs',
);
/**
 * Accounts required by the _MintFractionalShares_ instruction
 *
 * @property [_writable_] fractionTreasury Fraction treasury
 * @property [_writable_] fractionMint Fraction mint
 * @property [] vault The initialized active token vault
 * @property [] mintAuthority PDA-based Mint authority to mint tokens to treasury[PREFIX, program_id]
 * @property [**signer**] vaultAuthority Authority of vault
 * @category Instructions
 * @category MintFractionalShares
 * @category generated
 */
export type MintFractionalSharesInstructionAccounts = {
  fractionTreasury: web3.PublicKey;
  fractionMint: web3.PublicKey;
  vault: web3.PublicKey;
  mintAuthority: web3.PublicKey;
  vaultAuthority: web3.PublicKey;
};

const mintFractionalSharesInstructionDiscriminator = 6;

/**
 * Creates a _MintFractionalShares_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MintFractionalShares
 * @category generated
 */
export function createMintFractionalSharesInstruction(
  accounts: MintFractionalSharesInstructionAccounts,
  args: MintFractionalSharesInstructionArgs,
) {
  const { fractionTreasury, fractionMint, vault, mintAuthority, vaultAuthority } = accounts;

  const [data] = MintFractionalSharesStruct.serialize({
    instructionDiscriminator: mintFractionalSharesInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: fractionTreasury,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: fractionMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: vault,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: mintAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: vaultAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn'),
    keys,
    data,
  });
  return ix;
}
