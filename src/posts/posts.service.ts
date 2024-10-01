import { Injectable } from '@nestjs/common';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable()
export class PostsService {
  private posts: Post[] = [];
  create(post: Post) {
    if (!post.id || !post.title || !post.content) {
      return false;
    }
    this.posts.push(post);
    return true;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find((post) => post.id === id);
  }

  update(id: number, updatedPost: Post) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      return false;
    }
    if (!updatedPost.title || !updatedPost.content) {
      return false;
    }
    this.posts[index] = updatedPost;
    return true;
  }

  remove(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
    return true;
  }
}
