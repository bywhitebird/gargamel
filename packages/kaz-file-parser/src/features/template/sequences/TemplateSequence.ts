import { g, gp, s } from '../../../lib/voltair'
import { ExpressionToken, LeftCurlyBracketToken } from '../../../shared'
import { ConditionLogicalSequence } from '../../condition-logical'
import { ForLogicalSequence } from '../../for-logical'
import { TagNameOrTextToken, TagSequence } from '../../tag'
import { TemplateExpressionEndToken, TemplateExpressionStartToken } from '..'

export const TemplateSequence = s(
  s.union([
    () => ForLogicalSequence,
    () => ConditionLogicalSequence,
    () => TagSequence,
    gp(
      'Text',
      g('text', () => TagNameOrTextToken),
    ),
    gp(
      'Expression',
      s(
        () => TemplateExpressionStartToken,
        () => LeftCurlyBracketToken,
        g('expression', s(() => ExpressionToken)),
        () => TemplateExpressionEndToken,
      ),
    ),
  ]),
  { min: 0 },
)
