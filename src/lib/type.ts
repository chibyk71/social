import type { UserSchema } from "lucia/dist/auth/database";
import type { EasingFunction } from "svelte/transition";
export type TransitionParams = { delay?: number; duration?: number; easing?: EasingFunction; }

export type User = { user: { userId: string } & Omit<UserSchema, "id"> }