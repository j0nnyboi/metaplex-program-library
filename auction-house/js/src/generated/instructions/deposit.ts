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
 * @category Deposit
 * @category generated
 */
export type DepositInstructionArgs = {
  escrowPaymentBump: number;
  amount: beet.bignum;
};
/**
 * @category Instructions
 * @category Deposit
 * @category generated
 */
const depositStruct = new beet.BeetArgsStruct<
  DepositInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['escrowPaymentBump', beet.u8],
    ['amount', beet.u64],
  ],
  'DepositInstructionArgs',
);
/**
 * Accounts required by the _deposit_ instruction
 * @category Instructions
 * @category Deposit
 * @category generated
 */
export type DepositInstructionAccounts = {
  wallet: web3.PublicKey;
  paymentAccount: web3.PublicKey;
  transferAuthority: web3.PublicKey;
  escrowPaymentAccount: web3.PublicKey;
  treasuryMint: web3.PublicKey;
  authority: web3.PublicKey;
  auctionHouse: web3.PublicKey;
  auctionHouseFeeAccount: web3.PublicKey;
};

const depositInstructionDiscriminator = [242, 35, 198, 137, 82, 225, 242, 182];

/**
 * Creates a _Deposit_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Deposit
 * @category generated
 */
export function createDepositInstruction(
  accounts: DepositInstructionAccounts,
  args: DepositInstructionArgs,
) {
  const {
    wallet,
    paymentAccount,
    transferAuthority,
    escrowPaymentAccount,
    treasuryMint,
    authority,
    auctionHouse,
    auctionHouseFeeAccount,
  } = accounts;

  const [data] = depositStruct.serialize({
    instructionDiscriminator: depositInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: wallet,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: paymentAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: transferAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: escrowPaymentAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: treasuryMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: authority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: auctionHouse,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: auctionHouseFeeAccount,
      isWritable: true,
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

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk'),
    keys,
    data,
  });
  return ix;
}
