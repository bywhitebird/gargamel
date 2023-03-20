import { Context } from '../../../lib/voltair'
import { EqualToken, EqualVariableDeclarationToken, TextToken } from '../../../shared'
import { TagNameOrTextToken } from '../../tag'

export const EventInstructionContext = new Context({
  $name: 'EventInstructionContext',
  breakingPatterns: [/\s+/, /^\($/, /^\)$/, /^=>$/, /^,$/, /^:/],
  forbiddenTokens: [() => TextToken, () => TagNameOrTextToken, () => EqualToken, () => EqualVariableDeclarationToken],
})
