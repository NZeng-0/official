import axios from "axios";
export * from './useDevice.js'

export async function init(){
    const res = await axios({
        url: 'http://47.109.206.211:92/index/index/getTemplate',
        method: 'get'
    })
    return res.data.data
}
