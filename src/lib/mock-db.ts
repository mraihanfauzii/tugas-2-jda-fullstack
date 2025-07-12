export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Ini adalah array global yang akan menyimpan pengguna terdaftar.
// Data akan hilang jika server Next.js di-restart.
export const mockUsers: User[] = [
  // Bisa menambahkan user default di sini untuk testing
  { id: "1", name: "Default User", email: "user@example.com", password: "password123" },
];

let nextUserId = 2;

export const getNextUserId = (): string => {
    return String(nextUserId++);
};

export const findUserByEmail = (email: string): User | undefined => {
    return mockUsers.find(user => user.email === email);
};

export const addUser = (user: User): void => {
    mockUsers.push(user);
};