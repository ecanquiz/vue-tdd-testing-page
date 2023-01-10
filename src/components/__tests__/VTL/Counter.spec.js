import { render, screen, fireEvent } from '@testing-library/vue'
import Counter from '../../Counter.vue'

describe('Counter', () => {
  it('emits an event with the current count', async () => {
    const { emitted } = render(Counter)

    await fireEvent.click(screen.getByRole('increment'))
    await fireEvent.click(screen.getByRole('submit'))

    expect(emitted().submit[0]).toEqual([1])
  })
})
