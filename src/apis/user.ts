// import qqMusic from 'qq-music-api'
const qqMusic = require('qq-music-api');

export function search(keyword: string) {
    qqMusic.api('search', { key: keyword })
        .then((res: any) => console.log(res))
        .catch((err: any) => console.log('接口调用出错'))
}
