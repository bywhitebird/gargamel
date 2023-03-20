import { ComputedInstructionToken } from './features/computed-instruction'
import { ElseIfLogicalToken, ElseLogicalToken, IfConditionToken, IfLeftParenthesisToken, IfLogicalToken, IfRightParenthesisToken } from './features/condition-logical'
import { EventInstructionToken } from './features/event-instruction'
import { ForLeftParenthesisToken, ForLogicalToken, ForParametersToken, ForRightParenthesisToken } from './features/for-logical'
import { AliasKeywordToken, FromKeywordToken, ImportInstructionToken, WildcardCharacterToken } from './features/import-instruction'
import { EndInstructionToken, StartInstructionToken } from './features/instruction'
import { KazSequence } from './features/kaz'
import { PropInstructionToken } from './features/prop-instruction'
import { StateInstructionToken } from './features/state-instruction'
import { TagAttributeEqualToken, TagAttributeLeftCurlyBracketToken, TagAttributeNameToken, TagAttributeRightCurlyBracketToken, TagAttributeSeparatorToken, TagLeftParenthesisToken, TagNameOrTextToken, TagRightParenthesisToken } from './features/tag'
import { WatchInstructionToken } from './features/watch-instruction'
import { ArrowFunctionBodyToken, ArrowToken, ColonToken, ColonTypeAnnotationToken, CommaToken, DoubleQuoteToken, DoubleQuotedStringToken, EqualToken, EqualVariableDeclarationToken, ExpressionToken, IdentifierToken, LeftCurlyBracketToken, LeftParenthesisToken, RightCurlyBracketToken, RightParenthesisToken, SingleQuoteToken, SingleQuotedStringToken, TextToken, TypeToken, WhitespaceToken } from './shared'

export default {
  entry: KazSequence,
  tokens: [
    [
      // Instruction
      StartInstructionToken,

      [
        // Import instruction
        ImportInstructionToken,
        FromKeywordToken,
        AliasKeywordToken,
        WildcardCharacterToken,
      ],

      [
        // Prop instruction
        PropInstructionToken,
      ],

      [
        // State instruction
        StateInstructionToken,
      ],

      [
        // Computed instruction
        ComputedInstructionToken,
      ],

      [
        // Watch instruction
        WatchInstructionToken,
      ],

      [
        // Event instruction
        EventInstructionToken,
      ],

      EndInstructionToken,
    ],

    [
      // For logical
      ForLogicalToken,

      [
        // For parameters
        ForParametersToken,

        [
          // For parenthesis
          ForLeftParenthesisToken,
          ForRightParenthesisToken,
        ],
      ],
    ],

    [
      // Conditional logical
      IfLogicalToken,
      ElseIfLogicalToken,
      ElseLogicalToken,

      [
        // If parameters
        IfConditionToken,

        [
          // If parenthesis
          IfLeftParenthesisToken,
          IfRightParenthesisToken,
        ],
      ],
    ],

    [
      [
        // Tag parenthesis
        TagLeftParenthesisToken,
        TagRightParenthesisToken,
      ],

      [
        // Tag attributes
        TagAttributeNameToken,
        TagAttributeSeparatorToken,

        TagAttributeEqualToken,

        [
          // Tag attribute value expression
          TagAttributeLeftCurlyBracketToken,
          TagAttributeRightCurlyBracketToken,
        ],
      ],
    ],

    [
      // Colons
      ColonTypeAnnotationToken,
      ColonToken,
    ],

    [
      // Arrow
      ArrowToken,
    ],

    [
      // Equals
      EqualVariableDeclarationToken,
      EqualToken,
    ],

    [
      // Curly brackets
      LeftCurlyBracketToken,
      RightCurlyBracketToken,
    ],

    [
      // Parentheses
      LeftParenthesisToken,
      RightParenthesisToken,
    ],

    [
      // Strings
      [
        SingleQuoteToken,
        SingleQuotedStringToken,
      ],

      [
        DoubleQuoteToken,
        DoubleQuotedStringToken,
      ],
    ],

    // Other tokens
    CommaToken,
    TagNameOrTextToken,
    IdentifierToken,
    TypeToken,
    ExpressionToken,
    ArrowFunctionBodyToken,
    WhitespaceToken,
    TextToken,
  ].flat(Infinity as 9999),
}
