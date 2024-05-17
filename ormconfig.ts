import { Comment } from "src/entity/comment.entity";
import { Topic } from "src/entity/topic.entity";
import { User } from "src/entity/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";



export const config: PostgresConnectionOptions = {
    type:"postgres",
    database:"testDB",
    host:"localhost",
    port: 5432,
    username:"postgres",
    password:"postgres",
    entities:[User,Topic,Comment],
    synchronize:true
}