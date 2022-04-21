/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@j0nnyboi/beet';
import * as web3 from '@safecoin/web3.js';
import { Key, keyBeet } from '../types/Key';

/**
 * Arguments used to create {@link EditionMarker}
 * @category Accounts
 * @category generated
 */
export type EditionMarkerArgs = {
  key: Key;
  ledger: number[] /* size: 31 */;
};
/**
 * Holds the data for the {@link EditionMarker} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class EditionMarker implements EditionMarkerArgs {
  private constructor(readonly key: Key, readonly ledger: number[] /* size: 31 */) {}

  /**
   * Creates a {@link EditionMarker} instance from the provided args.
   */
  static fromArgs(args: EditionMarkerArgs) {
    return new EditionMarker(args.key, args.ledger);
  }

  /**
   * Deserializes the {@link EditionMarker} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [EditionMarker, number] {
    return EditionMarker.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link EditionMarker} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
  ): Promise<EditionMarker> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo == null) {
      throw new Error(`Unable to find EditionMarker account at ${address}`);
    }
    return EditionMarker.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Deserializes the {@link EditionMarker} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [EditionMarker, number] {
    return editionMarkerBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link EditionMarker} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return editionMarkerBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link EditionMarker}
   */
  static get byteSize() {
    return editionMarkerBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link EditionMarker} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(EditionMarker.byteSize, commitment);
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link EditionMarker} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === EditionMarker.byteSize;
  }

  /**
   * Returns a readable version of {@link EditionMarker} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      key: 'Key.' + Key[this.key],
      ledger: this.ledger,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const editionMarkerBeet = new beet.BeetStruct<EditionMarker, EditionMarkerArgs>(
  [
    ['key', keyBeet],
    ['ledger', beet.uniformFixedSizeArray(beet.u8, 31)],
  ],
  EditionMarker.fromArgs,
  'EditionMarker',
);
