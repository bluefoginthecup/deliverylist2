
const BASE_URL = "https://s3.ap-northeast-1.amazonaws.com/rurucoding.imweb.me/mock3.json";

export async function getDeliveryList() {
    const response = await (fetch(BASE_URL));
    const body = await response.json();
    return body;
}