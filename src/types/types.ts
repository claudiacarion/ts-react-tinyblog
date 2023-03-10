export interface PostData {
  id: number,
  title: string,
  body: string,
  userId: number,
  tags: string[],
  reactions: number
}

export interface IBlogProps {
  data : PostData[]
}

export interface IPostProps {
  posts: PostData
}
