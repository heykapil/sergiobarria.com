export interface ICustomMetadata {
  title?: string
  description?: string
  image?: string
  date?: string
  type?: string
}

export interface IIcon {
  name: string
  path: string
  color: string
  hide?: boolean
}

export interface IViews {
  total: number
}

export interface NowPlayingSong {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}
