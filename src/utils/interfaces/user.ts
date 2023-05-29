import { type } from "os";

interface Login {
  email: string;
  password: string;
}

interface Register {
  username: string;
  email: string;
  confirm_password: string;
  password: string;
}

interface EditProfile {
  about?: string;
  work_experience?: [];
  education?: [];
  id: string;
}

export type { Login, Register, EditProfile };
