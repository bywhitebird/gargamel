import type { Ref } from 'effect'
import { Context, Layer } from 'effect'

export interface SourceState extends Ref.Ref<string> { }

export const SourceStateService = Context.Tag<SourceState>()

export const SourceStateServiceLive = Layer.succeed(SourceStateService)
