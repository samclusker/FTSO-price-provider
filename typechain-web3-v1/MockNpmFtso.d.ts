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

export type LowTurnout = ContractEventLog<{
  epochId: string;
  natTurnout: string;
  lowNatTurnoutThresholdBIPS: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type PriceEpochInitializedOnFtso = ContractEventLog<{
  epochId: string;
  endTime: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
}>;
export type PriceFinalized = ContractEventLog<{
  epochId: string;
  price: string;
  rewardedFtso: boolean;
  lowRewardPrice: string;
  highRewardPrice: string;
  finalizationType: string;
  timestamp: string;
  0: string;
  1: string;
  2: boolean;
  3: string;
  4: string;
  5: string;
  6: string;
}>;
export type PriceRevealed = ContractEventLog<{
  voter: string;
  epochId: string;
  price: string;
  timestamp: string;
  votePowerNat: string;
  votePowerAsset: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;

export interface MockNpmFtso extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): MockNpmFtso;
  clone(): MockNpmFtso;
  methods: {
    ASSET_PRICE_USD_DECIMALS(): NonPayableTransactionObject<string>;

    activateFtso(
      arg0: number | string | BN,
      arg1: number | string | BN,
      arg2: number | string | BN
    ): NonPayableTransactionObject<void>;

    active(): NonPayableTransactionObject<boolean>;

    assetFtsos(arg0: number | string | BN): NonPayableTransactionObject<string>;

    assets(arg0: number | string | BN): NonPayableTransactionObject<string>;

    configureEpochs(
      arg0: number | string | BN,
      arg1: number | string | BN,
      arg2: number | string | BN,
      arg3: number | string | BN,
      arg4: number | string | BN,
      arg5: number | string | BN,
      arg6: string[]
    ): NonPayableTransactionObject<void>;

    deactivateFtso(): NonPayableTransactionObject<void>;

    epochsConfiguration(): NonPayableTransactionObject<{
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string[];
    }>;

    fallbackFinalizePriceEpoch(
      arg0: number | string | BN
    ): NonPayableTransactionObject<void>;

    finalizePriceEpoch(
      arg0: number | string | BN,
      arg1: boolean
    ): NonPayableTransactionObject<{
      0: string[];
      1: string[];
      2: string;
    }>;

    forceFinalizePriceEpoch(
      arg0: number | string | BN
    ): NonPayableTransactionObject<void>;

    ftsoManager(): NonPayableTransactionObject<string>;

    getAsset(): NonPayableTransactionObject<string>;

    getAssetFtsos(): NonPayableTransactionObject<string[]>;

    getCurrentEpochId(): NonPayableTransactionObject<string>;

    getCurrentPrice(): NonPayableTransactionObject<{
      _price: string;
      _timestamp: string;
      0: string;
      1: string;
    }>;

    getCurrentPriceDetails(): NonPayableTransactionObject<{
      _price: string;
      _priceTimestamp: string;
      _priceFinalizationType: string;
      _lastPriceEpochFinalizationTimestamp: string;
      _lastPriceEpochFinalizationType: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
    }>;

    getCurrentPriceFromTrustedProviders(): NonPayableTransactionObject<{
      _price: string;
      _timestamp: string;
      0: string;
      1: string;
    }>;

    getCurrentRandom(): NonPayableTransactionObject<string>;

    getEpochId(
      _timestamp: number | string | BN
    ): NonPayableTransactionObject<string>;

    getEpochPrice(
      arg0: number | string | BN
    ): NonPayableTransactionObject<string>;

    getEpochPriceForVoter(
      _epochId: number | string | BN,
      _voter: string
    ): NonPayableTransactionObject<string>;

    getPriceEpochConfiguration(): NonPayableTransactionObject<{
      _firstEpochStartTs: string;
      _submitPeriodSeconds: string;
      _revealPeriodSeconds: string;
      0: string;
      1: string;
      2: string;
    }>;

    getPriceEpochData(): NonPayableTransactionObject<{
      _epochId: string;
      _epochSubmitEndTime: string;
      _epochRevealEndTime: string;
      _votePowerBlock: string;
      _fallbackMode: boolean;
      0: string;
      1: string;
      2: string;
      3: string;
      4: boolean;
    }>;

    getRandom(
      _epochId: number | string | BN
    ): NonPayableTransactionObject<string>;

    getVoteWeightingParameters(): NonPayableTransactionObject<{
      0: string[];
      1: string[];
      2: string;
      3: string;
      4: string;
      5: string;
    }>;

    initializeCurrentEpochStateForReveal(
      arg0: number | string | BN,
      arg1: boolean
    ): NonPayableTransactionObject<void>;

    priceSubmitter(): NonPayableTransactionObject<string>;

    revealPriceSubmitter(
      _voter: string,
      _epochId: number | string | BN,
      _price: number | string | BN,
      arg3: number | string | BN
    ): NonPayableTransactionObject<void>;

    setAsset(arg0: string): NonPayableTransactionObject<void>;

    setAssetFtsos(arg0: string[]): NonPayableTransactionObject<void>;

    setVotePowerBlock(
      arg0: number | string | BN
    ): NonPayableTransactionObject<void>;

    symbol(): NonPayableTransactionObject<string>;

    updateInitialPrice(
      arg0: number | string | BN,
      arg1: number | string | BN
    ): NonPayableTransactionObject<void>;

    wNat(): NonPayableTransactionObject<string>;

    wNatVotePowerCached(
      _owner: string,
      _epochId: number | string | BN
    ): NonPayableTransactionObject<string>;
  };
  events: {
    LowTurnout(cb?: Callback<LowTurnout>): EventEmitter;
    LowTurnout(options?: EventOptions, cb?: Callback<LowTurnout>): EventEmitter;

    PriceEpochInitializedOnFtso(
      cb?: Callback<PriceEpochInitializedOnFtso>
    ): EventEmitter;
    PriceEpochInitializedOnFtso(
      options?: EventOptions,
      cb?: Callback<PriceEpochInitializedOnFtso>
    ): EventEmitter;

    PriceFinalized(cb?: Callback<PriceFinalized>): EventEmitter;
    PriceFinalized(
      options?: EventOptions,
      cb?: Callback<PriceFinalized>
    ): EventEmitter;

    PriceRevealed(cb?: Callback<PriceRevealed>): EventEmitter;
    PriceRevealed(
      options?: EventOptions,
      cb?: Callback<PriceRevealed>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "LowTurnout", cb: Callback<LowTurnout>): void;
  once(
    event: "LowTurnout",
    options: EventOptions,
    cb: Callback<LowTurnout>
  ): void;

  once(
    event: "PriceEpochInitializedOnFtso",
    cb: Callback<PriceEpochInitializedOnFtso>
  ): void;
  once(
    event: "PriceEpochInitializedOnFtso",
    options: EventOptions,
    cb: Callback<PriceEpochInitializedOnFtso>
  ): void;

  once(event: "PriceFinalized", cb: Callback<PriceFinalized>): void;
  once(
    event: "PriceFinalized",
    options: EventOptions,
    cb: Callback<PriceFinalized>
  ): void;

  once(event: "PriceRevealed", cb: Callback<PriceRevealed>): void;
  once(
    event: "PriceRevealed",
    options: EventOptions,
    cb: Callback<PriceRevealed>
  ): void;
}