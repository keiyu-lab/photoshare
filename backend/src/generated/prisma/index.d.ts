
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model AlbumMember
 * 
 */
export type AlbumMember = $Result.DefaultSelection<Prisma.$AlbumMemberPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model AlbumShare
 * 
 */
export type AlbumShare = $Result.DefaultSelection<Prisma.$AlbumSharePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.albumMember`: Exposes CRUD operations for the **AlbumMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlbumMembers
    * const albumMembers = await prisma.albumMember.findMany()
    * ```
    */
  get albumMember(): Prisma.AlbumMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.albumShare`: Exposes CRUD operations for the **AlbumShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlbumShares
    * const albumShares = await prisma.albumShare.findMany()
    * ```
    */
  get albumShare(): Prisma.AlbumShareDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Album: 'Album',
    AlbumMember: 'AlbumMember',
    Photo: 'Photo',
    AlbumShare: 'AlbumShare'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "album" | "albumMember" | "photo" | "albumShare"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      AlbumMember: {
        payload: Prisma.$AlbumMemberPayload<ExtArgs>
        fields: Prisma.AlbumMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumMemberPayload>
          }
          findFirst: {
            args: Prisma.AlbumMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumMemberPayload>
          }
          findMany: {
            args: Prisma.AlbumMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumMemberPayload>[]
          }
          create: {
            args: Prisma.AlbumMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumMemberPayload>
          }
          createMany: {
            args: Prisma.AlbumMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumMemberPayload>[]
          }
          delete: {
            args: Prisma.AlbumMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumMemberPayload>
          }
          update: {
            args: Prisma.AlbumMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumMemberPayload>
          }
          deleteMany: {
            args: Prisma.AlbumMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumMemberPayload>[]
          }
          upsert: {
            args: Prisma.AlbumMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumMemberPayload>
          }
          aggregate: {
            args: Prisma.AlbumMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbumMember>
          }
          groupBy: {
            args: Prisma.AlbumMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumMemberCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumMemberCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      AlbumShare: {
        payload: Prisma.$AlbumSharePayload<ExtArgs>
        fields: Prisma.AlbumShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSharePayload>
          }
          findFirst: {
            args: Prisma.AlbumShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSharePayload>
          }
          findMany: {
            args: Prisma.AlbumShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSharePayload>[]
          }
          create: {
            args: Prisma.AlbumShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSharePayload>
          }
          createMany: {
            args: Prisma.AlbumShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSharePayload>[]
          }
          delete: {
            args: Prisma.AlbumShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSharePayload>
          }
          update: {
            args: Prisma.AlbumShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSharePayload>
          }
          deleteMany: {
            args: Prisma.AlbumShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSharePayload>[]
          }
          upsert: {
            args: Prisma.AlbumShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSharePayload>
          }
          aggregate: {
            args: Prisma.AlbumShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbumShare>
          }
          groupBy: {
            args: Prisma.AlbumShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumShareCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumShareCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    album?: AlbumOmit
    albumMember?: AlbumMemberOmit
    photo?: PhotoOmit
    albumShare?: AlbumShareOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    albums: number
    photos: number
    albumMembers: number
    sentShares: number
    receivedShares: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | UserCountOutputTypeCountAlbumsArgs
    photos?: boolean | UserCountOutputTypeCountPhotosArgs
    albumMembers?: boolean | UserCountOutputTypeCountAlbumMembersArgs
    sentShares?: boolean | UserCountOutputTypeCountSentSharesArgs
    receivedShares?: boolean | UserCountOutputTypeCountReceivedSharesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlbumMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumShareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumShareWhereInput
  }


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    sub_albums: number
    photos: number
    albumMembers: number
    albumShares: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_albums?: boolean | AlbumCountOutputTypeCountSub_albumsArgs
    photos?: boolean | AlbumCountOutputTypeCountPhotosArgs
    albumMembers?: boolean | AlbumCountOutputTypeCountAlbumMembersArgs
    albumShares?: boolean | AlbumCountOutputTypeCountAlbumSharesArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountSub_albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountAlbumMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumMemberWhereInput
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountAlbumSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumShareWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    albums?: boolean | User$albumsArgs<ExtArgs>
    photos?: boolean | User$photosArgs<ExtArgs>
    albumMembers?: boolean | User$albumMembersArgs<ExtArgs>
    sentShares?: boolean | User$sentSharesArgs<ExtArgs>
    receivedShares?: boolean | User$receivedSharesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | User$albumsArgs<ExtArgs>
    photos?: boolean | User$photosArgs<ExtArgs>
    albumMembers?: boolean | User$albumMembersArgs<ExtArgs>
    sentShares?: boolean | User$sentSharesArgs<ExtArgs>
    receivedShares?: boolean | User$receivedSharesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      albums: Prisma.$AlbumPayload<ExtArgs>[]
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      albumMembers: Prisma.$AlbumMemberPayload<ExtArgs>[]
      sentShares: Prisma.$AlbumSharePayload<ExtArgs>[]
      receivedShares: Prisma.$AlbumSharePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    albums<T extends User$albumsArgs<ExtArgs> = {}>(args?: Subset<T, User$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends User$photosArgs<ExtArgs> = {}>(args?: Subset<T, User$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    albumMembers<T extends User$albumMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$albumMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentShares<T extends User$sentSharesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentSharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedShares<T extends User$receivedSharesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedSharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.albums
   */
  export type User$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * User.photos
   */
  export type User$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * User.albumMembers
   */
  export type User$albumMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
    where?: AlbumMemberWhereInput
    orderBy?: AlbumMemberOrderByWithRelationInput | AlbumMemberOrderByWithRelationInput[]
    cursor?: AlbumMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumMemberScalarFieldEnum | AlbumMemberScalarFieldEnum[]
  }

  /**
   * User.sentShares
   */
  export type User$sentSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    where?: AlbumShareWhereInput
    orderBy?: AlbumShareOrderByWithRelationInput | AlbumShareOrderByWithRelationInput[]
    cursor?: AlbumShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumShareScalarFieldEnum | AlbumShareScalarFieldEnum[]
  }

  /**
   * User.receivedShares
   */
  export type User$receivedSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    where?: AlbumShareWhereInput
    orderBy?: AlbumShareOrderByWithRelationInput | AlbumShareOrderByWithRelationInput[]
    cursor?: AlbumShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumShareScalarFieldEnum | AlbumShareScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumMinAggregateOutputType = {
    id: string | null
    name: string | null
    parent_album_id: string | null
    owner_user_id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: string | null
    name: string | null
    parent_album_id: string | null
    owner_user_id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    name: number
    parent_album_id: number
    owner_user_id: number
    created_at: number
    updated_at: number
    is_deleted: number
    _all: number
  }


  export type AlbumMinAggregateInputType = {
    id?: true
    name?: true
    parent_album_id?: true
    owner_user_id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    name?: true
    parent_album_id?: true
    owner_user_id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    name?: true
    parent_album_id?: true
    owner_user_id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: string
    name: string
    parent_album_id: string | null
    owner_user_id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parent_album_id?: boolean
    owner_user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    parent_album?: boolean | Album$parent_albumArgs<ExtArgs>
    sub_albums?: boolean | Album$sub_albumsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    photos?: boolean | Album$photosArgs<ExtArgs>
    albumMembers?: boolean | Album$albumMembersArgs<ExtArgs>
    albumShares?: boolean | Album$albumSharesArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parent_album_id?: boolean
    owner_user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    parent_album?: boolean | Album$parent_albumArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parent_album_id?: boolean
    owner_user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    parent_album?: boolean | Album$parent_albumArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    name?: boolean
    parent_album_id?: boolean
    owner_user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "parent_album_id" | "owner_user_id" | "created_at" | "updated_at" | "is_deleted", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent_album?: boolean | Album$parent_albumArgs<ExtArgs>
    sub_albums?: boolean | Album$sub_albumsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    photos?: boolean | Album$photosArgs<ExtArgs>
    albumMembers?: boolean | Album$albumMembersArgs<ExtArgs>
    albumShares?: boolean | Album$albumSharesArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent_album?: boolean | Album$parent_albumArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent_album?: boolean | Album$parent_albumArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      parent_album: Prisma.$AlbumPayload<ExtArgs> | null
      sub_albums: Prisma.$AlbumPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      albumMembers: Prisma.$AlbumMemberPayload<ExtArgs>[]
      albumShares: Prisma.$AlbumSharePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      parent_album_id: string | null
      owner_user_id: string
      created_at: Date
      updated_at: Date
      is_deleted: boolean
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent_album<T extends Album$parent_albumArgs<ExtArgs> = {}>(args?: Subset<T, Album$parent_albumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sub_albums<T extends Album$sub_albumsArgs<ExtArgs> = {}>(args?: Subset<T, Album$sub_albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photos<T extends Album$photosArgs<ExtArgs> = {}>(args?: Subset<T, Album$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    albumMembers<T extends Album$albumMembersArgs<ExtArgs> = {}>(args?: Subset<T, Album$albumMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    albumShares<T extends Album$albumSharesArgs<ExtArgs> = {}>(args?: Subset<T, Album$albumSharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'String'>
    readonly name: FieldRef<"Album", 'String'>
    readonly parent_album_id: FieldRef<"Album", 'String'>
    readonly owner_user_id: FieldRef<"Album", 'String'>
    readonly created_at: FieldRef<"Album", 'DateTime'>
    readonly updated_at: FieldRef<"Album", 'DateTime'>
    readonly is_deleted: FieldRef<"Album", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.parent_album
   */
  export type Album$parent_albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }

  /**
   * Album.sub_albums
   */
  export type Album$sub_albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album.photos
   */
  export type Album$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Album.albumMembers
   */
  export type Album$albumMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
    where?: AlbumMemberWhereInput
    orderBy?: AlbumMemberOrderByWithRelationInput | AlbumMemberOrderByWithRelationInput[]
    cursor?: AlbumMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumMemberScalarFieldEnum | AlbumMemberScalarFieldEnum[]
  }

  /**
   * Album.albumShares
   */
  export type Album$albumSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    where?: AlbumShareWhereInput
    orderBy?: AlbumShareOrderByWithRelationInput | AlbumShareOrderByWithRelationInput[]
    cursor?: AlbumShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumShareScalarFieldEnum | AlbumShareScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model AlbumMember
   */

  export type AggregateAlbumMember = {
    _count: AlbumMemberCountAggregateOutputType | null
    _min: AlbumMemberMinAggregateOutputType | null
    _max: AlbumMemberMaxAggregateOutputType | null
  }

  export type AlbumMemberMinAggregateOutputType = {
    id: string | null
    album_id: string | null
    user_id: string | null
    role: string | null
  }

  export type AlbumMemberMaxAggregateOutputType = {
    id: string | null
    album_id: string | null
    user_id: string | null
    role: string | null
  }

  export type AlbumMemberCountAggregateOutputType = {
    id: number
    album_id: number
    user_id: number
    role: number
    _all: number
  }


  export type AlbumMemberMinAggregateInputType = {
    id?: true
    album_id?: true
    user_id?: true
    role?: true
  }

  export type AlbumMemberMaxAggregateInputType = {
    id?: true
    album_id?: true
    user_id?: true
    role?: true
  }

  export type AlbumMemberCountAggregateInputType = {
    id?: true
    album_id?: true
    user_id?: true
    role?: true
    _all?: true
  }

  export type AlbumMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumMember to aggregate.
     */
    where?: AlbumMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumMembers to fetch.
     */
    orderBy?: AlbumMemberOrderByWithRelationInput | AlbumMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlbumMembers
    **/
    _count?: true | AlbumMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMemberMaxAggregateInputType
  }

  export type GetAlbumMemberAggregateType<T extends AlbumMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbumMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumMember[P]>
      : GetScalarType<T[P], AggregateAlbumMember[P]>
  }




  export type AlbumMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumMemberWhereInput
    orderBy?: AlbumMemberOrderByWithAggregationInput | AlbumMemberOrderByWithAggregationInput[]
    by: AlbumMemberScalarFieldEnum[] | AlbumMemberScalarFieldEnum
    having?: AlbumMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumMemberCountAggregateInputType | true
    _min?: AlbumMemberMinAggregateInputType
    _max?: AlbumMemberMaxAggregateInputType
  }

  export type AlbumMemberGroupByOutputType = {
    id: string
    album_id: string
    user_id: string
    role: string
    _count: AlbumMemberCountAggregateOutputType | null
    _min: AlbumMemberMinAggregateOutputType | null
    _max: AlbumMemberMaxAggregateOutputType | null
  }

  type GetAlbumMemberGroupByPayload<T extends AlbumMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumMemberGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumMemberGroupByOutputType[P]>
        }
      >
    >


  export type AlbumMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    album_id?: boolean
    user_id?: boolean
    role?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumMember"]>

  export type AlbumMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    album_id?: boolean
    user_id?: boolean
    role?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumMember"]>

  export type AlbumMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    album_id?: boolean
    user_id?: boolean
    role?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumMember"]>

  export type AlbumMemberSelectScalar = {
    id?: boolean
    album_id?: boolean
    user_id?: boolean
    role?: boolean
  }

  export type AlbumMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "album_id" | "user_id" | "role", ExtArgs["result"]["albumMember"]>
  export type AlbumMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlbumMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlbumMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlbumMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlbumMember"
    objects: {
      album: Prisma.$AlbumPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      album_id: string
      user_id: string
      role: string
    }, ExtArgs["result"]["albumMember"]>
    composites: {}
  }

  type AlbumMemberGetPayload<S extends boolean | null | undefined | AlbumMemberDefaultArgs> = $Result.GetResult<Prisma.$AlbumMemberPayload, S>

  type AlbumMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumMemberCountAggregateInputType | true
    }

  export interface AlbumMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlbumMember'], meta: { name: 'AlbumMember' } }
    /**
     * Find zero or one AlbumMember that matches the filter.
     * @param {AlbumMemberFindUniqueArgs} args - Arguments to find a AlbumMember
     * @example
     * // Get one AlbumMember
     * const albumMember = await prisma.albumMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumMemberFindUniqueArgs>(args: SelectSubset<T, AlbumMemberFindUniqueArgs<ExtArgs>>): Prisma__AlbumMemberClient<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlbumMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumMemberFindUniqueOrThrowArgs} args - Arguments to find a AlbumMember
     * @example
     * // Get one AlbumMember
     * const albumMember = await prisma.albumMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumMemberClient<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMemberFindFirstArgs} args - Arguments to find a AlbumMember
     * @example
     * // Get one AlbumMember
     * const albumMember = await prisma.albumMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumMemberFindFirstArgs>(args?: SelectSubset<T, AlbumMemberFindFirstArgs<ExtArgs>>): Prisma__AlbumMemberClient<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMemberFindFirstOrThrowArgs} args - Arguments to find a AlbumMember
     * @example
     * // Get one AlbumMember
     * const albumMember = await prisma.albumMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumMemberClient<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlbumMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumMembers
     * const albumMembers = await prisma.albumMember.findMany()
     * 
     * // Get first 10 AlbumMembers
     * const albumMembers = await prisma.albumMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumMemberWithIdOnly = await prisma.albumMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumMemberFindManyArgs>(args?: SelectSubset<T, AlbumMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlbumMember.
     * @param {AlbumMemberCreateArgs} args - Arguments to create a AlbumMember.
     * @example
     * // Create one AlbumMember
     * const AlbumMember = await prisma.albumMember.create({
     *   data: {
     *     // ... data to create a AlbumMember
     *   }
     * })
     * 
     */
    create<T extends AlbumMemberCreateArgs>(args: SelectSubset<T, AlbumMemberCreateArgs<ExtArgs>>): Prisma__AlbumMemberClient<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlbumMembers.
     * @param {AlbumMemberCreateManyArgs} args - Arguments to create many AlbumMembers.
     * @example
     * // Create many AlbumMembers
     * const albumMember = await prisma.albumMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumMemberCreateManyArgs>(args?: SelectSubset<T, AlbumMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlbumMembers and returns the data saved in the database.
     * @param {AlbumMemberCreateManyAndReturnArgs} args - Arguments to create many AlbumMembers.
     * @example
     * // Create many AlbumMembers
     * const albumMember = await prisma.albumMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlbumMembers and only return the `id`
     * const albumMemberWithIdOnly = await prisma.albumMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlbumMember.
     * @param {AlbumMemberDeleteArgs} args - Arguments to delete one AlbumMember.
     * @example
     * // Delete one AlbumMember
     * const AlbumMember = await prisma.albumMember.delete({
     *   where: {
     *     // ... filter to delete one AlbumMember
     *   }
     * })
     * 
     */
    delete<T extends AlbumMemberDeleteArgs>(args: SelectSubset<T, AlbumMemberDeleteArgs<ExtArgs>>): Prisma__AlbumMemberClient<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlbumMember.
     * @param {AlbumMemberUpdateArgs} args - Arguments to update one AlbumMember.
     * @example
     * // Update one AlbumMember
     * const albumMember = await prisma.albumMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumMemberUpdateArgs>(args: SelectSubset<T, AlbumMemberUpdateArgs<ExtArgs>>): Prisma__AlbumMemberClient<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlbumMembers.
     * @param {AlbumMemberDeleteManyArgs} args - Arguments to filter AlbumMembers to delete.
     * @example
     * // Delete a few AlbumMembers
     * const { count } = await prisma.albumMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumMemberDeleteManyArgs>(args?: SelectSubset<T, AlbumMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumMembers
     * const albumMember = await prisma.albumMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumMemberUpdateManyArgs>(args: SelectSubset<T, AlbumMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumMembers and returns the data updated in the database.
     * @param {AlbumMemberUpdateManyAndReturnArgs} args - Arguments to update many AlbumMembers.
     * @example
     * // Update many AlbumMembers
     * const albumMember = await prisma.albumMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlbumMembers and only return the `id`
     * const albumMemberWithIdOnly = await prisma.albumMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlbumMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlbumMember.
     * @param {AlbumMemberUpsertArgs} args - Arguments to update or create a AlbumMember.
     * @example
     * // Update or create a AlbumMember
     * const albumMember = await prisma.albumMember.upsert({
     *   create: {
     *     // ... data to create a AlbumMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumMember we want to update
     *   }
     * })
     */
    upsert<T extends AlbumMemberUpsertArgs>(args: SelectSubset<T, AlbumMemberUpsertArgs<ExtArgs>>): Prisma__AlbumMemberClient<$Result.GetResult<Prisma.$AlbumMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlbumMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMemberCountArgs} args - Arguments to filter AlbumMembers to count.
     * @example
     * // Count the number of AlbumMembers
     * const count = await prisma.albumMember.count({
     *   where: {
     *     // ... the filter for the AlbumMembers we want to count
     *   }
     * })
    **/
    count<T extends AlbumMemberCountArgs>(
      args?: Subset<T, AlbumMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumMemberAggregateArgs>(args: Subset<T, AlbumMemberAggregateArgs>): Prisma.PrismaPromise<GetAlbumMemberAggregateType<T>>

    /**
     * Group by AlbumMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumMemberGroupByArgs['orderBy'] }
        : { orderBy?: AlbumMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlbumMember model
   */
  readonly fields: AlbumMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlbumMember model
   */
  interface AlbumMemberFieldRefs {
    readonly id: FieldRef<"AlbumMember", 'String'>
    readonly album_id: FieldRef<"AlbumMember", 'String'>
    readonly user_id: FieldRef<"AlbumMember", 'String'>
    readonly role: FieldRef<"AlbumMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AlbumMember findUnique
   */
  export type AlbumMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
    /**
     * Filter, which AlbumMember to fetch.
     */
    where: AlbumMemberWhereUniqueInput
  }

  /**
   * AlbumMember findUniqueOrThrow
   */
  export type AlbumMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
    /**
     * Filter, which AlbumMember to fetch.
     */
    where: AlbumMemberWhereUniqueInput
  }

  /**
   * AlbumMember findFirst
   */
  export type AlbumMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
    /**
     * Filter, which AlbumMember to fetch.
     */
    where?: AlbumMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumMembers to fetch.
     */
    orderBy?: AlbumMemberOrderByWithRelationInput | AlbumMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumMembers.
     */
    cursor?: AlbumMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumMembers.
     */
    distinct?: AlbumMemberScalarFieldEnum | AlbumMemberScalarFieldEnum[]
  }

  /**
   * AlbumMember findFirstOrThrow
   */
  export type AlbumMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
    /**
     * Filter, which AlbumMember to fetch.
     */
    where?: AlbumMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumMembers to fetch.
     */
    orderBy?: AlbumMemberOrderByWithRelationInput | AlbumMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumMembers.
     */
    cursor?: AlbumMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumMembers.
     */
    distinct?: AlbumMemberScalarFieldEnum | AlbumMemberScalarFieldEnum[]
  }

  /**
   * AlbumMember findMany
   */
  export type AlbumMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
    /**
     * Filter, which AlbumMembers to fetch.
     */
    where?: AlbumMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumMembers to fetch.
     */
    orderBy?: AlbumMemberOrderByWithRelationInput | AlbumMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlbumMembers.
     */
    cursor?: AlbumMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumMembers.
     */
    skip?: number
    distinct?: AlbumMemberScalarFieldEnum | AlbumMemberScalarFieldEnum[]
  }

  /**
   * AlbumMember create
   */
  export type AlbumMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a AlbumMember.
     */
    data: XOR<AlbumMemberCreateInput, AlbumMemberUncheckedCreateInput>
  }

  /**
   * AlbumMember createMany
   */
  export type AlbumMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlbumMembers.
     */
    data: AlbumMemberCreateManyInput | AlbumMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlbumMember createManyAndReturn
   */
  export type AlbumMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * The data used to create many AlbumMembers.
     */
    data: AlbumMemberCreateManyInput | AlbumMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumMember update
   */
  export type AlbumMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a AlbumMember.
     */
    data: XOR<AlbumMemberUpdateInput, AlbumMemberUncheckedUpdateInput>
    /**
     * Choose, which AlbumMember to update.
     */
    where: AlbumMemberWhereUniqueInput
  }

  /**
   * AlbumMember updateMany
   */
  export type AlbumMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlbumMembers.
     */
    data: XOR<AlbumMemberUpdateManyMutationInput, AlbumMemberUncheckedUpdateManyInput>
    /**
     * Filter which AlbumMembers to update
     */
    where?: AlbumMemberWhereInput
    /**
     * Limit how many AlbumMembers to update.
     */
    limit?: number
  }

  /**
   * AlbumMember updateManyAndReturn
   */
  export type AlbumMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * The data used to update AlbumMembers.
     */
    data: XOR<AlbumMemberUpdateManyMutationInput, AlbumMemberUncheckedUpdateManyInput>
    /**
     * Filter which AlbumMembers to update
     */
    where?: AlbumMemberWhereInput
    /**
     * Limit how many AlbumMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumMember upsert
   */
  export type AlbumMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the AlbumMember to update in case it exists.
     */
    where: AlbumMemberWhereUniqueInput
    /**
     * In case the AlbumMember found by the `where` argument doesn't exist, create a new AlbumMember with this data.
     */
    create: XOR<AlbumMemberCreateInput, AlbumMemberUncheckedCreateInput>
    /**
     * In case the AlbumMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumMemberUpdateInput, AlbumMemberUncheckedUpdateInput>
  }

  /**
   * AlbumMember delete
   */
  export type AlbumMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
    /**
     * Filter which AlbumMember to delete.
     */
    where: AlbumMemberWhereUniqueInput
  }

  /**
   * AlbumMember deleteMany
   */
  export type AlbumMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumMembers to delete
     */
    where?: AlbumMemberWhereInput
    /**
     * Limit how many AlbumMembers to delete.
     */
    limit?: number
  }

  /**
   * AlbumMember without action
   */
  export type AlbumMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumMember
     */
    select?: AlbumMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumMember
     */
    omit?: AlbumMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumMemberInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    album_id: string | null
    s3_key: string | null
    name: string | null
    meta: string | null
    uploaded_by_user_id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    album_id: string | null
    s3_key: string | null
    name: string | null
    meta: string | null
    uploaded_by_user_id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_deleted: boolean | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    album_id: number
    s3_key: number
    name: number
    meta: number
    uploaded_by_user_id: number
    created_at: number
    updated_at: number
    is_deleted: number
    _all: number
  }


  export type PhotoMinAggregateInputType = {
    id?: true
    album_id?: true
    s3_key?: true
    name?: true
    meta?: true
    uploaded_by_user_id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    album_id?: true
    s3_key?: true
    name?: true
    meta?: true
    uploaded_by_user_id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    album_id?: true
    s3_key?: true
    name?: true
    meta?: true
    uploaded_by_user_id?: true
    created_at?: true
    updated_at?: true
    is_deleted?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: string
    album_id: string
    s3_key: string
    name: string
    meta: string | null
    uploaded_by_user_id: string
    created_at: Date
    updated_at: Date
    is_deleted: boolean
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    album_id?: boolean
    s3_key?: boolean
    name?: boolean
    meta?: boolean
    uploaded_by_user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    album_id?: boolean
    s3_key?: boolean
    name?: boolean
    meta?: boolean
    uploaded_by_user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    album_id?: boolean
    s3_key?: boolean
    name?: boolean
    meta?: boolean
    uploaded_by_user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    album_id?: boolean
    s3_key?: boolean
    name?: boolean
    meta?: boolean
    uploaded_by_user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_deleted?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "album_id" | "s3_key" | "name" | "meta" | "uploaded_by_user_id" | "created_at" | "updated_at" | "is_deleted", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      album: Prisma.$AlbumPayload<ExtArgs>
      uploader: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      album_id: string
      s3_key: string
      name: string
      meta: string | null
      uploaded_by_user_id: string
      created_at: Date
      updated_at: Date
      is_deleted: boolean
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'String'>
    readonly album_id: FieldRef<"Photo", 'String'>
    readonly s3_key: FieldRef<"Photo", 'String'>
    readonly name: FieldRef<"Photo", 'String'>
    readonly meta: FieldRef<"Photo", 'String'>
    readonly uploaded_by_user_id: FieldRef<"Photo", 'String'>
    readonly created_at: FieldRef<"Photo", 'DateTime'>
    readonly updated_at: FieldRef<"Photo", 'DateTime'>
    readonly is_deleted: FieldRef<"Photo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo updateManyAndReturn
   */
  export type PhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Model AlbumShare
   */

  export type AggregateAlbumShare = {
    _count: AlbumShareCountAggregateOutputType | null
    _min: AlbumShareMinAggregateOutputType | null
    _max: AlbumShareMaxAggregateOutputType | null
  }

  export type AlbumShareMinAggregateOutputType = {
    id: string | null
    album_id: string | null
    invited_by_user_id: string | null
    invited_email: string | null
    invited_user_id: string | null
    role: string | null
    invitation_token: string | null
    status: string | null
    expires_at: Date | null
    invited_at: Date | null
    updated_at: Date | null
  }

  export type AlbumShareMaxAggregateOutputType = {
    id: string | null
    album_id: string | null
    invited_by_user_id: string | null
    invited_email: string | null
    invited_user_id: string | null
    role: string | null
    invitation_token: string | null
    status: string | null
    expires_at: Date | null
    invited_at: Date | null
    updated_at: Date | null
  }

  export type AlbumShareCountAggregateOutputType = {
    id: number
    album_id: number
    invited_by_user_id: number
    invited_email: number
    invited_user_id: number
    role: number
    invitation_token: number
    status: number
    expires_at: number
    invited_at: number
    updated_at: number
    _all: number
  }


  export type AlbumShareMinAggregateInputType = {
    id?: true
    album_id?: true
    invited_by_user_id?: true
    invited_email?: true
    invited_user_id?: true
    role?: true
    invitation_token?: true
    status?: true
    expires_at?: true
    invited_at?: true
    updated_at?: true
  }

  export type AlbumShareMaxAggregateInputType = {
    id?: true
    album_id?: true
    invited_by_user_id?: true
    invited_email?: true
    invited_user_id?: true
    role?: true
    invitation_token?: true
    status?: true
    expires_at?: true
    invited_at?: true
    updated_at?: true
  }

  export type AlbumShareCountAggregateInputType = {
    id?: true
    album_id?: true
    invited_by_user_id?: true
    invited_email?: true
    invited_user_id?: true
    role?: true
    invitation_token?: true
    status?: true
    expires_at?: true
    invited_at?: true
    updated_at?: true
    _all?: true
  }

  export type AlbumShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumShare to aggregate.
     */
    where?: AlbumShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumShares to fetch.
     */
    orderBy?: AlbumShareOrderByWithRelationInput | AlbumShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlbumShares
    **/
    _count?: true | AlbumShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumShareMaxAggregateInputType
  }

  export type GetAlbumShareAggregateType<T extends AlbumShareAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbumShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumShare[P]>
      : GetScalarType<T[P], AggregateAlbumShare[P]>
  }




  export type AlbumShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumShareWhereInput
    orderBy?: AlbumShareOrderByWithAggregationInput | AlbumShareOrderByWithAggregationInput[]
    by: AlbumShareScalarFieldEnum[] | AlbumShareScalarFieldEnum
    having?: AlbumShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumShareCountAggregateInputType | true
    _min?: AlbumShareMinAggregateInputType
    _max?: AlbumShareMaxAggregateInputType
  }

  export type AlbumShareGroupByOutputType = {
    id: string
    album_id: string
    invited_by_user_id: string
    invited_email: string
    invited_user_id: string | null
    role: string
    invitation_token: string
    status: string
    expires_at: Date
    invited_at: Date
    updated_at: Date
    _count: AlbumShareCountAggregateOutputType | null
    _min: AlbumShareMinAggregateOutputType | null
    _max: AlbumShareMaxAggregateOutputType | null
  }

  type GetAlbumShareGroupByPayload<T extends AlbumShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumShareGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumShareGroupByOutputType[P]>
        }
      >
    >


  export type AlbumShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    album_id?: boolean
    invited_by_user_id?: boolean
    invited_email?: boolean
    invited_user_id?: boolean
    role?: boolean
    invitation_token?: boolean
    status?: boolean
    expires_at?: boolean
    invited_at?: boolean
    updated_at?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    invited_by_user?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | AlbumShare$invited_userArgs<ExtArgs>
  }, ExtArgs["result"]["albumShare"]>

  export type AlbumShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    album_id?: boolean
    invited_by_user_id?: boolean
    invited_email?: boolean
    invited_user_id?: boolean
    role?: boolean
    invitation_token?: boolean
    status?: boolean
    expires_at?: boolean
    invited_at?: boolean
    updated_at?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    invited_by_user?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | AlbumShare$invited_userArgs<ExtArgs>
  }, ExtArgs["result"]["albumShare"]>

  export type AlbumShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    album_id?: boolean
    invited_by_user_id?: boolean
    invited_email?: boolean
    invited_user_id?: boolean
    role?: boolean
    invitation_token?: boolean
    status?: boolean
    expires_at?: boolean
    invited_at?: boolean
    updated_at?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    invited_by_user?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | AlbumShare$invited_userArgs<ExtArgs>
  }, ExtArgs["result"]["albumShare"]>

  export type AlbumShareSelectScalar = {
    id?: boolean
    album_id?: boolean
    invited_by_user_id?: boolean
    invited_email?: boolean
    invited_user_id?: boolean
    role?: boolean
    invitation_token?: boolean
    status?: boolean
    expires_at?: boolean
    invited_at?: boolean
    updated_at?: boolean
  }

  export type AlbumShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "album_id" | "invited_by_user_id" | "invited_email" | "invited_user_id" | "role" | "invitation_token" | "status" | "expires_at" | "invited_at" | "updated_at", ExtArgs["result"]["albumShare"]>
  export type AlbumShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    invited_by_user?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | AlbumShare$invited_userArgs<ExtArgs>
  }
  export type AlbumShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    invited_by_user?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | AlbumShare$invited_userArgs<ExtArgs>
  }
  export type AlbumShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    invited_by_user?: boolean | UserDefaultArgs<ExtArgs>
    invited_user?: boolean | AlbumShare$invited_userArgs<ExtArgs>
  }

  export type $AlbumSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlbumShare"
    objects: {
      album: Prisma.$AlbumPayload<ExtArgs>
      invited_by_user: Prisma.$UserPayload<ExtArgs>
      invited_user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      album_id: string
      invited_by_user_id: string
      invited_email: string
      invited_user_id: string | null
      role: string
      invitation_token: string
      status: string
      expires_at: Date
      invited_at: Date
      updated_at: Date
    }, ExtArgs["result"]["albumShare"]>
    composites: {}
  }

  type AlbumShareGetPayload<S extends boolean | null | undefined | AlbumShareDefaultArgs> = $Result.GetResult<Prisma.$AlbumSharePayload, S>

  type AlbumShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumShareCountAggregateInputType | true
    }

  export interface AlbumShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlbumShare'], meta: { name: 'AlbumShare' } }
    /**
     * Find zero or one AlbumShare that matches the filter.
     * @param {AlbumShareFindUniqueArgs} args - Arguments to find a AlbumShare
     * @example
     * // Get one AlbumShare
     * const albumShare = await prisma.albumShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumShareFindUniqueArgs>(args: SelectSubset<T, AlbumShareFindUniqueArgs<ExtArgs>>): Prisma__AlbumShareClient<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlbumShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumShareFindUniqueOrThrowArgs} args - Arguments to find a AlbumShare
     * @example
     * // Get one AlbumShare
     * const albumShare = await prisma.albumShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumShareFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumShareClient<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumShareFindFirstArgs} args - Arguments to find a AlbumShare
     * @example
     * // Get one AlbumShare
     * const albumShare = await prisma.albumShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumShareFindFirstArgs>(args?: SelectSubset<T, AlbumShareFindFirstArgs<ExtArgs>>): Prisma__AlbumShareClient<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumShareFindFirstOrThrowArgs} args - Arguments to find a AlbumShare
     * @example
     * // Get one AlbumShare
     * const albumShare = await prisma.albumShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumShareFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumShareClient<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlbumShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumShares
     * const albumShares = await prisma.albumShare.findMany()
     * 
     * // Get first 10 AlbumShares
     * const albumShares = await prisma.albumShare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumShareWithIdOnly = await prisma.albumShare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumShareFindManyArgs>(args?: SelectSubset<T, AlbumShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlbumShare.
     * @param {AlbumShareCreateArgs} args - Arguments to create a AlbumShare.
     * @example
     * // Create one AlbumShare
     * const AlbumShare = await prisma.albumShare.create({
     *   data: {
     *     // ... data to create a AlbumShare
     *   }
     * })
     * 
     */
    create<T extends AlbumShareCreateArgs>(args: SelectSubset<T, AlbumShareCreateArgs<ExtArgs>>): Prisma__AlbumShareClient<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlbumShares.
     * @param {AlbumShareCreateManyArgs} args - Arguments to create many AlbumShares.
     * @example
     * // Create many AlbumShares
     * const albumShare = await prisma.albumShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumShareCreateManyArgs>(args?: SelectSubset<T, AlbumShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlbumShares and returns the data saved in the database.
     * @param {AlbumShareCreateManyAndReturnArgs} args - Arguments to create many AlbumShares.
     * @example
     * // Create many AlbumShares
     * const albumShare = await prisma.albumShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlbumShares and only return the `id`
     * const albumShareWithIdOnly = await prisma.albumShare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumShareCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlbumShare.
     * @param {AlbumShareDeleteArgs} args - Arguments to delete one AlbumShare.
     * @example
     * // Delete one AlbumShare
     * const AlbumShare = await prisma.albumShare.delete({
     *   where: {
     *     // ... filter to delete one AlbumShare
     *   }
     * })
     * 
     */
    delete<T extends AlbumShareDeleteArgs>(args: SelectSubset<T, AlbumShareDeleteArgs<ExtArgs>>): Prisma__AlbumShareClient<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlbumShare.
     * @param {AlbumShareUpdateArgs} args - Arguments to update one AlbumShare.
     * @example
     * // Update one AlbumShare
     * const albumShare = await prisma.albumShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumShareUpdateArgs>(args: SelectSubset<T, AlbumShareUpdateArgs<ExtArgs>>): Prisma__AlbumShareClient<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlbumShares.
     * @param {AlbumShareDeleteManyArgs} args - Arguments to filter AlbumShares to delete.
     * @example
     * // Delete a few AlbumShares
     * const { count } = await prisma.albumShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumShareDeleteManyArgs>(args?: SelectSubset<T, AlbumShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumShares
     * const albumShare = await prisma.albumShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumShareUpdateManyArgs>(args: SelectSubset<T, AlbumShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumShares and returns the data updated in the database.
     * @param {AlbumShareUpdateManyAndReturnArgs} args - Arguments to update many AlbumShares.
     * @example
     * // Update many AlbumShares
     * const albumShare = await prisma.albumShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlbumShares and only return the `id`
     * const albumShareWithIdOnly = await prisma.albumShare.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlbumShareUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlbumShare.
     * @param {AlbumShareUpsertArgs} args - Arguments to update or create a AlbumShare.
     * @example
     * // Update or create a AlbumShare
     * const albumShare = await prisma.albumShare.upsert({
     *   create: {
     *     // ... data to create a AlbumShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumShare we want to update
     *   }
     * })
     */
    upsert<T extends AlbumShareUpsertArgs>(args: SelectSubset<T, AlbumShareUpsertArgs<ExtArgs>>): Prisma__AlbumShareClient<$Result.GetResult<Prisma.$AlbumSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlbumShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumShareCountArgs} args - Arguments to filter AlbumShares to count.
     * @example
     * // Count the number of AlbumShares
     * const count = await prisma.albumShare.count({
     *   where: {
     *     // ... the filter for the AlbumShares we want to count
     *   }
     * })
    **/
    count<T extends AlbumShareCountArgs>(
      args?: Subset<T, AlbumShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumShareAggregateArgs>(args: Subset<T, AlbumShareAggregateArgs>): Prisma.PrismaPromise<GetAlbumShareAggregateType<T>>

    /**
     * Group by AlbumShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumShareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumShareGroupByArgs['orderBy'] }
        : { orderBy?: AlbumShareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlbumShare model
   */
  readonly fields: AlbumShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invited_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invited_user<T extends AlbumShare$invited_userArgs<ExtArgs> = {}>(args?: Subset<T, AlbumShare$invited_userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlbumShare model
   */
  interface AlbumShareFieldRefs {
    readonly id: FieldRef<"AlbumShare", 'String'>
    readonly album_id: FieldRef<"AlbumShare", 'String'>
    readonly invited_by_user_id: FieldRef<"AlbumShare", 'String'>
    readonly invited_email: FieldRef<"AlbumShare", 'String'>
    readonly invited_user_id: FieldRef<"AlbumShare", 'String'>
    readonly role: FieldRef<"AlbumShare", 'String'>
    readonly invitation_token: FieldRef<"AlbumShare", 'String'>
    readonly status: FieldRef<"AlbumShare", 'String'>
    readonly expires_at: FieldRef<"AlbumShare", 'DateTime'>
    readonly invited_at: FieldRef<"AlbumShare", 'DateTime'>
    readonly updated_at: FieldRef<"AlbumShare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlbumShare findUnique
   */
  export type AlbumShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    /**
     * Filter, which AlbumShare to fetch.
     */
    where: AlbumShareWhereUniqueInput
  }

  /**
   * AlbumShare findUniqueOrThrow
   */
  export type AlbumShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    /**
     * Filter, which AlbumShare to fetch.
     */
    where: AlbumShareWhereUniqueInput
  }

  /**
   * AlbumShare findFirst
   */
  export type AlbumShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    /**
     * Filter, which AlbumShare to fetch.
     */
    where?: AlbumShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumShares to fetch.
     */
    orderBy?: AlbumShareOrderByWithRelationInput | AlbumShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumShares.
     */
    cursor?: AlbumShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumShares.
     */
    distinct?: AlbumShareScalarFieldEnum | AlbumShareScalarFieldEnum[]
  }

  /**
   * AlbumShare findFirstOrThrow
   */
  export type AlbumShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    /**
     * Filter, which AlbumShare to fetch.
     */
    where?: AlbumShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumShares to fetch.
     */
    orderBy?: AlbumShareOrderByWithRelationInput | AlbumShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumShares.
     */
    cursor?: AlbumShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumShares.
     */
    distinct?: AlbumShareScalarFieldEnum | AlbumShareScalarFieldEnum[]
  }

  /**
   * AlbumShare findMany
   */
  export type AlbumShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    /**
     * Filter, which AlbumShares to fetch.
     */
    where?: AlbumShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumShares to fetch.
     */
    orderBy?: AlbumShareOrderByWithRelationInput | AlbumShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlbumShares.
     */
    cursor?: AlbumShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumShares.
     */
    skip?: number
    distinct?: AlbumShareScalarFieldEnum | AlbumShareScalarFieldEnum[]
  }

  /**
   * AlbumShare create
   */
  export type AlbumShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    /**
     * The data needed to create a AlbumShare.
     */
    data: XOR<AlbumShareCreateInput, AlbumShareUncheckedCreateInput>
  }

  /**
   * AlbumShare createMany
   */
  export type AlbumShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlbumShares.
     */
    data: AlbumShareCreateManyInput | AlbumShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlbumShare createManyAndReturn
   */
  export type AlbumShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * The data used to create many AlbumShares.
     */
    data: AlbumShareCreateManyInput | AlbumShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumShare update
   */
  export type AlbumShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    /**
     * The data needed to update a AlbumShare.
     */
    data: XOR<AlbumShareUpdateInput, AlbumShareUncheckedUpdateInput>
    /**
     * Choose, which AlbumShare to update.
     */
    where: AlbumShareWhereUniqueInput
  }

  /**
   * AlbumShare updateMany
   */
  export type AlbumShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlbumShares.
     */
    data: XOR<AlbumShareUpdateManyMutationInput, AlbumShareUncheckedUpdateManyInput>
    /**
     * Filter which AlbumShares to update
     */
    where?: AlbumShareWhereInput
    /**
     * Limit how many AlbumShares to update.
     */
    limit?: number
  }

  /**
   * AlbumShare updateManyAndReturn
   */
  export type AlbumShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * The data used to update AlbumShares.
     */
    data: XOR<AlbumShareUpdateManyMutationInput, AlbumShareUncheckedUpdateManyInput>
    /**
     * Filter which AlbumShares to update
     */
    where?: AlbumShareWhereInput
    /**
     * Limit how many AlbumShares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumShare upsert
   */
  export type AlbumShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    /**
     * The filter to search for the AlbumShare to update in case it exists.
     */
    where: AlbumShareWhereUniqueInput
    /**
     * In case the AlbumShare found by the `where` argument doesn't exist, create a new AlbumShare with this data.
     */
    create: XOR<AlbumShareCreateInput, AlbumShareUncheckedCreateInput>
    /**
     * In case the AlbumShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumShareUpdateInput, AlbumShareUncheckedUpdateInput>
  }

  /**
   * AlbumShare delete
   */
  export type AlbumShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
    /**
     * Filter which AlbumShare to delete.
     */
    where: AlbumShareWhereUniqueInput
  }

  /**
   * AlbumShare deleteMany
   */
  export type AlbumShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumShares to delete
     */
    where?: AlbumShareWhereInput
    /**
     * Limit how many AlbumShares to delete.
     */
    limit?: number
  }

  /**
   * AlbumShare.invited_user
   */
  export type AlbumShare$invited_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AlbumShare without action
   */
  export type AlbumShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumShare
     */
    select?: AlbumShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumShare
     */
    omit?: AlbumShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumShareInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parent_album_id: 'parent_album_id',
    owner_user_id: 'owner_user_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const AlbumMemberScalarFieldEnum: {
    id: 'id',
    album_id: 'album_id',
    user_id: 'user_id',
    role: 'role'
  };

  export type AlbumMemberScalarFieldEnum = (typeof AlbumMemberScalarFieldEnum)[keyof typeof AlbumMemberScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    album_id: 'album_id',
    s3_key: 's3_key',
    name: 'name',
    meta: 'meta',
    uploaded_by_user_id: 'uploaded_by_user_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_deleted: 'is_deleted'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const AlbumShareScalarFieldEnum: {
    id: 'id',
    album_id: 'album_id',
    invited_by_user_id: 'invited_by_user_id',
    invited_email: 'invited_email',
    invited_user_id: 'invited_user_id',
    role: 'role',
    invitation_token: 'invitation_token',
    status: 'status',
    expires_at: 'expires_at',
    invited_at: 'invited_at',
    updated_at: 'updated_at'
  };

  export type AlbumShareScalarFieldEnum = (typeof AlbumShareScalarFieldEnum)[keyof typeof AlbumShareScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    albums?: AlbumListRelationFilter
    photos?: PhotoListRelationFilter
    albumMembers?: AlbumMemberListRelationFilter
    sentShares?: AlbumShareListRelationFilter
    receivedShares?: AlbumShareListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    albums?: AlbumOrderByRelationAggregateInput
    photos?: PhotoOrderByRelationAggregateInput
    albumMembers?: AlbumMemberOrderByRelationAggregateInput
    sentShares?: AlbumShareOrderByRelationAggregateInput
    receivedShares?: AlbumShareOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    albums?: AlbumListRelationFilter
    photos?: PhotoListRelationFilter
    albumMembers?: AlbumMemberListRelationFilter
    sentShares?: AlbumShareListRelationFilter
    receivedShares?: AlbumShareListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: StringFilter<"Album"> | string
    name?: StringFilter<"Album"> | string
    parent_album_id?: StringNullableFilter<"Album"> | string | null
    owner_user_id?: StringFilter<"Album"> | string
    created_at?: DateTimeFilter<"Album"> | Date | string
    updated_at?: DateTimeFilter<"Album"> | Date | string
    is_deleted?: BoolFilter<"Album"> | boolean
    parent_album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
    sub_albums?: AlbumListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    photos?: PhotoListRelationFilter
    albumMembers?: AlbumMemberListRelationFilter
    albumShares?: AlbumShareListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parent_album_id?: SortOrderInput | SortOrder
    owner_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    parent_album?: AlbumOrderByWithRelationInput
    sub_albums?: AlbumOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    photos?: PhotoOrderByRelationAggregateInput
    albumMembers?: AlbumMemberOrderByRelationAggregateInput
    albumShares?: AlbumShareOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    name?: StringFilter<"Album"> | string
    parent_album_id?: StringNullableFilter<"Album"> | string | null
    owner_user_id?: StringFilter<"Album"> | string
    created_at?: DateTimeFilter<"Album"> | Date | string
    updated_at?: DateTimeFilter<"Album"> | Date | string
    is_deleted?: BoolFilter<"Album"> | boolean
    parent_album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
    sub_albums?: AlbumListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    photos?: PhotoListRelationFilter
    albumMembers?: AlbumMemberListRelationFilter
    albumShares?: AlbumShareListRelationFilter
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parent_album_id?: SortOrderInput | SortOrder
    owner_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Album"> | string
    name?: StringWithAggregatesFilter<"Album"> | string
    parent_album_id?: StringNullableWithAggregatesFilter<"Album"> | string | null
    owner_user_id?: StringWithAggregatesFilter<"Album"> | string
    created_at?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"Album"> | boolean
  }

  export type AlbumMemberWhereInput = {
    AND?: AlbumMemberWhereInput | AlbumMemberWhereInput[]
    OR?: AlbumMemberWhereInput[]
    NOT?: AlbumMemberWhereInput | AlbumMemberWhereInput[]
    id?: StringFilter<"AlbumMember"> | string
    album_id?: StringFilter<"AlbumMember"> | string
    user_id?: StringFilter<"AlbumMember"> | string
    role?: StringFilter<"AlbumMember"> | string
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AlbumMemberOrderByWithRelationInput = {
    id?: SortOrder
    album_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    album?: AlbumOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AlbumMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    album_id_user_id?: AlbumMemberAlbum_idUser_idCompoundUniqueInput
    AND?: AlbumMemberWhereInput | AlbumMemberWhereInput[]
    OR?: AlbumMemberWhereInput[]
    NOT?: AlbumMemberWhereInput | AlbumMemberWhereInput[]
    album_id?: StringFilter<"AlbumMember"> | string
    user_id?: StringFilter<"AlbumMember"> | string
    role?: StringFilter<"AlbumMember"> | string
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "album_id_user_id">

  export type AlbumMemberOrderByWithAggregationInput = {
    id?: SortOrder
    album_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    _count?: AlbumMemberCountOrderByAggregateInput
    _max?: AlbumMemberMaxOrderByAggregateInput
    _min?: AlbumMemberMinOrderByAggregateInput
  }

  export type AlbumMemberScalarWhereWithAggregatesInput = {
    AND?: AlbumMemberScalarWhereWithAggregatesInput | AlbumMemberScalarWhereWithAggregatesInput[]
    OR?: AlbumMemberScalarWhereWithAggregatesInput[]
    NOT?: AlbumMemberScalarWhereWithAggregatesInput | AlbumMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlbumMember"> | string
    album_id?: StringWithAggregatesFilter<"AlbumMember"> | string
    user_id?: StringWithAggregatesFilter<"AlbumMember"> | string
    role?: StringWithAggregatesFilter<"AlbumMember"> | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: StringFilter<"Photo"> | string
    album_id?: StringFilter<"Photo"> | string
    s3_key?: StringFilter<"Photo"> | string
    name?: StringFilter<"Photo"> | string
    meta?: StringNullableFilter<"Photo"> | string | null
    uploaded_by_user_id?: StringFilter<"Photo"> | string
    created_at?: DateTimeFilter<"Photo"> | Date | string
    updated_at?: DateTimeFilter<"Photo"> | Date | string
    is_deleted?: BoolFilter<"Photo"> | boolean
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    album_id?: SortOrder
    s3_key?: SortOrder
    name?: SortOrder
    meta?: SortOrderInput | SortOrder
    uploaded_by_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    album?: AlbumOrderByWithRelationInput
    uploader?: UserOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    s3_key?: string
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    album_id?: StringFilter<"Photo"> | string
    name?: StringFilter<"Photo"> | string
    meta?: StringNullableFilter<"Photo"> | string | null
    uploaded_by_user_id?: StringFilter<"Photo"> | string
    created_at?: DateTimeFilter<"Photo"> | Date | string
    updated_at?: DateTimeFilter<"Photo"> | Date | string
    is_deleted?: BoolFilter<"Photo"> | boolean
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "s3_key">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    album_id?: SortOrder
    s3_key?: SortOrder
    name?: SortOrder
    meta?: SortOrderInput | SortOrder
    uploaded_by_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photo"> | string
    album_id?: StringWithAggregatesFilter<"Photo"> | string
    s3_key?: StringWithAggregatesFilter<"Photo"> | string
    name?: StringWithAggregatesFilter<"Photo"> | string
    meta?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    uploaded_by_user_id?: StringWithAggregatesFilter<"Photo"> | string
    created_at?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
    is_deleted?: BoolWithAggregatesFilter<"Photo"> | boolean
  }

  export type AlbumShareWhereInput = {
    AND?: AlbumShareWhereInput | AlbumShareWhereInput[]
    OR?: AlbumShareWhereInput[]
    NOT?: AlbumShareWhereInput | AlbumShareWhereInput[]
    id?: StringFilter<"AlbumShare"> | string
    album_id?: StringFilter<"AlbumShare"> | string
    invited_by_user_id?: StringFilter<"AlbumShare"> | string
    invited_email?: StringFilter<"AlbumShare"> | string
    invited_user_id?: StringNullableFilter<"AlbumShare"> | string | null
    role?: StringFilter<"AlbumShare"> | string
    invitation_token?: StringFilter<"AlbumShare"> | string
    status?: StringFilter<"AlbumShare"> | string
    expires_at?: DateTimeFilter<"AlbumShare"> | Date | string
    invited_at?: DateTimeFilter<"AlbumShare"> | Date | string
    updated_at?: DateTimeFilter<"AlbumShare"> | Date | string
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    invited_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invited_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AlbumShareOrderByWithRelationInput = {
    id?: SortOrder
    album_id?: SortOrder
    invited_by_user_id?: SortOrder
    invited_email?: SortOrder
    invited_user_id?: SortOrderInput | SortOrder
    role?: SortOrder
    invitation_token?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    invited_at?: SortOrder
    updated_at?: SortOrder
    album?: AlbumOrderByWithRelationInput
    invited_by_user?: UserOrderByWithRelationInput
    invited_user?: UserOrderByWithRelationInput
  }

  export type AlbumShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invitation_token?: string
    AND?: AlbumShareWhereInput | AlbumShareWhereInput[]
    OR?: AlbumShareWhereInput[]
    NOT?: AlbumShareWhereInput | AlbumShareWhereInput[]
    album_id?: StringFilter<"AlbumShare"> | string
    invited_by_user_id?: StringFilter<"AlbumShare"> | string
    invited_email?: StringFilter<"AlbumShare"> | string
    invited_user_id?: StringNullableFilter<"AlbumShare"> | string | null
    role?: StringFilter<"AlbumShare"> | string
    status?: StringFilter<"AlbumShare"> | string
    expires_at?: DateTimeFilter<"AlbumShare"> | Date | string
    invited_at?: DateTimeFilter<"AlbumShare"> | Date | string
    updated_at?: DateTimeFilter<"AlbumShare"> | Date | string
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    invited_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invited_user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "invitation_token">

  export type AlbumShareOrderByWithAggregationInput = {
    id?: SortOrder
    album_id?: SortOrder
    invited_by_user_id?: SortOrder
    invited_email?: SortOrder
    invited_user_id?: SortOrderInput | SortOrder
    role?: SortOrder
    invitation_token?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    invited_at?: SortOrder
    updated_at?: SortOrder
    _count?: AlbumShareCountOrderByAggregateInput
    _max?: AlbumShareMaxOrderByAggregateInput
    _min?: AlbumShareMinOrderByAggregateInput
  }

  export type AlbumShareScalarWhereWithAggregatesInput = {
    AND?: AlbumShareScalarWhereWithAggregatesInput | AlbumShareScalarWhereWithAggregatesInput[]
    OR?: AlbumShareScalarWhereWithAggregatesInput[]
    NOT?: AlbumShareScalarWhereWithAggregatesInput | AlbumShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlbumShare"> | string
    album_id?: StringWithAggregatesFilter<"AlbumShare"> | string
    invited_by_user_id?: StringWithAggregatesFilter<"AlbumShare"> | string
    invited_email?: StringWithAggregatesFilter<"AlbumShare"> | string
    invited_user_id?: StringNullableWithAggregatesFilter<"AlbumShare"> | string | null
    role?: StringWithAggregatesFilter<"AlbumShare"> | string
    invitation_token?: StringWithAggregatesFilter<"AlbumShare"> | string
    status?: StringWithAggregatesFilter<"AlbumShare"> | string
    expires_at?: DateTimeWithAggregatesFilter<"AlbumShare"> | Date | string
    invited_at?: DateTimeWithAggregatesFilter<"AlbumShare"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AlbumShare"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name?: string | null
    email: string
    albums?: AlbumCreateNestedManyWithoutOwnerInput
    photos?: PhotoCreateNestedManyWithoutUploaderInput
    albumMembers?: AlbumMemberCreateNestedManyWithoutUserInput
    sentShares?: AlbumShareCreateNestedManyWithoutInvited_by_userInput
    receivedShares?: AlbumShareCreateNestedManyWithoutInvited_userInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name?: string | null
    email: string
    albums?: AlbumUncheckedCreateNestedManyWithoutOwnerInput
    photos?: PhotoUncheckedCreateNestedManyWithoutUploaderInput
    albumMembers?: AlbumMemberUncheckedCreateNestedManyWithoutUserInput
    sentShares?: AlbumShareUncheckedCreateNestedManyWithoutInvited_by_userInput
    receivedShares?: AlbumShareUncheckedCreateNestedManyWithoutInvited_userInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    albums?: AlbumUpdateManyWithoutOwnerNestedInput
    photos?: PhotoUpdateManyWithoutUploaderNestedInput
    albumMembers?: AlbumMemberUpdateManyWithoutUserNestedInput
    sentShares?: AlbumShareUpdateManyWithoutInvited_by_userNestedInput
    receivedShares?: AlbumShareUpdateManyWithoutInvited_userNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    albums?: AlbumUncheckedUpdateManyWithoutOwnerNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutUploaderNestedInput
    albumMembers?: AlbumMemberUncheckedUpdateManyWithoutUserNestedInput
    sentShares?: AlbumShareUncheckedUpdateManyWithoutInvited_by_userNestedInput
    receivedShares?: AlbumShareUncheckedUpdateManyWithoutInvited_userNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name?: string | null
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    parent_album?: AlbumCreateNestedOneWithoutSub_albumsInput
    sub_albums?: AlbumCreateNestedManyWithoutParent_albumInput
    owner: UserCreateNestedOneWithoutAlbumsInput
    photos?: PhotoCreateNestedManyWithoutAlbumInput
    albumMembers?: AlbumMemberCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: string
    name: string
    parent_album_id?: string | null
    owner_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    sub_albums?: AlbumUncheckedCreateNestedManyWithoutParent_albumInput
    photos?: PhotoUncheckedCreateNestedManyWithoutAlbumInput
    albumMembers?: AlbumMemberUncheckedCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    parent_album?: AlbumUpdateOneWithoutSub_albumsNestedInput
    sub_albums?: AlbumUpdateManyWithoutParent_albumNestedInput
    owner?: UserUpdateOneRequiredWithoutAlbumsNestedInput
    photos?: PhotoUpdateManyWithoutAlbumNestedInput
    albumMembers?: AlbumMemberUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_album_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    sub_albums?: AlbumUncheckedUpdateManyWithoutParent_albumNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutAlbumNestedInput
    albumMembers?: AlbumMemberUncheckedUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: string
    name: string
    parent_album_id?: string | null
    owner_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type AlbumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_album_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlbumMemberCreateInput = {
    id?: string
    role: string
    album: AlbumCreateNestedOneWithoutAlbumMembersInput
    user: UserCreateNestedOneWithoutAlbumMembersInput
  }

  export type AlbumMemberUncheckedCreateInput = {
    id?: string
    album_id: string
    user_id: string
    role: string
  }

  export type AlbumMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    album?: AlbumUpdateOneRequiredWithoutAlbumMembersNestedInput
    user?: UserUpdateOneRequiredWithoutAlbumMembersNestedInput
  }

  export type AlbumMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumMemberCreateManyInput = {
    id?: string
    album_id: string
    user_id: string
    role: string
  }

  export type AlbumMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoCreateInput = {
    id?: string
    s3_key: string
    name: string
    meta?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    album: AlbumCreateNestedOneWithoutPhotosInput
    uploader: UserCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: string
    album_id: string
    s3_key: string
    name: string
    meta?: string | null
    uploaded_by_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    album?: AlbumUpdateOneRequiredWithoutPhotosNestedInput
    uploader?: UserUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    s3_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_by_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoCreateManyInput = {
    id?: string
    album_id: string
    s3_key: string
    name: string
    meta?: string | null
    uploaded_by_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    s3_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_by_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlbumShareCreateInput = {
    id?: string
    invited_email: string
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
    album: AlbumCreateNestedOneWithoutAlbumSharesInput
    invited_by_user: UserCreateNestedOneWithoutSentSharesInput
    invited_user?: UserCreateNestedOneWithoutReceivedSharesInput
  }

  export type AlbumShareUncheckedCreateInput = {
    id?: string
    album_id: string
    invited_by_user_id: string
    invited_email: string
    invited_user_id?: string | null
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
  }

  export type AlbumShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutAlbumSharesNestedInput
    invited_by_user?: UserUpdateOneRequiredWithoutSentSharesNestedInput
    invited_user?: UserUpdateOneWithoutReceivedSharesNestedInput
  }

  export type AlbumShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    invited_by_user_id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    invited_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumShareCreateManyInput = {
    id?: string
    album_id: string
    invited_by_user_id: string
    invited_email: string
    invited_user_id?: string | null
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
  }

  export type AlbumShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    invited_by_user_id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    invited_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type AlbumMemberListRelationFilter = {
    every?: AlbumMemberWhereInput
    some?: AlbumMemberWhereInput
    none?: AlbumMemberWhereInput
  }

  export type AlbumShareListRelationFilter = {
    every?: AlbumShareWhereInput
    some?: AlbumShareWhereInput
    none?: AlbumShareWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AlbumNullableScalarRelationFilter = {
    is?: AlbumWhereInput | null
    isNot?: AlbumWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_album_id?: SortOrder
    owner_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_album_id?: SortOrder
    owner_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_album_id?: SortOrder
    owner_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AlbumScalarRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type AlbumMemberAlbum_idUser_idCompoundUniqueInput = {
    album_id: string
    user_id: string
  }

  export type AlbumMemberCountOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type AlbumMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type AlbumMemberMinOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    s3_key?: SortOrder
    name?: SortOrder
    meta?: SortOrder
    uploaded_by_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    s3_key?: SortOrder
    name?: SortOrder
    meta?: SortOrder
    uploaded_by_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    s3_key?: SortOrder
    name?: SortOrder
    meta?: SortOrder
    uploaded_by_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AlbumShareCountOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    invited_by_user_id?: SortOrder
    invited_email?: SortOrder
    invited_user_id?: SortOrder
    role?: SortOrder
    invitation_token?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    invited_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AlbumShareMaxOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    invited_by_user_id?: SortOrder
    invited_email?: SortOrder
    invited_user_id?: SortOrder
    role?: SortOrder
    invitation_token?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    invited_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AlbumShareMinOrderByAggregateInput = {
    id?: SortOrder
    album_id?: SortOrder
    invited_by_user_id?: SortOrder
    invited_email?: SortOrder
    invited_user_id?: SortOrder
    role?: SortOrder
    invitation_token?: SortOrder
    status?: SortOrder
    expires_at?: SortOrder
    invited_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AlbumCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AlbumCreateWithoutOwnerInput, AlbumUncheckedCreateWithoutOwnerInput> | AlbumCreateWithoutOwnerInput[] | AlbumUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutOwnerInput | AlbumCreateOrConnectWithoutOwnerInput[]
    createMany?: AlbumCreateManyOwnerInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type PhotoCreateNestedManyWithoutUploaderInput = {
    create?: XOR<PhotoCreateWithoutUploaderInput, PhotoUncheckedCreateWithoutUploaderInput> | PhotoCreateWithoutUploaderInput[] | PhotoUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUploaderInput | PhotoCreateOrConnectWithoutUploaderInput[]
    createMany?: PhotoCreateManyUploaderInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type AlbumMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<AlbumMemberCreateWithoutUserInput, AlbumMemberUncheckedCreateWithoutUserInput> | AlbumMemberCreateWithoutUserInput[] | AlbumMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumMemberCreateOrConnectWithoutUserInput | AlbumMemberCreateOrConnectWithoutUserInput[]
    createMany?: AlbumMemberCreateManyUserInputEnvelope
    connect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
  }

  export type AlbumShareCreateNestedManyWithoutInvited_by_userInput = {
    create?: XOR<AlbumShareCreateWithoutInvited_by_userInput, AlbumShareUncheckedCreateWithoutInvited_by_userInput> | AlbumShareCreateWithoutInvited_by_userInput[] | AlbumShareUncheckedCreateWithoutInvited_by_userInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutInvited_by_userInput | AlbumShareCreateOrConnectWithoutInvited_by_userInput[]
    createMany?: AlbumShareCreateManyInvited_by_userInputEnvelope
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
  }

  export type AlbumShareCreateNestedManyWithoutInvited_userInput = {
    create?: XOR<AlbumShareCreateWithoutInvited_userInput, AlbumShareUncheckedCreateWithoutInvited_userInput> | AlbumShareCreateWithoutInvited_userInput[] | AlbumShareUncheckedCreateWithoutInvited_userInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutInvited_userInput | AlbumShareCreateOrConnectWithoutInvited_userInput[]
    createMany?: AlbumShareCreateManyInvited_userInputEnvelope
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AlbumCreateWithoutOwnerInput, AlbumUncheckedCreateWithoutOwnerInput> | AlbumCreateWithoutOwnerInput[] | AlbumUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutOwnerInput | AlbumCreateOrConnectWithoutOwnerInput[]
    createMany?: AlbumCreateManyOwnerInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<PhotoCreateWithoutUploaderInput, PhotoUncheckedCreateWithoutUploaderInput> | PhotoCreateWithoutUploaderInput[] | PhotoUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUploaderInput | PhotoCreateOrConnectWithoutUploaderInput[]
    createMany?: PhotoCreateManyUploaderInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type AlbumMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlbumMemberCreateWithoutUserInput, AlbumMemberUncheckedCreateWithoutUserInput> | AlbumMemberCreateWithoutUserInput[] | AlbumMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumMemberCreateOrConnectWithoutUserInput | AlbumMemberCreateOrConnectWithoutUserInput[]
    createMany?: AlbumMemberCreateManyUserInputEnvelope
    connect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
  }

  export type AlbumShareUncheckedCreateNestedManyWithoutInvited_by_userInput = {
    create?: XOR<AlbumShareCreateWithoutInvited_by_userInput, AlbumShareUncheckedCreateWithoutInvited_by_userInput> | AlbumShareCreateWithoutInvited_by_userInput[] | AlbumShareUncheckedCreateWithoutInvited_by_userInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutInvited_by_userInput | AlbumShareCreateOrConnectWithoutInvited_by_userInput[]
    createMany?: AlbumShareCreateManyInvited_by_userInputEnvelope
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
  }

  export type AlbumShareUncheckedCreateNestedManyWithoutInvited_userInput = {
    create?: XOR<AlbumShareCreateWithoutInvited_userInput, AlbumShareUncheckedCreateWithoutInvited_userInput> | AlbumShareCreateWithoutInvited_userInput[] | AlbumShareUncheckedCreateWithoutInvited_userInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutInvited_userInput | AlbumShareCreateOrConnectWithoutInvited_userInput[]
    createMany?: AlbumShareCreateManyInvited_userInputEnvelope
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AlbumUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AlbumCreateWithoutOwnerInput, AlbumUncheckedCreateWithoutOwnerInput> | AlbumCreateWithoutOwnerInput[] | AlbumUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutOwnerInput | AlbumCreateOrConnectWithoutOwnerInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutOwnerInput | AlbumUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AlbumCreateManyOwnerInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutOwnerInput | AlbumUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutOwnerInput | AlbumUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type PhotoUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<PhotoCreateWithoutUploaderInput, PhotoUncheckedCreateWithoutUploaderInput> | PhotoCreateWithoutUploaderInput[] | PhotoUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUploaderInput | PhotoCreateOrConnectWithoutUploaderInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutUploaderInput | PhotoUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: PhotoCreateManyUploaderInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutUploaderInput | PhotoUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutUploaderInput | PhotoUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type AlbumMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlbumMemberCreateWithoutUserInput, AlbumMemberUncheckedCreateWithoutUserInput> | AlbumMemberCreateWithoutUserInput[] | AlbumMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumMemberCreateOrConnectWithoutUserInput | AlbumMemberCreateOrConnectWithoutUserInput[]
    upsert?: AlbumMemberUpsertWithWhereUniqueWithoutUserInput | AlbumMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlbumMemberCreateManyUserInputEnvelope
    set?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    disconnect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    delete?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    connect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    update?: AlbumMemberUpdateWithWhereUniqueWithoutUserInput | AlbumMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlbumMemberUpdateManyWithWhereWithoutUserInput | AlbumMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlbumMemberScalarWhereInput | AlbumMemberScalarWhereInput[]
  }

  export type AlbumShareUpdateManyWithoutInvited_by_userNestedInput = {
    create?: XOR<AlbumShareCreateWithoutInvited_by_userInput, AlbumShareUncheckedCreateWithoutInvited_by_userInput> | AlbumShareCreateWithoutInvited_by_userInput[] | AlbumShareUncheckedCreateWithoutInvited_by_userInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutInvited_by_userInput | AlbumShareCreateOrConnectWithoutInvited_by_userInput[]
    upsert?: AlbumShareUpsertWithWhereUniqueWithoutInvited_by_userInput | AlbumShareUpsertWithWhereUniqueWithoutInvited_by_userInput[]
    createMany?: AlbumShareCreateManyInvited_by_userInputEnvelope
    set?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    disconnect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    delete?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    update?: AlbumShareUpdateWithWhereUniqueWithoutInvited_by_userInput | AlbumShareUpdateWithWhereUniqueWithoutInvited_by_userInput[]
    updateMany?: AlbumShareUpdateManyWithWhereWithoutInvited_by_userInput | AlbumShareUpdateManyWithWhereWithoutInvited_by_userInput[]
    deleteMany?: AlbumShareScalarWhereInput | AlbumShareScalarWhereInput[]
  }

  export type AlbumShareUpdateManyWithoutInvited_userNestedInput = {
    create?: XOR<AlbumShareCreateWithoutInvited_userInput, AlbumShareUncheckedCreateWithoutInvited_userInput> | AlbumShareCreateWithoutInvited_userInput[] | AlbumShareUncheckedCreateWithoutInvited_userInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutInvited_userInput | AlbumShareCreateOrConnectWithoutInvited_userInput[]
    upsert?: AlbumShareUpsertWithWhereUniqueWithoutInvited_userInput | AlbumShareUpsertWithWhereUniqueWithoutInvited_userInput[]
    createMany?: AlbumShareCreateManyInvited_userInputEnvelope
    set?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    disconnect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    delete?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    update?: AlbumShareUpdateWithWhereUniqueWithoutInvited_userInput | AlbumShareUpdateWithWhereUniqueWithoutInvited_userInput[]
    updateMany?: AlbumShareUpdateManyWithWhereWithoutInvited_userInput | AlbumShareUpdateManyWithWhereWithoutInvited_userInput[]
    deleteMany?: AlbumShareScalarWhereInput | AlbumShareScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AlbumCreateWithoutOwnerInput, AlbumUncheckedCreateWithoutOwnerInput> | AlbumCreateWithoutOwnerInput[] | AlbumUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutOwnerInput | AlbumCreateOrConnectWithoutOwnerInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutOwnerInput | AlbumUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AlbumCreateManyOwnerInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutOwnerInput | AlbumUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutOwnerInput | AlbumUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<PhotoCreateWithoutUploaderInput, PhotoUncheckedCreateWithoutUploaderInput> | PhotoCreateWithoutUploaderInput[] | PhotoUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutUploaderInput | PhotoCreateOrConnectWithoutUploaderInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutUploaderInput | PhotoUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: PhotoCreateManyUploaderInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutUploaderInput | PhotoUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutUploaderInput | PhotoUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type AlbumMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlbumMemberCreateWithoutUserInput, AlbumMemberUncheckedCreateWithoutUserInput> | AlbumMemberCreateWithoutUserInput[] | AlbumMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumMemberCreateOrConnectWithoutUserInput | AlbumMemberCreateOrConnectWithoutUserInput[]
    upsert?: AlbumMemberUpsertWithWhereUniqueWithoutUserInput | AlbumMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlbumMemberCreateManyUserInputEnvelope
    set?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    disconnect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    delete?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    connect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    update?: AlbumMemberUpdateWithWhereUniqueWithoutUserInput | AlbumMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlbumMemberUpdateManyWithWhereWithoutUserInput | AlbumMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlbumMemberScalarWhereInput | AlbumMemberScalarWhereInput[]
  }

  export type AlbumShareUncheckedUpdateManyWithoutInvited_by_userNestedInput = {
    create?: XOR<AlbumShareCreateWithoutInvited_by_userInput, AlbumShareUncheckedCreateWithoutInvited_by_userInput> | AlbumShareCreateWithoutInvited_by_userInput[] | AlbumShareUncheckedCreateWithoutInvited_by_userInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutInvited_by_userInput | AlbumShareCreateOrConnectWithoutInvited_by_userInput[]
    upsert?: AlbumShareUpsertWithWhereUniqueWithoutInvited_by_userInput | AlbumShareUpsertWithWhereUniqueWithoutInvited_by_userInput[]
    createMany?: AlbumShareCreateManyInvited_by_userInputEnvelope
    set?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    disconnect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    delete?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    update?: AlbumShareUpdateWithWhereUniqueWithoutInvited_by_userInput | AlbumShareUpdateWithWhereUniqueWithoutInvited_by_userInput[]
    updateMany?: AlbumShareUpdateManyWithWhereWithoutInvited_by_userInput | AlbumShareUpdateManyWithWhereWithoutInvited_by_userInput[]
    deleteMany?: AlbumShareScalarWhereInput | AlbumShareScalarWhereInput[]
  }

  export type AlbumShareUncheckedUpdateManyWithoutInvited_userNestedInput = {
    create?: XOR<AlbumShareCreateWithoutInvited_userInput, AlbumShareUncheckedCreateWithoutInvited_userInput> | AlbumShareCreateWithoutInvited_userInput[] | AlbumShareUncheckedCreateWithoutInvited_userInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutInvited_userInput | AlbumShareCreateOrConnectWithoutInvited_userInput[]
    upsert?: AlbumShareUpsertWithWhereUniqueWithoutInvited_userInput | AlbumShareUpsertWithWhereUniqueWithoutInvited_userInput[]
    createMany?: AlbumShareCreateManyInvited_userInputEnvelope
    set?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    disconnect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    delete?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    update?: AlbumShareUpdateWithWhereUniqueWithoutInvited_userInput | AlbumShareUpdateWithWhereUniqueWithoutInvited_userInput[]
    updateMany?: AlbumShareUpdateManyWithWhereWithoutInvited_userInput | AlbumShareUpdateManyWithWhereWithoutInvited_userInput[]
    deleteMany?: AlbumShareScalarWhereInput | AlbumShareScalarWhereInput[]
  }

  export type AlbumCreateNestedOneWithoutSub_albumsInput = {
    create?: XOR<AlbumCreateWithoutSub_albumsInput, AlbumUncheckedCreateWithoutSub_albumsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutSub_albumsInput
    connect?: AlbumWhereUniqueInput
  }

  export type AlbumCreateNestedManyWithoutParent_albumInput = {
    create?: XOR<AlbumCreateWithoutParent_albumInput, AlbumUncheckedCreateWithoutParent_albumInput> | AlbumCreateWithoutParent_albumInput[] | AlbumUncheckedCreateWithoutParent_albumInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutParent_albumInput | AlbumCreateOrConnectWithoutParent_albumInput[]
    createMany?: AlbumCreateManyParent_albumInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type PhotoCreateNestedManyWithoutAlbumInput = {
    create?: XOR<PhotoCreateWithoutAlbumInput, PhotoUncheckedCreateWithoutAlbumInput> | PhotoCreateWithoutAlbumInput[] | PhotoUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAlbumInput | PhotoCreateOrConnectWithoutAlbumInput[]
    createMany?: PhotoCreateManyAlbumInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type AlbumMemberCreateNestedManyWithoutAlbumInput = {
    create?: XOR<AlbumMemberCreateWithoutAlbumInput, AlbumMemberUncheckedCreateWithoutAlbumInput> | AlbumMemberCreateWithoutAlbumInput[] | AlbumMemberUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumMemberCreateOrConnectWithoutAlbumInput | AlbumMemberCreateOrConnectWithoutAlbumInput[]
    createMany?: AlbumMemberCreateManyAlbumInputEnvelope
    connect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
  }

  export type AlbumShareCreateNestedManyWithoutAlbumInput = {
    create?: XOR<AlbumShareCreateWithoutAlbumInput, AlbumShareUncheckedCreateWithoutAlbumInput> | AlbumShareCreateWithoutAlbumInput[] | AlbumShareUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutAlbumInput | AlbumShareCreateOrConnectWithoutAlbumInput[]
    createMany?: AlbumShareCreateManyAlbumInputEnvelope
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutParent_albumInput = {
    create?: XOR<AlbumCreateWithoutParent_albumInput, AlbumUncheckedCreateWithoutParent_albumInput> | AlbumCreateWithoutParent_albumInput[] | AlbumUncheckedCreateWithoutParent_albumInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutParent_albumInput | AlbumCreateOrConnectWithoutParent_albumInput[]
    createMany?: AlbumCreateManyParent_albumInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<PhotoCreateWithoutAlbumInput, PhotoUncheckedCreateWithoutAlbumInput> | PhotoCreateWithoutAlbumInput[] | PhotoUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAlbumInput | PhotoCreateOrConnectWithoutAlbumInput[]
    createMany?: PhotoCreateManyAlbumInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type AlbumMemberUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<AlbumMemberCreateWithoutAlbumInput, AlbumMemberUncheckedCreateWithoutAlbumInput> | AlbumMemberCreateWithoutAlbumInput[] | AlbumMemberUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumMemberCreateOrConnectWithoutAlbumInput | AlbumMemberCreateOrConnectWithoutAlbumInput[]
    createMany?: AlbumMemberCreateManyAlbumInputEnvelope
    connect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
  }

  export type AlbumShareUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<AlbumShareCreateWithoutAlbumInput, AlbumShareUncheckedCreateWithoutAlbumInput> | AlbumShareCreateWithoutAlbumInput[] | AlbumShareUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutAlbumInput | AlbumShareCreateOrConnectWithoutAlbumInput[]
    createMany?: AlbumShareCreateManyAlbumInputEnvelope
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AlbumUpdateOneWithoutSub_albumsNestedInput = {
    create?: XOR<AlbumCreateWithoutSub_albumsInput, AlbumUncheckedCreateWithoutSub_albumsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutSub_albumsInput
    upsert?: AlbumUpsertWithoutSub_albumsInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutSub_albumsInput, AlbumUpdateWithoutSub_albumsInput>, AlbumUncheckedUpdateWithoutSub_albumsInput>
  }

  export type AlbumUpdateManyWithoutParent_albumNestedInput = {
    create?: XOR<AlbumCreateWithoutParent_albumInput, AlbumUncheckedCreateWithoutParent_albumInput> | AlbumCreateWithoutParent_albumInput[] | AlbumUncheckedCreateWithoutParent_albumInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutParent_albumInput | AlbumCreateOrConnectWithoutParent_albumInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutParent_albumInput | AlbumUpsertWithWhereUniqueWithoutParent_albumInput[]
    createMany?: AlbumCreateManyParent_albumInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutParent_albumInput | AlbumUpdateWithWhereUniqueWithoutParent_albumInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutParent_albumInput | AlbumUpdateManyWithWhereWithoutParent_albumInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumsInput
    upsert?: UserUpsertWithoutAlbumsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlbumsInput, UserUpdateWithoutAlbumsInput>, UserUncheckedUpdateWithoutAlbumsInput>
  }

  export type PhotoUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<PhotoCreateWithoutAlbumInput, PhotoUncheckedCreateWithoutAlbumInput> | PhotoCreateWithoutAlbumInput[] | PhotoUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAlbumInput | PhotoCreateOrConnectWithoutAlbumInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutAlbumInput | PhotoUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: PhotoCreateManyAlbumInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutAlbumInput | PhotoUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutAlbumInput | PhotoUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type AlbumMemberUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<AlbumMemberCreateWithoutAlbumInput, AlbumMemberUncheckedCreateWithoutAlbumInput> | AlbumMemberCreateWithoutAlbumInput[] | AlbumMemberUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumMemberCreateOrConnectWithoutAlbumInput | AlbumMemberCreateOrConnectWithoutAlbumInput[]
    upsert?: AlbumMemberUpsertWithWhereUniqueWithoutAlbumInput | AlbumMemberUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: AlbumMemberCreateManyAlbumInputEnvelope
    set?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    disconnect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    delete?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    connect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    update?: AlbumMemberUpdateWithWhereUniqueWithoutAlbumInput | AlbumMemberUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: AlbumMemberUpdateManyWithWhereWithoutAlbumInput | AlbumMemberUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: AlbumMemberScalarWhereInput | AlbumMemberScalarWhereInput[]
  }

  export type AlbumShareUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<AlbumShareCreateWithoutAlbumInput, AlbumShareUncheckedCreateWithoutAlbumInput> | AlbumShareCreateWithoutAlbumInput[] | AlbumShareUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutAlbumInput | AlbumShareCreateOrConnectWithoutAlbumInput[]
    upsert?: AlbumShareUpsertWithWhereUniqueWithoutAlbumInput | AlbumShareUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: AlbumShareCreateManyAlbumInputEnvelope
    set?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    disconnect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    delete?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    update?: AlbumShareUpdateWithWhereUniqueWithoutAlbumInput | AlbumShareUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: AlbumShareUpdateManyWithWhereWithoutAlbumInput | AlbumShareUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: AlbumShareScalarWhereInput | AlbumShareScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutParent_albumNestedInput = {
    create?: XOR<AlbumCreateWithoutParent_albumInput, AlbumUncheckedCreateWithoutParent_albumInput> | AlbumCreateWithoutParent_albumInput[] | AlbumUncheckedCreateWithoutParent_albumInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutParent_albumInput | AlbumCreateOrConnectWithoutParent_albumInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutParent_albumInput | AlbumUpsertWithWhereUniqueWithoutParent_albumInput[]
    createMany?: AlbumCreateManyParent_albumInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutParent_albumInput | AlbumUpdateWithWhereUniqueWithoutParent_albumInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutParent_albumInput | AlbumUpdateManyWithWhereWithoutParent_albumInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<PhotoCreateWithoutAlbumInput, PhotoUncheckedCreateWithoutAlbumInput> | PhotoCreateWithoutAlbumInput[] | PhotoUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAlbumInput | PhotoCreateOrConnectWithoutAlbumInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutAlbumInput | PhotoUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: PhotoCreateManyAlbumInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutAlbumInput | PhotoUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutAlbumInput | PhotoUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type AlbumMemberUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<AlbumMemberCreateWithoutAlbumInput, AlbumMemberUncheckedCreateWithoutAlbumInput> | AlbumMemberCreateWithoutAlbumInput[] | AlbumMemberUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumMemberCreateOrConnectWithoutAlbumInput | AlbumMemberCreateOrConnectWithoutAlbumInput[]
    upsert?: AlbumMemberUpsertWithWhereUniqueWithoutAlbumInput | AlbumMemberUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: AlbumMemberCreateManyAlbumInputEnvelope
    set?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    disconnect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    delete?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    connect?: AlbumMemberWhereUniqueInput | AlbumMemberWhereUniqueInput[]
    update?: AlbumMemberUpdateWithWhereUniqueWithoutAlbumInput | AlbumMemberUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: AlbumMemberUpdateManyWithWhereWithoutAlbumInput | AlbumMemberUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: AlbumMemberScalarWhereInput | AlbumMemberScalarWhereInput[]
  }

  export type AlbumShareUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<AlbumShareCreateWithoutAlbumInput, AlbumShareUncheckedCreateWithoutAlbumInput> | AlbumShareCreateWithoutAlbumInput[] | AlbumShareUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumShareCreateOrConnectWithoutAlbumInput | AlbumShareCreateOrConnectWithoutAlbumInput[]
    upsert?: AlbumShareUpsertWithWhereUniqueWithoutAlbumInput | AlbumShareUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: AlbumShareCreateManyAlbumInputEnvelope
    set?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    disconnect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    delete?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    connect?: AlbumShareWhereUniqueInput | AlbumShareWhereUniqueInput[]
    update?: AlbumShareUpdateWithWhereUniqueWithoutAlbumInput | AlbumShareUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: AlbumShareUpdateManyWithWhereWithoutAlbumInput | AlbumShareUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: AlbumShareScalarWhereInput | AlbumShareScalarWhereInput[]
  }

  export type AlbumCreateNestedOneWithoutAlbumMembersInput = {
    create?: XOR<AlbumCreateWithoutAlbumMembersInput, AlbumUncheckedCreateWithoutAlbumMembersInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutAlbumMembersInput
    connect?: AlbumWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAlbumMembersInput = {
    create?: XOR<UserCreateWithoutAlbumMembersInput, UserUncheckedCreateWithoutAlbumMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumMembersInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumUpdateOneRequiredWithoutAlbumMembersNestedInput = {
    create?: XOR<AlbumCreateWithoutAlbumMembersInput, AlbumUncheckedCreateWithoutAlbumMembersInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutAlbumMembersInput
    upsert?: AlbumUpsertWithoutAlbumMembersInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutAlbumMembersInput, AlbumUpdateWithoutAlbumMembersInput>, AlbumUncheckedUpdateWithoutAlbumMembersInput>
  }

  export type UserUpdateOneRequiredWithoutAlbumMembersNestedInput = {
    create?: XOR<UserCreateWithoutAlbumMembersInput, UserUncheckedCreateWithoutAlbumMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumMembersInput
    upsert?: UserUpsertWithoutAlbumMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlbumMembersInput, UserUpdateWithoutAlbumMembersInput>, UserUncheckedUpdateWithoutAlbumMembersInput>
  }

  export type AlbumCreateNestedOneWithoutPhotosInput = {
    create?: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPhotosInput
    connect?: AlbumWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPhotosInput = {
    create?: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotosInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPhotosInput
    upsert?: AlbumUpsertWithoutPhotosInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutPhotosInput, AlbumUpdateWithoutPhotosInput>, AlbumUncheckedUpdateWithoutPhotosInput>
  }

  export type UserUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotosInput
    upsert?: UserUpsertWithoutPhotosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhotosInput, UserUpdateWithoutPhotosInput>, UserUncheckedUpdateWithoutPhotosInput>
  }

  export type AlbumCreateNestedOneWithoutAlbumSharesInput = {
    create?: XOR<AlbumCreateWithoutAlbumSharesInput, AlbumUncheckedCreateWithoutAlbumSharesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutAlbumSharesInput
    connect?: AlbumWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentSharesInput = {
    create?: XOR<UserCreateWithoutSentSharesInput, UserUncheckedCreateWithoutSentSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentSharesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedSharesInput = {
    create?: XOR<UserCreateWithoutReceivedSharesInput, UserUncheckedCreateWithoutReceivedSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedSharesInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumUpdateOneRequiredWithoutAlbumSharesNestedInput = {
    create?: XOR<AlbumCreateWithoutAlbumSharesInput, AlbumUncheckedCreateWithoutAlbumSharesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutAlbumSharesInput
    upsert?: AlbumUpsertWithoutAlbumSharesInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutAlbumSharesInput, AlbumUpdateWithoutAlbumSharesInput>, AlbumUncheckedUpdateWithoutAlbumSharesInput>
  }

  export type UserUpdateOneRequiredWithoutSentSharesNestedInput = {
    create?: XOR<UserCreateWithoutSentSharesInput, UserUncheckedCreateWithoutSentSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentSharesInput
    upsert?: UserUpsertWithoutSentSharesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentSharesInput, UserUpdateWithoutSentSharesInput>, UserUncheckedUpdateWithoutSentSharesInput>
  }

  export type UserUpdateOneWithoutReceivedSharesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedSharesInput, UserUncheckedCreateWithoutReceivedSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedSharesInput
    upsert?: UserUpsertWithoutReceivedSharesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedSharesInput, UserUpdateWithoutReceivedSharesInput>, UserUncheckedUpdateWithoutReceivedSharesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AlbumCreateWithoutOwnerInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    parent_album?: AlbumCreateNestedOneWithoutSub_albumsInput
    sub_albums?: AlbumCreateNestedManyWithoutParent_albumInput
    photos?: PhotoCreateNestedManyWithoutAlbumInput
    albumMembers?: AlbumMemberCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    parent_album_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    sub_albums?: AlbumUncheckedCreateNestedManyWithoutParent_albumInput
    photos?: PhotoUncheckedCreateNestedManyWithoutAlbumInput
    albumMembers?: AlbumMemberUncheckedCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutOwnerInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutOwnerInput, AlbumUncheckedCreateWithoutOwnerInput>
  }

  export type AlbumCreateManyOwnerInputEnvelope = {
    data: AlbumCreateManyOwnerInput | AlbumCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PhotoCreateWithoutUploaderInput = {
    id?: string
    s3_key: string
    name: string
    meta?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    album: AlbumCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateWithoutUploaderInput = {
    id?: string
    album_id: string
    s3_key: string
    name: string
    meta?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type PhotoCreateOrConnectWithoutUploaderInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutUploaderInput, PhotoUncheckedCreateWithoutUploaderInput>
  }

  export type PhotoCreateManyUploaderInputEnvelope = {
    data: PhotoCreateManyUploaderInput | PhotoCreateManyUploaderInput[]
    skipDuplicates?: boolean
  }

  export type AlbumMemberCreateWithoutUserInput = {
    id?: string
    role: string
    album: AlbumCreateNestedOneWithoutAlbumMembersInput
  }

  export type AlbumMemberUncheckedCreateWithoutUserInput = {
    id?: string
    album_id: string
    role: string
  }

  export type AlbumMemberCreateOrConnectWithoutUserInput = {
    where: AlbumMemberWhereUniqueInput
    create: XOR<AlbumMemberCreateWithoutUserInput, AlbumMemberUncheckedCreateWithoutUserInput>
  }

  export type AlbumMemberCreateManyUserInputEnvelope = {
    data: AlbumMemberCreateManyUserInput | AlbumMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AlbumShareCreateWithoutInvited_by_userInput = {
    id?: string
    invited_email: string
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
    album: AlbumCreateNestedOneWithoutAlbumSharesInput
    invited_user?: UserCreateNestedOneWithoutReceivedSharesInput
  }

  export type AlbumShareUncheckedCreateWithoutInvited_by_userInput = {
    id?: string
    album_id: string
    invited_email: string
    invited_user_id?: string | null
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
  }

  export type AlbumShareCreateOrConnectWithoutInvited_by_userInput = {
    where: AlbumShareWhereUniqueInput
    create: XOR<AlbumShareCreateWithoutInvited_by_userInput, AlbumShareUncheckedCreateWithoutInvited_by_userInput>
  }

  export type AlbumShareCreateManyInvited_by_userInputEnvelope = {
    data: AlbumShareCreateManyInvited_by_userInput | AlbumShareCreateManyInvited_by_userInput[]
    skipDuplicates?: boolean
  }

  export type AlbumShareCreateWithoutInvited_userInput = {
    id?: string
    invited_email: string
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
    album: AlbumCreateNestedOneWithoutAlbumSharesInput
    invited_by_user: UserCreateNestedOneWithoutSentSharesInput
  }

  export type AlbumShareUncheckedCreateWithoutInvited_userInput = {
    id?: string
    album_id: string
    invited_by_user_id: string
    invited_email: string
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
  }

  export type AlbumShareCreateOrConnectWithoutInvited_userInput = {
    where: AlbumShareWhereUniqueInput
    create: XOR<AlbumShareCreateWithoutInvited_userInput, AlbumShareUncheckedCreateWithoutInvited_userInput>
  }

  export type AlbumShareCreateManyInvited_userInputEnvelope = {
    data: AlbumShareCreateManyInvited_userInput | AlbumShareCreateManyInvited_userInput[]
    skipDuplicates?: boolean
  }

  export type AlbumUpsertWithWhereUniqueWithoutOwnerInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutOwnerInput, AlbumUncheckedUpdateWithoutOwnerInput>
    create: XOR<AlbumCreateWithoutOwnerInput, AlbumUncheckedCreateWithoutOwnerInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutOwnerInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutOwnerInput, AlbumUncheckedUpdateWithoutOwnerInput>
  }

  export type AlbumUpdateManyWithWhereWithoutOwnerInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutOwnerInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: StringFilter<"Album"> | string
    name?: StringFilter<"Album"> | string
    parent_album_id?: StringNullableFilter<"Album"> | string | null
    owner_user_id?: StringFilter<"Album"> | string
    created_at?: DateTimeFilter<"Album"> | Date | string
    updated_at?: DateTimeFilter<"Album"> | Date | string
    is_deleted?: BoolFilter<"Album"> | boolean
  }

  export type PhotoUpsertWithWhereUniqueWithoutUploaderInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutUploaderInput, PhotoUncheckedUpdateWithoutUploaderInput>
    create: XOR<PhotoCreateWithoutUploaderInput, PhotoUncheckedCreateWithoutUploaderInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutUploaderInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutUploaderInput, PhotoUncheckedUpdateWithoutUploaderInput>
  }

  export type PhotoUpdateManyWithWhereWithoutUploaderInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutUploaderInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: StringFilter<"Photo"> | string
    album_id?: StringFilter<"Photo"> | string
    s3_key?: StringFilter<"Photo"> | string
    name?: StringFilter<"Photo"> | string
    meta?: StringNullableFilter<"Photo"> | string | null
    uploaded_by_user_id?: StringFilter<"Photo"> | string
    created_at?: DateTimeFilter<"Photo"> | Date | string
    updated_at?: DateTimeFilter<"Photo"> | Date | string
    is_deleted?: BoolFilter<"Photo"> | boolean
  }

  export type AlbumMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: AlbumMemberWhereUniqueInput
    update: XOR<AlbumMemberUpdateWithoutUserInput, AlbumMemberUncheckedUpdateWithoutUserInput>
    create: XOR<AlbumMemberCreateWithoutUserInput, AlbumMemberUncheckedCreateWithoutUserInput>
  }

  export type AlbumMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: AlbumMemberWhereUniqueInput
    data: XOR<AlbumMemberUpdateWithoutUserInput, AlbumMemberUncheckedUpdateWithoutUserInput>
  }

  export type AlbumMemberUpdateManyWithWhereWithoutUserInput = {
    where: AlbumMemberScalarWhereInput
    data: XOR<AlbumMemberUpdateManyMutationInput, AlbumMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type AlbumMemberScalarWhereInput = {
    AND?: AlbumMemberScalarWhereInput | AlbumMemberScalarWhereInput[]
    OR?: AlbumMemberScalarWhereInput[]
    NOT?: AlbumMemberScalarWhereInput | AlbumMemberScalarWhereInput[]
    id?: StringFilter<"AlbumMember"> | string
    album_id?: StringFilter<"AlbumMember"> | string
    user_id?: StringFilter<"AlbumMember"> | string
    role?: StringFilter<"AlbumMember"> | string
  }

  export type AlbumShareUpsertWithWhereUniqueWithoutInvited_by_userInput = {
    where: AlbumShareWhereUniqueInput
    update: XOR<AlbumShareUpdateWithoutInvited_by_userInput, AlbumShareUncheckedUpdateWithoutInvited_by_userInput>
    create: XOR<AlbumShareCreateWithoutInvited_by_userInput, AlbumShareUncheckedCreateWithoutInvited_by_userInput>
  }

  export type AlbumShareUpdateWithWhereUniqueWithoutInvited_by_userInput = {
    where: AlbumShareWhereUniqueInput
    data: XOR<AlbumShareUpdateWithoutInvited_by_userInput, AlbumShareUncheckedUpdateWithoutInvited_by_userInput>
  }

  export type AlbumShareUpdateManyWithWhereWithoutInvited_by_userInput = {
    where: AlbumShareScalarWhereInput
    data: XOR<AlbumShareUpdateManyMutationInput, AlbumShareUncheckedUpdateManyWithoutInvited_by_userInput>
  }

  export type AlbumShareScalarWhereInput = {
    AND?: AlbumShareScalarWhereInput | AlbumShareScalarWhereInput[]
    OR?: AlbumShareScalarWhereInput[]
    NOT?: AlbumShareScalarWhereInput | AlbumShareScalarWhereInput[]
    id?: StringFilter<"AlbumShare"> | string
    album_id?: StringFilter<"AlbumShare"> | string
    invited_by_user_id?: StringFilter<"AlbumShare"> | string
    invited_email?: StringFilter<"AlbumShare"> | string
    invited_user_id?: StringNullableFilter<"AlbumShare"> | string | null
    role?: StringFilter<"AlbumShare"> | string
    invitation_token?: StringFilter<"AlbumShare"> | string
    status?: StringFilter<"AlbumShare"> | string
    expires_at?: DateTimeFilter<"AlbumShare"> | Date | string
    invited_at?: DateTimeFilter<"AlbumShare"> | Date | string
    updated_at?: DateTimeFilter<"AlbumShare"> | Date | string
  }

  export type AlbumShareUpsertWithWhereUniqueWithoutInvited_userInput = {
    where: AlbumShareWhereUniqueInput
    update: XOR<AlbumShareUpdateWithoutInvited_userInput, AlbumShareUncheckedUpdateWithoutInvited_userInput>
    create: XOR<AlbumShareCreateWithoutInvited_userInput, AlbumShareUncheckedCreateWithoutInvited_userInput>
  }

  export type AlbumShareUpdateWithWhereUniqueWithoutInvited_userInput = {
    where: AlbumShareWhereUniqueInput
    data: XOR<AlbumShareUpdateWithoutInvited_userInput, AlbumShareUncheckedUpdateWithoutInvited_userInput>
  }

  export type AlbumShareUpdateManyWithWhereWithoutInvited_userInput = {
    where: AlbumShareScalarWhereInput
    data: XOR<AlbumShareUpdateManyMutationInput, AlbumShareUncheckedUpdateManyWithoutInvited_userInput>
  }

  export type AlbumCreateWithoutSub_albumsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    parent_album?: AlbumCreateNestedOneWithoutSub_albumsInput
    owner: UserCreateNestedOneWithoutAlbumsInput
    photos?: PhotoCreateNestedManyWithoutAlbumInput
    albumMembers?: AlbumMemberCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutSub_albumsInput = {
    id?: string
    name: string
    parent_album_id?: string | null
    owner_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    photos?: PhotoUncheckedCreateNestedManyWithoutAlbumInput
    albumMembers?: AlbumMemberUncheckedCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutSub_albumsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutSub_albumsInput, AlbumUncheckedCreateWithoutSub_albumsInput>
  }

  export type AlbumCreateWithoutParent_albumInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    sub_albums?: AlbumCreateNestedManyWithoutParent_albumInput
    owner: UserCreateNestedOneWithoutAlbumsInput
    photos?: PhotoCreateNestedManyWithoutAlbumInput
    albumMembers?: AlbumMemberCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutParent_albumInput = {
    id?: string
    name: string
    owner_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    sub_albums?: AlbumUncheckedCreateNestedManyWithoutParent_albumInput
    photos?: PhotoUncheckedCreateNestedManyWithoutAlbumInput
    albumMembers?: AlbumMemberUncheckedCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutParent_albumInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutParent_albumInput, AlbumUncheckedCreateWithoutParent_albumInput>
  }

  export type AlbumCreateManyParent_albumInputEnvelope = {
    data: AlbumCreateManyParent_albumInput | AlbumCreateManyParent_albumInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAlbumsInput = {
    id: string
    name?: string | null
    email: string
    photos?: PhotoCreateNestedManyWithoutUploaderInput
    albumMembers?: AlbumMemberCreateNestedManyWithoutUserInput
    sentShares?: AlbumShareCreateNestedManyWithoutInvited_by_userInput
    receivedShares?: AlbumShareCreateNestedManyWithoutInvited_userInput
  }

  export type UserUncheckedCreateWithoutAlbumsInput = {
    id: string
    name?: string | null
    email: string
    photos?: PhotoUncheckedCreateNestedManyWithoutUploaderInput
    albumMembers?: AlbumMemberUncheckedCreateNestedManyWithoutUserInput
    sentShares?: AlbumShareUncheckedCreateNestedManyWithoutInvited_by_userInput
    receivedShares?: AlbumShareUncheckedCreateNestedManyWithoutInvited_userInput
  }

  export type UserCreateOrConnectWithoutAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
  }

  export type PhotoCreateWithoutAlbumInput = {
    id?: string
    s3_key: string
    name: string
    meta?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    uploader: UserCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateWithoutAlbumInput = {
    id?: string
    s3_key: string
    name: string
    meta?: string | null
    uploaded_by_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type PhotoCreateOrConnectWithoutAlbumInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutAlbumInput, PhotoUncheckedCreateWithoutAlbumInput>
  }

  export type PhotoCreateManyAlbumInputEnvelope = {
    data: PhotoCreateManyAlbumInput | PhotoCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type AlbumMemberCreateWithoutAlbumInput = {
    id?: string
    role: string
    user: UserCreateNestedOneWithoutAlbumMembersInput
  }

  export type AlbumMemberUncheckedCreateWithoutAlbumInput = {
    id?: string
    user_id: string
    role: string
  }

  export type AlbumMemberCreateOrConnectWithoutAlbumInput = {
    where: AlbumMemberWhereUniqueInput
    create: XOR<AlbumMemberCreateWithoutAlbumInput, AlbumMemberUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumMemberCreateManyAlbumInputEnvelope = {
    data: AlbumMemberCreateManyAlbumInput | AlbumMemberCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type AlbumShareCreateWithoutAlbumInput = {
    id?: string
    invited_email: string
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
    invited_by_user: UserCreateNestedOneWithoutSentSharesInput
    invited_user?: UserCreateNestedOneWithoutReceivedSharesInput
  }

  export type AlbumShareUncheckedCreateWithoutAlbumInput = {
    id?: string
    invited_by_user_id: string
    invited_email: string
    invited_user_id?: string | null
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
  }

  export type AlbumShareCreateOrConnectWithoutAlbumInput = {
    where: AlbumShareWhereUniqueInput
    create: XOR<AlbumShareCreateWithoutAlbumInput, AlbumShareUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumShareCreateManyAlbumInputEnvelope = {
    data: AlbumShareCreateManyAlbumInput | AlbumShareCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type AlbumUpsertWithoutSub_albumsInput = {
    update: XOR<AlbumUpdateWithoutSub_albumsInput, AlbumUncheckedUpdateWithoutSub_albumsInput>
    create: XOR<AlbumCreateWithoutSub_albumsInput, AlbumUncheckedCreateWithoutSub_albumsInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutSub_albumsInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutSub_albumsInput, AlbumUncheckedUpdateWithoutSub_albumsInput>
  }

  export type AlbumUpdateWithoutSub_albumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    parent_album?: AlbumUpdateOneWithoutSub_albumsNestedInput
    owner?: UserUpdateOneRequiredWithoutAlbumsNestedInput
    photos?: PhotoUpdateManyWithoutAlbumNestedInput
    albumMembers?: AlbumMemberUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutSub_albumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_album_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    photos?: PhotoUncheckedUpdateManyWithoutAlbumNestedInput
    albumMembers?: AlbumMemberUncheckedUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUpsertWithWhereUniqueWithoutParent_albumInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutParent_albumInput, AlbumUncheckedUpdateWithoutParent_albumInput>
    create: XOR<AlbumCreateWithoutParent_albumInput, AlbumUncheckedCreateWithoutParent_albumInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutParent_albumInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutParent_albumInput, AlbumUncheckedUpdateWithoutParent_albumInput>
  }

  export type AlbumUpdateManyWithWhereWithoutParent_albumInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutParent_albumInput>
  }

  export type UserUpsertWithoutAlbumsInput = {
    update: XOR<UserUpdateWithoutAlbumsInput, UserUncheckedUpdateWithoutAlbumsInput>
    create: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlbumsInput, UserUncheckedUpdateWithoutAlbumsInput>
  }

  export type UserUpdateWithoutAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photos?: PhotoUpdateManyWithoutUploaderNestedInput
    albumMembers?: AlbumMemberUpdateManyWithoutUserNestedInput
    sentShares?: AlbumShareUpdateManyWithoutInvited_by_userNestedInput
    receivedShares?: AlbumShareUpdateManyWithoutInvited_userNestedInput
  }

  export type UserUncheckedUpdateWithoutAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    photos?: PhotoUncheckedUpdateManyWithoutUploaderNestedInput
    albumMembers?: AlbumMemberUncheckedUpdateManyWithoutUserNestedInput
    sentShares?: AlbumShareUncheckedUpdateManyWithoutInvited_by_userNestedInput
    receivedShares?: AlbumShareUncheckedUpdateManyWithoutInvited_userNestedInput
  }

  export type PhotoUpsertWithWhereUniqueWithoutAlbumInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutAlbumInput, PhotoUncheckedUpdateWithoutAlbumInput>
    create: XOR<PhotoCreateWithoutAlbumInput, PhotoUncheckedCreateWithoutAlbumInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutAlbumInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutAlbumInput, PhotoUncheckedUpdateWithoutAlbumInput>
  }

  export type PhotoUpdateManyWithWhereWithoutAlbumInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutAlbumInput>
  }

  export type AlbumMemberUpsertWithWhereUniqueWithoutAlbumInput = {
    where: AlbumMemberWhereUniqueInput
    update: XOR<AlbumMemberUpdateWithoutAlbumInput, AlbumMemberUncheckedUpdateWithoutAlbumInput>
    create: XOR<AlbumMemberCreateWithoutAlbumInput, AlbumMemberUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumMemberUpdateWithWhereUniqueWithoutAlbumInput = {
    where: AlbumMemberWhereUniqueInput
    data: XOR<AlbumMemberUpdateWithoutAlbumInput, AlbumMemberUncheckedUpdateWithoutAlbumInput>
  }

  export type AlbumMemberUpdateManyWithWhereWithoutAlbumInput = {
    where: AlbumMemberScalarWhereInput
    data: XOR<AlbumMemberUpdateManyMutationInput, AlbumMemberUncheckedUpdateManyWithoutAlbumInput>
  }

  export type AlbumShareUpsertWithWhereUniqueWithoutAlbumInput = {
    where: AlbumShareWhereUniqueInput
    update: XOR<AlbumShareUpdateWithoutAlbumInput, AlbumShareUncheckedUpdateWithoutAlbumInput>
    create: XOR<AlbumShareCreateWithoutAlbumInput, AlbumShareUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumShareUpdateWithWhereUniqueWithoutAlbumInput = {
    where: AlbumShareWhereUniqueInput
    data: XOR<AlbumShareUpdateWithoutAlbumInput, AlbumShareUncheckedUpdateWithoutAlbumInput>
  }

  export type AlbumShareUpdateManyWithWhereWithoutAlbumInput = {
    where: AlbumShareScalarWhereInput
    data: XOR<AlbumShareUpdateManyMutationInput, AlbumShareUncheckedUpdateManyWithoutAlbumInput>
  }

  export type AlbumCreateWithoutAlbumMembersInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    parent_album?: AlbumCreateNestedOneWithoutSub_albumsInput
    sub_albums?: AlbumCreateNestedManyWithoutParent_albumInput
    owner: UserCreateNestedOneWithoutAlbumsInput
    photos?: PhotoCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutAlbumMembersInput = {
    id?: string
    name: string
    parent_album_id?: string | null
    owner_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    sub_albums?: AlbumUncheckedCreateNestedManyWithoutParent_albumInput
    photos?: PhotoUncheckedCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutAlbumMembersInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutAlbumMembersInput, AlbumUncheckedCreateWithoutAlbumMembersInput>
  }

  export type UserCreateWithoutAlbumMembersInput = {
    id: string
    name?: string | null
    email: string
    albums?: AlbumCreateNestedManyWithoutOwnerInput
    photos?: PhotoCreateNestedManyWithoutUploaderInput
    sentShares?: AlbumShareCreateNestedManyWithoutInvited_by_userInput
    receivedShares?: AlbumShareCreateNestedManyWithoutInvited_userInput
  }

  export type UserUncheckedCreateWithoutAlbumMembersInput = {
    id: string
    name?: string | null
    email: string
    albums?: AlbumUncheckedCreateNestedManyWithoutOwnerInput
    photos?: PhotoUncheckedCreateNestedManyWithoutUploaderInput
    sentShares?: AlbumShareUncheckedCreateNestedManyWithoutInvited_by_userInput
    receivedShares?: AlbumShareUncheckedCreateNestedManyWithoutInvited_userInput
  }

  export type UserCreateOrConnectWithoutAlbumMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlbumMembersInput, UserUncheckedCreateWithoutAlbumMembersInput>
  }

  export type AlbumUpsertWithoutAlbumMembersInput = {
    update: XOR<AlbumUpdateWithoutAlbumMembersInput, AlbumUncheckedUpdateWithoutAlbumMembersInput>
    create: XOR<AlbumCreateWithoutAlbumMembersInput, AlbumUncheckedCreateWithoutAlbumMembersInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutAlbumMembersInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutAlbumMembersInput, AlbumUncheckedUpdateWithoutAlbumMembersInput>
  }

  export type AlbumUpdateWithoutAlbumMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    parent_album?: AlbumUpdateOneWithoutSub_albumsNestedInput
    sub_albums?: AlbumUpdateManyWithoutParent_albumNestedInput
    owner?: UserUpdateOneRequiredWithoutAlbumsNestedInput
    photos?: PhotoUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutAlbumMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_album_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    sub_albums?: AlbumUncheckedUpdateManyWithoutParent_albumNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type UserUpsertWithoutAlbumMembersInput = {
    update: XOR<UserUpdateWithoutAlbumMembersInput, UserUncheckedUpdateWithoutAlbumMembersInput>
    create: XOR<UserCreateWithoutAlbumMembersInput, UserUncheckedCreateWithoutAlbumMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlbumMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlbumMembersInput, UserUncheckedUpdateWithoutAlbumMembersInput>
  }

  export type UserUpdateWithoutAlbumMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    albums?: AlbumUpdateManyWithoutOwnerNestedInput
    photos?: PhotoUpdateManyWithoutUploaderNestedInput
    sentShares?: AlbumShareUpdateManyWithoutInvited_by_userNestedInput
    receivedShares?: AlbumShareUpdateManyWithoutInvited_userNestedInput
  }

  export type UserUncheckedUpdateWithoutAlbumMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    albums?: AlbumUncheckedUpdateManyWithoutOwnerNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutUploaderNestedInput
    sentShares?: AlbumShareUncheckedUpdateManyWithoutInvited_by_userNestedInput
    receivedShares?: AlbumShareUncheckedUpdateManyWithoutInvited_userNestedInput
  }

  export type AlbumCreateWithoutPhotosInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    parent_album?: AlbumCreateNestedOneWithoutSub_albumsInput
    sub_albums?: AlbumCreateNestedManyWithoutParent_albumInput
    owner: UserCreateNestedOneWithoutAlbumsInput
    albumMembers?: AlbumMemberCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutPhotosInput = {
    id?: string
    name: string
    parent_album_id?: string | null
    owner_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    sub_albums?: AlbumUncheckedCreateNestedManyWithoutParent_albumInput
    albumMembers?: AlbumMemberUncheckedCreateNestedManyWithoutAlbumInput
    albumShares?: AlbumShareUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutPhotosInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
  }

  export type UserCreateWithoutPhotosInput = {
    id: string
    name?: string | null
    email: string
    albums?: AlbumCreateNestedManyWithoutOwnerInput
    albumMembers?: AlbumMemberCreateNestedManyWithoutUserInput
    sentShares?: AlbumShareCreateNestedManyWithoutInvited_by_userInput
    receivedShares?: AlbumShareCreateNestedManyWithoutInvited_userInput
  }

  export type UserUncheckedCreateWithoutPhotosInput = {
    id: string
    name?: string | null
    email: string
    albums?: AlbumUncheckedCreateNestedManyWithoutOwnerInput
    albumMembers?: AlbumMemberUncheckedCreateNestedManyWithoutUserInput
    sentShares?: AlbumShareUncheckedCreateNestedManyWithoutInvited_by_userInput
    receivedShares?: AlbumShareUncheckedCreateNestedManyWithoutInvited_userInput
  }

  export type UserCreateOrConnectWithoutPhotosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
  }

  export type AlbumUpsertWithoutPhotosInput = {
    update: XOR<AlbumUpdateWithoutPhotosInput, AlbumUncheckedUpdateWithoutPhotosInput>
    create: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutPhotosInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutPhotosInput, AlbumUncheckedUpdateWithoutPhotosInput>
  }

  export type AlbumUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    parent_album?: AlbumUpdateOneWithoutSub_albumsNestedInput
    sub_albums?: AlbumUpdateManyWithoutParent_albumNestedInput
    owner?: UserUpdateOneRequiredWithoutAlbumsNestedInput
    albumMembers?: AlbumMemberUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_album_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    sub_albums?: AlbumUncheckedUpdateManyWithoutParent_albumNestedInput
    albumMembers?: AlbumMemberUncheckedUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type UserUpsertWithoutPhotosInput = {
    update: XOR<UserUpdateWithoutPhotosInput, UserUncheckedUpdateWithoutPhotosInput>
    create: XOR<UserCreateWithoutPhotosInput, UserUncheckedCreateWithoutPhotosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhotosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPhotosInput, UserUncheckedUpdateWithoutPhotosInput>
  }

  export type UserUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    albums?: AlbumUpdateManyWithoutOwnerNestedInput
    albumMembers?: AlbumMemberUpdateManyWithoutUserNestedInput
    sentShares?: AlbumShareUpdateManyWithoutInvited_by_userNestedInput
    receivedShares?: AlbumShareUpdateManyWithoutInvited_userNestedInput
  }

  export type UserUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    albums?: AlbumUncheckedUpdateManyWithoutOwnerNestedInput
    albumMembers?: AlbumMemberUncheckedUpdateManyWithoutUserNestedInput
    sentShares?: AlbumShareUncheckedUpdateManyWithoutInvited_by_userNestedInput
    receivedShares?: AlbumShareUncheckedUpdateManyWithoutInvited_userNestedInput
  }

  export type AlbumCreateWithoutAlbumSharesInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    parent_album?: AlbumCreateNestedOneWithoutSub_albumsInput
    sub_albums?: AlbumCreateNestedManyWithoutParent_albumInput
    owner: UserCreateNestedOneWithoutAlbumsInput
    photos?: PhotoCreateNestedManyWithoutAlbumInput
    albumMembers?: AlbumMemberCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutAlbumSharesInput = {
    id?: string
    name: string
    parent_album_id?: string | null
    owner_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
    sub_albums?: AlbumUncheckedCreateNestedManyWithoutParent_albumInput
    photos?: PhotoUncheckedCreateNestedManyWithoutAlbumInput
    albumMembers?: AlbumMemberUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutAlbumSharesInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutAlbumSharesInput, AlbumUncheckedCreateWithoutAlbumSharesInput>
  }

  export type UserCreateWithoutSentSharesInput = {
    id: string
    name?: string | null
    email: string
    albums?: AlbumCreateNestedManyWithoutOwnerInput
    photos?: PhotoCreateNestedManyWithoutUploaderInput
    albumMembers?: AlbumMemberCreateNestedManyWithoutUserInput
    receivedShares?: AlbumShareCreateNestedManyWithoutInvited_userInput
  }

  export type UserUncheckedCreateWithoutSentSharesInput = {
    id: string
    name?: string | null
    email: string
    albums?: AlbumUncheckedCreateNestedManyWithoutOwnerInput
    photos?: PhotoUncheckedCreateNestedManyWithoutUploaderInput
    albumMembers?: AlbumMemberUncheckedCreateNestedManyWithoutUserInput
    receivedShares?: AlbumShareUncheckedCreateNestedManyWithoutInvited_userInput
  }

  export type UserCreateOrConnectWithoutSentSharesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentSharesInput, UserUncheckedCreateWithoutSentSharesInput>
  }

  export type UserCreateWithoutReceivedSharesInput = {
    id: string
    name?: string | null
    email: string
    albums?: AlbumCreateNestedManyWithoutOwnerInput
    photos?: PhotoCreateNestedManyWithoutUploaderInput
    albumMembers?: AlbumMemberCreateNestedManyWithoutUserInput
    sentShares?: AlbumShareCreateNestedManyWithoutInvited_by_userInput
  }

  export type UserUncheckedCreateWithoutReceivedSharesInput = {
    id: string
    name?: string | null
    email: string
    albums?: AlbumUncheckedCreateNestedManyWithoutOwnerInput
    photos?: PhotoUncheckedCreateNestedManyWithoutUploaderInput
    albumMembers?: AlbumMemberUncheckedCreateNestedManyWithoutUserInput
    sentShares?: AlbumShareUncheckedCreateNestedManyWithoutInvited_by_userInput
  }

  export type UserCreateOrConnectWithoutReceivedSharesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedSharesInput, UserUncheckedCreateWithoutReceivedSharesInput>
  }

  export type AlbumUpsertWithoutAlbumSharesInput = {
    update: XOR<AlbumUpdateWithoutAlbumSharesInput, AlbumUncheckedUpdateWithoutAlbumSharesInput>
    create: XOR<AlbumCreateWithoutAlbumSharesInput, AlbumUncheckedCreateWithoutAlbumSharesInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutAlbumSharesInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutAlbumSharesInput, AlbumUncheckedUpdateWithoutAlbumSharesInput>
  }

  export type AlbumUpdateWithoutAlbumSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    parent_album?: AlbumUpdateOneWithoutSub_albumsNestedInput
    sub_albums?: AlbumUpdateManyWithoutParent_albumNestedInput
    owner?: UserUpdateOneRequiredWithoutAlbumsNestedInput
    photos?: PhotoUpdateManyWithoutAlbumNestedInput
    albumMembers?: AlbumMemberUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutAlbumSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_album_id?: NullableStringFieldUpdateOperationsInput | string | null
    owner_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    sub_albums?: AlbumUncheckedUpdateManyWithoutParent_albumNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutAlbumNestedInput
    albumMembers?: AlbumMemberUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type UserUpsertWithoutSentSharesInput = {
    update: XOR<UserUpdateWithoutSentSharesInput, UserUncheckedUpdateWithoutSentSharesInput>
    create: XOR<UserCreateWithoutSentSharesInput, UserUncheckedCreateWithoutSentSharesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentSharesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentSharesInput, UserUncheckedUpdateWithoutSentSharesInput>
  }

  export type UserUpdateWithoutSentSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    albums?: AlbumUpdateManyWithoutOwnerNestedInput
    photos?: PhotoUpdateManyWithoutUploaderNestedInput
    albumMembers?: AlbumMemberUpdateManyWithoutUserNestedInput
    receivedShares?: AlbumShareUpdateManyWithoutInvited_userNestedInput
  }

  export type UserUncheckedUpdateWithoutSentSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    albums?: AlbumUncheckedUpdateManyWithoutOwnerNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutUploaderNestedInput
    albumMembers?: AlbumMemberUncheckedUpdateManyWithoutUserNestedInput
    receivedShares?: AlbumShareUncheckedUpdateManyWithoutInvited_userNestedInput
  }

  export type UserUpsertWithoutReceivedSharesInput = {
    update: XOR<UserUpdateWithoutReceivedSharesInput, UserUncheckedUpdateWithoutReceivedSharesInput>
    create: XOR<UserCreateWithoutReceivedSharesInput, UserUncheckedCreateWithoutReceivedSharesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedSharesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedSharesInput, UserUncheckedUpdateWithoutReceivedSharesInput>
  }

  export type UserUpdateWithoutReceivedSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    albums?: AlbumUpdateManyWithoutOwnerNestedInput
    photos?: PhotoUpdateManyWithoutUploaderNestedInput
    albumMembers?: AlbumMemberUpdateManyWithoutUserNestedInput
    sentShares?: AlbumShareUpdateManyWithoutInvited_by_userNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    albums?: AlbumUncheckedUpdateManyWithoutOwnerNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutUploaderNestedInput
    albumMembers?: AlbumMemberUncheckedUpdateManyWithoutUserNestedInput
    sentShares?: AlbumShareUncheckedUpdateManyWithoutInvited_by_userNestedInput
  }

  export type AlbumCreateManyOwnerInput = {
    id?: string
    name: string
    parent_album_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type PhotoCreateManyUploaderInput = {
    id?: string
    album_id: string
    s3_key: string
    name: string
    meta?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type AlbumMemberCreateManyUserInput = {
    id?: string
    album_id: string
    role: string
  }

  export type AlbumShareCreateManyInvited_by_userInput = {
    id?: string
    album_id: string
    invited_email: string
    invited_user_id?: string | null
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
  }

  export type AlbumShareCreateManyInvited_userInput = {
    id?: string
    album_id: string
    invited_by_user_id: string
    invited_email: string
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
  }

  export type AlbumUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    parent_album?: AlbumUpdateOneWithoutSub_albumsNestedInput
    sub_albums?: AlbumUpdateManyWithoutParent_albumNestedInput
    photos?: PhotoUpdateManyWithoutAlbumNestedInput
    albumMembers?: AlbumMemberUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_album_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    sub_albums?: AlbumUncheckedUpdateManyWithoutParent_albumNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutAlbumNestedInput
    albumMembers?: AlbumMemberUncheckedUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_album_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    album?: AlbumUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    s3_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUncheckedUpdateManyWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    s3_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlbumMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    album?: AlbumUpdateOneRequiredWithoutAlbumMembersNestedInput
  }

  export type AlbumMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumShareUpdateWithoutInvited_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutAlbumSharesNestedInput
    invited_user?: UserUpdateOneWithoutReceivedSharesNestedInput
  }

  export type AlbumShareUncheckedUpdateWithoutInvited_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    invited_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumShareUncheckedUpdateManyWithoutInvited_by_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    invited_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumShareUpdateWithoutInvited_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutAlbumSharesNestedInput
    invited_by_user?: UserUpdateOneRequiredWithoutSentSharesNestedInput
  }

  export type AlbumShareUncheckedUpdateWithoutInvited_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    invited_by_user_id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumShareUncheckedUpdateManyWithoutInvited_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    album_id?: StringFieldUpdateOperationsInput | string
    invited_by_user_id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateManyParent_albumInput = {
    id?: string
    name: string
    owner_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type PhotoCreateManyAlbumInput = {
    id?: string
    s3_key: string
    name: string
    meta?: string | null
    uploaded_by_user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_deleted?: boolean
  }

  export type AlbumMemberCreateManyAlbumInput = {
    id?: string
    user_id: string
    role: string
  }

  export type AlbumShareCreateManyAlbumInput = {
    id?: string
    invited_by_user_id: string
    invited_email: string
    invited_user_id?: string | null
    role: string
    invitation_token: string
    status?: string
    expires_at: Date | string
    invited_at?: Date | string
    updated_at?: Date | string
  }

  export type AlbumUpdateWithoutParent_albumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    sub_albums?: AlbumUpdateManyWithoutParent_albumNestedInput
    owner?: UserUpdateOneRequiredWithoutAlbumsNestedInput
    photos?: PhotoUpdateManyWithoutAlbumNestedInput
    albumMembers?: AlbumMemberUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutParent_albumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    sub_albums?: AlbumUncheckedUpdateManyWithoutParent_albumNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutAlbumNestedInput
    albumMembers?: AlbumMemberUncheckedUpdateManyWithoutAlbumNestedInput
    albumShares?: AlbumShareUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutParent_albumInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    uploader?: UserUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_by_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_by_user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlbumMemberUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAlbumMembersNestedInput
  }

  export type AlbumMemberUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumMemberUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumShareUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_by_user?: UserUpdateOneRequiredWithoutSentSharesNestedInput
    invited_user?: UserUpdateOneWithoutReceivedSharesNestedInput
  }

  export type AlbumShareUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    invited_by_user_id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    invited_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumShareUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    invited_by_user_id?: StringFieldUpdateOperationsInput | string
    invited_email?: StringFieldUpdateOperationsInput | string
    invited_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    invitation_token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}