/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type OrderInfoStruct = {
  reactor: PromiseOrValue<string>;
  offerer: PromiseOrValue<string>;
  nonce: PromiseOrValue<BigNumberish>;
  deadline: PromiseOrValue<BigNumberish>;
  validationContract: PromiseOrValue<string>;
  validationData: PromiseOrValue<BytesLike>;
};

export type OrderInfoStructOutput = [
  string,
  string,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  reactor: string;
  offerer: string;
  nonce: BigNumber;
  deadline: BigNumber;
  validationContract: string;
  validationData: string;
};

export type InputTokenStruct = {
  token: PromiseOrValue<string>;
  amount: PromiseOrValue<BigNumberish>;
  maxAmount: PromiseOrValue<BigNumberish>;
};

export type InputTokenStructOutput = [string, BigNumber, BigNumber] & {
  token: string;
  amount: BigNumber;
  maxAmount: BigNumber;
};

export type OutputTokenStruct = {
  token: PromiseOrValue<string>;
  amount: PromiseOrValue<BigNumberish>;
  recipient: PromiseOrValue<string>;
};

export type OutputTokenStructOutput = [string, BigNumber, string] & {
  token: string;
  amount: BigNumber;
  recipient: string;
};

export type ResolvedOrderStruct = {
  info: OrderInfoStruct;
  input: InputTokenStruct;
  outputs: OutputTokenStruct[];
  sig: PromiseOrValue<BytesLike>;
  hash: PromiseOrValue<BytesLike>;
};

export type ResolvedOrderStructOutput = [
  OrderInfoStructOutput,
  InputTokenStructOutput,
  OutputTokenStructOutput[],
  string,
  string
] & {
  info: OrderInfoStructOutput;
  input: InputTokenStructOutput;
  outputs: OutputTokenStructOutput[];
  sig: string;
  hash: string;
};

export interface SwapRouter02ExecutorInterface extends utils.Interface {
  functions: {
    "multicall(address[],bytes[])": FunctionFragment;
    "owner()": FunctionFragment;
    "reactorCallback(((address,address,uint256,uint256,address,bytes),(address,uint256,uint256),(address,uint256,address)[],bytes,bytes32)[],address,bytes)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "unwrapWETH(address)": FunctionFragment;
    "withdrawETH(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "multicall"
      | "owner"
      | "reactorCallback"
      | "setOwner"
      | "unwrapWETH"
      | "withdrawETH"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "multicall",
    values: [PromiseOrValue<string>[], PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reactorCallback",
    values: [
      ResolvedOrderStruct[],
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapWETH",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reactorCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unwrapWETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
    data: BytesLike
  ): Result;

  events: {
    "OwnerUpdated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
}

export interface OwnerUpdatedEventObject {
  user: string;
  newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<
  [string, string],
  OwnerUpdatedEventObject
>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface SwapRouter02Executor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapRouter02ExecutorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    multicall(
      tokensToApprove: PromiseOrValue<string>[],
      multicallData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    reactorCallback(
      resolvedOrders: ResolvedOrderStruct[],
      filler: PromiseOrValue<string>,
      fillData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unwrapWETH(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawETH(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  multicall(
    tokensToApprove: PromiseOrValue<string>[],
    multicallData: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  reactorCallback(
    resolvedOrders: ResolvedOrderStruct[],
    filler: PromiseOrValue<string>,
    fillData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unwrapWETH(
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawETH(
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    multicall(
      tokensToApprove: PromiseOrValue<string>[],
      multicallData: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    reactorCallback(
      resolvedOrders: ResolvedOrderStruct[],
      filler: PromiseOrValue<string>,
      fillData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unwrapWETH(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawETH(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnerUpdated(address,address)"(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;
    OwnerUpdated(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;
  };

  estimateGas: {
    multicall(
      tokensToApprove: PromiseOrValue<string>[],
      multicallData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    reactorCallback(
      resolvedOrders: ResolvedOrderStruct[],
      filler: PromiseOrValue<string>,
      fillData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unwrapWETH(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawETH(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    multicall(
      tokensToApprove: PromiseOrValue<string>[],
      multicallData: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reactorCallback(
      resolvedOrders: ResolvedOrderStruct[],
      filler: PromiseOrValue<string>,
      fillData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unwrapWETH(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawETH(
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}