import { rest } from 'msw'
import { faker } from '@faker-js/faker'
export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')
    const fakeData = {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phone: faker.phone.imei(),
        title: faker.person.jobTitle(),
        jobDesc: faker.person.jobDescriptor(),
        message: faker.helpers.fake(
          'Faking a person named {{person.prefix}} {{person.middleName}} {{person.lastName}}, how are you today?'
        ),
        lorem: faker.lorem.paragraphs(2, '<br/>\n')
    }
    return res(
      ctx.json(fakeData)
    )
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
]