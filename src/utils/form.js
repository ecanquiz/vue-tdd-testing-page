export function isBetween(value, { min, max }) {
  if (value < min || value > max) {
    return {
      valid: false,
      message: `Must be between ${min} and ${max}`
    }
  }
  return { valid: true }
}

export function required(value) {
  if (!value) {
    return {
      valid: false,
      message: 'Required'
    }
  }
  return { valid: true }
}

export function validateMeasurement(value, { constraints }) {
  const result = required(value)
  if (!result.valid) {
    return result
  }

  return isBetween(value, constraints)
}
