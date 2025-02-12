/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
export type MintEditionProxyArgs = {
  edition: beet.bignum;
};

/**
 * @category userTypes
 * @category generated
 */
export const mintEditionProxyArgsBeet = new beet.BeetArgsStruct<MintEditionProxyArgs>(
  [['edition', beet.u64]],
  'MintEditionProxyArgs',
);
