import { SingleQuoteToken, SingleQuotedStringToken } from '..'
import { gv, s } from '../../../lib/voltair'

export const SingleQuotedStringSequence = s(SingleQuoteToken, gv(SingleQuotedStringToken), SingleQuoteToken)
