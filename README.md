# Messenger Clone

Welcome to the Messenger Clone repository! This project is a fully-functional messaging application built using Next.js, Prisma, MongoDB, NextAuth, and Pusher. It supports real-time messages, conversations, group chats, read receipts, and active status, making it a powerful and interactive messaging platform.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Messenger Clone is a modern messaging app built to provide a seamless and real-time communication experience. It is designed with scalability and performance in mind, making it suitable for personal projects, small teams, or as a starting point for building a larger messaging application.


## Features

- Real-time messaging: Enjoy instant communication with real-time message updates.
- Conversations: Organize your messages into conversations with multiple users.
- Group Chats: Create and participate in group chats with multiple participants.
- Read Receipts: Know when your messages have been seen by other users.
- Active Status: See if other users are currently active and online.
- User Authentication: Secure user authentication powered by NextAuth.
- MongoDB Database: Utilizes MongoDB as the database for storage.
- Prisma ORM: Convenient and powerful ORM for database operations.
- Pusher Integration: Real-time message updates using Pusher.


## Installation

To get the Messenger Clone up and running on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/messenger-clone.git
cd messenger-clone
```
2. Install the dependencies:

```bash
npm install
# or
yarn install

```
3.  Configure environment variables:

Create a .env.local file in the root directory and add the following variables:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

```
4.  Run the application:

```bash
npm run dev
# or
yarn dev

```

Now, the Messenger Clone should be running on http://localhost:3000.
## Usage

1.  Visit http://localhost:3000 in your browser.

2.  Sign up or log in with your credentials.

3.  Explore the app and start messaging!


## Technologies

The Messenger Clone is built using the following technologies:

- **Next.js**: A popular React framework for building server-rendered and static websites.
- **Prisma**: An efficient ORM (Object-Relational Mapping) for database access.
- **MongoDB**: A NoSQL database used for data storage.
- **NextAuth**: An authentication library for Next.js applications.
- **Pusher**: A real-time messaging API for web and mobile applications.


## Contributing

Contributions to the Messenger Clone are welcome! If you find any bugs, have feature suggestions, or want to improve the project in any way, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your branch: `git checkout -b my-feature-branch`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push the branch to your fork: `git push origin my-feature-branch`
5. Submit a pull request.

Please ensure that your code follows the existing coding style and conventions.

## Code Style and Guidelines

- Keep the code clean, readable, and well-documented.
- Follow the naming conventions used in the project.
- Write concise and descriptive commit messages.
- Make sure your code doesn't introduce any linting errors or warnings.
- Test your changes thoroughly and ensure they don't break existing functionality.
## License

The Messenger Clone is open-source software licensed under the [MIT License](/LICENSE). By contributing to this project, you agree that your contributions will be licensed under the same license.

---

Thank you for considering contributing to the Messenger Clone project! Your contributions will be appreciated by the community and help make the app even better. If you have any questions or need further assistance, feel free to reach out to us or ask for help in the issues section. Happy coding! 🚀
