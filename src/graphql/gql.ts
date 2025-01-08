/* eslint-disable */
//@ts-ignore
//@ts-ignore

import * as types from './graphql'
//@ts-ignore
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
//@ts-ignore
const documents = []
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

export function gql(source: string) {
   //@ts-ignore
   return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
   TDocumentNode extends DocumentNode<infer TType, any> ? TType : never