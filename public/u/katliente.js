
const links = [
    { url: 'http://discord.gg/katliente' },
    { url: 'https://www.katliente.com' },
    { url: 'https://ko-fi.com/katliente' },
    { url: 'https://www.etsy.com/shop/KatlienteTwitch?ref=simple-shop-header-name&listing_id=1051208417' },
    { url: 'https://www.amazon.com/shop/influencer-322e9065' },
    { url: 'https://twitch.tv/katliente' },
    { url: 'https://www.youtube.com/@katliente' },
    { url: 'https://twitter.com/katlienteee' },
    { url: 'https://instagram.com/katliente.ttv' },
    { url: 'https://tiktok.com/@katliente' },
    { url: 'https://bit.ly/3W8OkNq' },
    { url: 'https://creators.riverside.fm/Katliente', favicon: 'https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/62b46d53dc8fb83b969ab878_RS_favicon-black.png' },
    { url: 'https://beacons.ai/katliente' }
]
const rules = [
    {
        priority: 0,
        name: 'redirect',
        url: 'https://twitch.tv/katliente',
        timeout: 10
    }
]

export { links, rules }
