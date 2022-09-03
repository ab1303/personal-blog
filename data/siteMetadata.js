const siteMetadata = {
  title: 'Abdul Wahab',
  author: 'Abdul Wahab',
  headerTitle: 'abdul-wahab',
  description: 'Senior Software Engineer at WooliesX',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://tech-blog.abdul-wahab.pro',
  siteRepo: 'https://github.com/ab1303/personal-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  github: 'https://github.com/ab1303',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
