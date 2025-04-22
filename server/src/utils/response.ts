interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
  errors: any[];
}

export const successResponse = <T>(data: T, message: string = 'ok'): ApiResponse<T> => ({
  success: true,
  data,
  message,
  errors: [],
});

export const errorResponse = (message = 'Error', errors: any[] = []): ApiResponse<null> => ({
  success: false,
  data: null,
  message,
  errors,
});
