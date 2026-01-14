import {NextRequest} from "next/server";

export const middleware = async (request: NextRequest) => {

    const login = request.cookies.get('login')
    const password = request.cookies.get('password')



}
export const config = {
    matcher: '/auth'
}