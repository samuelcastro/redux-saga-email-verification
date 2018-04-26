export const DOMAINS: string = 'DOMAINS';
export const REQUEST: string = 'REQUEST';
export const SUCCESS: string = 'SUCCESS';
export const FAILURE: string = 'FAILURE';
export const SUGGESTION: string = 'SUGGESTION';

export const createRequestTypes = (base: any) => {
  return [DOMAINS, REQUEST, SUCCESS, FAILURE, SUGGESTION].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
};

export const EMAIL = createRequestTypes('EMAIL');

export const EMAIL_DOMAINS = EMAIL[DOMAINS];
export const EMAIL_REQUEST = EMAIL[REQUEST];
export const EMAIL_SUCCESS = EMAIL[SUCCESS];
export const EMAIL_FAILURE = EMAIL[FAILURE];
export const EMAIL_SUGGESTION = EMAIL[SUGGESTION];
