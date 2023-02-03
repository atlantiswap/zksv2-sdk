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
  isFeeOutput: PromiseOrValue<boolean>;
};

export type OutputTokenStructOutput = [string, BigNumber, string, boolean] & {
  token: string;
  amount: BigNumber;
  recipient: string;
  isFeeOutput: boolean;
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

export interface UniswapV3ExecutorInterface extends utils.Interface {
  functions: {
    "claimTokens(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "reactorCallback(((address,address,uint256,uint256,address,bytes),(address,uint256,uint256),(address,uint256,address,bool)[],bytes,bytes32)[],address,bytes)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "swapRouter()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimTokens"
      | "owner"
      | "reactorCallback"
      | "setOwner"
      | "swapRouter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimTokens",
    values: [PromiseOrValue<string>]
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
    functionFragment: "swapRouter",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "claimTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reactorCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;

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

export interface UniswapV3Executor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UniswapV3ExecutorInterface;

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
    claimTokens(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    reactorCallback(
      resolvedOrders: ResolvedOrderStruct[],
      arg1: PromiseOrValue<string>,
      path: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<[string]>;
  };

  claimTokens(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  reactorCallback(
    resolvedOrders: ResolvedOrderStruct[],
    arg1: PromiseOrValue<string>,
    path: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapRouter(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    claimTokens(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    reactorCallback(
      resolvedOrders: ResolvedOrderStruct[],
      arg1: PromiseOrValue<string>,
      path: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapRouter(overrides?: CallOverrides): Promise<string>;
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
    claimTokens(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    reactorCallback(
      resolvedOrders: ResolvedOrderStruct[],
      arg1: PromiseOrValue<string>,
      path: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapRouter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claimTokens(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reactorCallback(
      resolvedOrders: ResolvedOrderStruct[],
      arg1: PromiseOrValue<string>,
      path: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}