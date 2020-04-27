/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ITokenLockingInterface extends Interface {
  functions: {
    setColonyNetwork: TypedFunctionDescription<{
      encode([_colonyNetwork]: [string]): string;
    }>;

    getColonyNetwork: TypedFunctionDescription<{ encode([]: []): string }>;

    lockToken: TypedFunctionDescription<{ encode([_token]: [string]): string }>;

    unlockTokenForUser: TypedFunctionDescription<{
      encode([_token, _user, _lockId]: [string, string, BigNumberish]): string;
    }>;

    incrementLockCounterTo: TypedFunctionDescription<{
      encode([_token, _lockId]: [string, BigNumberish]): string;
    }>;

    deposit: TypedFunctionDescription<{
      encode([_token, _amount]: [string, BigNumberish]): string;
    }>;

    withdraw: TypedFunctionDescription<{
      encode([_token, _amount]: [string, BigNumberish]): string;
    }>;

    punishStakers: TypedFunctionDescription<{
      encode([_stakers, _beneficiary, _amount]: [
        string[],
        string,
        BigNumberish
      ]): string;
    }>;

    getTotalLockCount: TypedFunctionDescription<{
      encode([_token]: [string]): string;
    }>;

    getUserLock: TypedFunctionDescription<{
      encode([_token, _user]: [string, string]): string;
    }>;
  };

  events: {
    ColonyNetworkSet: TypedEventDescription<{
      encodeTopics([colonyNetwork]: [null]): string[];
    }>;

    TokenLocked: TypedEventDescription<{
      encodeTopics([token, lockCount]: [null, null]): string[];
    }>;

    UserTokenUnlocked: TypedEventDescription<{
      encodeTopics([token, user, lockId]: [null, null, null]): string[];
    }>;

    UserTokenDeposited: TypedEventDescription<{
      encodeTopics([token, user, amount, timestamp]: [
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    UserTokenWithdrawn: TypedEventDescription<{
      encodeTopics([token, user, amount]: [null, null, null]): string[];
    }>;

    ReputationMinerPenalised: TypedEventDescription<{
      encodeTopics([miner, beneficiary, tokensLost]: [
        null,
        null,
        null
      ]): string[];
    }>;
  };
}

export class ITokenLocking extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ITokenLocking;
  attach(addressOrName: string): ITokenLocking;
  deployed(): Promise<ITokenLocking>;

  on(event: EventFilter | string, listener: Listener): ITokenLocking;
  once(event: EventFilter | string, listener: Listener): ITokenLocking;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ITokenLocking;
  removeAllListeners(eventName: EventFilter | string): ITokenLocking;
  removeListener(eventName: any, listener: Listener): ITokenLocking;

  interface: ITokenLockingInterface;

  functions: {
    /**
     * ColonyNetwork is used for checking if sender is a colony created on colony network.
     * Set the ColonyNetwork contract address.
     * @param _colonyNetwork Address of the ColonyNetwork
     */
    setColonyNetwork(
      _colonyNetwork: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Get ColonyNetwork address.
     * @returns networkAddress ColonyNetwork address
     */
    getColonyNetwork(): Promise<string>;

    /**
     * Locks everyones' tokens on `_token` address.
     * @param _token Address of the token we want to lock
     * @returns lockCount Updated total token lock count
     */
    lockToken(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Increments the lock counter to `_lockId` for the `_user` if user's lock count is less than `_lockId` by 1. Can only be called by a colony.
     * @param _lockId Id of the lock we want to increment to
     * @param _token Address of the token we want to unlock
     * @param _user Address of the user
     */
    unlockTokenForUser(
      _token: string,
      _user: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Increments sender's lock count to `_lockId`.
     * @param _lockId Id of the lock user wants to increment to
     * @param _token Address of the token we want to increment lock count for
     */
    incrementLockCounterTo(
      _token: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Deposit `_amount` of colony tokens. Can only be called if user tokens are not locked. Before calling this function user has to allow that their tokens can be transferred by token locking contract.
     * @param _amount Amount to deposit
     * @param _token Address of the token to deposit
     */
    deposit(
      _token: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Withdraw `_amount` of deposited tokens. Can only be called if user tokens are not locked.
     * @param _amount Amount to withdraw
     * @param _token Address of the token to withdraw from
     */
    withdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * While public, it can only be called successfully by the current ReputationMiningCycle.
     * Function called to punish people who staked against a new reputation root hash that turned out to be incorrect.
     * @param _amount Amount of stake to slash
     * @param _beneficiary Address of beneficiary to receive forfeited stake
     * @param _stakers Array of the addresses of stakers to punish
     */
    punishStakers(
      _stakers: string[],
      _beneficiary: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Get global lock count for a specific token.
     * @param _token Address of the token
     * @returns lockCount Global token lock count
     */
    getTotalLockCount(_token: string): Promise<BigNumber>;

    /**
     * Get user token lock info (lock count and deposited amount).
     * @param _token Address of the token
     * @param _user Address of the user
     * @returns lock Lock object containing:   `lockCount` User's token lock count,   `amount` User's deposited amount,   `timestamp` Timestamp of deposit.
     */
    getUserLock(
      _token: string,
      _user: string
    ): Promise<{
      lockCount: BigNumber;
      balance: BigNumber;
      timestamp: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;
  };

  /**
   * ColonyNetwork is used for checking if sender is a colony created on colony network.
   * Set the ColonyNetwork contract address.
   * @param _colonyNetwork Address of the ColonyNetwork
   */
  setColonyNetwork(
    _colonyNetwork: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Get ColonyNetwork address.
   * @returns networkAddress ColonyNetwork address
   */
  getColonyNetwork(): Promise<string>;

  /**
   * Locks everyones' tokens on `_token` address.
   * @param _token Address of the token we want to lock
   * @returns lockCount Updated total token lock count
   */
  lockToken(
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Increments the lock counter to `_lockId` for the `_user` if user's lock count is less than `_lockId` by 1. Can only be called by a colony.
   * @param _lockId Id of the lock we want to increment to
   * @param _token Address of the token we want to unlock
   * @param _user Address of the user
   */
  unlockTokenForUser(
    _token: string,
    _user: string,
    _lockId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Increments sender's lock count to `_lockId`.
   * @param _lockId Id of the lock user wants to increment to
   * @param _token Address of the token we want to increment lock count for
   */
  incrementLockCounterTo(
    _token: string,
    _lockId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Deposit `_amount` of colony tokens. Can only be called if user tokens are not locked. Before calling this function user has to allow that their tokens can be transferred by token locking contract.
   * @param _amount Amount to deposit
   * @param _token Address of the token to deposit
   */
  deposit(
    _token: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Withdraw `_amount` of deposited tokens. Can only be called if user tokens are not locked.
   * @param _amount Amount to withdraw
   * @param _token Address of the token to withdraw from
   */
  withdraw(
    _token: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * While public, it can only be called successfully by the current ReputationMiningCycle.
   * Function called to punish people who staked against a new reputation root hash that turned out to be incorrect.
   * @param _amount Amount of stake to slash
   * @param _beneficiary Address of beneficiary to receive forfeited stake
   * @param _stakers Array of the addresses of stakers to punish
   */
  punishStakers(
    _stakers: string[],
    _beneficiary: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Get global lock count for a specific token.
   * @param _token Address of the token
   * @returns lockCount Global token lock count
   */
  getTotalLockCount(_token: string): Promise<BigNumber>;

  /**
   * Get user token lock info (lock count and deposited amount).
   * @param _token Address of the token
   * @param _user Address of the user
   * @returns lock Lock object containing:   `lockCount` User's token lock count,   `amount` User's deposited amount,   `timestamp` Timestamp of deposit.
   */
  getUserLock(
    _token: string,
    _user: string
  ): Promise<{
    lockCount: BigNumber;
    balance: BigNumber;
    timestamp: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  filters: {
    ColonyNetworkSet(colonyNetwork: null): EventFilter;

    TokenLocked(token: null, lockCount: null): EventFilter;

    UserTokenUnlocked(token: null, user: null, lockId: null): EventFilter;

    UserTokenDeposited(
      token: null,
      user: null,
      amount: null,
      timestamp: null
    ): EventFilter;

    UserTokenWithdrawn(token: null, user: null, amount: null): EventFilter;

    ReputationMinerPenalised(
      miner: null,
      beneficiary: null,
      tokensLost: null
    ): EventFilter;
  };

  estimate: {
    setColonyNetwork(_colonyNetwork: string): Promise<BigNumber>;

    getColonyNetwork(): Promise<BigNumber>;

    lockToken(_token: string): Promise<BigNumber>;

    unlockTokenForUser(
      _token: string,
      _user: string,
      _lockId: BigNumberish
    ): Promise<BigNumber>;

    incrementLockCounterTo(
      _token: string,
      _lockId: BigNumberish
    ): Promise<BigNumber>;

    deposit(_token: string, _amount: BigNumberish): Promise<BigNumber>;

    withdraw(_token: string, _amount: BigNumberish): Promise<BigNumber>;

    punishStakers(
      _stakers: string[],
      _beneficiary: string,
      _amount: BigNumberish
    ): Promise<BigNumber>;

    getTotalLockCount(_token: string): Promise<BigNumber>;

    getUserLock(_token: string, _user: string): Promise<BigNumber>;
  };
}
