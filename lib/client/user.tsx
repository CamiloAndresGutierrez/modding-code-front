import { Method, RequestBodyType } from "lib/types"

type RequestOptions = {
    requestUrl?: string,
    method?: Method,
    body?: RequestBodyType
}

export const REGISTER_USER = (userDetails): RequestOptions => ({
    requestUrl: '/user/signup',
    method: 'POST',
    body: {
        ...userDetails
    }
})
