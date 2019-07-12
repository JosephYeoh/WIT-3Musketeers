export type Omit<Base, Keys> = Pick<Base, Exclude<keyof Base, Keys>>;
export type Subtract<A, B> = Omit<A, keyof B>;

export type KeysFilteredByPropertyType<Base, PropertyType> = {
	[K in keyof Base]: Base[K] extends PropertyType ? K : never;
}[keyof Base];

export type PickByType<Base, T> = Pick<Base, KeysFilteredByPropertyType<Base, T>>;
export type OmitByType<Base, T> = Omit<Base, KeysFilteredByPropertyType<Base, T>>;

export type InverseKeysFilteredByPropertyType<Base, PropertyType> = {
	[K in keyof Base]: PropertyType extends Base[K] ? K : never;
}[keyof Base];

export type InversePickByType<Base, T> = Pick<Base, InverseKeysFilteredByPropertyType<Base, T>>;
export type InverseOmitByType<Base, T> = Omit<Base, InverseKeysFilteredByPropertyType<Base, T>>;

export interface EmptyObject {
	[key: string]: void;
}

// Possible alternative naming: (AddRequiredProperties, RemoveRequiredProperties, SelectiveRequired)
export type MakePropertiesRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;
// TODO: implement: `export type MakePropertiesOptional<T, K extends keyof T> = ...`
export type SpecifyRequiredProperties<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>;

/**
 * Obtain the type that a `Promise` resolves to (in the style of `ReturnType<T>`,
 * `InstanceType<T>`, etc.)
 */
export type ResolveType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : never;

// -------------------- PARTIAL ----------------------------------------

// Note: `Partial` is a built-in type, and is inherently a mapped type

/**
 * Recursive verison of `Partial`
 */
export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };

// -------------------- NULLABLE ----------------------------------------

export type Nullable<T> = T | null;

/**
 * This implementation is copied straight from the
 * [TS docs on mapped types](https://www.typescriptlang.org/docs/handbook/advanced-types.html).
 *
 * Note, however, that those docs use the name `Nullable`, but we're naming it `MappedNullable` to
 * avoid ambiguity, since we (and many other libs) use the name `Nullable` as a scalar type --
 * especially since the built-in `NonNullable` type is the inverse of that scalar type, rather than
 * the mapped type.
 */
export type MappedNullable<T> = { [P in keyof T]: Nullable<T[P]> };

/**
 * Recursive version of `MappedNullable`
 */
export type DeepNullable<T> = { [P in keyof T]: DeepNullable<Nullable<T[P]>> };

// -------------------- MAYBE ----------------------------------------

// FIXME: Come up with a different name? Or patch graphql-codegen? Since currently graphql-codegen's emits a `Maybe` type, which does __NOT__ include `undefined`
export type Maybe<T> = T | null | undefined;

/**
 * Mapped version of `Maybe`
 */
export type MappedMaybe<T> = { [P in keyof T]: Maybe<T[P]> };

/**
 * Recursive version of `MappedMaybe`
 */
export type DeepMaybe<T> = { [P in keyof T]: DeepMaybe<Maybe<T[P]>> };

// -------------------- AWAITABLE ----------------------------------------

export type Awaitable<T> = T | Promise<T>;

/**
 * Mapped version of `Awaitable`
 */
export type MappedAwaitable<T> = { [P in keyof T]: Awaitable<T[P]> };

/**
 * Recursive version of `MappedAwaitable`
 */
// FIXME: The below implementation is the functionality that we actually need, but it's not actually consistent with our current `Deep...` naming convention
// since this also makes the top-level result `Awaitable` as well -- a more "correct" implementation would be something like `{ [P in keyof T]: DeepAwaitable<Awaitable<T[P]>> }`
export type DeepAwaitable<T> = Awaitable<{ [P in keyof T]: DeepAwaitable<T[P]> }>;
