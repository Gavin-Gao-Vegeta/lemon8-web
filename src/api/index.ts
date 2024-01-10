import { http } from '@/utils/request';

/**
 * 账号密码登录
 * @returns UseAxiosReturn
 */
export function loginPassword() {
    return http.post(`/api/login`, {
        data: { name: '123' },
    });
}

/**
 * 生成内容
 * @returns UseAxiosReturn
 */
export function generate(data: any, lang: any) {
    return http.post(`/api/chat/generate`, data, {
        headers: {
            'Accept-Language': lang,
        },
    });
}
/**
 * 发送反馈
 * @returns UseAxiosReturn
 */
export function sendFB(data: any) {
    return http.post(`/api/user/feedback`, data);
}
