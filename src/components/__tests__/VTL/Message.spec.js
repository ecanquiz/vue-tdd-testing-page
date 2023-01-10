import { render } from '@testing-library/vue'
import Message,{ validateVariant } from '../../Message.vue'

describe('Message', () => {
  it('renders variant correctly when passed', () => {
    const { container } = render(Message, {
      props: {
        variant: 'success'
      }
    })
  
    expect(container.firstChild.classList).toContain(['success'])
  })

  it('validates valid variant prop', () => {
    ['success', 'warning', 'error'].forEach(variant => {
      expect(() => validateVariant(variant)).not.toThrow()
    })
  })
  
  it('throws error for invalid variant prop', () => {
    expect(() => validateVariant('invalid')).toThrow()
  })
})
