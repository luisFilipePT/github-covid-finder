
const GITHUB_API_URL = 'https://api.github.com'

export async function searchCovidRelatedRepositories(queryParams) {
  try {
    const response = await fetch(`${GITHUB_API_URL}/search/repositories?q=covid${queryParams}`)

    const data = await response.json()

    return data
  } catch (e) {
    console.log('error', e)
  }

  return null
}
