/*
 * Whitelist Client Version 1 Augments autogenerated by
 * @colony/colony-js version v4.0.0-rc.11 from colonyNetwork tag 'clwss-143-gfffe3ab2'
 *
 * Feel free to modify as needed!
 */

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */

import { AugmentedIColony } from '../../../../clients/Core/augments/commonAugments';

import { WhitelistClient } from './WhitelistClient';

/*
 * Extra client methods
 */
export const getWhitelistClientAugments = (
  whitelistClient: WhitelistClient,
  colonyClient: AugmentedIColony,
): Record<string, any> => ({
  /*
   * Example withProofs method
   *
   * contractCallWithProofs: async (
   *  _domainId: BigNumberish,
   *  overrides?: TransactionOverrides,
   * ): Promise<ContractTransaction> => {
   *   const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
   *     colonyClient,
   *     _domainId,
   *     whitelistClient.address,
   *   );
   *   return whitelistClient.contractCall(extensionPDID, extensionCSI, _domainId, overrides);
   * },
   */
});

/*
 * Extra client methods estimates
 *
 * These are needed! Don't skip them!
 */
export const getWhitelistClientEstimateAugments = (
  whitelistClient: WhitelistClient,
  colonyClient: AugmentedIColony,
): Record<string, any> => ({
  /*
   * Example withProofs estimate method
   * (Mostly the same as the actual method, just that it calls the client
   * estimate contract call and doesn't pass in the transaction overrides)
   *
   * contractCallWithProofs: async (
   *  _domainId: BigNumberish,
   * ): Promise<ContractTransaction> => {
   *   const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
   *     colonyClient,
   *     _domainId,
   *     whitelistClient.address,
   *   );
   *   return whitelistClient.estimate.contractCall(extensionPDID, extensionCSI, _domainId);
   * },
   */
});

/* eslint-enable */