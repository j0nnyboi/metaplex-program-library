/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@araviel/mtf-beet';
import * as web3 from '@safecoin/web3.js';

/**
 * @category Instructions
 * @category SignMetadata
 * @category generated
 */
const SignMetadataStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>([['instructionDiscriminator', beet.u8]], 'SignMetadataInstructionArgs');
/**
 * Accounts required by the _SignMetadata_ instruction
 *
 * @property [_writable_] metadata Metadata (pda of ['metadata', program id, mint id])
 * @property [**signer**] creator Creator
 * @category Instructions
 * @category SignMetadata
 * @category generated
 */
export type SignMetadataInstructionAccounts = {
  metadata: web3.PublicKey;
  creator: web3.PublicKey;
};

const signMetadataInstructionDiscriminator = 7;

/**
 * Creates a _SignMetadata_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 *
 * @category Instructions
 * @category SignMetadata
 * @category generated
 */
export function createSignMetadataInstruction(accounts: SignMetadataInstructionAccounts) {
  const { metadata, creator } = accounts;

  const [data] = SignMetadataStruct.serialize({
    instructionDiscriminator: signMetadataInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: creator,
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
