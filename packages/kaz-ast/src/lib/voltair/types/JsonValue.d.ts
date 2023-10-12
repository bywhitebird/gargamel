// https://github.com/sindresorhus/type-fest/blob/main/source/basic.d.ts

export type JsonObject = { [Key in string]: JsonValue } & { [Key in string]?: JsonValue | undefined }

export type JsonArray = JsonValue[] | readonly JsonValue[]

export type JsonPrimitive = string | number | boolean | null

export type JsonValue = JsonPrimitive | JsonObject | JsonArray
