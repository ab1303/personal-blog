const siteMetadata = {
  title: 'Abdul Wahab',
  author: 'Abdul Wahab',
  headerTitle: 'abdul-wahab',
  description: 'Senior Software Engineer @ WooliesX',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://tech-blog.abdul-wahab.pro',
  siteRepo: 'https://github.com/ab1303/personal-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ab.1303@gmail.com',
  github: 'https://github.com/ab1303',
  linkedin: 'https://www.linkedin.com/in/abdul-wahab-s-9177823b/',
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
