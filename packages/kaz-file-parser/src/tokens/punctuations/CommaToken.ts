import { type Token, createToken } from '../../lib/voltair'

export const CommaToken = createToken({
  $name: 'CommaToken',
  validator: /^,$/,
  singleCharacter: true,
})

export const isCommaToken = (token: Token): token is typeof CommaToken => token.$name === CommaToken.$name
