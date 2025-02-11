class UserStore {
  constructor() {
    this.users = new Map();
    this.sessions = new Map();
  }

  // Hash password (in real app, use bcrypt)
  hashPassword(password) {
    return btoa(password); // Basic encoding, NOT for production
  }

  // Register new user
  register(email, password, company, selectedTier) {
    if (this.users.has(email)) {
      throw new Error('User already exists');
    }

    const hashedPassword = this.hashPassword(password);
    const user = {
      email,
      password: hashedPassword,
      company,
      tier: selectedTier,
      createdAt: new Date(),
    };

    this.users.set(email, user);
    return this.createSession(email);
  }

  // Login user
  login(email, password) {
    const user = this.users.get(email);
    if (!user) {
      throw new Error('User not found');
    }

    const hashedPassword = this.hashPassword(password);
    if (user.password !== hashedPassword) {
      throw new Error('Invalid password');
    }

    return this.createSession(email);
  }

  // Create session
  createSession(email) {
    const sessionId = Math.random().toString(36).substring(2);
    const session = {
      email,
      createdAt: new Date(),
    };

    this.sessions.set(sessionId, session);
    return sessionId;
  }

  // Validate session
  validateSession(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) {
      return null;
    }

    // Check if session is expired (24 hours)
    const now = new Date();
    const sessionAge = now - session.createdAt;
    if (sessionAge > 24 * 60 * 60 * 1000) {
      this.sessions.delete(sessionId);
      return null;
    }

    return this.users.get(session.email);
  }

  // Logout
  logout(sessionId) {
    this.sessions.delete(sessionId);
  }

  // Get user by email
  getUser(email) {
    return this.users.get(email);
  }

  // Debug: Get all users (for development only)
  getAllUsers() {
    return Array.from(this.users.entries());
  }
}

// Create singleton instance
const userStore = new UserStore();
export default userStore;
