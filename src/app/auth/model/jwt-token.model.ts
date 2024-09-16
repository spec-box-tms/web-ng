export class JWT {
  readonly unique_name: string;
  readonly email: string;
  readonly iat: Date;
  readonly exp: Date;

  get expired(): boolean {
    return this.exp < new Date();
  }

  constructor(private readonly _token: string) {
    const plain = _token.split('.')[1];
    const decoded = window.atob(plain);
    const payload = JSON.parse(decoded);

    if (
      !payload.unique_name ||
      !payload.exp ||
      !payload.iat ||
      !payload.email
    ) {
      throw new Error('Invalid token payload format. No userID or exp field');
    }

    this.iat = new Date(payload.iat * 1000);
    this.exp = new Date(payload.exp * 1000);
    this.unique_name = payload.unique_name;
    this.email = payload.email;
  }
}
