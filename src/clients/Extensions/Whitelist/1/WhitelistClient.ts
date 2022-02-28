/*
 * Whitelist Client Version 1 autogenerated by
 * @colony/colony-js version v4.0.0-rc.11 from colonyNetwork tag 'clwss-143-gfffe3ab2'
 *
 * Feel free to modify as needed!
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ClientType } from '../../../../constants';
import { Whitelist__factory as WhitelistFactory } from '../../../../contracts/Whitelist/1/factories/Whitelist__factory';
import { Whitelist } from '../../../../contracts/Whitelist/1/Whitelist';
import { AugmentedIColony } from '../../../../clients/Core/augments/commonAugments';

import {
  getWhitelistClientAugments,
  getWhitelistClientEstimateAugments,
} from './WhitelistClientAugments';

type WhitelistEstimate = Whitelist['estimate'];
interface WhitelistEstimateWithAddons extends WhitelistEstimate {
  /*
   * @TODO These needs to be specifically determined once we can integrate
   * static code analysis into this lib
   */
  [key: string]: any;
}

export interface WhitelistClient extends Whitelist {
  clientType: ClientType.WhitelistClient;
  estimate: WhitelistEstimateWithAddons;
  /*
   * @TODO These needs to be specifically determined once we can integrate
   * static code analysis into this lib
   */
  [key: string]: any;
}

const getWhitelistClient = (
  address: string,
  colonyClient: AugmentedIColony,
): WhitelistClient => {
  const whitelistClient = WhitelistFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as WhitelistClient;
  whitelistClient.clientType = ClientType.WhitelistClient;

  const addons = getWhitelistClientAugments(whitelistClient, colonyClient);
  const addonsEstimate = getWhitelistClientEstimateAugments(
    whitelistClient,
    colonyClient,
  );

  Object.keys(addons).map((addonName) => {
    whitelistClient[addonName] = addons[addonName];
    return null;
  });

  Object.keys(addonsEstimate).map((addonName) => {
    whitelistClient.estimate[addonName] = addonsEstimate[addonName];
    return null;
  });

  return whitelistClient;
};

export default getWhitelistClient;

/* eslint-enable */
