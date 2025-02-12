/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';

/**
 * @category Instructions
 * @category SetAuthority
 * @category generated
 */
const SetAuthorityStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>([['instructionDiscriminator', beet.u8]], 'SetAuthorityInstructionArgs');
/**
 * Accounts required by the _SetAuthority_ instruction
 *
 * @property [_writable_] vault Vault
 * @property [**signer**] currentAuthority Vault authority
 * @property [] newAuthority New authority
 * @category Instructions
 * @category SetAuthority
 * @category generated
 */
export type SetAuthorityInstructionAccounts = {
  vault: web3.PublicKey;
  currentAuthority: web3.PublicKey;
  newAuthority: web3.PublicKey;
};

const setAuthorityInstructionDiscriminator = 10;

/**
 * Creates a _SetAuthority_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 *
 * @category Instructions
 * @category SetAuthority
 * @category generated
 */
export function createSetAuthorityInstruction(accounts: SetAuthorityInstructionAccounts) {
  const { vault, currentAuthority, newAuthority } = accounts;

  const [data] = SetAuthorityStruct.serialize({
    instructionDiscriminator: setAuthorityInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: vault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: currentAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: newAuthority,
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
