import { isValidEmail } from './email'

describe('isValidEmail()', () => {
  // https://www.rfc-editor.org/rfc/rfc2822#section-3.4.1
  it('follows RFC 2822 section 3.4.1 Addr-spec', () => {
    expect(isValidEmail('foo.bar-5@qux.com')).toBe(true)
    expect(isValidEmail('foo+bar-5@qux.com')).toBe(true)
    expect(isValidEmail('foo&bar-5@qux.com')).toBe(true)
    expect(isValidEmail('foo...bar-5@qux.com')).toBe(false)
    expect(isValidEmail('fooqux.com')).toBe(false)
    expect(isValidEmail({})).toBe(false)
    expect(isValidEmail(3434)).toBe(false)
  })
})
