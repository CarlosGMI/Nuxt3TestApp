export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  deleteCookie(event, config.cookieName, {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    secure: true,
  })

  return {
    user: null,
  }
})
