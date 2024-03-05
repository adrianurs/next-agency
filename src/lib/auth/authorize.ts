import { User, UserType, connectToMongo } from '../db';
import bcrypt from 'bcryptjs';

async function authorizeCredentials({
  username,
  password
}: {
  username: string;
  password: string;
}): Promise<UserType> {
  try {
    await connectToMongo();

    const [userByMail, userByUsername] = await Promise.all([
      User.findOne({ email: username }),
      User.findOne({ username })
    ]);

    const user = userByMail || userByUsername;
    const errorMessage = 'Username and/or password are wrong.';

    if (!user) throw new Error(errorMessage);

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) throw new Error(errorMessage);

    return {
      _id: user._id,
      email: user.email,
      username: user.username,
      isAdmin: user.isAdmin,
      avatar: user.avatar
    };
  } catch (e) {
    throw new Error('Failed to authorize credentials!');
  }
}

export async function authorize(credentials: {
  username: string;
  password: string;
}): Promise<UserType | null> {
  try {
    return await authorizeCredentials(credentials);
  } catch (err) {
    return null;
  }
}
