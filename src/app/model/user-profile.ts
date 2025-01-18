export interface UserProfile {
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    token?: string;
    anonymous?: boolean
  }


  export const ANONYMOUS_USER: UserProfile = {
    username: '',
    email: 'nomail',
    firstName: 'no user',
    anonymous: true,
    token: '',
  };
  
  export interface SecurityState {
    loaded: boolean;
    user: UserProfile | undefined;
  }
