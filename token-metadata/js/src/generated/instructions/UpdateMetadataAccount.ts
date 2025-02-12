/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';
import {
  UpdateMetadataAccountArgs,
  updateMetadataAccountArgsBeet,
} from '../types/UpdateMetadataAccountArgs';

/**
 * @category Instructions
 * @category UpdateMetadataAccount
 * @category generated
 */
export type UpdateMetadataAccountInstructionArgs = {
  updateMetadataAccountArgs: UpdateMetadataAccountArgs;
};
/**
 * @category Instructions
 * @category UpdateMetadataAccount
 * @category generated
 */
const UpdateMetadataAccountStruct = new beet.FixableBeetArgsStruct<
  UpdateMetadataAccountInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['updateMetadataAccountArgs', updateMetadataAccountArgsBeet],
  ],
  'UpdateMetadataAccountInstructionArgs',
);
/**
 * Accounts required by the _UpdateMetadataAccount_ instruction
 *
 * @property [_writable_] metadata Metadata account
 * @property [**signer**] updateAuthority Update authority key
 * @category Instructions
 * @category UpdateMetadataAccount
 * @category generated
 */
export type UpdateMetadataAccountInstructionAccounts = {
  metadata: web3.PublicKey;
  updateAuthority: web3.PublicKey;
};

const updateMetadataAccountInstructionDiscriminator = 1;

/**
 * Creates a _UpdateMetadataAccount_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateMetadataAccount
 * @category generated
 */
export function createUpdateMetadataAccountInstruction(
  accounts: UpdateMetadataAccountInstructionAccounts,
  args: UpdateMetadataAccountInstructionArgs,
) {
  const { metadata, updateAuthority } = accounts;

  const [data] = UpdateMetadataAccountStruct.serialize({
    instructionDiscriminator: updateMetadataAccountInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: updateAuthority,
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
