import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthTesterMiddleware } from './auth-tester/auth-tester.middleware';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthTesterMiddleware).forRoutes('/users');
  }
}
