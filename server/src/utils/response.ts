export const successResponse = (data: any, message = 'Success') => ({
    success: true,
    data,
    message,
    errors: [],
  });
  
  export const errorResponse = (message = 'Error', errors = []) => ({
    success: false,
    data: null,
    message,
    errors,
  });
  