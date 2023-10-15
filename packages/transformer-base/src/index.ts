import type { kazAstSchema } from '@whitebird/kaz-ast'
import type zod from 'zod'

export interface TransformerOptions {
}

export type TransformerInput<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _Options extends TransformerSettings = TransformerSettings,
> = Record<
  string,
  zod.infer<typeof kazAstSchema>
>

export type TransformerOutput<
  Settings extends TransformerSettings = TransformerSettings,
> = Map<
  string,
  {
    filePath: `${string}.${Settings['outputExtension']}`
    content: Blob
  }
>

export abstract class TransformerBase<
  Settings extends TransformerSettings,
  Options extends Record<string, unknown> = Record<string, never>,
> {
  constructor(
    public readonly input: TransformerInput<Settings>,
    public readonly options: Options extends Record<string, never>
      ? TransformerOptions
      : TransformerOptions & Options,
  ) {
  }

  abstract transform(): TransformerOutput<Settings>
}

interface TransformerSettings<
  OutputExtension extends string = string,
> {
  outputExtension: OutputExtension
}
