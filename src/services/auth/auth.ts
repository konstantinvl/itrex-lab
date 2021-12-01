import { SessionData } from '../interfaces';

class TokenStorage {
    storage = localStorage;

    setSession(session: SessionData): void {
        this.storage.setItem('user', JSON.stringify(session));
    }

    getAccessToken(): string {
        return (
            (JSON.parse(this.storage.getItem('user') as string) as SessionData).access_token || ''
        );
    }

    getRefreshToken(): string {
        return (
            (JSON.parse(this.storage.getItem('user') as string) as SessionData).refresh_token || ''
        );
    }
}

const tokenStorage = new TokenStorage();
export default tokenStorage;
