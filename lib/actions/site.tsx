export const SiteActionTypes = {
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN'
}

export const setAccessToken = (accessToken: string) =>
  ({ type: SiteActionTypes.SET_ACCESS_TOKEN, payload: accessToken })
