import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { DatabaseModule } from './database/database.module'
import { ProjectModule } from './project/project.module'

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
