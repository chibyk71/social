// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}

		interface Locals {
			auth: import('lucia').AuthRequest;
		}
		
		// interface PageData {}
		// interface Platform {}
	}

	/// <reference types="lucia" />
	namespace Lucia {
		type Auth = import("$lib/server/lacia").Auth;
		type DatabaseUserAttributes = {
			email: string;
			email_verified: boolean;
			name: string;
			username: string;
			avatar:string
		};
		type DatabaseSessionAttributes = object;
	}
}

export {};
