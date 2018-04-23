export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const createRequestTypes = (base: any) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
};

export const EMAIL = createRequestTypes('EMAIL');

export const EMAIL_REQUEST = EMAIL[REQUEST];
export const EMAIL_SUCCESS = EMAIL[SUCCESS];
export const EMAIL_FAILURE = EMAIL[FAILURE];
