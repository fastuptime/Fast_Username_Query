const axios = require('axios');

async function instagram(username) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
        headers: { 
            'authority': 'www.instagram.com', 
            'accept': '*/*', 
            'accept-language': 'tr', 
            'cookie': 'csrftoken=nUHfXi50Osnwm53Chs0RdkolXVHgBoi5; mid=ZKHOkwALAAHxOQpbvJ3PfTHbPiGz; ig_did=C718DC9D-CB0E-4E4D-83CA-C96A8151EBF6; ig_nrcb=1; datr=ks6hZJCLmj9AVkYrp_jMiKhl; csrftoken=VQEIFgxFg27BzkfGlDjCWYzy4qbE6Beu; ds_user_id=51870645423; ig_did=F76D79C3-D228-47D3-82BA-250C84EC0543; ig_nrcb=1; mid=ZKCCiwAEAAFq3S8OTFrpmrjoGvZh; rur="CLN\\05451870645423\\0541719837985:01f744e5528d3d8bc0124dbb7418ef6455afef0da218f001561cc84b315988f4c3ea6a90"', 
            'referer': `https://www.instagram.com/${username}/`,
            'sec-ch-prefers-color-scheme': 'dark', 
            'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"', 
            'sec-ch-ua-full-version-list': '"Not.A/Brand";v="8.0.0.0", "Chromium";v="114.0.5735.199", "Google Chrome";v="114.0.5735.199"', 
            'sec-ch-ua-mobile': '?0', 
            'sec-ch-ua-platform': '"Windows"', 
            'sec-ch-ua-platform-version': '"15.0.0"', 
            'sec-fetch-dest': 'empty', 
            'sec-fetch-mode': 'cors', 
            'sec-fetch-site': 'same-origin', 
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36', 
            'viewport-width': '1255', 
            'x-asbd-id': '129477', 
            'x-csrftoken': 'nUHfXi50Osnwm53Chs0RdkolXVHgBoi5', 
            'x-ig-app-id': '936619743392459', 
            'x-ig-www-claim': '0', 
            'x-requested-with': 'XMLHttpRequest'
        }
    };

    let res = await axios.request(config);
    if(res.status == 200) return { status: true, message: 'Kullanıcı Adı Kullanılıyor!' }
    else return { status: false, message: 'Kullanıcı Adı Kullanılmıyor!' }
}

async function tiktok(username) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://www.tiktok.com/@${username}`,
        headers: {
            'authority': 'www.tiktok.com',
            'accept': '*/*',
            'accept-language': 'tr',
        }
    };

    try {
        let res = await axios.request(config);
        if(res.status == 200) return { status: true, message: 'Kullanıcı Adı Kullanılıyor!' }
        else return { status: false, message: 'Kullanıcı Adı Kullanılmıyor!' }
    } catch (error) {
        return { status: false, message: 'Kullanıcı Adı Kullanılmıyor!' }
    }
}

async function telegram(username) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://t.me/${username}`,
        headers: {
            'authority': 't.me',
            'accept': '*/*',
            'accept-language': 'tr',
        }
    };

    try {
        let res = await axios.request(config);
        if(res.data.includes('you can contact')) return { status: false, message: 'Kullanıcı Adı Kullanılmıyor!' }
        else return { status: true, message: 'Kullanıcı Adı Kullanılıyor!' }
    } catch (error) {
        return { status: false, message: 'Kullanıcı Adı Kullanılmıyor!' }
    }
}

async function youtube(username) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://www.youtube.com/@${username}`,
        headers: {
            'authority': 'www.youtube.com',
            'accept': '*/*',
            'accept-language': 'tr',
        }
    };

    try {
        let res = await axios.request(config);
        if(res.status == 200) return { status: true, message: 'Kullanıcı Adı Kullanılıyor!' }
        else return { status: false, message: 'Kullanıcı Adı Kullanılmıyor!' }
    }
    catch (error) {
        return { status: false, message: 'Kullanıcı Adı Kullanılmıyor!' }
    }
}

async function github(username) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://github.com/${username}`,
        headers: {
            'authority': 'github.com',
            'accept': '*/*',
            'accept-language': 'tr',
        }
    };

    try {
        let res = await axios.request(config);
        if(res.status == 200) return { status: true, message: 'Kullanıcı Adı Kullanılıyor!' }
        else return { status: false, message: 'Kullanıcı Adı Kullanılmıyor!' }
    }
    catch (error) {
        return { status: false, message: 'Kullanıcı Adı Kullanılmıyor!' }
    }
}

const sorgu = {
    instagram,
    tiktok,
    telegram,
    youtube,
    github
}

module.exports = sorgu;