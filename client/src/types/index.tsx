export interface ReqParam {
  postId: string;
}
export interface CommentObj {
  id: string;
  content?: string;
}
export interface PostObj extends CommentsObj {
  id: string;
  title?: string;
}

export interface CommentsObj {
  comments?: Array<CommentObj>;
}
