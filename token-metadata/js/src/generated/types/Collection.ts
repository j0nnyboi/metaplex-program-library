/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@safecoin/web3.js';
import * as beet from '@j0nnyboi/beet';
import * as beetSolana from '@j0nnyboi/beet-safecoin';
export type Collection = {
  verified: boolean;
  key: web3.PublicKey;
};

/**
 * @category userTypes
 * @category generated
 */
export const collectionBeet = new beet.BeetArgsStruct<Collection>(
  [
    ['verified', beet.bool],
    ['key', beetSolana.publicKey],
  ],
  'Collection',
);
