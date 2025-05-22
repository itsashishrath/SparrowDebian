import type { GraphqlRequestMetaDataDtoInterface } from "./graphql-request-dto";
import type { HttpRequestMetaDataDtoInterface } from "./http-request-dto";
import type { SocketIORequestMetaDataDtoInterface } from "./socket-io-request-dto";
import type { WebSocketRequestMetaDataDtoInterface } from "./websocket-request-dto";

// Enums
export enum CollectionItemTypeDtoEnum {
  FOLDER = "FOLDER",
  REQUEST = "REQUEST",
  WEBSOCKET = "WEBSOCKET",
  SOCKETIO = "SOCKETIO",
  GRAPHQL = "GRAPHQL",
}

export enum CollectionSourceTypeDtoEnum {
  SPEC = "SPEC",
  USER = "USER",
}

export interface CollectionItemDtoInterface {
  id?: string;
  name: string;
  description?: string;
  type: CollectionItemTypeDtoEnum;
  source?: CollectionSourceTypeDtoEnum;
  items?: CollectionItemDtoInterface[];
  request?: HttpRequestMetaDataDtoInterface;
  websocket?: WebSocketRequestMetaDataDtoInterface;
  socketio?: SocketIORequestMetaDataDtoInterface;
  graphql?: GraphqlRequestMetaDataDtoInterface;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
}

export interface CollectionBranchDtoInterface {
  id: string;
  name: string;
}

export interface CollectionUpdaterDetailsDtoInterface {
  name: string;
  id?: string;
}

export interface CollectionDtoInterface {
  name: string;
  description?: string;
  primaryBranch?: string;
  localRepositoryPath?: string;
  totalRequests: number;
  uuid?: string;
  items: CollectionItemDtoInterface[];
  activeSync?: boolean;
  activeSyncUrl?: string;
  branches?: CollectionBranchDtoInterface[];
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: CollectionUpdaterDetailsDtoInterface;
}
