import { InstructionContext } from '..'
import { Token } from '../../../lib/voltair'
import { ComputedInstructionContext } from '../../computed-instruction'
import { ImportInstructionContext } from '../../import-instruction'
import { PropInstructionContext } from '../../prop-instruction'
import { StateInstructionContext } from '../../state-instruction'
import { WatchInstructionContext } from '../../watch-instruction'

const instructionContexts = [
  () => ComputedInstructionContext,
  () => ImportInstructionContext,
  () => PropInstructionContext,
  () => StateInstructionContext,
  () => WatchInstructionContext,
  () => InstructionContext,
]

export const EndInstructionToken = new Token({
  $name: 'EndInstructionToken',
  validator: /^\n\s*$/,
  inContexts: instructionContexts,
  endContexts: instructionContexts,
  tmScope: 'punctuation.definition.block',
})
