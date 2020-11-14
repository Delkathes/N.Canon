export default {
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: `https://${process.env.DOMAIN}`,
        site_name: process.env.SITE_NAME
    },
    twitter: {
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image'
    }
}
