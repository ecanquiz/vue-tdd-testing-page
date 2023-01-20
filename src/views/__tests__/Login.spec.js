import { render, fireEvent, screen } from '@testing-library/vue'
import App from '../Login.vue'
import axios from 'axios'

axios.post = vi.fn().mockResolvedValue({
  data: { name: 'Lachlan' }
})

describe('login', () => {
  it('successfully authenticates', async () => {
    render(App)

    await fireEvent.update(screen.getByRole('username'), 'Lachlan')
    await fireEvent.update(screen.getByRole('password'), 'secret-password')
    await fireEvent.click(screen.getByText('Click here to sign in'))

    expect(axios.post).toHaveBeenCalledWith('/login', {
      username: 'Lachlan',
      password: 'secret-password'
    })
    await screen.findByText('Hello, Lachlan')
  })
})
