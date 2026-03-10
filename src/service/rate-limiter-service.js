import { redis } from "../application/redis.js";

const EXPIRE_TIME = 10;
const MAX_REQUEST = 10;

const isAllowed = async (user) => {
    const key = user.username;

    const increment = await redis.incr(key);

    if(increment === 1) {
        await redis.expire(key, EXPIRE_TIME);
    }

    return increment <= MAX_REQUEST;
}

export default {
    isAllowed
};