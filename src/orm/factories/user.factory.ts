import * as Faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { User } from '@entities';

define(User, (faker: typeof Faker) => {
  const user = new User();

  const firstname = faker.name.firstName();
  const lastname = faker.name.lastName();

  user.id = uuidv4();
  user.identity = Math.floor(
    Math.random() * (10000000 - 99999999 + 1) + 99999999
  );
  user.name = `${firstname} ${lastname}`;
  user.email = `${firstname
    .substring(0, 1)
    .concat(lastname)}@experimentalife.dev`.toLowerCase();
  user.phone = faker.phone.phoneNumber('+51#########');
  user.createBy = faker.name.firstName();
  user.createTime = faker.date.recent();
  user.isDeleted = false;
  return user;
});
