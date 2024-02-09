export type CategoryTypes = {
    id: number;
    title: string;
    text_color: string;
    background_color: string;
}

export type CreateUserParams = {
  clerkId: string
  firstName: string
  lastName: string
  username: string
  email: string
  photo: string
}