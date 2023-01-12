import { required } from '../form.js'

describe('required', () => {
  it('is invalid when undefined', () => {
    expect(required(undefined)).toEqual({
      valid: false,
      message: 'Required'
    })
  })
  
  it('is invalid when empty string', () => {
    expect(required('')).toEqual({
      valid: false,
      message: 'Required'
    })
  })

  /*it('is invalid when empty string', () => {
    expect(required(null)).toEqual({
      valid: false,
      message: 'Required'
    })
  })*/

  it('returns true false value is present', () => {
    expect(required('some value')).toEqual({ valid: true })
  })
})
