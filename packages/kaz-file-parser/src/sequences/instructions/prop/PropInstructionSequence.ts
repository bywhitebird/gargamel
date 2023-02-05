import { g } from '../../../classes/groups/Group'
import { gp } from '../../../classes/groups/GroupParent'
import { s } from '../../../classes/Sequence'
import * as Tokens from '../../../tokens'

export const PropInstructionSequence = gp(
  'PropInstruction',
  s(
    Tokens.StartInstructionToken,
    Tokens.PropInstructionToken,
    g('name', Tokens.IdentifierToken),
    g(
      'type',
      s(
        Tokens.DeclarationTypeColonToken,
        Tokens.TypeToken,
        { optional: true },
      ),
    ),
    g(
      'defaultValue',
      s(
        Tokens.DeclarationValueEqualToken,
        g(
          'expression',
          Tokens.ExpressionToken,
        ),
        { optional: true },
      ),
    ),
    Tokens.EndInstructionToken,
  ),
)
