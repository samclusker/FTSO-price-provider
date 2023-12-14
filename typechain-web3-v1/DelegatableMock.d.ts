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

export type CreatedVotePowerCache = ContractEventLog<{
  _owner: string;
  _blockNumber: string;
  0: string;
  1: string;
}>;
export type Delegate = ContractEventLog<{
  from: string;
  to: string;
  priorVotePower: string;
  newVotePower: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type Revoke = ContractEventLog<{
  delegator: string;
  delegatee: string;
  votePower: string;
  blockNumber: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;

export interface DelegatableMock extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): DelegatableMock;
  clone(): DelegatableMock;
  methods: {
    balanceOf(_who: string): NonPayableTransactionObject<string>;

    balanceOfAt(
      _who: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    burnVotePower(
      _owner: string,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    delegate(
      _to: string,
      _bips: number | string | BN
    ): NonPayableTransactionObject<void>;

    delegateExplicit(
      _to: string,
      _votePower: number | string | BN
    ): NonPayableTransactionObject<void>;

    delegatesOf(_owner: string): NonPayableTransactionObject<{
      _delegateAddresses: string[];
      _bips: string[];
      _count: string;
      _delegationMode: string;
      0: string[];
      1: string[];
      2: string;
      3: string;
    }>;

    delegatesOfAt(
      _owner: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<{
      _delegateAddresses: string[];
      _bips: string[];
      _count: string;
      _delegationMode: string;
      0: string[];
      1: string[];
      2: string;
      3: string;
    }>;

    delegationModeOf(_who: string): NonPayableTransactionObject<string>;

    explicitDelegationHistoryCleanup(
      _from: string,
      _to: string,
      _count: number | string | BN
    ): NonPayableTransactionObject<string>;

    getCleanupBlockNumber(): NonPayableTransactionObject<string>;

    mintVotePower(
      _owner: string,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    percentageDelegationHistoryCleanup(
      _owner: string,
      _count: number | string | BN
    ): NonPayableTransactionObject<string>;

    revocationCleanup(
      _from: string,
      _to: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    revokeDelegationAt(
      _who: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<void>;

    setCleanupBlockNumber(
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<void>;

    transmitVotePower(
      from: string,
      to: string,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    undelegateAll(): NonPayableTransactionObject<void>;

    undelegateAllExplicit(
      _delegateAddresses: string[]
    ): NonPayableTransactionObject<string>;

    undelegatedVotePowerOf(_owner: string): NonPayableTransactionObject<string>;

    undelegatedVotePowerOfAt(
      _owner: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    votePowerCacheCleanup(
      _owner: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    votePowerFromTo(
      _from: string,
      _to: string
    ): NonPayableTransactionObject<string>;

    votePowerFromToAt(
      _from: string,
      _to: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    votePowerHistoryCleanup(
      _owner: string,
      _count: number | string | BN
    ): NonPayableTransactionObject<string>;

    votePowerOf(_who: string): NonPayableTransactionObject<string>;

    votePowerOfAt(
      _who: string,
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;
  };
  events: {
    CreatedVotePowerCache(cb?: Callback<CreatedVotePowerCache>): EventEmitter;
    CreatedVotePowerCache(
      options?: EventOptions,
      cb?: Callback<CreatedVotePowerCache>
    ): EventEmitter;

    Delegate(cb?: Callback<Delegate>): EventEmitter;
    Delegate(options?: EventOptions, cb?: Callback<Delegate>): EventEmitter;

    Revoke(cb?: Callback<Revoke>): EventEmitter;
    Revoke(options?: EventOptions, cb?: Callback<Revoke>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(
    event: "CreatedVotePowerCache",
    cb: Callback<CreatedVotePowerCache>
  ): void;
  once(
    event: "CreatedVotePowerCache",
    options: EventOptions,
    cb: Callback<CreatedVotePowerCache>
  ): void;

  once(event: "Delegate", cb: Callback<Delegate>): void;
  once(event: "Delegate", options: EventOptions, cb: Callback<Delegate>): void;

  once(event: "Revoke", cb: Callback<Revoke>): void;
  once(event: "Revoke", options: EventOptions, cb: Callback<Revoke>): void;
}