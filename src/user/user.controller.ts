import { Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDetails } from './user-details.interface';
import { UserDocument } from './user.schema';
import { JwtGuard } from 'src/auth/guards/jwt.guards';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // @Post()
  // createPost(
  //   @Body('name') name: string,
  //   @Body('price') price: number,
  //   @Body('description') description?: string,
  // ): Promise<ProductDocument> {
  //   return this.productService.create(name, price, description);
  // }

  @Get()
  findAll(): Promise<UserDocument[]> {
    return this.userService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserDetails> {
    return this.userService.findById(id);
  }

  // @Patch(':id')
  // updateProduct(
  //   @Param('id') id: string,
  //   @Body('name') name: string,
  //   @Body('price') price: number,
  //   @Body('description') description: string,
  // ): Promise<ProductDocument> {
  //   return this.productService.update(id, name, price, description);
  // }

  // @Delete(':id')
  // deleteProduct(@Param('id') id: string) {
  //   return this.productService.delete(id);
  // }
}
