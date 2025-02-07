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
 * @category DeprecatedMintNewEditionFromMasterEditionViaPrintingToken
 * @category generated
 */
const DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>(
  [['instructionDiscriminator', beet.u8]],
  'DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionArgs',
);
/**
 * Accounts required by the _DeprecatedMintNewEditionFromMasterEditionViaPrintingToken_ instruction
 *
 * @property [_writable_] metadata New Metadata key (pda of ['metadata', program id, mint id])
 * @property [_writable_] edition New Edition V1 (pda of ['metadata', program id, mint id, 'edition'])
 * @property [_writable_] masterEdition Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition'])
 * @property [_writable_] mint Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
 * @property [**signer**] mintAuthority Mint authority of new mint
 * @property [_writable_] printingMint Printing Mint of master record edition
 * @property [_writable_] masterTokenAccount Token account containing Printing mint token to be transferred
 * @property [_writable_] editionMarker Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master mint id, edition_number])
 * @property [**signer**] burnAuthority Burn authority for this token
 * @property [**signer**] payer payer
 * @property [] masterUpdateAuthority update authority info for new metadata account
 * @property [] masterMetadata Master record metadata account
 * @property [_writable_] reservationList (optional) Reservation List - If present, and you are on this list, you can get an edition number given by your position on the list.
 * @category Instructions
 * @category DeprecatedMintNewEditionFromMasterEditionViaPrintingToken
 * @category generated
 */
export type DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionAccounts = {
  metadata: web3.PublicKey;
  edition: web3.PublicKey;
  masterEdition: web3.PublicKey;
  mint: web3.PublicKey;
  mintAuthority: web3.PublicKey;
  printingMint: web3.PublicKey;
  masterTokenAccount: web3.PublicKey;
  editionMarker: web3.PublicKey;
  burnAuthority: web3.PublicKey;
  payer: web3.PublicKey;
  masterUpdateAuthority: web3.PublicKey;
  masterMetadata: web3.PublicKey;
  reservationList?: web3.PublicKey;
};

const deprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDiscriminator = 3;

/**
 * Creates a _DeprecatedMintNewEditionFromMasterEditionViaPrintingToken_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 *
 * @category Instructions
 * @category DeprecatedMintNewEditionFromMasterEditionViaPrintingToken
 * @category generated
 */
export function createDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstruction(
  accounts: DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionAccounts,
) {
  const {
    metadata,
    edition,
    masterEdition,
    mint,
    mintAuthority,
    printingMint,
    masterTokenAccount,
    editionMarker,
    burnAuthority,
    payer,
    masterUpdateAuthority,
    masterMetadata,
    reservationList,
  } = accounts;

  const [data] = DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenStruct.serialize({
    instructionDiscriminator:
      deprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: edition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: masterEdition,
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
      pubkey: printingMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: masterTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: editionMarker,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: burnAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: masterUpdateAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: masterMetadata,
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
  ];

  if (reservationList != null) {
    keys.push({
      pubkey: reservationList,
      isWritable: true,
      isSigner: false,
    });
  }

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
    keys,
    data,
  });
  return ix;
}
