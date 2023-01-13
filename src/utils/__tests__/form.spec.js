import {
  isBetween,
  required,
  validateMeasurement
} from '../form.js'

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

  it('returns true false value is present', () => {
    expect(required('some value')).toEqual({ valid: true })
  })
})

describe('isBetween', () => {
  it('returns true when value is equal to min', () => {
    expect(isBetween(5, { min: 5, max: 10 }))
      .toEqual({ valid: true })
  })

  it('returns true when value is between min/max', () => {
    expect(isBetween(7, { min: 5, max: 10 }))
      .toEqual({ valid: true })
  })

  it('returns true when value is equal to max', () => {
    expect(isBetween(10, { min: 5, max: 10 }))
      .toEqual({ valid: true })
  })

  it('returns false when value is less than min', () => {
    expect(isBetween(4, { min: 5, max: 10 }))
      .toEqual({
        valid: false,
        message: 'Must be between 5 and 10'
      })
  })

  it('returns false when value is greater than max', () => {
    expect(isBetween(11, { min: 5, max: 10 }))
      .toEqual({
        valid: false,
        message: 'Must be between 5 and 10'
    })
  })
})

describe('validateMeasurement', () => {
  it('returns invalid for input', () => {
    const constraints = { min: 10, max: 30 }
    const actual = validateMeasurement(undefined, { constraints })

    expect(actual).toEqual({ valid: false, message: 'Required' })
  })

  it('returns invalid when outside range', () => {
    const constraints = { min: 10, max: 30 }
    const actual = validateMeasurement(40, { constraints })

    expect(actual).toEqual({
      valid: false,
      message: 'Must be between 10 and 30'
    })
  })
})
