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
 * @category DeprecatedCreateReservationList
 * @category generated
 */
const DeprecatedCreateReservationListStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>([['instructionDiscriminator', beet.u8]], 'DeprecatedCreateReservationListInstructionArgs');
/**
 * Accounts required by the _DeprecatedCreateReservationList_ instruction
 *
 * @property [_writable_] reservationList PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key]
 * @property [**signer**] payer Payer
 * @property [**signer**] updateAuthority Update authority
 * @property [] masterEdition  Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition'])
 * @property [] resource A resource you wish to tie the reservation list to. This is so your later visitors who come to redeem can derive your reservation list PDA with something they can easily get at. You choose what this should be.
 * @property [] metadata Metadata key (pda of ['metadata', program id, mint id])
 * @category Instructions
 * @category DeprecatedCreateReservationList
 * @category generated
 */
export type DeprecatedCreateReservationListInstructionAccounts = {
  reservationList: web3.PublicKey;
  payer: web3.PublicKey;
  updateAuthority: web3.PublicKey;
  masterEdition: web3.PublicKey;
  resource: web3.PublicKey;
  metadata: web3.PublicKey;
};

const deprecatedCreateReservationListInstructionDiscriminator = 6;

/**
 * Creates a _DeprecatedCreateReservationList_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 *
 * @category Instructions
 * @category DeprecatedCreateReservationList
 * @category generated
 */
export function createDeprecatedCreateReservationListInstruction(
  accounts: DeprecatedCreateReservationListInstructionAccounts,
) {
  const { reservationList, payer, updateAuthority, masterEdition, resource, metadata } = accounts;

  const [data] = DeprecatedCreateReservationListStruct.serialize({
    instructionDiscriminator: deprecatedCreateReservationListInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: reservationList,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: payer,
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
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: resource,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: metadata,
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
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
    keys,
    data,
  });
  return ix;
}
