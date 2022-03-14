/*
 * CoinMachine Client Version 3 autogenerated by
 * @colony/colony-js version v4.1.0 from colonyNetwork tag 'elwss-70-gb9073593'
 *
 * Feel free to modify as needed!
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { ClientType } from '../../../../constants';
import { CoinMachine__factory as CoinMachineFactory } from '../../../../contracts/CoinMachine/3/factories/CoinMachine__factory';
import { CoinMachine } from '../../../../contracts/CoinMachine/3/CoinMachine';
import { AugmentedIColony } from '../../../../clients/Core/augments/commonAugments';

import * as currentVersion from './CoinMachineClientAugments';
import * as version1 from '../1/CoinMachineClientAugments';
import * as version2 from '../2/CoinMachineClientAugments';
import { CoinMachineClient as CoinMachineClientV1 } from '../1/CoinMachineClient';

type CoinMachineEstimate = CoinMachine['estimate'];
interface AugmentedCoinMachineEstimate extends CoinMachineEstimate {
  /*
   * @TODO These needs to be specifically determined once we can integrate
   * static code analysis into this lib
   */
  [key: string]: any;
}

export interface CoinMachineClient extends CoinMachine {
  clientType: ClientType.CoinMachineClient;
  estimate: AugmentedCoinMachineEstimate;
  /*
   * @TODO These needs to be specifically determined once we can integrate
   * static code analysis into this lib
   */
  [key: string]: any;
}

const getCoinMachineClient = (
  address: string,
  colonyClient: AugmentedIColony,
): CoinMachineClient => {
  const coinMachineClient = CoinMachineFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as CoinMachineClient;
  coinMachineClient.clientType = ClientType.CoinMachineClient;

  const addons = {
    ...version1.getCoinMachineClientAugments(
      coinMachineClient as unknown as CoinMachineClientV1,
      colonyClient,
    ),
    ...version2.getCoinMachineClientAugments(coinMachineClient, colonyClient),
    ...currentVersion.getCoinMachineClientAugments(
      coinMachineClient,
      colonyClient,
    ),
  };
  const addonsEstimate = {
    ...version1.getCoinMachineClientEstimateAugments(
      coinMachineClient as unknown as CoinMachineClientV1,
      colonyClient,
    ),
    ...version2.getCoinMachineClientEstimateAugments(
      coinMachineClient,
      colonyClient,
    ),
    ...currentVersion.getCoinMachineClientEstimateAugments(
      coinMachineClient,
      colonyClient,
    ),
  };

  Object.keys(addons).map((addonName) => {
    coinMachineClient[addonName] = addons[addonName];
    return null;
  });

  Object.keys(addonsEstimate).map((addonName) => {
    coinMachineClient.estimate[addonName] = addonsEstimate[addonName];
    return null;
  });

  return coinMachineClient;
};

export default getCoinMachineClient;

/* eslint-enable */