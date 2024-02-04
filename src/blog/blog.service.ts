import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from '../schemas/blog.schema';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<Blog>,
  ) {}

  async getAllBlogs(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  async getBlogById(id: string): Promise<Blog> {
    const blog = await this.blogModel.findById(id).exec();
    if (!blog) {
      throw new NotFoundException('Blog not found');
    }
    return blog;
  }

  async createBlog(createBlogDto: any, userId: string): Promise<string> {
    const blog = new this.blogModel({
      ...createBlogDto,
      userId,
    });
    await blog.save();
    return 'Blog added successfully';
  }

  async updateBlog(id: string, updateBlogDto: any): Promise<string> {
    const blog = await this.blogModel
      .findByIdAndUpdate(id, updateBlogDto, { new: true })
      .exec();
    if (!blog) {
      throw new NotFoundException('Blog not found');
    }
    return 'Blog updated successfully';
  }

  async deleteBlog(id: string): Promise<string> {
    const blog = await this.blogModel.findByIdAndDelete(id).exec();
    if (!blog) {
      throw new NotFoundException('Blog not found');
    }
    return 'Blog deleted successfully';
  }
}
