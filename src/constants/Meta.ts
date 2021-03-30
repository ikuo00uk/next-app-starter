const siteUrl = ``

const CommonMeta = {
  title: '',
  description:
    '',
  ogTitle: '',
  ogDescription:
    '',
  ogImg: `${siteUrl}img/ogp.png`,
  ogUrl: siteUrl,
  ogSiteName: '',
  ogType: 'website',
}

export const Meta = {
  Home: {},
}

export type MetaProps = typeof Meta

export const getMetas = (key: keyof MetaProps) => {
  if (Meta[key]) {
    return {
      ...CommonMeta,
      ...Meta[key],
    }
  }
  throw new Error('No Match MetaKeys')
}

export const getCommenMetas = () => {
  return CommonMeta
}
