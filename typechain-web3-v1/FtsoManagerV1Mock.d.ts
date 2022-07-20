/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type GovernanceProposed = ContractEventLog<{
  proposedGovernance: string;
  0: string;
}>;
export type GovernanceUpdated = ContractEventLog<{
  oldGovernance: string;
  newGoveranance: string;
  0: string;
  1: string;
}>;

export interface FtsoManagerV1Mock extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): FtsoManagerV1Mock;
  clone(): FtsoManagerV1Mock;
  methods: {
    addFtso(_ftso: string): NonPayableTransactionObject<void>;

    claimGovernance(): NonPayableTransactionObject<void>;

    daemonize(): NonPayableTransactionObject<boolean>;

    flareDaemon(): NonPayableTransactionObject<string>;

    getContractName(): NonPayableTransactionObject<string>;

    getCurrentRewardEpoch(): NonPayableTransactionObject<string>;

    getPriceEpochConfiguration(): NonPayableTransactionObject<{
      _firstPriceEpochStartTs: string;
      _priceEpochDurationSeconds: string;
      _revealEpochDurationSeconds: string;
      0: string;
      1: string;
      2: string;
    }>;

    governance(): NonPayableTransactionObject<string>;

    initialise(_governance: string): NonPayableTransactionObject<void>;

    proposeGovernance(_governance: string): NonPayableTransactionObject<void>;

    proposedGovernance(): NonPayableTransactionObject<string>;

    rewardEpochDurationSeconds(): NonPayableTransactionObject<string>;

    rewardEpochs(arg0: number | string | BN): NonPayableTransactionObject<{
      votepowerBlock: string;
      startBlock: string;
      startTimestamp: string;
      0: string;
      1: string;
      2: string;
    }>;

    rewardEpochsStartTs(): NonPayableTransactionObject<string>;

    switchToFallbackMode(): NonPayableTransactionObject<boolean>;

    transferGovernance(_governance: string): NonPayableTransactionObject<void>;
  };
  events: {
    GovernanceProposed(cb?: Callback<GovernanceProposed>): EventEmitter;
    GovernanceProposed(
      options?: EventOptions,
      cb?: Callback<GovernanceProposed>
    ): EventEmitter;

    GovernanceUpdated(cb?: Callback<GovernanceUpdated>): EventEmitter;
    GovernanceUpdated(
      options?: EventOptions,
      cb?: Callback<GovernanceUpdated>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "GovernanceProposed", cb: Callback<GovernanceProposed>): void;
  once(
    event: "GovernanceProposed",
    options: EventOptions,
    cb: Callback<GovernanceProposed>
  ): void;

  once(event: "GovernanceUpdated", cb: Callback<GovernanceUpdated>): void;
  once(
    event: "GovernanceUpdated",
    options: EventOptions,
    cb: Callback<GovernanceUpdated>
  ): void;
}