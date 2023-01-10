import { mount } from '@vue/test-utils'
import Counter from '../../Counter.vue'

describe('Counter', () => {
  it('emits an event with the current count', async () => {
    const wrapper = mount(Counter)

    await wrapper.find('[role="increment"]').trigger('click')
    await wrapper.find('[role="submit"]').trigger('click')

    expect(wrapper.emitted().submit[0]).toEqual([1])
  })
})
