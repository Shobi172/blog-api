import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BlogService } from './blog.service';

@Controller('blogs')
@UseGuards(AuthGuard('jwt'))
@UsePipes(new ValidationPipe({ transform: true }))
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAllBlogs() {
    return this.blogService.getAllBlogs();
  }

  @Get(':id')
  async getBlogById(@Param('id') id: string) {
    return this.blogService.getBlogById(id);
  }

  @Post()
  async createBlog(@Request() req, @Body() createBlogDto: any) {
    const userId = req.user.id;
    return this.blogService.createBlog(createBlogDto, userId);
  }

  @Put(':id')
  async updateBlog(@Param('id') id: string, @Body() updateBlogDto: any) {
    return this.blogService.updateBlog(id, updateBlogDto);
  }

  @Delete(':id')
  async deleteBlog(@Param('id') id: string) {
    return this.blogService.deleteBlog(id);
  }
}
